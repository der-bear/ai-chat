import OpenAI from 'openai';
import { RagService } from './rag';

export interface AgentResponse {
  content: string;
  conversationState?: ConversationState;
  suggestedActions?: Array<{
    id: string;
    text: string;
    value?: string;
  }>;
  mode?: 'processing_start' | 'final';
  fileUpload?: boolean;
  agentType?: 'workflow' | 'help' | 'both';
}

export interface ConversationState {
  activeWorkflow?: string;
  workflowStep?: string;
  collectedData?: Record<string, unknown>;
  currentEntity?: {
    type: 'client' | 'delivery_method' | 'delivery_account';
    id?: string;
    completedSteps: string[];
    providedData: Record<string, any>;
  };
  // Entity-specific state tracking per instructions
  clientState?: {
    companyName?: string;
    contactEmail?: string;
    credentialsProvided?: boolean;
    industrySelected?: string;
    leadTypeSelected?: string;
  };
  deliveryMethodState?: {
    methodType?: string;
    deliveryAccountCreated?: boolean;
  };
  deliveryAccountState?: {
    webhookUrl?: string;
    apiKey?: string;
    fieldMappingComplete?: boolean;
  };
}

export class IntelligentAgent {
  private client: OpenAI;
  private rag: RagService;
  private agentInstructions: string = '';
  private conversationState: ConversationState = {};

  constructor() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key is required');
    }
    
    this.client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });

    this.rag = new RagService(apiKey);
    this.rag.loadIndexFromBundle().catch(() => {});
  }

  setAgentInstructions(instructions: string) {
    this.agentInstructions = instructions;
  }

  async sendMessage(
    message: string,
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<AgentResponse> {
    try {
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: this.agentInstructions
            ? `${this.agentInstructions}\n\nCurrent conversation state: ${JSON.stringify(this.conversationState)}`
            : `You are a LeadExec Copilot. Agent instructions not loaded - using fallback mode.`
        }
      ];

      // Inject RAG context (best-effort). If no index available, this yields [] and is skipped.
      try {
        const recent = conversationHistory.slice(-4).map(m => `${m.role}: ${m.content}`).join('\n');
        const query = [recent, `user: ${message}`].filter(Boolean).join('\n');
        const flowChunks = await this.rag.queryTopK(query, 3, 'tools'); // prefer client-create-flow
        const schemaChunks = await this.rag.queryTopK(query, 1, 'schema'); // prefer delivery-api
        const knowledgeChunks = await this.rag.queryTopK(query, 2); // general knowledge base
        const all = [...(flowChunks || []), ...(schemaChunks || []), ...(knowledgeChunks || [])];
        if (all.length > 0) {
          const flowText = (flowChunks || []).map((c, i) => `[#F${i + 1}] ${c.source}\n${c.text}`).join('\n\n');
          const schemaText = (schemaChunks || []).map((c, i) => `[#S${i + 1}] ${c.source}\n${c.text}`).join('\n\n');
          const knowledgeText = (knowledgeChunks || []).map((c, i) => `[#K${i + 1}] ${c.source}\n${c.text}`).join('\n\n');
          const assembled = [
            flowText ? `Flow context (adhere strictly to this minimal flow):\n${flowText}` : '',
            schemaText ? `Schema reference (field names/types only; do NOT expand scope):\n${schemaText}` : '',
            knowledgeText ? `Knowledge base context (for documentation questions):\n${knowledgeText}` : ''
          ].filter(Boolean).join('\n\n');
          messages.push({
            role: 'system',
            content: `Context snippets (use for grounding; never invent URLs/tokens; follow flow):\n${assembled}`
          });
        }
      } catch {
        // Non-fatal: proceed without RAG
      }

      messages.push(...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })));

      messages.push({ role: 'user', content: message });

      const completion = await this.client.chat.completions.create({
        model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o',
        messages,
        temperature: 0.1 // Lower temperature for more consistent behavior
      });

      const response = completion.choices[0]?.message;
      if (!response) {
        throw new Error('No response from OpenAI');
      }

      let content = response.content || 'I\'m ready to help you with client setup!';

      // Try to extract control block (<CONTROL>{...}</CONTROL>) for structured data
      const control = this.parseControlBlock(content);
      if (control) {
        content = control.cleanContent;
        if (control.conversationState) {
          this.conversationState = { ...this.conversationState, ...control.conversationState };
        }
        // Use only structured suggested actions from control block
        const suggestedActions = control.suggestedActions && control.suggestedActions.length > 0
          ? control.suggestedActions
          : undefined;

        return {
          content,
          conversationState: this.conversationState,
          suggestedActions,
          mode: control.mode || 'final',
          fileUpload: control.fileUpload,
          agentType: 'workflow'
        };
      }

      // Safety net: Generate suggested actions if AI didn't provide control blocks
      const suggestedActions = this.generateSafetyNetActions(content);

      return {
        content,
        conversationState: this.conversationState,
        suggestedActions,
        mode: 'final',
        agentType: 'workflow'
      };

    } catch (error) {
      console.error('Intelligent Agent Error:', error);
      throw new Error(`Failed to get response: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Extracts a JSON control block appended to the model output: <CONTROL>{...}</CONTROL>
  private parseControlBlock(content: string): {
    cleanContent: string;
    suggestedActions?: Array<{id: string; text: string; value?: string}>;
    conversationState?: ConversationState;
    mode?: 'processing_start' | 'final';
    fileUpload?: boolean;
  } | null {
    const re = /<CONTROL>\s*([\s\S]*?)\s*<\/CONTROL>/i;
    const match = content.match(re);
    if (!match) return null;

    const jsonRaw = match[1];
    let obj: any = null;
    try {
      obj = JSON.parse(jsonRaw);
    } catch {
      return {
        cleanContent: content.replace(re, '').trim()
      } as any;
    }

    const actions = Array.isArray(obj?.suggested_actions)
      ? obj.suggested_actions.map((a: any) => ({ id: String(a.id || a.text || 'action'), text: String(a.text || a.id || ''), value: a.value ? String(a.value) : undefined }))
      : undefined;

    const state: ConversationState | undefined = obj?.conversation_state && typeof obj.conversation_state === 'object'
      ? {
          activeWorkflow: obj.conversation_state.activeWorkflow ?? undefined,
          workflowStep: obj.conversation_state.workflowStep ?? undefined,
          collectedData: obj.conversation_state.collectedData ?? undefined
        }
      : undefined;

    const modeVal = obj?.mode === 'processing_start' || obj?.mode === 'final' ? obj.mode : undefined;
    const fileUpload = obj?.fileUpload === true ? true : undefined;
    const cleanContent = content.replace(re, '').trim();
    return { cleanContent, suggestedActions: actions, conversationState: state, mode: modeVal, fileUpload };
  }

  // Safety net for when AI doesn't generate control blocks (should be rare with good instructions)
  getConversationState(): ConversationState {
    return this.conversationState;
  }

  setConversationState(state: ConversationState): void {
    this.conversationState = { ...this.conversationState, ...state };
  }

  private generateSafetyNetActions(content: string): Array<{id: string; text: string; value?: string}> | undefined {
    const lowerContent = content.toLowerCase();
    
    // Credential choice
    if (lowerContent.includes('auto-generate') && lowerContent.includes('custom')) {
      return [
        { id: 'auto', text: 'Auto-generate', value: 'Auto-generate' },
        { id: 'custom', text: 'Custom', value: 'Custom' }
      ];
    }
    
    // Confirmation 
    if (lowerContent.includes('shall i proceed') || lowerContent.includes('confirm to create')) {
      return [
        { id: 'proceed', text: 'Yes', value: 'yes' },
        { id: 'review', text: 'Not yet', value: 'Not yet' }
      ];
    }
    
    // Delivery method suggestion
    if (lowerContent.includes('would you like to set up') && lowerContent.includes('delivery')) {
      return [
        { id: 'proceed', text: 'Yes', value: 'Yes' },
        { id: 'later', text: 'Not yet', value: 'Not yet' }
      ];
    }
    
    // Delivery method explanation with options
    if ((lowerContent.includes('delivery method') && lowerContent.includes('portal')) ||
        (lowerContent.includes('webhook') && lowerContent.includes('ftp') && lowerContent.includes('email'))) {
      return [
        { id: 'portal', text: 'Portal', value: 'Use portal delivery' },
        { id: 'webhook', text: 'Webhook', value: 'Webhook' },
        { id: 'email', text: 'Email', value: 'Email' },
        { id: 'ftp', text: 'FTP', value: 'Configure FTP' }
      ];
    }
    
    // Lead type selection with industry context
    if (lowerContent.includes('what industry') || 
        (lowerContent.includes('lead type') && lowerContent.includes('mortgage default'))) {
      return [
        { id: 'mortgage_default', text: '54353', value: 'Mortgage Default (54353)' },
        { id: 'mortgage_refi', text: '98999', value: 'Mortgage Refinance (98999)' },
        { id: 'auto_insurance', text: '76421', value: 'Auto Insurance (76421)' },
        { id: 'personal_loan', text: '43287', value: 'Personal Loan (43287)' },
        { id: 'credit_card', text: '19856', value: 'Credit Card (19856)' },
        { id: 'custom', text: 'Custom', value: 'Create custom lead type' }
      ];
    }
    
    // Account creation suggestion
    if (lowerContent.includes('create the delivery account') || lowerContent.includes('shall we create')) {
      return [
        { id: 'proceed', text: 'Yes, create account', value: 'Yes, create account' },
        { id: 'later', text: 'Not yet', value: 'Not yet' }
      ];
    }
    
    // Activation
    if (lowerContent.includes('activate now') && lowerContent.includes('activate later')) {
      return [
        { id: 'activate', text: 'Activate now', value: 'Activate now' },
        { id: 'later', text: 'Activate later', value: 'Activate later' }
      ];
    }
    
    return undefined;
  }

}

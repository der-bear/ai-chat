import OpenAI from 'openai';
import { RagService } from './rag';

export interface AgentResponse {
  content: string;
  agentUsed: 'tools' | 'documentation';
}

export class OpenAIService {
  private client: OpenAI;
  private documentation: string = '';
  private clientCreateFlow: string = '';
  private rag: RagService;

  constructor() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key is required. Please set VITE_OPENAI_API_KEY in your .env file');
    }
    
    this.client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });

    this.rag = new RagService(apiKey);
    // Try to load a prebuilt index if present; ignore errors
    this.rag.loadIndexFromBundle().catch(() => {});
  }

  setDocumentation(docs: string) {
    this.documentation = docs;
  }

  setClientCreateFlow(flow: string) {
    this.clientCreateFlow = flow;
  }


  private determineAgentType(message: string): 'tools' | 'documentation' {
    const toolKeywords = [
      'execute', 'run', 'perform', 'do', 'create', 'delete', 'update', 'configure', 
      'test', 'submit', 'send', 'manage', 'setup', 'install', 'deploy', 'build',
      'webhook', 'lead', 'client', 'integration', 'api call', 'action'
    ];

    const docKeywords = [
      'how', 'what', 'why', 'when', 'where', 'explain', 'tell me', 'describe',
      'documentation', 'docs', 'guide', 'tutorial', 'help', 'info', 'about',
      'understand', 'learn', 'definition', 'meaning', 'purpose', 'concept'
    ];

    const messageLower = message.toLowerCase();
    
    const toolScore = toolKeywords.reduce((score, keyword) => 
      messageLower.includes(keyword) ? score + 1 : score, 0);
    
    const docScore = docKeywords.reduce((score, keyword) => 
      messageLower.includes(keyword) ? score + 1 : score, 0);

    // If it's clearly about documentation or asking questions, use docs agent
    if (docScore > toolScore || 
        messageLower.includes('?') && docScore > 0) {
      return 'documentation';
    }

    // If it's clearly about performing actions, use tools agent
    if (toolScore > 0) {
      return 'tools';
    }

    // Default to documentation for general queries
    return 'documentation';
  }

  async sendMessage(
    message: string, 
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<AgentResponse> {
    try {
      const agentType = this.determineAgentType(message);
      
      // Use developer/system message pattern
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [];

      // For tools agent we prefer to inject the full clientCreateFlow (small, canonical file).
      // For documentation agent, use RAG to retrieve top-K snippets from the knowledgebase.
      let retrieved: Array<{ id: string; source: string; text: string }> = [];
      if (agentType === 'documentation') {
        try {
          const chunks = await this.rag.queryTopK(message, 5, agentType);
          retrieved = chunks.map(c => ({ id: c.id, source: c.source, text: c.text }));
        } catch (e) {
          console.warn('RAG retrieval skipped or failed for documentation agent:', e);
          retrieved = [];
        }
      }

      if (agentType === 'tools') {
        // Tools agent: Use system message for workflow specification (highest priority)
        const flowToInject = this.clientCreateFlow;

        messages.push({
          role: 'system',
          content: `You are a LeadExec Copilot specialized in executing tools and performing actions — BUT ONLY EMULATE. Do NOT call external APIs, perform any real side effects, or attempt to actually run tools.

When users request client creation, use this markdown as the single source of truth for emulation (do not invent behavior or optional fields):

${flowToInject}

Strict rules:
- Emulate the exact workflow and fields as specified in the provided markdown. Do not add, remove, or assume optional fields not described.
- Do NOT perform real actions, network calls, or tool executions — produce a simulated result and explain each step taken in the emulation.
- Return a clear, structured emulation summary and a human-readable explanation of what would have been done if this were a real run.
- If any required information is missing from the clientCreateFlow or the user's prompt, ask concise clarifying questions rather than guessing.
`        });
      } else {
        // Documentation agent: Use RAG snippets; if none, fallback to a safe excerpt of full docs if reasonably small
        const snippets = retrieved.length > 0
          ? `\n\n---- Relevant snippets (from knowledgebase):\n${retrieved.map(r => `(${r.source}) [${r.id}] ${r.text.slice(0, 800)}...`).join('\n\n')}`
          : '';

        const FALLBACK_LIMIT = 20000;
        const fallbackExcerpt = retrieved.length === 0 && this.documentation && this.documentation.length <= FALLBACK_LIMIT
          ? `\n\n---- Fallback documentation excerpt (full KB is large; using excerpt):\n${this.documentation}`
          : '';

        messages.push({
          role: 'system', 
          content: `You are a LeadExec Copilot specialized in answering questions based on documentation. Do NOT perform real actions or call external tools — provide answers derived strictly from the provided documentation context. If the user intent appears to be performing an action (e.g., set up a client or delivery), provide the information and also suggest the exact emulation step they can run next with the Tools agent.

Here is the documentation context you should use to answer questions:
${snippets}${fallbackExcerpt}

Strict rules:
- Base your answers only on the provided documentation context. If the docs do not cover the question, explicitly say so and suggest contacting support.
- If the user asks to perform an action, suggest the appropriate emulation flow and ask if they want to proceed; you do not execute actions.
- Cite or reference the relevant section/title where possible.
`        });
      }

      // Add conversation history
      messages.push(...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })));

      // Add current user message
      messages.push({ role: 'user', content: message });

      // Per-agent temperature for best quality
      const temperature = agentType === 'tools' ? 0.1 : 0.2;

      // Preferred model with fallback
      const preferredModel = import.meta.env.VITE_OPENAI_MODEL || 'gpt-5';
      let usedModel = preferredModel;

      console.log(`🚀 Sending request to OpenAI (${agentType} agent):`, {
        model: usedModel,
        messageCount: messages.length,
        userMessage: message,
        contextSnippets: retrieved.length,
        apiKeyPresent: !!import.meta.env.VITE_OPENAI_API_KEY
      });

      console.log('📋 About to call OpenAI API...');

      let completion;
      try {
        completion = await this.client.chat.completions.create({
          model: usedModel,
          messages,
          temperature,
          response_format: agentType === 'tools' ? { type: 'json_object' } as any : undefined
        });
      } catch (primaryError) {
        console.warn('Primary model failed, attempting fallback model...', primaryError);
        // Fallback to a widely available model
        usedModel = 'gpt-4o';
        completion = await this.client.chat.completions.create({
          model: usedModel,
          messages,
          temperature,
          response_format: agentType === 'tools' ? { type: 'json_object' } as any : undefined
        });
      }

      console.log('✅ OpenAI response received:', {
        choices: completion.choices.length,
        finishReason: completion.choices[0]?.finish_reason,
        contentLength: completion.choices[0]?.message.content?.length || 0,
        usage: completion.usage,
        model: completion.model
      });

      const response = completion.choices[0]?.message;
      
      if (!response) {
        throw new Error('No response from OpenAI');
      }

      const content = response.content || 'No response content';
      console.log(`📝 Final response content (${content.length} chars):`, content);

      return {
        content,
        agentUsed: agentType
      };

    } catch (error) {
      console.error('OpenAI Service Error:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        agentType: 'unknown'
      });
      throw new Error(`Failed to get response: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
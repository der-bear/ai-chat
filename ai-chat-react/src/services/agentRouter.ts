import { IntelligentAgent, type AgentResponse } from './intelligentAgent';
import { HelpAgent } from './helpAgent';
import { IntentClassifier } from './intentClassifier';

export class AgentRouter {
  private flowAgent: IntelligentAgent;
  private helpAgent: HelpAgent;
  private intentClassifier: IntentClassifier;
  private workflowState: {
    interrupted: boolean;
    lastFlowStep?: string;
    pendingActions?: Array<{id: string; text: string; value?: string}>;
    lastFlowResponse?: string;
    collectedData?: Record<string, unknown>;
  } = { interrupted: false };

  constructor() {
    this.flowAgent = new IntelligentAgent();
    this.helpAgent = new HelpAgent();
    this.intentClassifier = new IntentClassifier();
  }

  setAgentInstructions(instructions: string) {
    this.flowAgent.setAgentInstructions(instructions);
  }

  async sendMessage(
    message: string,
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<AgentResponse> {
    // Check if this is a continuation after help interruption
    if (this.workflowState.interrupted && this.isContinuationResponse(message)) {
      // Resume workflow with preserved state
      const resumedFlow = await this.resumeWorkflow(message, conversationHistory);
      this.workflowState.interrupted = false;
      return resumedFlow;
    }

    // Use intent classifier for intelligent routing
    const intent = await this.intentClassifier.classifyIntent(message, conversationHistory);
    console.log('Intent Classification:', { message: message.substring(0, 50), intent: intent.intent, confidence: intent.confidence });
    
    // Route based on intent - workflow intents ALWAYS go to flow agent
    const shouldRouteToHelp = (intent.intent === 'general_documentation' || 
                               intent.intent === 'help_request') &&
                              intent.confidence > 0.7;
    
    // For workflow intents, ALWAYS use flow agent
    const isWorkflowIntent = intent.intent === 'workflow_execution' || 
                             intent.intent === 'workflow_data_provision' ||
                             intent.intent === 'workflow_contextual';
    
    const isHelpQuestion = shouldRouteToHelp && !isWorkflowIntent;
    
    if (isHelpQuestion) {
      // Save current workflow state if in active flow
      const inWorkflow = this.isInActiveWorkflow(conversationHistory);
      if (inWorkflow) {
        await this.preserveWorkflowState(conversationHistory);
      }

      // Route to help agent for KB/RAG-based answers
      try {
        const helpResponse = await this.helpAgent.answerQuestion(message, conversationHistory);
        
        // Return help response SEPARATELY
        const helpResult: AgentResponse = {
          content: helpResponse.content,
          conversationState: this.flowAgent.getConversationState(),
          suggestedActions: undefined, // No actions during help response
          mode: 'final',
          agentType: 'help'
        };
        
        // If workflow was interrupted, mark for follow-up
        if (this.workflowState.interrupted) {
          // Store that we need a follow-up after help response
          helpResult.requiresFollowUp = true;
          helpResult.followUpContent = this.generateContinuationPrompt();
          helpResult.followUpActions = this.workflowState.pendingActions;
        }
        
        return helpResult;
      } catch (error) {
        // Fallback to flow agent if help agent fails
        console.warn('Help agent failed, falling back to flow agent:', error);
      }
    }

    // Route to flow agent for workflow execution
    const response = await this.flowAgent.sendMessage(message, conversationHistory);
    
    // Store flow state for potential interruption
    if (response.conversationState) {
      this.workflowState.collectedData = response.conversationState.collectedData;
    }
    
    return response;
  }

  // DEPRECATED: Kept for reference but replaced by intent classifier  
  // @ts-ignore - Keeping for reference
  private _legacyIsHelpQuestion(message: string, conversationHistory: Array<{role: 'user' | 'assistant', content: string}>): boolean {
    const lowerMessage = message.toLowerCase();
    const recentContext = conversationHistory.slice(-2).map(m => m.content.toLowerCase()).join(' ');
    
    // Initial screen flow triggers - ALWAYS go to flow agent
    const initialFlowTriggers = [
      'create a new client for lead distribution',
      'create client',
      'new client',
      'client setup',
      'create delivery',
      'delivery account',
      'delivery method',
      'set up delivery',
      'configure delivery'
    ];

    // If this is an initial flow trigger, never route to help
    if (initialFlowTriggers.some(trigger => lowerMessage.includes(trigger))) {
      return false;
    }

    // Help question indicators
    const helpIndicators = [
      'what is',
      'what are', 
      'what does',
      'how does',
      'explain',
      'tell me about',
      'what\'s',
      'define',
      'description',
      'documentation',
      'help',
      'info',
      'information'
    ];

    // Workflow execution indicators
    const workflowIndicators = [
      'create client',
      'create delivery',
      'set up',
      'configure',
      'delivery method',
      'delivery account',
      'webhook',
      'portal',
      'ftp',
      'email delivery',
      'activate',
      'proceed',
      'yes',
      'no',
      'not yet',
      'upload',
      'manual'
    ];

    // Check if in active workflow
    const inWorkflow = recentContext.includes('client setup') || 
                      recentContext.includes('delivery method') ||
                      recentContext.includes('created successfully') ||
                      conversationHistory.some(m => m.content.includes('From your input, I have'));

    // Check for CREATE commands - these ALWAYS go to flow agent
    if (lowerMessage.includes('create') || lowerMessage.includes('set up') || lowerMessage.includes('configure')) {
      return false;
    }
    
    // Route "what's" questions to help agent ONLY if not about creating/setting up
    if ((lowerMessage.startsWith('what\'s ') || lowerMessage.startsWith('what is ')) && 
        !lowerMessage.includes('create') && !lowerMessage.includes('set up')) {
      return true;
    }

    // If in active workflow, intelligently determine if help is needed
    if (inWorkflow) {
      // Explicit documentation questions that should route to help
      const explicitHelpQuestions = lowerMessage.startsWith('what is ') || 
                                   lowerMessage.startsWith('what are ') ||
                                   lowerMessage.startsWith('what does ') ||
                                   lowerMessage.startsWith('how does ') ||
                                   lowerMessage.startsWith('explain ') ||
                                   lowerMessage.includes('documentation') ||
                                   lowerMessage.includes('help');
      
      // User is providing workflow data (company info, selections, etc.)
      const providingWorkflowData = !lowerMessage.includes('?') && 
                                   lowerMessage.length > 5 &&
                                   !explicitHelpQuestions;
      
      // Always stay in workflow for data provision
      if (providingWorkflowData) {
        return false;
      }
      
      // Allow help for explicit questions, flow agent will follow up
      return explicitHelpQuestions;
    }

    // Check for help question patterns
    const hasHelpIndicator = helpIndicators.some(indicator => lowerMessage.includes(indicator));
    const hasWorkflowIndicator = workflowIndicators.some(indicator => lowerMessage.includes(indicator));

    // If has help indicators and no workflow indicators, it's a help question
    if (hasHelpIndicator && !hasWorkflowIndicator) {
      return true;
    }

    // If standalone question without workflow context, likely help
    if (!inWorkflow && (lowerMessage.includes('?') || lowerMessage.split(' ').length < 10)) {
      return hasHelpIndicator || !hasWorkflowIndicator;
    }

    return false;
  }

  private isInActiveWorkflow(conversationHistory: Array<{role: 'user' | 'assistant', content: string}>): boolean {
    const recentMessages = conversationHistory.slice(-8).map(m => m.content.toLowerCase());
    
    return recentMessages.some(content => 
      content.includes('client setup') ||
      content.includes('delivery method') ||
      content.includes('created successfully') ||
      content.includes('shall i proceed') ||
      content.includes('which delivery method') ||
      content.includes('portal delivery') ||
      content.includes('webhook') ||
      content.includes('upload instructions') ||
      content.includes('configure manually')
    );
  }

  private detectCurrentFlowStep(conversationHistory: Array<{role: 'user' | 'assistant', content: string}>): string {
    const recentContent = conversationHistory.slice(-3).map(m => m.content.toLowerCase()).join(' ');
    
    if (recentContent.includes('delivery method') && (recentContent.includes('portal') || recentContent.includes('webhook'))) {
      this.workflowState.pendingActions = [
        { id: 'portal', text: 'Portal', value: 'Use portal delivery' },
        { id: 'webhook', text: 'Webhook', value: 'Webhook' },
        { id: 'email', text: 'Email', value: 'Email' },
        { id: 'ftp', text: 'FTP', value: 'Configure FTP' }
      ];
      return 'delivery_method_selection';
    }
    
    if (recentContent.includes('auto-generate') && recentContent.includes('custom')) {
      this.workflowState.pendingActions = [
        { id: 'auto', text: 'Auto-generate', value: 'Auto-generate' },
        { id: 'custom', text: 'Custom', value: 'Custom' }
      ];
      return 'credential_selection';
    }
    
    if (recentContent.includes('lead type') || recentContent.includes('industry')) {
      // Manual ID only - no buttons for lead type selection
      this.workflowState.pendingActions = [];
      return 'lead_type_selection';
    }
    
    if (recentContent.includes('activate now') && recentContent.includes('activate later')) {
      this.workflowState.pendingActions = [
        { id: 'activate', text: 'Activate now', value: 'Activate now' },
        { id: 'later', text: 'Activate later', value: 'Activate later' }
      ];
      return 'activation_choice';
    }
    
    if (recentContent.includes('client setup') || recentContent.includes('shall i proceed')) {
      this.workflowState.pendingActions = [
        { id: 'proceed', text: 'Yes', value: 'yes' },
        { id: 'review', text: 'Not yet', value: 'Not yet' }
      ];
      return 'client_confirmation';
    }
    
    return 'unknown';
  }

  private generateContinuationPrompt(): string {
    switch (this.workflowState.lastFlowStep) {
      case 'delivery_method_selection':
        return 'Now that you understand delivery methods, which delivery method would you like to use for your client?';
      case 'client_confirmation':
        return 'Now that you have the information you need, shall we proceed with creating the client?';
      case 'credential_selection':
        return 'Would you like to auto-generate credentials or provide custom ones?';
      case 'lead_type_selection':
        return 'Please type the lead type ID number (like 54353) for this client:';
      case 'activation_choice':
        return 'Would you like to activate the client now or later?';
      default:
        return 'Let\'s continue where we left off. What would you like to do next?';
    }
  }

  private async preserveWorkflowState(conversationHistory: Array<{role: 'user' | 'assistant', content: string}>): Promise<void> {
    this.workflowState.interrupted = true;
    this.workflowState.lastFlowStep = this.detectCurrentFlowStep(conversationHistory);
    
    // Store the last assistant response for context
    const lastAssistantMsg = [...conversationHistory].reverse().find(m => m.role === 'assistant');
    if (lastAssistantMsg) {
      this.workflowState.lastFlowResponse = lastAssistantMsg.content;
    }
    
    // Preserve collected data from flow agent
    const currentState = this.flowAgent.getConversationState();
    if (currentState?.collectedData) {
      this.workflowState.collectedData = currentState.collectedData;
    }
  }

  private isContinuationResponse(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    
    // Normalize common variations
    const normalizedMessage = lowerMessage
      .replace(/set up/g, 'setup')
      .replace(/not yet/g, 'no')
      .trim();
    
    // Comprehensive continuation patterns
    const continuationPhrases = [
      // Basic confirmations
      'yes', 'no', 'proceed', 'continue', 'go ahead', 'ok', 'sure',
      // Delivery methods (check both text and value patterns)
      'portal', 'webhook', 'email', 'ftp',
      'use portal', 'setup webhook', 'configure ftp',
      // Credentials
      'auto-generate', 'custom', 'auto', 'manual',
      // Activation
      'activate now', 'activate later', 'activate',
      // File operations
      'upload', 'skip', 'manually',
      // Lead type IDs
      /\b\d{5}\b/  // 5-digit IDs like 54353
    ];
    
    return continuationPhrases.some(phrase => {
      if (phrase instanceof RegExp) {
        return phrase.test(normalizedMessage);
      }
      return normalizedMessage.includes(phrase);
    });
  }

  private async resumeWorkflow(
    message: string,
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}>
  ): Promise<AgentResponse> {
    // Inject preserved state into flow agent
    if (this.workflowState.collectedData) {
      this.flowAgent.setConversationState({
        activeWorkflow: 'client_setup',
        workflowStep: this.workflowState.lastFlowStep,
        collectedData: this.workflowState.collectedData
      });
    }
    
    // Add context about resumption
    const contextualizedHistory = [...conversationHistory];
    if (this.workflowState.lastFlowResponse) {
      // Inject the last flow response to maintain context
      contextualizedHistory.push({
        role: 'assistant',
        content: `[Resuming workflow after help question]\n${this.workflowState.lastFlowResponse}`
      });
    }
    
    return await this.flowAgent.sendMessage(message, contextualizedHistory);
  }
}
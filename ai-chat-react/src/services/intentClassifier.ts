import OpenAI from 'openai';

export type Intent = 
  | 'workflow_execution'     // Creating, proceeding, configuring
  | 'workflow_data_provision' // Providing company info, details during workflow
  | 'workflow_contextual'    // Questions about current workflow options/fields  
  | 'general_documentation'  // System explanations, "what is X"
  | 'help_request';          // Explicit help requests

export interface IntentResult {
  intent: Intent;
  confidence: number;
  reasoning: string;
}

export class IntentClassifier {
  private client: OpenAI;

  constructor() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key is required for intent classification');
    }
    
    this.client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });
  }

  async classifyIntent(
    message: string, 
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<IntentResult> {
    // Quick rule-based classification for obvious cases (performance optimization)
    const quickResult = this.quickClassify(message, conversationHistory);
    if (quickResult.confidence > 0.9) {
      return quickResult;
    }

    // Use AI for nuanced classification
    return await this.aiClassify(message, conversationHistory);
  }

  private quickClassify(message: string, conversationHistory: Array<{role: 'user' | 'assistant', content: string}>): IntentResult {
    const lowerMessage = message.toLowerCase().trim();
    const recentContext = conversationHistory.slice(-2).map(m => m.content.toLowerCase()).join(' ');
    
    // High confidence "Later" handling (universal workflow continuation)
    const laterTriggers = [
      'later', 'i\'ll do this later', 'manually later', 'configure later',
      'handle later', 'set up later', 'i\'ll handle this', 'do this manually'
    ];
    
    if (laterTriggers.some(trigger => lowerMessage.includes(trigger))) {
      return {
        intent: 'workflow_execution',
        confidence: 0.98,
        reasoning: `Message indicates "Later" handling - continue workflow: "${lowerMessage}"`
      };
    }
    
    // High confidence workflow execution triggers
    const workflowExecutionTriggers = [
      'create', 'proceed', 'yes', 'no', 'not yet', 'upload', 'manual',
      'portal', 'webhook', 'ftp', 'email', 'activate', 'configure', 'set up'
    ];
    
    if (workflowExecutionTriggers.some(trigger => lowerMessage.includes(trigger))) {
      return {
        intent: 'workflow_execution',
        confidence: 0.95,
        reasoning: `Message contains workflow execution trigger: "${lowerMessage}"`
      };
    }

    // VERY restrictive documentation routing - minimize workflow interruption
    const normalizedMessage = lowerMessage
      .replace(/'/g, "'")  // Normalize apostrophes
      .replace(/[?!.,]/g, '') // Remove punctuation for matching
      .trim();
    
    // Only route to help if EXPLICITLY asking for help AND outside workflow context
    const explicitHelpTriggers = [
      'help', 'documentation', 'guide', 'explain to me', 'i need help'
    ];
    
    // Must contain explicit help request
    const hasExplicitHelp = explicitHelpTriggers.some(trigger => lowerMessage.includes(trigger));
    
    // Conservative documentation patterns - only very explicit requests
    const conservativeDocPatterns = [
      /^(help|documentation|guide)/i,  // Must start with help/doc/guide
      /what is leadexec/i,             // System-specific questions only
      /how does leadexec work/i,
      /leadexec documentation/i
    ];
    
    if (hasExplicitHelp && conservativeDocPatterns.some(pattern => pattern.test(normalizedMessage))) {
      return {
        intent: 'general_documentation',
        confidence: 0.85,  // Lower confidence to be more cautious
        reasoning: `Explicit help request detected: "${lowerMessage}"`
      };
    }

    // Check if in active workflow for contextual questions
    const inWorkflow = recentContext.includes('client setup') || 
                      recentContext.includes('delivery method') ||
                      recentContext.includes('shall i proceed') ||
                      recentContext.includes('industry vertical') ||
                      recentContext.includes('company name') ||
                      recentContext.includes('contact name');

    if (inWorkflow) {
      // Check for data provision (company info, contact details, etc.)
      const isDataProvision = !lowerMessage.includes('?') && 
                             lowerMessage.length > 10 &&
                             (lowerMessage.includes('@') || // Email
                              lowerMessage.includes('company') ||
                              lowerMessage.includes('llc') ||
                              lowerMessage.includes('inc') ||
                              lowerMessage.includes('corp') ||
                              /\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(lowerMessage) || // Phone
                              /\b\d{5}\b/.test(lowerMessage)); // ZIP code
      
      if (isDataProvision) {
        return {
          intent: 'workflow_data_provision',
          confidence: 0.95,
          reasoning: 'User is providing workflow data (company info, contact details)'
        };
      }
      
      const contextualIndicators = ['which', 'what are', 'available', 'options', 'can i', 'should i'];
      if (contextualIndicators.some(indicator => lowerMessage.includes(indicator))) {
        return {
          intent: 'workflow_contextual',
          confidence: 0.85,
          reasoning: 'Contextual question within active workflow'
        };
      }
    }

    // Default: low confidence, need AI classification
    return {
      intent: 'general_documentation',
      confidence: 0.3,
      reasoning: 'Unclear intent, needs AI classification'
    };
  }

  private async aiClassify(message: string, conversationHistory: Array<{role: 'user' | 'assistant', content: string}>): Promise<IntentResult> {
    const recentContext = conversationHistory.slice(-3);
    const contextString = recentContext.map(m => `${m.role}: ${m.content}`).join('\n');
    
    const prompt = `Classify the user's intent for this message in a workflow context.

CONTEXT (last 3 messages):
${contextString}

USER MESSAGE: "${message}"

INTENT OPTIONS:
1. workflow_execution - User wants to execute workflow actions (create, proceed, select options, configure)
2. workflow_contextual - User is asking questions about current workflow step (which options, what fields, available choices)  
3. general_documentation - User wants general system explanations (what is X, how does Y work)
4. help_request - User explicitly needs help or assistance

CRITICAL RULES (MINIMIZE WORKFLOW INTERRUPTION):
- ALWAYS prioritize workflow_execution/workflow_contextual/workflow_data_provision over documentation
- If context shows ANY workflow activity ("client setup", "delivery method", "shall I proceed"), assume workflow intent
- Only use general_documentation if user EXPLICITLY says "help", "documentation", or "explain" AND no workflow context
- Questions during active workflow should be workflow_contextual, NOT general_documentation
- When in doubt, choose workflow intent to avoid interruption

WORKFLOW INDICATORS:
- Commands like "create", "proceed", "upload" = workflow_execution
- Questions during workflow = workflow_contextual  
- Data provision during workflow = workflow_data_provision
- Only explicit help requests outside workflow = general_documentation

Respond with JSON only:
{
  "intent": "workflow_execution|workflow_contextual|general_documentation|help_request",
  "confidence": 0.1-1.0,
  "reasoning": "brief explanation"
}`;

    try {
      const response = await this.client.chat.completions.create({
        model: 'gpt-4o-mini', // Fast, cheap model for classification
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.1, // Low temperature for consistent classification
        max_tokens: 150
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No response from AI classifier');
      }

      const result = JSON.parse(content) as IntentResult;
      
      // Validate the result
      const validIntents: Intent[] = ['workflow_execution', 'workflow_contextual', 'general_documentation', 'help_request'];
      if (!validIntents.includes(result.intent)) {
        throw new Error(`Invalid intent: ${result.intent}`);
      }
      
      if (result.confidence < 0 || result.confidence > 1) {
        result.confidence = Math.max(0, Math.min(1, result.confidence));
      }

      return result;
    } catch (error) {
      console.warn('AI intent classification failed, using fallback:', error);
      
      // Fallback to simple heuristics
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('?') || lowerMessage.startsWith('what') || lowerMessage.startsWith('how')) {
        return {
          intent: 'general_documentation',
          confidence: 0.6,
          reasoning: 'AI classification failed, fallback to documentation based on question format'
        };
      }
      
      return {
        intent: 'workflow_execution',
        confidence: 0.5,
        reasoning: 'AI classification failed, fallback to workflow execution'
      };
    }
  }
}
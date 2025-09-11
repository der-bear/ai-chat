import OpenAI from 'openai';

export interface AgentResponse {
  content: string;
  agentUsed: 'tools' | 'documentation';
}

export class OpenAIService {
  private client: OpenAI;
  private documentation: string = '';
  private clientCreateFlow: string = '';

  constructor() {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key is required. Please set VITE_OPENAI_API_KEY in your .env file');
    }
    
    this.client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });
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
      
      // Use 2025 best practices with developer role messages (highest priority)
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [];

      if (agentType === 'tools') {
        // Tools agent: Use system message for workflow specification (highest priority)
        messages.push({
          role: 'system',
          content: `You are a LeadExec Copilot specialized in executing tools and performing actions — BUT ONLY EMULATE. Do NOT call external APIs, perform any real side effects, or attempt to actually run tools.

When users request client creation, use this markdown as the single source of truth for emulation (do not invent behavior or optional fields):

${this.clientCreateFlow}

Strict rules:
- Emulate the exact workflow and fields as specified in the provided markdown. Do not add, remove, or assume optional fields not described.
- Do NOT perform real actions, network calls, or tool executions — produce a simulated result and explain each step taken in the emulation.
- Return a clear, structured emulation summary and a human-readable explanation of what would have been done if this were a real run.
- If any required information is missing from the clientCreateFlow or the user's prompt, ask concise clarifying questions rather than guessing.
`        });
      } else {
        // Documentation agent: Use system message for knowledge base (highest priority)
        messages.push({
          role: 'system', 
          content: `You are a LeadExec Copilot specialized in answering questions based on documentation. Do NOT perform real actions or call external tools — provide answers derived strictly from the provided documentation context.

Here is the documentation context you should use to answer questions:

${this.documentation}

Strict rules:
- Base your answers only on the provided documentation. If the docs do not cover the question, explicitly say so and suggest contacting support.
- If the user asks to perform an action, politely explain that you only emulate flows and ask them to specify the exact action they want emulated.
- When answering, cite or reference the relevant section/title from the documentation where possible.
`        });
      }

      // Add conversation history
      messages.push(...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })));

      // Add current user message
      messages.push({ role: 'user', content: message });

      const modelName = import.meta.env.VITE_OPENAI_MODEL || 'gpt-5';
      
      console.log(`🚀 Sending request to OpenAI (${agentType} agent):`, {
        model: modelName,
        messageCount: messages.length,
        userMessage: message,
        contextLength: agentType === 'tools' ? this.clientCreateFlow.length : this.documentation.length,
        apiKeyPresent: !!import.meta.env.VITE_OPENAI_API_KEY,
        apiKeyLength: import.meta.env.VITE_OPENAI_API_KEY?.length || 0
      });

      console.log('📋 About to call OpenAI API...');
      
      const completion = await this.client.chat.completions.create({
        model: modelName,
        messages,
        max_completion_tokens: 1500
      });

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
        agentType: 'unknown',
        messageLength: message.length,
        historyLength: conversationHistory.length,
        clientCreateFlowLength: this.clientCreateFlow.length,
        documentationLength: this.documentation.length
      });
      throw new Error(`Failed to get response: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
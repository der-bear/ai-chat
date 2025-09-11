import OpenAI from 'openai';

export interface AgentResponse {
  content: string;
  agentUsed: 'tools' | 'documentation';
  toolCalls?: any[];
}

export interface ToolDefinition {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: {
      type: 'object';
      properties: Record<string, any>;
      required?: string[];
    };
  };
}

export class OpenAIService {
  private client: OpenAI;
  private documentation: string = '';

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

  private getToolsAgentSystemMessage(): string {
    return `You are a LeadExec Copilot specialized in executing tools and performing actions. 
Your role is to:
1. Execute tool functions based on user requests
2. Perform actions like managing clients, configuring webhooks, testing lead submissions
3. Handle operational tasks and integrations
4. Return structured data and actionable results

You have access to various tools to help users with their tasks. Always use the appropriate tool when available and provide clear, actionable responses.

If a user asks about documentation, concepts, or general questions, politely redirect them to ask about specific actions or tools you can help execute.`;
  }

  private getDocumentationAgentSystemMessage(): string {
    return `You are a LeadExec Copilot specialized in answering questions based on documentation. 
Your role is to:
1. Answer questions using the provided documentation context
2. Explain concepts, features, and how-to information
3. Provide guidance based on the knowledge base
4. Help users understand the system and its capabilities

Here is the documentation context you should use to answer questions:

${this.documentation}

Always base your answers on the provided documentation. If something is not covered in the docs, clearly state that and suggest they contact support or check for updated documentation.

If a user asks you to perform actions or execute tools, politely redirect them to specify what action they want to take, as you are focused on providing information rather than executing tasks.`;
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
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = [],
    availableTools: ToolDefinition[] = []
  ): Promise<AgentResponse> {
    try {
      const agentType = this.determineAgentType(message);
      
      let systemMessage: string;
      let tools: ToolDefinition[] | undefined;

      if (agentType === 'tools') {
        systemMessage = this.getToolsAgentSystemMessage();
        tools = availableTools.length > 0 ? availableTools : undefined;
      } else {
        systemMessage = this.getDocumentationAgentSystemMessage();
        tools = undefined; // Documentation agent doesn't use tools
      }

      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        { role: 'system', content: systemMessage },
        ...conversationHistory,
        { role: 'user', content: message }
      ];

      const completion = await this.client.chat.completions.create({
        model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4',
        messages,
        tools,
        tool_choice: tools ? 'auto' : undefined,
        temperature: 0.7,
        max_tokens: 1500
      });

      const response = completion.choices[0]?.message;
      
      if (!response) {
        throw new Error('No response from OpenAI');
      }

      return {
        content: response.content || 'No response content',
        agentUsed: agentType,
        toolCalls: response.tool_calls || []
      };

    } catch (error) {
      console.error('OpenAI Service Error:', error);
      throw new Error(`Failed to get response: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Tool execution simulation - in a real app, these would call actual APIs
  async executeToolCall(toolCall: any): Promise<string> {
    const { function: func } = toolCall;
    const { name, arguments: args } = func;
    
    // Parse arguments if they're a string
    let parsedArgs;
    try {
      parsedArgs = typeof args === 'string' ? JSON.parse(args) : args;
    } catch (error) {
      return `Error parsing tool arguments: ${error}`;
    }

    // Simulate tool execution based on function name
    switch (name) {
      case 'get_client_list':
        return JSON.stringify({
          clients: [
            { id: 1, name: 'Acme Corp', status: 'active' },
            { id: 2, name: 'Beta Inc', status: 'pending' },
            { id: 3, name: 'Gamma LLC', status: 'active' }
          ]
        });

      case 'create_webhook':
        return JSON.stringify({
          success: true,
          webhookId: 'wh_' + Date.now(),
          url: parsedArgs.url,
          events: parsedArgs.events || ['lead.created']
        });

      case 'test_lead_submission':
        return JSON.stringify({
          success: true,
          leadId: 'lead_' + Date.now(),
          status: 'processed',
          testData: parsedArgs
        });

      case 'get_webhook_status':
        return JSON.stringify({
          webhookId: parsedArgs.webhookId,
          status: 'active',
          lastTriggered: new Date().toISOString(),
          totalCalls: Math.floor(Math.random() * 100)
        });

      default:
        return `Tool '${name}' executed with arguments: ${JSON.stringify(parsedArgs)}`;
    }
  }
}
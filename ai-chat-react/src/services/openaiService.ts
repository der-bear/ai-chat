import { IntelligentAgent, type AgentResponse } from './intelligentAgent';

export type { AgentResponse };

export class OpenAIService {
  private intelligentAgent: IntelligentAgent;

  constructor() {
    this.intelligentAgent = new IntelligentAgent();
  }

  setDocumentation() {
    // Documentation is now handled by the intelligent agent's RAG system
    // No need to manually set it
  }

  setClientCreateFlow(flow: string) {
    this.intelligentAgent.setClientCreateFlow(flow);
  }

  async sendMessage(
    message: string, 
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<AgentResponse> {
    return await this.intelligentAgent.sendMessage(message, conversationHistory);
  }
}
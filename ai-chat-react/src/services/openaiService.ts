import { AgentRouter } from './agentRouter';
import type { AgentResponse } from './intelligentAgent';

export type { AgentResponse };

export class OpenAIService {
  private router: AgentRouter;

  constructor() {
    this.router = new AgentRouter();
  }

  setDocumentation() {
    // Documentation is now handled by the help agent's RAG system
    // No need to manually set it
  }

  setAgentInstructions(instructions: string) {
    this.router.setAgentInstructions(instructions);
  }

  async sendMessage(
    message: string, 
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<AgentResponse> {
    return await this.router.sendMessage(message, conversationHistory);
  }
}

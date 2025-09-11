import OpenAI from 'openai';
import { RagService } from './rag';

export interface HelpResponse {
  content: string;
  isHelpResponse: true;
}

export class HelpAgent {
  private client: OpenAI;
  private rag: RagService;

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

  async answerQuestion(
    question: string,
    conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []
  ): Promise<HelpResponse> {
    try {
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: `You are a LeadExec Documentation Assistant. Your ONLY responsibility is answering questions using the knowledge base.

## CORE RESPONSIBILITIES
- Answer questions about LeadExec features, API, workflows
- Use RAG knowledge base context provided below
- Provide accurate, helpful documentation-based responses
- Never attempt workflow execution or client setup

## RESPONSE RULES
- Keep answers concise and accurate
- Reference specific documentation when available
- If question is about workflow execution, redirect to flow agent
- Never invent information not in knowledge base

## TONE
- Helpful and professional
- Focus on clear explanations
- Provide relevant examples when available`
        }
      ];

      // Get relevant knowledge base content
      try {
        const knowledgeChunks = await this.rag.queryTopK(question, 5); // Get top 5 relevant chunks
        if (knowledgeChunks && knowledgeChunks.length > 0) {
          const knowledgeText = knowledgeChunks
            .map((c, i) => `[Knowledge ${i + 1}] ${c.source}\n${c.text}`)
            .join('\n\n');
          
          messages.push({
            role: 'system',
            content: `Knowledge Base Context:\n${knowledgeText}`
          });
        }
      } catch {
        // Continue without RAG if unavailable
      }

      // Add recent conversation context (last 3 messages)
      const recentHistory = conversationHistory.slice(-3);
      messages.push(...recentHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })));

      messages.push({ role: 'user', content: question });

      const completion = await this.client.chat.completions.create({
        model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o',
        messages,
        temperature: 0.2,
        max_tokens: 500 // Keep responses focused
      });

      const response = completion.choices[0]?.message;
      if (!response) {
        throw new Error('No response from OpenAI');
      }

      return {
        content: response.content || 'I\'m here to help with LeadExec questions!',
        isHelpResponse: true
      };

    } catch (error) {
      console.error('Help Agent Error:', error);
      throw new Error(`Failed to get help response: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
import { useState, useCallback } from 'react';
import type { Message, Conversation, ChatState, ChatConfig } from '../types/chat';
export type { Message, Conversation, ChatState } from '../types/chat';

const DEFAULT_CONFIG: ChatConfig = {
  maxConversations: 50,
  typingDelay: 1500,
  storageKey: 'aiChatHistory',
  minPanelWidth: 320,
  maxPanelWidth: 600
};

export const useChatState = (config: Partial<ChatConfig> = {}) => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  const [state, setState] = useState<ChatState>({
    isInitialState: true,
    currentConversation: null,
    conversations: [],
    isTyping: false,
    isMinimized: false,
    isMaximized: false,
    isHistoryActive: false,
    isShowAllActive: false,
    panelWidth: 400
  });

  const updateState = useCallback((updates: Partial<ChatState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const createNewConversation = useCallback((firstMessage: string): Conversation => {
    const conversation: Conversation = {
      id: `conv_${Date.now()}`,
      title: firstMessage.substring(0, 40) + (firstMessage.length > 40 ? '...' : ''),
      messages: [],
      created: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };

    setState(prev => {
      const newConversations = [conversation, ...prev.conversations];
      // Limit conversations
      const limitedConversations = newConversations.slice(0, finalConfig.maxConversations);
      
      return {
        ...prev,
        currentConversation: conversation,
        conversations: limitedConversations
      };
    });

    return conversation;
  }, [finalConfig.maxConversations]);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString()
    };

    setState(prev => {
      if (!prev.currentConversation) return prev;

      const updatedConversation = {
        ...prev.currentConversation,
        messages: [...prev.currentConversation.messages, newMessage],
        lastUpdated: newMessage.timestamp
      };

      const updatedConversations = prev.conversations.map(conv =>
        conv.id === updatedConversation.id ? updatedConversation : conv
      );

      return {
        ...prev,
        currentConversation: updatedConversation,
        conversations: updatedConversations
      };
    });

    return newMessage;
  }, []);

  const loadConversation = useCallback((conversationId: string) => {
    setState(prev => {
      const conversation = prev.conversations.find(c => c.id === conversationId);
      return conversation ? { ...prev, currentConversation: conversation } : prev;
    });
  }, []);

  const saveConversations = useCallback(() => {
    try {
      localStorage.setItem(finalConfig.storageKey, JSON.stringify(state.conversations));
    } catch (e) {
      console.error('Failed to save conversations:', e);
    }
  }, [state.conversations, finalConfig.storageKey]);

  const loadConversations = useCallback(() => {
    try {
      const data = localStorage.getItem(finalConfig.storageKey);
      if (data) {
        const conversations = JSON.parse(data);
        setState(prev => ({ ...prev, conversations }));
      }
    } catch (e) {
      console.error('Failed to load conversations:', e);
    }
  }, [finalConfig.storageKey]);

  return {
    state,
    updateState,
    createNewConversation,
    addMessage,
    loadConversation,
    saveConversations,
    loadConversations,
    config: finalConfig
  };
};

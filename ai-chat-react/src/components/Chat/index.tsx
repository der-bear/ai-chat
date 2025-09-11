import React, { useEffect, useRef, useState } from 'react';
import { useChatState } from '../../hooks/useChatState';
import { OpenAIService } from '../../services/openaiService';
import type { SuggestedAction } from '../../types/chat';
// No actual tools - AI agent emulates workflows based on system prompt context
import { ChatHeader } from './ChatHeader';
import { ChatInitial } from './ChatInitial';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { ChatHistory } from './ChatHistory';

interface ResizeState {
  isResizing: boolean;
  startX: number;
  startWidth: number;
  rafId: number | null;
  boundEventHandlers: {
    doResize: (e: MouseEvent | TouchEvent) => void;
    endResize: () => void;
  } | null;
}

// Import knowledgebase and client flow content
import knowledgebaseContent from '../../data/knowledgebase.md?raw';
import clientCreateFlowContent from '../../data/client-create-flow.md?raw';

interface ChatProps {
  className?: string;
}

export const Chat: React.FC<ChatProps> = ({ className = '' }) => {
  const {
    state,
    updateState,
    createNewConversation,
    addMessage,
    loadConversation,
    saveConversations,
    loadConversations,
    config
  } = useChatState();

  const [openaiService] = useState(() => {
    console.log('🔧 Initializing OpenAI Service with content:', {
      knowledgebaseLength: knowledgebaseContent.length,
      clientFlowLength: clientCreateFlowContent.length,
      knowledgebasePreview: knowledgebaseContent.substring(0, 100),
      clientFlowPreview: clientCreateFlowContent.substring(0, 100)
    });
    
    const service = new OpenAIService();
    service.setDocumentation();
    service.setClientCreateFlow(clientCreateFlowContent);
    return service;
  });

  const resizeStateRef = useRef<ResizeState>({
    isResizing: false,
    startX: 0,
    startWidth: 0,
    rafId: null,
    boundEventHandlers: null
  });

  // Initialize chat state and load conversations
  useEffect(() => {
    loadConversations();
    initializeLayout();
    setupResize();

    return () => {
      cleanup();
    };
  }, []);

  // Save conversations whenever they change
  useEffect(() => {
    if (state.conversations.length > 0) {
      saveConversations();
    }
  }, [state.conversations, saveConversations]);

  const initializeLayout = () => {
    document.body.classList.add('has-chat-panel');
    
    // Load saved panel width
    let savedWidth = 400;
    try {
      const stored = localStorage.getItem('chatPanelWidth');
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= config.minPanelWidth && parsed <= config.maxPanelWidth) {
          savedWidth = parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load saved panel width:', e);
    }

    const maxWidth = Math.min(config.maxPanelWidth, window.innerWidth * 0.9);
    savedWidth = Math.min(savedWidth, maxWidth);
    updatePanelWidth(savedWidth);
  };

  const updatePanelWidth = (width: number) => {
    updateState({ panelWidth: width });
    document.documentElement.style.setProperty('--chat-panel-width', `${width}px`);
  };

  const setupResize = () => {
    const resizeHandle = document.querySelector('.ai-chat__resize-handle') as HTMLElement;
    if (!resizeHandle) return;

    const startResize = (e: MouseEvent | TouchEvent) => {
      if (state.isMinimized || resizeStateRef.current.isResizing) return;

      const clientX = 'clientX' in e ? e.clientX : e.touches?.[0]?.clientX;
      if (clientX === undefined) return;

      resizeStateRef.current.isResizing = true;
      resizeStateRef.current.startX = clientX;
      resizeStateRef.current.startWidth = state.panelWidth;

      document.body.classList.add('resizing');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';

      const doResize = (e: MouseEvent | TouchEvent) => handleResize(e);
      const endResize = () => handleResizeEnd();

      resizeStateRef.current.boundEventHandlers = { doResize, endResize };

      document.addEventListener('mousemove', doResize);
      document.addEventListener('mouseup', endResize, { once: true });
      document.addEventListener('touchmove', doResize);
      document.addEventListener('touchend', endResize, { once: true });

      e.preventDefault();
    };

    resizeHandle.addEventListener('mousedown', startResize);
    resizeHandle.addEventListener('touchstart', startResize);
  };

  const handleResize = (e: MouseEvent | TouchEvent) => {
    if (!resizeStateRef.current.isResizing) return;

    if (resizeStateRef.current.rafId) {
      cancelAnimationFrame(resizeStateRef.current.rafId);
    }

    resizeStateRef.current.rafId = requestAnimationFrame(() => {
      const clientX = 'clientX' in e ? e.clientX : e.touches?.[0]?.clientX;
      if (clientX === undefined) return;

      const deltaX = resizeStateRef.current.startX - clientX;
      const newWidth = resizeStateRef.current.startWidth + deltaX;

      const maxWidth = Math.min(config.maxPanelWidth, window.innerWidth * 0.9);
      const clampedWidth = Math.min(maxWidth, Math.max(config.minPanelWidth, newWidth));

      updatePanelWidth(clampedWidth);
    });
  };

  const handleResizeEnd = () => {
    if (!resizeStateRef.current.isResizing) return;

    resizeStateRef.current.isResizing = false;

    if (resizeStateRef.current.rafId) {
      cancelAnimationFrame(resizeStateRef.current.rafId);
      resizeStateRef.current.rafId = null;
    }

    if (resizeStateRef.current.boundEventHandlers) {
      const { doResize, endResize } = resizeStateRef.current.boundEventHandlers;
      document.removeEventListener('mousemove', doResize);
      document.removeEventListener('mouseup', endResize);
      document.removeEventListener('touchmove', doResize);
      document.removeEventListener('touchend', endResize);
      resizeStateRef.current.boundEventHandlers = null;
    }

    document.body.classList.remove('resizing');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';

    try {
      localStorage.setItem('chatPanelWidth', state.panelWidth.toString());
    } catch (e) {
      console.warn('Failed to save panel width:', e);
    }
  };

  const cleanup = () => {
    if (resizeStateRef.current.isResizing) {
      handleResizeEnd();
    }
  };

  const handleSuggestedActionClick = (action: SuggestedAction) => {
    const messageText = action.value || action.text;
    handleSendMessage(messageText);
  };

  const handleSendMessage = async (message: string) => {
    try {
      // Create conversation if needed
      let conversation = state.currentConversation;
      if (!conversation) {
        conversation = createNewConversation(message);
        updateState({ isInitialState: false });
      }

      // Add user message
      addMessage({ text: message, sender: 'user' });
      updateState({ isTyping: true });

      // Get conversation history for context
      const conversationHistory = conversation.messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.text
      }));

      // Send to OpenAI service - agent handles all emulation based on system prompt context
      const response = await openaiService.sendMessage(
        message,
        conversationHistory
      );

      // Helper to strip any accidental success lines to avoid duplicates
      const stripCreatedSuccess = (text: string) => {
        const lines = text.split('\n');
        const filtered = lines.filter(l => !/created successfully\s*:/i.test(l));
        return filtered.join('\n').trim();
      };

      const finalResponse = response.content;

      // Deterministic processing detection via control mode only
      const isProcessingStart = response.mode === 'processing_start';

      if (isProcessingStart) {
        // This is a processing start message
        addMessage({
          text: stripCreatedSuccess(finalResponse),
          sender: 'assistant', 
          agentUsed: 'intelligent',
          conversationState: response.conversationState
        });

        // Show loading for realistic processing time
        updateState({ isTyping: true });
        
        // Generate completion message after delay
        setTimeout(async () => {
          try {
            // Request completion from AI
            const completionResponse = await openaiService.sendMessage(
              "Continue the creation. Return ONLY a single line in this exact format and nothing else: 'Client/Delivery/Account created successfully: [Entity Name (ID: 12345)](#)'. Do not add explanations or continuation in this message. Append the <CONTROL> block as specified.",
              [...conversation.messages.map(m => ({
                role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
                content: m.text
              })), 
              { role: 'assistant', content: finalResponse },
              { role: 'user', content: "Continue the creation. Return only the single-line success with entity link as specified." }]
            );
            
            updateState({ isTyping: false });
            
            // Add completion message
            addMessage({
              text: stripCreatedSuccess(completionResponse.content),
              sender: 'assistant',
              agentUsed: 'intelligent',
              conversationState: completionResponse.conversationState
            });

            // Immediately continue to next logical step in a new message
            updateState({ isTyping: true });
            const continuationResponse = await openaiService.sendMessage(
              "Now continue to the next logical workflow step based on the specification. Start with a concise sentence (e.g., 'Now I'll set up the delivery method...') and present only the relevant options with suggested actions. Do not start processing yet.",
              [...conversation.messages.map(m => ({
                role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
                content: m.text
              })),
              { role: 'assistant', content: finalResponse },
              { role: 'user', content: 'Continue the creation. Return only the single-line success with entity link as specified.' },
              { role: 'assistant', content: completionResponse.content },
              { role: 'user', content: 'Continue to the next logical workflow step and present options only.' }]
            );

            updateState({ isTyping: false });
            addMessage({
              text: stripCreatedSuccess(continuationResponse.content),
              sender: 'assistant',
              agentUsed: 'intelligent',
              suggestedActions: continuationResponse.suggestedActions,
              conversationState: continuationResponse.conversationState
            });
            
          } catch (error) {
            updateState({ isTyping: false });
            // Generate proper completion based on what was being created
            const entityType = finalResponse.includes('client') ? 'Client' : 
                             finalResponse.includes('delivery') ? 'Delivery Method' : 'Account';
            const randomId = Math.floor(Math.random() * 90000) + 10000;
            addMessage({
              text: `${entityType} created successfully: [${entityType} (ID: ${randomId})](#)`,
              sender: 'assistant',
              agentUsed: 'intelligent'
            });
          }
        }, 2500);
        
        return; // Don't send the original message again
      }

      // Add assistant message (for non-split scenarios)
      addMessage({
        text: finalResponse,
        sender: 'assistant',
        agentUsed: 'intelligent',
        suggestedActions: response.suggestedActions,
        conversationState: response.conversationState
      });

    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        text: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        sender: 'assistant'
      });
    } finally {
      updateState({ isTyping: false });
    }
  };

  const handleHistoryToggle = () => {
    updateState({ isHistoryActive: !state.isHistoryActive });
  };

  const handleBackClick = () => {
    updateState({ isHistoryActive: false });
  };

  const handleNewChat = () => {
    updateState({
      currentConversation: null,
      isInitialState: true,
      isHistoryActive: false
    });
  };

  const handleMinimizeToggle = () => {
    const newMinimized = !state.isMinimized;
    updateState({ isMinimized: newMinimized });
    
    if (newMinimized) {
      document.body.classList.add('chat-minimized');
      document.body.classList.remove('has-chat-panel');
    } else {
      document.body.classList.remove('chat-minimized');
      document.body.classList.add('has-chat-panel');
    }
  };

  const handleClose = () => {
    if (confirm('Close chat? Your conversation history will be saved.')) {
      // In a real app, you might want to hide the component or notify a parent
      console.log('Chat closed');
    }
  };

  const handleConversationSelect = (conversationId: string) => {
    loadConversation(conversationId);
    updateState({ 
      isHistoryActive: false,
      isInitialState: false
    });
  };

  const getChatClasses = () => {
    let classes = 'ai-chat';
    if (state.isInitialState) classes += ' ai-chat--initial-state';
    if (state.isMinimized) classes += ' ai-chat--minimized';
    if (state.isHistoryActive) classes += ' ai-chat--history-active';
    if (className) classes += ` ${className}`;
    return classes;
  };

  return (
    <div className={getChatClasses()}>
      {/* Resize Handle */}
      <div className="ai-chat__resize-handle"></div>

      {/* Header */}
      <ChatHeader
        state={state}
        onHistoryToggle={handleHistoryToggle}
        onBackClick={handleBackClick}
        onNewChat={handleNewChat}
        onMinimizeToggle={handleMinimizeToggle}
        onClose={handleClose}
      />

      {/* History Panel */}
      {state.isHistoryActive && (
        <ChatHistory
          conversations={state.conversations}
          currentConversationId={state.currentConversation?.id}
          onConversationSelect={handleConversationSelect}
        />
      )}

      {/* Initial State */}
      {state.isInitialState && !state.isHistoryActive && (
        <ChatInitial
          onSendMessage={handleSendMessage}
          isTyping={state.isTyping}
        />
      )}

      {/* Messages */}
      {!state.isInitialState && !state.isHistoryActive && state.currentConversation && (
        <ChatMessages
          messages={state.currentConversation.messages}
          isTyping={state.isTyping}
          onSuggestedActionClick={handleSuggestedActionClick}
        />
      )}

      {/* Input */}
      {!state.isInitialState && !state.isHistoryActive && (
        <ChatInput
          onSendMessage={handleSendMessage}
          isTyping={state.isTyping}
        />
      )}
    </div>
  );
};

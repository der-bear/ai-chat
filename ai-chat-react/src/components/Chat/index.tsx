import React, { useEffect, useRef, useState } from 'react';
import { useChatState } from '../../hooks/useChatState';
import { OpenAIService } from '../../services/openaiService';
import { FileProcessor } from '../../services/fileProcessor';
import { AIAutoMapper } from '../../services/aiAutoMapper';
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
import agentInstructionsContent from '../../data/agent-instructions.md?raw';

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
    service.setAgentInstructions(agentInstructionsContent);
    return service;
  });

  const [aiMapper] = useState(() => new AIAutoMapper());

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
    // Check if this is an "Upload instructions" action
    if (action.id === 'upload' || action.text === 'Upload instructions') {
      // Add a file upload message
      addMessage({
        text: 'Perfect! We\'ll automatically extract field mappings and requirements. Please upload in the widget below:',
        sender: 'assistant',
        agentUsed: 'intelligent',
        fileUpload: true
      });
      return;
    }
    
    // Check if this is "Create missing fields" action
    if (action.id === 'create' || action.text === 'Create Now') {
      addMessage({
        text: 'Perfect! Missing fields have been created automatically. Now I\'ll proceed with the webhook configuration.',
        sender: 'assistant',
        agentUsed: 'intelligent'
      });
      
      // Continue to next step
      setTimeout(() => {
        handleSendMessage('Continue with webhook setup');
      }, 1000);
      return;
    }
    
    // Keep UI simple: echo the agent-provided value or text.
    const messageText = action.value || action.text;
    handleSendMessage(messageText);
  };

  const handleFlowTrigger = (flowMessage: string) => {
    // For flow triggers from initial screen, skip showing user message
    handleSendMessage(flowMessage, true);
  };

  const handleFileUpload = async (file: File, content: string) => {
    try {
      // Show processing message
      addMessage({
        text: `Analyzing ${file.name}...`,
        sender: 'assistant',
        agentUsed: 'intelligent'
      });

      updateState({ isTyping: true });

      // Process the file structure
      const fileResult = await FileProcessor.processFile(file, content);
      
      // Use AI to intelligently map fields
      const aiResult = await aiMapper.mapFields(fileResult.fields, fileResult.sampleData);
      
      updateState({ isTyping: false });

      // Create mapping table
      let mappingTable = '| System Field | Delivery Field | Status |\n|--------------|----------------|--------|\n';
      
      aiResult.mappings.forEach(mapping => {
        const statusText = mapping.status === 'mapped' ? 'Mapped' : 
                          mapping.status === 'skipped' ? 'Skipped' : 'Created';
        mappingTable += `| ${mapping.systemField} | ${mapping.userField} | ${statusText} |\n`;
      });
      
      let resultMessage = `Perfect! I've analyzed your posting instructions and here are the field mapping results:\n\n`;
      resultMessage += `| Field | Mapped To |\n`;
      resultMessage += `|-------|----------|\n`;
      fileResult.fields.forEach(field => {
        resultMessage += `| **${field}** | ${field} |\n`;
      });
      
      resultMessage += `\n**Field Mapping Results:**\n\n${mappingTable}`;
      
      const skipped = aiResult.mappings.filter(m => m.status === 'skipped');
      if (skipped.length > 0) {
        resultMessage += `\n**Skipped, no system match:**\n`;
        skipped.forEach(mapping => {
          resultMessage += `• **${mapping.userField}**\n`;
        });
      }
      
      resultMessage += `\n\nSuccessfully mapped ${aiResult.summary.mapped} out of ${aiResult.summary.totalFields} fields. Would you like automatically create missed fields or you can add those later.`;
      
      // Add the processing result message
      addMessage({
        text: resultMessage,
        sender: 'assistant',
        agentUsed: 'intelligent',
        suggestedActions: [
          { id: 'create', text: 'Create Now', value: 'Create missing fields automatically' },
          { id: 'later', text: 'I\'ll Create Later', value: 'I will add missing fields manually later' }
        ]
      });
      
    } catch (error) {
      updateState({ isTyping: false });
      addMessage({
        text: `Sorry, I couldn't process that file. Please make sure it's a valid CSV, JSON, or Excel file.`,
        sender: 'assistant',
        agentUsed: 'intelligent'
      });
    }
  };

  const handleSendMessage = async (message: string, skipUserMessage = false) => {
    try {
      // Create conversation if needed
      let conversation = state.currentConversation;
      if (!conversation) {
        conversation = createNewConversation(message);
        updateState({ isInitialState: false });
      }

      // Add user message (unless skipped for flow triggers)
      if (!skipUserMessage) {
        addMessage({ text: message, sender: 'user' });
      }
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


      const finalResponse = response.content;

      // Smart processing detection
      const isProcessingStart = (finalResponse.includes("I'm creating") && finalResponse.trim().endsWith("now:")) ||
                               finalResponse.includes("I'm configuring") && finalResponse.trim().endsWith("now:");

      if (isProcessingStart) {
        // Show the processing start message first
        addMessage({
          text: finalResponse,
          sender: 'assistant',
          agentUsed: 'intelligent'
        });

        // Show loading for realistic processing time (small delay to ensure message renders first)
        setTimeout(() => {
          updateState({ isTyping: true });
        }, 100);
        
        // Generate completion message after delay
        setTimeout(async () => {
          try {
            // Request completion from AI
            const completionResponse = await openaiService.sendMessage(
              "Show ONLY the completion result. Return ONLY this single line: 'Client record created successfully: [Company Name (ID: 12345)](#)'. Do NOT add any other text or continue to delivery setup.",
              [...conversation.messages.map(m => ({
                role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
                content: m.text
              })), 
              { role: 'assistant', content: finalResponse },
              { role: 'user', content: 'Show only the completion line, nothing else.' }]
            );
            
            updateState({ isTyping: false });
            
            // Add completion message
            addMessage({
              text: completionResponse.content,
              sender: 'assistant',
              agentUsed: 'intelligent',
              suggestedActions: completionResponse.suggestedActions,
              conversationState: completionResponse.conversationState
            });
            
            // Auto-suggest next step based on what was created
            if (completionResponse.content.includes('Client record created successfully')) {
              setTimeout(async () => {
                updateState({ isTyping: true });
                
                const continuationResponse = await openaiService.sendMessage(
                  "Ask about lead type selection FIRST. Say 'Great! Now I need to know what type of leads this client will receive. I found these existing lead types in the system: Mortgage Default (54353), Mortgage Refinance (98999), Auto Insurance (76421). Please type the ID number (like 54353) for the lead type you want.' NO BUTTONS - user must type the ID.",
                  [...conversation.messages.map(m => ({
                    role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
                    content: m.text
                  })),
                  { role: 'assistant', content: completionResponse.content }]
                );
                
                updateState({ isTyping: false });
                addMessage({
                  text: continuationResponse.content,
                  sender: 'assistant',
                  agentUsed: 'intelligent',
                  suggestedActions: continuationResponse.suggestedActions,
                  conversationState: continuationResponse.conversationState
                });
              }, 800);
            }
            
            // Auto-suggest delivery account after delivery method creation
            if (completionResponse.content.includes('Delivery method created successfully') || 
                completionResponse.content.includes('delivery method created successfully')) {
              setTimeout(async () => {
                updateState({ isTyping: true });
                
                const continuationResponse = await openaiService.sendMessage(
                  "Suggest creating delivery account. Say 'Perfect! Now shall we create the delivery account? This sets up pricing, targeting criteria, and lead limits. Portal delivery is ready to go with minimal setup.' Then provide [Yes, create account] [Not right now] buttons.",
                  [...conversation.messages.map(m => ({
                    role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
                    content: m.text
                  })),
                  { role: 'assistant', content: completionResponse.content }]
                );
                
                updateState({ isTyping: false });
                addMessage({
                  text: continuationResponse.content,
                  sender: 'assistant',
                  agentUsed: 'intelligent',
                  suggestedActions: continuationResponse.suggestedActions,
                  conversationState: continuationResponse.conversationState
                });
              }, 800);
            }
            
            // Auto-suggest activation after delivery account creation  
            if (completionResponse.content.includes('Delivery account created successfully') || 
                completionResponse.content.includes('delivery account created successfully')) {
              setTimeout(async () => {
                updateState({ isTyping: true });
                
                const continuationResponse = await openaiService.sendMessage(
                  "Show testing results and suggest activation. Include testing table, then say 'Perfect! Your complete setup is now configured. The client is currently set to Inactive status (default for new clients). To start receiving leads, you'll need to activate the client.' Then provide [Activate now] [Activate later] buttons.",
                  [...conversation.messages.map(m => ({
                    role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
                    content: m.text
                  })),
                  { role: 'assistant', content: completionResponse.content }]
                );
                
                updateState({ isTyping: false });
                addMessage({
                  text: continuationResponse.content,
                  sender: 'assistant',
                  agentUsed: 'intelligent',
                  suggestedActions: continuationResponse.suggestedActions,
                  conversationState: continuationResponse.conversationState
                });
              }, 800);
            }
            
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
        }, 800);
        
        return; // Don't send the original message again
      }

      // Add assistant message (for non-split scenarios)
      addMessage({
        text: finalResponse,
        sender: 'assistant',
        agentUsed: 'intelligent',
        suggestedActions: response.suggestedActions,
        conversationState: response.conversationState,
        fileUpload: response.fileUpload
      });

    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        text: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        sender: 'assistant'
      });
    } finally {
      // If a processing sequence is underway, keep typing until it finishes
      // We cannot read keepTyping here (block scope), so guard by not overriding 'true' states.
      // Only force false if we are not already typing.
      if (!state.isTyping) {
        updateState({ isTyping: false });
      }
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

  const handleMaximizeToggle = () => {
    const newMaximized = !state.isMaximized;
    updateState({ isMaximized: newMaximized });
    
    if (newMaximized) {
      document.body.classList.add('chat-maximized');
      document.body.classList.remove('has-chat-panel');
    } else {
      document.body.classList.remove('chat-maximized');
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
    if (state.isMaximized) classes += ' ai-chat--maximized';
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
        onMaximizeToggle={handleMaximizeToggle}
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
          onFlowTrigger={handleFlowTrigger}
          isTyping={state.isTyping}
        />
      )}

      {/* Messages */}
      {!state.isInitialState && !state.isHistoryActive && state.currentConversation && (
        <ChatMessages
          messages={state.currentConversation.messages}
          isTyping={state.isTyping}
          onSuggestedActionClick={handleSuggestedActionClick}
          onFileUpload={handleFileUpload}
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

import React, { useState, useRef, useEffect } from 'react';

interface ChatInitialProps {
  onSendMessage: (message: string) => void;
  onFlowTrigger?: (flowMessage: string) => void;
  isTyping: boolean;
}

export const ChatInitial: React.FC<ChatInitialProps> = ({ onSendMessage, onFlowTrigger, isTyping }) => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    handleTextareaResize(e.target);
  };

  const handleTextareaResize = (textarea: HTMLTextAreaElement) => {
    // Reset height to get accurate scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate new height
    const maxHeight = 120;
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    
    // Apply new height
    textarea.style.height = `${newHeight}px`;
    
    // Handle overflow
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
  };

  const handleSend = () => {
    const message = inputValue.trim();
    if (!message || isTyping) return;

    onSendMessage(message);
    setInputValue('');
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    // Focus the input when component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const isDisabled = !inputValue.trim() || isTyping;

  return (
    <div className="ai-chat__initial">
      <div className="ai-chat__logo-section" role="banner">
        <div className="ai-chat__logo" aria-hidden="true">
          <img src="/src/assets/ai-assist-logo.svg" alt="" />
        </div>
        <h1 className="ai-chat__title">
          <span className="ai-text">AI</span>
          <span className="assist-text" aria-label="AI Assist">Assist</span>
        </h1>
      </div>
      
      <div className="ai-chat__initial-input-wrapper">
        <div className="ai-chat__initial-input-group">
          <textarea
            ref={textareaRef}
            className="ai-chat__initial-input"
            placeholder="Ask me anything..."
            aria-label="Chat input"
            aria-describedby="chat-input-hint"
            rows={1}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <span id="chat-input-hint" className="sr-only">Press Enter to send, Shift+Enter for new line</span>
          <button
            className="ai-chat__initial-send"
            type="button"
            disabled={isDisabled}
            onClick={handleSend}
            aria-label="Send message"
          >
            <i className="cil-send" aria-hidden="true"></i>
          </button>
        </div>
        
        <div className="ai-chat__tools-pills">
          <button
            className="ai-chat__tool-pill"
            onClick={() => onFlowTrigger ? onFlowTrigger('Create new client') : onSendMessage('Create new client')}
            disabled={isTyping}
            aria-label="Create new client"
          >
            <i className="cil-user-plus" aria-hidden="true"></i>
            <span>Create Client</span>
          </button>
          
          <button className="ai-chat__tool-pill ai-chat__tool-pill--disabled" disabled aria-label="Bulk create clients (coming soon)">
            <i className="cil-people" aria-hidden="true"></i>
            <span>Bulk Create Clients</span>
          </button>
          
          <button className="ai-chat__tool-pill ai-chat__tool-pill--disabled" disabled aria-label="Client insights (coming soon)">
            <i className="cil-chart-pie" aria-hidden="true"></i>
            <span>Client Insights</span>
          </button>
        </div>
      </div>
    </div>
  );
};
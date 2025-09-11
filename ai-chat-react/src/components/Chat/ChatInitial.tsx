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
      <div className="ai-chat__logo-section">
        <div className="ai-chat__logo">
          <i className="cil-star"></i>
        </div>
        <h1 className="ai-chat__title">LeadExec Copilot</h1>
      </div>
      
      <div className="ai-chat__initial-input-wrapper">
        <div className="ai-chat__initial-input-group">
          <textarea
            ref={textareaRef}
            className="ai-chat__initial-input"
            placeholder="Ask me anything..."
            rows={1}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="ai-chat__initial-send"
            type="button"
            disabled={isDisabled}
            onClick={handleSend}
          >
            <i className="cil-send"></i>
          </button>
        </div>
        
        <div className="ai-chat__tools-pills">
          <button 
            className="ai-chat__tool-pill" 
            onClick={() => onFlowTrigger ? onFlowTrigger('Create new client') : onSendMessage('Create new client')}
            disabled={isTyping}
          >
            <i className="cil-user-plus"></i>
            Create Client
          </button>
          
          <button className="ai-chat__tool-pill ai-chat__tool-pill--disabled" disabled>
            <i className="cil-people"></i>
            Bulk Create Clients
          </button>
          
          <button className="ai-chat__tool-pill ai-chat__tool-pill--disabled" disabled>
            <i className="cil-chart-pie"></i>
            Client Insights
          </button>
        </div>
      </div>
    </div>
  );
};
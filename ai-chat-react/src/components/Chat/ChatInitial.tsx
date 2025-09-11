import React, { useState, useRef, useEffect } from 'react';

interface ChatInitialProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

export const ChatInitial: React.FC<ChatInitialProps> = ({ onSendMessage, isTyping }) => {
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
      </div>
    </div>
  );
};
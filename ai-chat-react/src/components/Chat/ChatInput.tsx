import React, { useState, useRef } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isTyping }) => {
  const [inputValue, setInputValue] = useState('');
  const [isMultiline, setIsMultiline] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    handleTextareaResize(e.target);
  };

  const handleTextareaResize = (textarea: HTMLTextAreaElement) => {
    // Store current scroll position
    const scrollPos = textarea.scrollTop;
    
    // Reset height to get accurate scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate new height
    const maxHeight = 160;
    const minHeight = 40;
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    
    // Apply new height
    textarea.style.height = `${newHeight}px`;
    
    // Handle overflow
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
    
    // Update multiline state for button alignment
    setIsMultiline(newHeight > minHeight + 5);
    
    // Restore scroll position
    textarea.scrollTop = scrollPos;
  };

  const handleSend = () => {
    const message = inputValue.trim();
    if (!message || isTyping) return;

    onSendMessage(message);
    setInputValue('');
    setIsMultiline(false);
    
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

  const isDisabled = !inputValue.trim() || isTyping;

  return (
    <footer className="ai-chat__footer">
      <div className={`ai-chat__input-group ${isMultiline ? 'ai-chat__input-group--multiline' : ''}`}>
        <div className="ai-chat__input-wrapper">
          <textarea
            ref={textareaRef}
            className="ai-chat__input"
            placeholder="Type your message..."
            rows={1}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          className="ai-chat__send"
          type="button"
          disabled={isDisabled}
          onClick={handleSend}
        >
          <i className="cil-send"></i>
        </button>
      </div>
    </footer>
  );
};
import React, { useEffect, useRef } from 'react';
import type { Message } from '../../hooks/useChatState';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const formatMessageText = (text: string) => {
    // Simple formatting for JSON responses
    if (text.startsWith('{') || text.startsWith('[')) {
      try {
        const parsed = JSON.parse(text);
        return (
          <pre style={{ 
            background: 'var(--ai-chat-hover)', 
            padding: '8px', 
            borderRadius: '4px',
            fontSize: '12px',
            overflow: 'auto'
          }}>
            {JSON.stringify(parsed, null, 2)}
          </pre>
        );
      } catch {
        // If not valid JSON, return as-is
      }
    }
    
    // Handle line breaks
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <main className="ai-chat__messages">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`ai-chat__message ${message.sender === 'user' ? 'ai-chat__message--user' : ''}`}
        >
          <div className={`ai-chat__avatar ai-chat__avatar--${message.sender}`}>
            <i className={`cil-${message.sender === 'user' ? 'user' : 'star'}`}></i>
          </div>
          <div className="ai-chat__content">
            <div className={`ai-chat__bubble ai-chat__bubble--${message.sender}`}>
              {formatMessageText(message.text)}
            </div>
            {message.agentUsed && (
              <div className="ai-chat__agent-indicator">
                via {message.agentUsed} agent
              </div>
            )}
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="ai-chat__message">
          <div className="ai-chat__avatar ai-chat__avatar--assistant">
            <i className="cil-star"></i>
          </div>
          <div className="ai-chat__content">
            <div className="ai-chat__bubble ai-chat__bubble--assistant">
              <div className="ai-chat__typing">
                <span className="ai-chat__typing-dot"></span>
                <span className="ai-chat__typing-dot"></span>
                <span className="ai-chat__typing-dot"></span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </main>
  );
};
import React, { useState } from 'react';
import type { Conversation } from '../../hooks/useChatState';

interface ChatHistoryProps {
  conversations: Conversation[];
  currentConversationId?: string;
  onConversationSelect: (conversationId: string) => void;
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({
  conversations,
  currentConversationId,
  onConversationSelect
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  const filteredConversations = conversations.filter(conv =>
    conv.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ai-chat__history">
      <div className="ai-chat__history-content">
        <div className="ai-chat__history-header">
          <div className="ai-chat__history-logo">
            <i className="cil-star"></i>
          </div>
          <h2 className="ai-chat__history-title">LeadExec Copilot</h2>
        </div>
        
        <div className="ai-chat__history-search">
          <input
            type="text"
            className="ai-chat__history-search-input"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="cil-search ai-chat__history-search-icon"></i>
        </div>
        
        <div className="ai-chat__history-list">
          {filteredConversations.length === 0 ? (
            <div className="ai-chat__history-empty">
              {conversations.length === 0 ? 'No conversations yet' : 'No matching conversations'}
            </div>
          ) : (
            filteredConversations.map(conv => (
              <button
                key={conv.id}
                className={`ai-chat__history-item ${
                  conv.id === currentConversationId ? 'ai-chat__history-item--active' : ''
                }`}
                onClick={() => onConversationSelect(conv.id)}
              >
                <span className="ai-chat__history-item-text">{conv.title}</span>
                <span className="ai-chat__history-item-time">{formatTime(conv.lastUpdated)}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
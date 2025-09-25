import React from 'react';
import type { Conversation } from '../../hooks/useChatState';
import { SearchableList } from '../common/SearchableList';

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

  return (
    <SearchableList
      items={conversations}
      title="LeadExec Assist"
      icon="cil-star"
      searchPlaceholder="Search chat sessions..."
      emptyMessage={conversations.length === 0 ? 'No conversations yet' : 'No matching conversations'}
      onItemClick={(conv) => onConversationSelect(conv.id)}
      searchFilter={(conv, query) =>
        conv.title.toLowerCase().includes(query.toLowerCase())
      }
      itemTemplate={(conv, onClick) => (
        <button
          key={conv.id}
          className={`ai-chat__history-item ${
            conv.id === currentConversationId ? 'ai-chat__history-item--active' : ''
          }`}
          onClick={onClick}
          aria-label={`${conv.title} - ${formatTime(conv.lastUpdated)}`}
        >
          <div className="ai-chat__history-item-content">
            <span className="ai-chat__history-item-title">{conv.title}</span>
            <span className="ai-chat__history-item-date">{formatTime(conv.lastUpdated)}</span>
          </div>
        </button>
      )}
    />
  );
};
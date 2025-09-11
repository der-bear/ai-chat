import React from 'react';
import type { ChatState } from '../../hooks/useChatState';

interface ChatHeaderProps {
  state: ChatState;
  onHistoryToggle: () => void;
  onBackClick: () => void;
  onNewChat: () => void;
  onMinimizeToggle: () => void;
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  state,
  onHistoryToggle,
  onBackClick,
  onNewChat,
  onMinimizeToggle,
  onClose
}) => {
  return (
    <header className="ai-chat__header">
      <div className="ai-chat__header-left">
        <button 
          className="ai-chat__back" 
          type="button"
          onClick={onBackClick}
        >
          <i className="cil-arrow-left"></i>
          <span className="ai-chat__back-text">Back</span>
        </button>
        <button 
          className="ai-chat__new-chat-btn" 
          type="button"
          onClick={onNewChat}
        >
          <i className="cil-plus"></i>
          <span>New</span>
        </button>
      </div>
      <div className="ai-chat__actions">
        <button 
          className={`ai-chat__action ${state.isHistoryActive ? 'ai-chat__action--active' : ''}`}
          data-action="history" 
          type="button" 
          title="Chat History"
          onClick={onHistoryToggle}
        >
          <i className="cil-history"></i>
        </button>
        <button 
          className="ai-chat__action" 
          data-action="minimize" 
          type="button" 
          title="Minimize"
          onClick={onMinimizeToggle}
        >
          <i className={state.isMinimized ? "cil-window-maximize" : "cil-minus"}></i>
        </button>
        <button 
          className="ai-chat__action" 
          data-action="close" 
          type="button" 
          title="Close"
          onClick={onClose}
        >
          <i className="cil-x"></i>
        </button>
      </div>
    </header>
  );
};
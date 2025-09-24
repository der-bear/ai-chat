import React, { useState, useEffect, useRef } from 'react';
import { ActionCard } from '../common/ActionCard';

interface ChatInitialProps {
  onSendMessage: (message: string) => void;
  onFlowTrigger?: (flowMessage: string) => void;
  isTyping: boolean;
  onShowAllToggle?: () => void;
}

export const ChatInitial: React.FC<ChatInitialProps> = ({ onSendMessage, onFlowTrigger, isTyping, onShowAllToggle }) => {
  const [isCompact, setIsCompact] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Action cards data
  const actionCards = [
    {
      id: 'create-single-client',
      icon: 'cil-user-plus',
      title: 'Create Single Client',
      description: 'Set up a new client with automated configuration including delivery methods and credentials.',
      isNew: true,
      action: () => onFlowTrigger ? onFlowTrigger('Create Single Client') : onSendMessage('Create Single Client')
    },
    {
      id: 'create-multiple-clients',
      icon: 'cil-people',
      title: 'Create Multiple Clients',
      description: 'Import and set up multiple clients at once from CSV or Excel files.',
      disabled: true
    },
    {
      id: 'clients-insights',
      icon: 'cil-chart-pie',
      title: 'Clients Insights',
      description: 'View analytics, performance metrics, and lead distribution across all clients.',
      disabled: true
    },
    {
      id: 'flow-4',
      icon: 'cil-bolt',
      title: 'Another Flow',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      disabled: true
    },
    {
      id: 'flow-5',
      icon: 'cil-bolt',
      title: 'Another Flow',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      disabled: true
    },
    {
      id: 'flow-6',
      icon: 'cil-bolt',
      title: 'Another Flow',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      disabled: true
    }
  ];

  const visibleCards = actionCards.slice(0, 3);

  // Detect container width for responsive layout
  useEffect(() => {
    const checkWidth = () => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setIsCompact(width <= 640);
      }
    };

    // Check on mount and resize
    checkWidth();

    // Use ResizeObserver for container size changes
    const resizeObserver = new ResizeObserver(checkWidth);
    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

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

      <div
        ref={wrapperRef}
        className="ai-chat__initial-cards-wrapper"
        data-layout={isCompact ? 'compact' : 'default'}
      >
        <div className="ai-chat__action-cards ai-chat__action-cards--collapsed">
          {visibleCards.map(card => (
            <ActionCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              isNew={card.isNew}
              disabled={card.disabled || isTyping}
              onClick={card.action}
              aria-label={card.title}
            />
          ))}
        </div>

        {actionCards.length > 3 && (
          <button
            className="ai-chat__tool-pill"
            onClick={onShowAllToggle}
            aria-label="Show all actions"
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};
import React from 'react';

interface SuggestedAction {
  id: string;
  text: string;
  value?: string;
}

interface SuggestedActionsProps {
  actions: SuggestedAction[];
  onActionClick: (action: SuggestedAction) => void;
  disabled?: boolean;
}

export const SuggestedActions: React.FC<SuggestedActionsProps> = ({ 
  actions, 
  onActionClick, 
  disabled = false 
}) => {
  if (!actions || actions.length === 0) {
    return null;
  }

  return (
    <div className="suggested-actions">
      <div className="suggested-actions__container">
        {actions.map((action) => (
          <button
            key={action.id}
            className="suggested-actions__button"
            onClick={() => onActionClick(action)}
            disabled={disabled}
          >
            {action.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedActions;
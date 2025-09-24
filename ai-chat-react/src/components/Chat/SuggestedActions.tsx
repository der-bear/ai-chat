import React, { useState } from 'react';

interface SuggestedAction {
  id: string;
  text: string;
  value?: string;
}

interface SuggestedActionsProps {
  actions: SuggestedAction[];
  onActionClick: (action: SuggestedAction) => void;
  disabled?: boolean;
  selectedActionId?: string;
}

export const SuggestedActions: React.FC<SuggestedActionsProps> = ({
  actions,
  onActionClick,
  disabled = false,
  selectedActionId: externalSelectedId
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string | undefined>(externalSelectedId);

  if (!actions || actions.length === 0) {
    return null;
  }

  const handleActionClick = (action: SuggestedAction) => {
    setInternalSelectedId(action.id);
    onActionClick(action);
  };

  const selectedId = externalSelectedId ?? internalSelectedId;

  return (
    <div className="ai-chat__suggested-actions">
      <div className="ai-chat__suggested-actions-container">
        {actions.map((action) => {
          const isSelected = selectedId === action.id;
          return (
            <button
              key={action.id}
              className={`ai-chat__tool-pill ${isSelected ? 'ai-chat__tool-pill--selected' : ''}`}
              onClick={() => handleActionClick(action)}
              disabled={disabled}
            >
              {action.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedActions;
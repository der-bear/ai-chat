import React from 'react';
import logoSvg from '../../assets/ai-assist-logo.svg';

interface PanelHeaderProps {
  variant?: 'history' | 'tools' | 'default';
  onClose?: () => void;
  className?: string;
}

export const PanelHeader: React.FC<PanelHeaderProps> = ({
  variant = 'default',
  onClose,
  className = ''
}) => {
  const baseClass = variant === 'history' ? 'ai-chat__history-header' :
                     variant === 'tools' ? 'ai-chat__tools-header' :
                     'ai-chat__panel-header';

  const logoClass = variant === 'history' ? 'ai-chat__history-logo' :
                    variant === 'tools' ? 'ai-chat__tools-logo' :
                    'ai-chat__panel-logo';

  const titleClass = variant === 'history' ? 'ai-chat__history-title' :
                     variant === 'tools' ? 'ai-chat__tools-title' :
                     'ai-chat__panel-title';

  const closeClass = variant === 'tools' ? 'ai-chat__tools-close' :
                     variant === 'history' ? 'ai-chat__history-close' :
                     'ai-chat__panel-close';

  return (
    <div className={`${baseClass} ${className}`}>
      <div className={logoClass}>
        <img src={logoSvg} alt="" />
      </div>
      <h2 className={titleClass}>
        <span className="ai-text">AI</span>
        <span className="assist-text"> Assist</span>
      </h2>
      {onClose && (
        <button
          className={closeClass}
          onClick={onClose}
          aria-label="Close panel"
          type="button"
        >
          <i className="cil-x" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};
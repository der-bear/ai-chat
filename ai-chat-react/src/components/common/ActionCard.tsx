
export interface ActionCardProps {
  icon: string;
  title: string;
  description: string;
  state?: 'default' | 'hover' | 'selected';
  layout?: 'vertical' | 'horizontal' | 'list';
  disabled?: boolean;
  isNew?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

export const ActionCard = ({
  icon,
  title,
  description,
  state = 'default',
  layout = 'vertical',
  disabled = false,
  isNew = false,
  onClick,
  className = '',
  'aria-label': ariaLabel
}: ActionCardProps) => {
  const cardClasses = [
    'ai-chat__action-card',
    `ai-chat__action-card--${layout}`,
    state === 'selected' ? 'ai-chat__action-card--selected' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cardClasses}
      onClick={onClick}
      type="button"
      disabled={disabled}
      aria-label={ariaLabel || title}
    >
      <div className="ai-chat__action-card-icon" aria-hidden="true">
        <i className={icon}></i>
      </div>
      <div className="ai-chat__action-card-content">
        <h3 className="ai-chat__action-card-title">{title}</h3>
        <p className="ai-chat__action-card-desc">{description}</p>
      </div>
      {isNew && !disabled && <span className="ai-chat__action-card-new">NEW</span>}
    </button>
  );
};
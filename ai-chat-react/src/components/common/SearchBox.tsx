import React from 'react';

interface SearchBoxProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  autoFocus?: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
  inputRef,
  autoFocus = false
}) => {
  return (
    <div className={`ai-chat__search-box ${className}`}>
      <i className="cil-search ai-chat__search-icon" aria-hidden="true"></i>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control ai-chat__search-input"
        aria-label={placeholder}
        autoFocus={autoFocus}
      />
      {value && (
        <button
          className="ai-chat__search-clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
          type="button"
        >
          <i className="cil-x-circle" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};
import React, { useEffect, useState } from 'react';

interface DarkModeToggleProps {
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Get initial theme
    const storedTheme = getStoredTheme();
    const preferredTheme = getPreferredTheme();
    const initialTheme = storedTheme || preferredTheme;
    
    setTheme(initialTheme);
    applyTheme(initialTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const getStoredTheme = (): 'light' | 'dark' | null => {
    try {
      const stored = localStorage.getItem('coreui-theme');
      return stored as 'light' | 'dark' | null;
    } catch {
      return null;
    }
  };

  const setStoredTheme = (theme: 'light' | 'dark') => {
    try {
      localStorage.setItem('coreui-theme', theme);
    } catch (e) {
      console.warn('Failed to store theme preference:', e);
    }
  };

  const getPreferredTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (newTheme: 'light' | 'dark') => {
    // Temporarily disable transitions for instant theme switching
    document.body.classList.add('theme-switching');
    
    document.documentElement.setAttribute('data-coreui-theme', newTheme);
    setStoredTheme(newTheme);
    
    // Re-enable transitions after theme change is applied
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove('theme-switching');
      });
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className={`dark-mode-toggle ${className}`}>
      <button
        type="button"
        className="dark-mode-toggle__btn"
        onClick={toggleTheme}
        title="Toggle Dark Mode"
      >
        <i className="cil-moon dark-mode-toggle__icon dark-mode-toggle__icon--dark"></i>
        <i className="cil-sun dark-mode-toggle__icon dark-mode-toggle__icon--light"></i>
      </button>
    </div>
  );
};
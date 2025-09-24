import React, { useState, useMemo } from 'react';

export interface SearchableListItem {
  id: string;
  [key: string]: any;
}

export interface SearchableListProps<T extends SearchableListItem> {
  items: T[];
  title?: string;
  icon?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  onItemClick?: (item: T) => void;
  itemTemplate: (item: T, onClick?: () => void) => React.ReactNode;
  searchFilter?: (item: T, query: string) => boolean;
  className?: string;
}

export function SearchableList<T extends SearchableListItem>({
  items,
  searchPlaceholder = 'Search...',
  emptyMessage = 'No items found',
  onItemClick,
  itemTemplate,
  searchFilter,
  className = ''
}: SearchableListProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;

    if (searchFilter) {
      return items.filter(item => searchFilter(item, searchQuery));
    }

    // Default simple filter by id
    const query = searchQuery.toLowerCase();
    return items.filter(item =>
      String(item.id).toLowerCase().includes(query)
    );
  }, [items, searchQuery, searchFilter]);

  // Group items by category if they have category property
  const groupedItems = useMemo(() => {
    if (!filteredItems.length) return {};

    // Check if items have category property
    const hasCategories = filteredItems.some((item: any) => item.category);

    if (!hasCategories) {
      return { 'All': filteredItems };
    }

    return filteredItems.reduce((groups: Record<string, any[]>, item: any) => {
      const category = item.category || 'Other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
      return groups;
    }, {});
  }, [filteredItems]);

  return (
    <div className={`ai-chat__history ${className}`}>
      <div className="ai-chat__history-content">
        <div className="ai-chat__history-search-sticky">
          <div className="ai-chat__history-search">
            <i className="cil-search ai-chat__history-search-icon"></i>
            <input
              type="text"
              className="ai-chat__history-search-input"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="ai-chat__history-list">
          {Object.keys(groupedItems).length === 0 ? (
            <div className="ai-chat__history-empty">
              {emptyMessage}
            </div>
          ) : (
            Object.entries(groupedItems).map(([category, categoryItems]) => (
              <div key={category} className="ai-chat__category-section">
                {category !== 'All' && (
                  <div className="ai-chat__category-header">
                    {category} ({categoryItems.length})
                  </div>
                )}
                {categoryItems.map(item =>
                  itemTemplate(item, () => onItemClick?.(item))
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
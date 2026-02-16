import React from 'react';

const FilterGroup = ({ title, items, activeItems, onFilterChange, type }) => (
  <div className="filter-group">
    <h3 className="filter-title">{title}</h3>
    <div className="filter-pills">
      {items.map((item) => {
        const isActive = activeItems.includes(item);
        return (
          <button
            key={item}
            className={`filter-pill ${isActive ? 'active' : ''}`}
            onClick={() => onFilterChange(type, item)}
            aria-pressed={isActive}
          >
            {item}
          </button>
        );
      })}
    </div>
  </div>
);

export default FilterGroup;
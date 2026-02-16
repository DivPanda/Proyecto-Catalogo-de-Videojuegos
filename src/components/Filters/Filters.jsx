import { X, SlidersHorizontal } from 'lucide-react';
import './Filters.css';
import FilterGroup from './FilterGroup.jsx';

const Filters = ({
  platforms,
  genres,
  activeFilters,
  onFilterChange,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen && <div className="filters-backdrop" onClick={onClose}></div>}
      <aside className={`filters-container ${isOpen ? 'is-open' : ''}`}>
        <div className="filters-header">
          <div className="filters-header-title">
            <SlidersHorizontal size={20} />
            <span>Filtros</span>
          </div>
          <button className="close-filters-btn" onClick={onClose} aria-label="Cerrar filtros">
            <X size={24} />
          </button>
        </div>
        <div className="filters-body">
          {platforms.length > 0 && (
            <FilterGroup
              title="Plataformas"
              items={platforms}
              activeItems={activeFilters.platform}
              onFilterChange={onFilterChange}
              type="platform"
            />
          )}
          {genres.length > 0 && (
            <FilterGroup
              title="Géneros"
              items={genres}
              activeItems={activeFilters.genre}
              onFilterChange={onFilterChange}
              type="genre"
            />
          )}
        </div>
      </aside>
    </>
  );
};

export default Filters;
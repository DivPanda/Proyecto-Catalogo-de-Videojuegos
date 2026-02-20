import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  // Muestra 8 tarjetas en desktop (2 filas de 4) y 4 en móvil (2 filas de 2)
  const cardCount = window.innerWidth >= 1024 ? 8 : 4;

  return (
    <div className="content-area">
      {/* Skeleton para Filtros (visible solo en desktop) */}
      <aside className="skeleton-filters">
        <div className="skeleton-filters__header"></div>
        <div className="skeleton-filters__group"></div>
        <div className="skeleton-filters__group"></div>
      </aside>

      {/* Skeleton para el contenido principal (tarjetas) */}
      <main>
        <ul>
          {Array.from({ length: cardCount }).map((_, index) => (
            <li key={index} className="skeleton-card"></li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default SkeletonLoader;
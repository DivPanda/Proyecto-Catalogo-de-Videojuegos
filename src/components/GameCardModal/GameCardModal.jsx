import React, { useEffect, useRef } from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import './GameCardModal.css';

const GameModal = ({ game, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (game) {
      if (!dialog.open) dialog.showModal();
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      // Restaurar scroll del body
      document.body.style.overflow = 'unset';
    }

    // Limpieza al desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [game]);

  // Manejar cierre al hacer click fuera del contenido (en el backdrop)
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!game) return null;

  const genres = game.genero ? game.genero.split(',').map(g => g.trim()) : [];

  return (
    <dialog 
      ref={dialogRef} 
      className="game-modal" 
      onClick={handleBackdropClick}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <article className="modal-wrapper">
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
          <X size={24} />
        </button>

        <figure className="modal-image-container">
          <img 
            src={game.imageurl} 
            alt={`Portada de ${game.titulo}`} 
            className="modal-image" 
          />
        </figure>

        <div className="modal-content">
          <h2 id="modal-title" className="modal-title">{game.titulo}</h2>
          
          <div className="modal-meta">
            <div className="modal-year">
              <Calendar size={16} />
              <time dateTime={game.año}>{game.año}</time>
            </div>
            <ul className="modal-genres">
              {genres.map((genre, index) => (
                <li key={index} className="modal-pill">{genre}</li>
              ))}
            </ul>
          </div>

          <div className="modal-description">
            <p>{game.descripcion || "No hay descripción disponible para este título."}</p>
          </div>
        </div>
      </article>
    </dialog>
  );
};

export default GameModal;

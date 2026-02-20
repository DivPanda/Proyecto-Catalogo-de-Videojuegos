import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import './GameCardModal.css';

const GameCardModal = ({ game, onClose }) => {
  useEffect(() => {
    // --- Fix para evitar el salto de contenido al ocultar la barra de scroll ---
    // 1. Guardar los estilos originales del body
    const originalBodyOverflow = window.getComputedStyle(document.body).overflow;
    const originalBodyPaddingRight = window.getComputedStyle(document.body).paddingRight;

    // 2. Calcular el ancho de la barra de scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // 3. Bloquear el scroll y compensar el espacio de la barra de scroll
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Listener para cerrar con la tecla Escape
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      // 4. Restaurar los estilos originales del body al desmontar
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!game) return null;

  const genres = game.genero ? game.genero.split(',').map(g => g.trim()) : [];

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.article 
        className="modal-wrapper"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
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
      </motion.article>
    </motion.div>
  );
};

export default GameCardModal;

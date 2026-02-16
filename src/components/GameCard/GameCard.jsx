import { memo } from "react"
import "./GameCard.css"

const GameCard = memo(({ titulo, año, plataforma, genero, imageurl, onClick }) => {
  // Convertimos el string de plataformas en un array para crear tags
  // El prop 'genero' no se usa visualmente en la card, pero es necesario para la lógica de filtrado en App.jsx
  const platforms = plataforma ? plataforma.split(",").map((p) => p.trim()) : []

  return (
    <article className="game-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      {imageurl && (
        <img 
          src={imageurl} 
          alt={`Portada de ${titulo}`} 
          loading="lazy" 
          className="card-bg"
        />
      )}
      <div className="card-overlay"></div>
      <div className="card-content">
        <div className="platform-tags">
          {platforms.map((p, index) => (
            <span key={index} className="tag">{p}</span>
          ))}
        </div>
        <div className="title-section">
          <h2>{titulo}</h2>
          <span className="release-year">{año}</span>
        </div>
      </div>
    </article>
  )
})

export default GameCard
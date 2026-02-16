import { useState } from "react";
import "./HeroSection.css";

const HeroSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <section className="hero-section">
      {/* Fondo con imagen y overlay */}
      <div className="hero-bg-image"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <header>
          <h1 className="hero-title">TU BÓVEDA DE JUEGOS DEFINITIVA</h1>
          <p className="hero-subtitle">Explora, filtra y descubre tu próxima aventura entre cientos de títulos. Todo en un solo lugar.</p>
        </header>

        <form className="search-container" role="search" onSubmit={handleSubmit}>
          <div className="search-icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Busca tu próximo juego..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import './Footer.css';
import { Github, Heart, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        {/* Sección de Marca */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Gamepad2 className="logo-icon" size={28} />
            <h3>GameCatalog</h3>
          </div>
          <p className="footer-tagline">Explora mundos infinitos. Tu colección definitiva de videojuegos.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GameCatalog. Hecho con <Heart size={14} className="heart-icon" /> por DivPanda.</p>
        <a href="https://github.com/DivPanda" aria-label="Ver perfil de Github" className="social-link"><Github size={20} /></a>
      </div>
    </footer>
  );
};

export default Footer;
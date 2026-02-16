import React from 'react';
import './Footer.css';
import { Github, Twitter, Mail, Heart, Gamepad2 } from 'lucide-react';

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

        {/* Navegación Semántica */}
        <nav className="footer-nav" aria-label="Enlaces legales y de contacto">
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#privacidad">Privacidad</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        {/* Redes Sociales */}
        <div className="footer-social">
          <a href="https://github.com/DivPanda" aria-label="Ver perfil de Github" className="social-link"><Github size={20} /></a>
          <a href="#" aria-label="Seguir en Twitter" className="social-link"><Twitter size={20} /></a>
          <a href="mailto:" aria-label="Enviar correo" className="social-link"><Mail size={20} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GameCatalog. Hecho con <Heart size={14} className="heart-icon" /> por DivPanda.</p>
      </div>
    </footer>
  );
};

export default Footer;
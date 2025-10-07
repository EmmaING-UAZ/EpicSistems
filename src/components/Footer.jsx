import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Importamos los iconos de React Icons
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <Link to="/" className={styles.brandContainer}>
              <img src={logo} alt="Epic Sistems Logo" className={styles.logo} />
              <h3 className={styles.brandName}>EPIC SISTEMS</h3>
            </Link>
            <p className={styles.slogan}>Digitalizamos tu visión. Optimizamos tus resultados.</p>
          </div>
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Navegación</h4>
            <ul className={styles.navList}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contacto</h4>
            <p>epic.systems.mx@gmail.com</p>
            <p>WhatsApp: 492-223-7517</p>
            <p>Zacatecas, Zacatecas, México</p>
          </div>
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Síguenos</h4>
            <div className={styles.socialIcons}>
              {/* --- Íconos de Redes Sociales --- */}
              <a href="https://www.facebook.com/profile.php?id=61551867218288" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/epic_sistems_mx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@epic.sistems" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="https://wa.me/524922237517" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Epic Sistems. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* --- BOTÓN FLOTANTE DE WHATSAPP --- */}
      <a 
        href="https://wa.me/524922237517" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.whatsappFloatButton}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;
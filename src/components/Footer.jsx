import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.brandName}>EPIC SISTEMS</h3>
          <p className={styles.slogan}>Digitalizamos tu visión. Optimizamos tus resultados.</p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Navegación</h4>
          <ul className={styles.navList}>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Contacto</h4>
          <p>epic.systems.mx@gmail.com</p>
          <p>WhatsApp: 492-223-7517</p>
          <p>Guadalupe, Zacatecas, México</p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Síguenos</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61551867218288" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://www.instagram.com/epic_systems_mx/" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://www.tiktok.com/@epic.sistems" target="_blank" rel="noopener noreferrer">TT</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Epic Sistems. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
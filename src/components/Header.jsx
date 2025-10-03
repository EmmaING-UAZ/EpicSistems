import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; // 1. IMPORTAMOS EL LOGO

const menuVariants = {
  hidden: { 
    opacity: 0,
    transition: { when: "afterChildren" }
  },
  visible: {
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logoLink} onClick={closeMenu}>
          {/* 2. AÑADIMOS LA IMAGEN DEL LOGO */}
          <img src={logo} alt="Epic Sistems Logo" className={styles.logo} />
          <span>EPIC SISTEMS</span>
        </NavLink>

        {/* --- Menú de Escritorio --- */}
        <div className={styles.desktopNavLinks}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Inicio</NavLink>
          <NavLink to="/servicios" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Servicios</NavLink>
          <NavLink to="/sobre-nosotros" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Sobre Nosotros</NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contacto</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Blog</NavLink>
        </div>

        {/* --- Menú de Móvil con Animaciones --- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className={styles.mobileNavLinks}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div variants={linkVariants}><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Inicio</NavLink></motion.div>
              <motion.div variants={linkVariants}><NavLink to="/servicios" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Servicios</NavLink></motion.div>
              <motion.div variants={linkVariants}><NavLink to="/sobre-nosotros" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Sobre Nosotros</NavLink></motion.div>
              <motion.div variants={linkVariants}><NavLink to="/contacto" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Contacto</NavLink></motion.div>
              <motion.div variants={linkVariants}><NavLink to="/blog" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>Blog</NavLink></motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Icono de Hamburguesa Animado --- */}
        <button className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className={styles.bar}></motion.div>
          <motion.div animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className={styles.bar}></motion.div>
          <motion.div animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className={styles.bar}></motion.div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
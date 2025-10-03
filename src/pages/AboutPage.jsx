import React, { useCallback } from 'react';
import styles from './AboutPage.module.css';
import { motion } from 'framer-motion';

// --- Imports para las partículas (reutilizamos) ---
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';

// Importa una imagen tuya de placeholder. Crea una carpeta 'images' en 'src/assets'
// y guarda una foto tuya ahí. Por ahora, el path es un ejemplo.
// import founderImage from '../assets/images/tu-foto.jpg';

const AboutPage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className={styles.hero}>
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          options={particlesConfig}
          className={styles.particles}
        />
        <div className={styles.heroContent}>
          <h1>Nuestra Historia</h1>
          <p>Talento 100% Zacatecano para potenciar tu negocio.</p>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.gridContainer}>
          <motion.div 
            className={styles.textContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Nuestra Misión: Potenciar Negocios Locales.</h2>
            <p>
              Somos Epic Sistems, una agencia de desarrollo web y marketing digital con profundas raíces en Zacatecas, México. Nacimos con un propósito claro: potenciar a los negocios y emprendedores de nuestra región, creando un ecosistema donde el éxito de uno es el éxito de todos.
            </p>
            <h2>Talento 100% Zacatecano.</h2>
            <p>
              Nuestro equipo no solo trabaja aquí, somos de aquí. Cada desarrollador, estratega de marketing y diseñador gráfico en nuestro equipo es talento local, orgullosamente formado en la Universidad Autónoma de Zacatecas. Entendemos tu mercado porque es nuestro mercado. Hablamos tu idioma porque es el que usamos todos los días.
            </p>
          </motion.div>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <img src={founderImage} alt="Fundador de Epic Sistems" /> */}
            <div className={styles.imagePlaceholder} role="img" aria-label="Fotografía del fundador de Epic Sistems">Tu Foto Aquí</div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default AboutPage;
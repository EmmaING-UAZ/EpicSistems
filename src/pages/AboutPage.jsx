import React, { useCallback } from 'react';
import styles from './AboutPage.module.css';
import { motion } from 'framer-motion';

// --- Imports para las partículas (reutilizamos) ---
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';

// 1. IMPORTAMOS TU FOTO (asegúrate que el path sea correcto)
import founderImage from '../assets/founder.jpg'; // Reemplaza con la ruta correcta a tu imagen

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

            {/* 2. AÑADIMOS TU PRESENTACIÓN PERSONAL */}
            <h3>Un Rostro Detrás del Código</h3>
            <p>
              Mi nombre es Jesús Emmanuel Perea Martínez, fundador de Epic Sistems. Como desarrollador y estratega originario de Zacatecas, mi misión es personal: ofrecer la calidad y la tecnología de las grandes agencias a los emprendedores y negocios de mi tierra, con un trato directo, honesto y sin complicaciones.
            </p>
            
            <h2>Talento 100% Zacatecano.</h2>
            <p>
              Nuestro equipo no solo trabaja aquí, somos de aquí. Cada desarrollador, estratega de marketing y diseñador gráfico en nuestro equipo es talento local, orgullosamente formado en la Universidad Autónoma de Zacatecas. Entendemos tu mercado porque es nuestro mercado.
            </p>
          </motion.div>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 3. REEMPLAZAMOS EL PLACEHOLDER POR TU IMAGEN REAL */}
            <img src={founderImage} alt="Fotografía de Jesús Emmanuel Perea Martínez, fundador de Epic Sistems" />
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default AboutPage;
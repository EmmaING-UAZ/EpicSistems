import React, { useCallback } from 'react'; // 1. Añadimos useCallback
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

// --- Imports para las partículas ---
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';

const NotFoundPage = () => {
  // --- Lógica para inicializar las partículas ---
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const glitchVariant = {
    glitch: {
      y: [0, -2, 2, -2, 0],
      x: [0, 2, -2, 2, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: Math.random() * 1
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* 2. AÑADIMOS EL COMPONENTE DE PARTÍCULAS */}
      <Particles
        id="tsparticles-404"
        init={particlesInit}
        options={particlesConfig}
        className={styles.particles}
      />
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }}
      >
        <div className={styles.errorCode}>
          <motion.span variants={glitchVariant} animate="glitch">4</motion.span>
          <motion.span variants={glitchVariant} animate="glitch">0</motion.span>
          <motion.span variants={glitchVariant} animate="glitch">4</motion.span>
        </div>
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
        >
          Página No Encontrada
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.7 }}
        >
          Parece que te has perdido en el ciberespacio. Regresemos a un lugar seguro.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.9 }}
        >
          <Link to="/" className={styles.homeButton}>
            Volver al Inicio
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
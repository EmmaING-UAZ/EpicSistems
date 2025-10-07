import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- 1. IMPORTAMOS EL COMPONENTE Link
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className={styles.heroSection}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className={styles.particles}
      />
      <motion.div 
        className={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className={styles.logoContainer}>
            <h2 className={styles.brandName}>EPIC SISTEMS</h2>
            <p className={styles.slogan}>DIGITALIZAMOS TU VISIÓN. OPTIMIZAMOS TUS RESULTADOS.</p>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className={styles.mainHeadline}>
          WEBS DE ALTO <span className={styles.highlight}>IMPACTO</span> PARA HACER <span className={styles.highlight}>CRECER</span> TU NEGOCIO
        </motion.h1>
        
        <motion.p variants={itemVariants} className={styles.subHeadline}>
          Lanzamos tu sitio profesional en 7 días y te damos 3 meses para pagar. Sin trucos, sin tarjetas de crédito.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          {/* v-- 2. CAMBIAMOS <a> POR <Link> Y `href` POR `to` --v */}
          <Link to="/contacto" className={styles.ctaButton}>
            SOLICITAR DEMO GRATUITA
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
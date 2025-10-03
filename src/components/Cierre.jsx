import React from 'react';
import { motion } from 'framer-motion';
import styles from './Cierre.module.css';

const Cierre = () => {
  return (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* --- Parte de Prueba Social --- */}
      <div className={styles.socialProofContainer}>
        <h3 className={styles.socialProofTitle}>Negocios que ya confían en nosotros</h3>
        <div className={styles.logosWrapper}>
          {/* Aquí irían los logos de tus clientes. Por ahora son placeholders. */}
          <div className={styles.clientLogo}>LOGO 1</div>
          <div className={styles.clientLogo}>LOGO 2</div>
          <div className={styles.clientLogo}>LOGO 3</div>
        </div>
      </div>

      {/* --- Parte del CTA Final --- */}
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>¿Listo para Digitalizar tu Visión?</h2>
        <p className={styles.ctaSubtitle}>
          Hablemos de tu proyecto. Solicita una demo gratuita y sin compromiso.
        </p>
        <a href="#contact" className={styles.ctaButton}>
          Solicitar Demo Gratuita
        </a>
      </div>
    </motion.section>
  );
};

export default Cierre;
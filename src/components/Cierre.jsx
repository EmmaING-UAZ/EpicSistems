import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 1. Importamos Link
import styles from './Cierre.module.css';

// 2. Importamos los logos desde la carpeta de assets
import logo7tynien from '../assets/logos/logo-7tynine.png';
import logoPirona from '../assets/logos/logo-pirona.png';
import logoTerrazac from '../assets/logos/logo-terrazac.png';

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
          {/* 3. Reemplazamos los divs con las imágenes de los logos */}
          <img src={logo7tynien} alt="Logo de 7tynien" className={styles.clientLogo} />
          <img src={logoPirona} alt="Logo de Pirona" className={styles.clientLogo} />
          <img src={logoTerrazac} alt="Logo de Terraza C" className={styles.clientLogo} />
        </div>
      </div>

      {/* --- Parte del CTA Final --- */}
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>¿Listo para Digitalizar tu Visión?</h2>
        <p className={styles.ctaSubtitle}>
          Hablemos de tu proyecto. Solicita una demo gratuita y sin compromiso.
        </p>
        {/* 4. Cambiamos <a> por <Link> */}
        <Link to="/contacto" className={styles.ctaButton}>
          Solicitar Demo Gratuita
        </Link>
      </div>
    </motion.section>
  );
};

export default Cierre;
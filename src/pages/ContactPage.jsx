import React, { useCallback } from 'react';
import styles from './ContactPage.module.css';
import { motion } from 'framer-motion';

// --- Imports para las partículas (reutilizamos) ---
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';

const ContactPage = () => {
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
          id="tsparticles-contact"
          init={particlesInit}
          options={particlesConfig}
          className={styles.particles}
        />
        <div className={styles.heroContent}>
          <h1>Hablemos de tu Proyecto</h1>
          <p>Estoy listo para escuchar tu idea y convertirla en una realidad digital.</p>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.gridContainer}>
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Información de Contacto</h3>
            <p>¿Tienes una pregunta o quieres empezar? Envíame un mensaje o contáctame por mis redes. Te responderé en menos de 24 horas.</p>
            <div className={styles.infoItem}>
              <strong>Email:</strong> epic.systems.mx@gmail.com
            </div>
            <div className={styles.infoItem}>
              <strong>WhatsApp:</strong> 492-223-7517
            </div>
             <div className={styles.infoItem}>
              <strong>Ubicación:</strong> Guadalupe, Zacatecas, México (Servicio 100% Digital)
            </div>
          </motion.div>
          <motion.form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            className={styles.formColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Campo oculto requerido por Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
          </motion.form>
        </div>
      </section>

    </motion.div>
  );
};

export default ContactPage;
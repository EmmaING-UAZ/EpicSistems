import React, { useCallback, useState, useEffect, useRef } from 'react'; // 1. Importamos useRef
import styles from './ContactPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

// Nuevas importaciones de Formspree
import { useForm, ValidationError } from '@formspree/react';

// El resto de tus imports de partículas e iconos
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdOutlineMail, MdDoneAll } from "react-icons/md";

const ContactPage = () => {
  const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);

  const [state, handleSubmit] = useForm("xdkwlzvb");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null); // 2. Creamos una referencia para el formulario

  useEffect(() => {
    if (state.succeeded) {
      setIsModalOpen(true);
      
      // 3. AÑADIMOS LA LÓGICA PARA RESETEAR EL FORMULARIO
      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => setIsModalOpen(false), 4000);
    }
  }, [state.succeeded]);


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.hero}>
          <Particles id="tsparticles-contact" init={particlesInit} options={particlesConfig} className={styles.particles}/>
          <div className={styles.heroContent}><h1>Hablemos de tu Proyecto</h1><p>Estoy listo para escuchar tu idea y convertirla en una realidad digital.</p></div>
        </header>

        <section className={styles.contentSection}>
          <div className={styles.gridContainer}>
            <motion.div className={styles.infoColumn} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h3>Información de Contacto</h3>
              <p>¿Tienes una pregunta o quieres empezar? Envíame un mensaje o contáctame por mis redes. Te responderé en menos de 24 horas.</p>
              <a href="mailto:epic.systems.mx@gmail.com" className={styles.emailButton}><MdOutlineMail className={styles.emailIcon} /><span>epic.systems.mx@gmail.com</span></a>
              <div className={styles.infoItem}><strong>WhatsApp:</strong> 492-223-7517</div>
              <div className={styles.infoItem}><strong>Ubicación:</strong> Zacatecas, Zacatecas, México (Servicio 100% Digital)</div>
              <div className={styles.socialIconsContainer}>
                  <h4>Síguenos</h4>
                  <div className={styles.socialIcons}><a href="https://www.facebook.com/profile.php?id=61551867218288" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a><a href="https://www.instagram.com/epic_systems_mx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a><a href="https://www.tiktok.com/@epic.sistems" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a></div>
              </div>
            </motion.div>
            
            <motion.form 
              ref={formRef} // 4. Asignamos la referencia al formulario
              className={styles.formColumn} 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input id="name" type="text" name="name" required />
                <ValidationError prefix="Nombre" field="name" errors={state.errors} className={styles.errorMessage} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.errorMessage} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                <ValidationError prefix="Mensaje" field="message" errors={state.errors} className={styles.errorMessage} />
              </div>

              <button type="submit" className={styles.submitButton} disabled={state.submitting}>
                {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </motion.form>
          </div>
        </section>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.successMessageContainer}>
          <MdDoneAll className={styles.successIcon} />
          <h2>¡Mensaje Enviado!</h2>
          <p>Gracias por tu interés. Hemos recibido tu mensaje correctamente.</p>
        </div>
      </Modal>
    </>
  );
};

export default ContactPage;
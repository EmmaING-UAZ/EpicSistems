import React, { useCallback, useState } from 'react';
import styles from './ContactPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

// Imports de Partículas e Iconos
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdOutlineMail, MdDoneAll } from "react-icons/md";

const ContactPage = () => {
  const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) { setErrors(prev => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors; }); }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio.';
    else if (formData.name.length < 3) newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
    if (!formData.email) newErrors.email = 'El correo es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El formato del correo no es válido.';
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio.';
    else if (formData.message.length < 3) newErrors.message = 'El mensaje debe tener al menos 3 caracteres.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const netlifyFormData = new URLSearchParams({ "form-name": "contact", ...formData });
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyFormData.toString(),
      })
      .then(() => {
        setErrors({});
        setFormData({ name: '', email: '', message: '' });
        setIsModalOpen(true);
        // --- LÍNEA AÑADIDA PARA EL CIERRE AUTOMÁTICO ---
        setTimeout(() => setIsModalOpen(false), 4000); // El modal se cierra después de 4 segundos
      })
      .catch((error) => alert(error));
    }
  };

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
              <div className={styles.infoItem}><strong>Ubicación:</strong> Guadalupe, Zacatecas, México (Servicio 100% Digital)</div>
              <div className={styles.socialIconsContainer}>
                  <h4>Síguenos</h4>
                  <div className={styles.socialIcons}><a href="https://www.facebook.com/profile.php?id=61551867218288" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a><a href="https://www.instagram.com/epic_systems_mx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a><a href="https://www.tiktok.com/@epic.sistems" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a></div>
              </div>
            </motion.div>
            
            <motion.form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className={styles.formColumn} onSubmit={handleSubmit} noValidate initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <input type="hidden" name="form-name" value="contact" />
              <input name="bot-field" style={{ display: 'none' }} />
              <div className={styles.formGroup}><label htmlFor="name">Nombre</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><AnimatePresence>{errors.name && <motion.p className={styles.errorMessage} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{errors.name}</motion.p>}</AnimatePresence></div>
              <div className={styles.formGroup}><label htmlFor="email">Correo Electrónico</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><AnimatePresence>{errors.email && <motion.p className={styles.errorMessage} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{errors.email}</motion.p>}</AnimatePresence></div>
              <div className={styles.formGroup}><label htmlFor="message">Mensaje</label><textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea><AnimatePresence>{errors.message && <motion.p className={styles.errorMessage} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{errors.message}</motion.p>}</AnimatePresence></div>
              <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
            </motion.form>
          </div>
        </section>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.successMessageContainer}>
          <MdDoneAll className={styles.successIcon} />
          <h2>¡Mensaje Enviado!</h2>
          <p>Gracias por contactarnos. Te responderemos en breve.</p>
        </div>
      </Modal>
    </>
  );
};

export default ContactPage;
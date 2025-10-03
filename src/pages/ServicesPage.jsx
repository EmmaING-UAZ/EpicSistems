import React, { useCallback } from 'react';
import styles from './ServicesPage.module.css';
import { motion } from 'framer-motion';
import ComparisonTable from '../components/ComparisonTable';
import Faq from '../components/Faq';

// --- Imports para las partículas ---
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig'; // Reutilizamos la misma configuración

const faqData = [
    // ... (los datos de las preguntas se mantienen igual)
    {
        question: "¿Cómo funciona exactamente el plan de pagos a 3 meses?",
        answer: "Nuestro plan de pagos está diseñado para darte flexibilidad. Se requiere un pago inicial para desplegar tu sitio web (30% para planes Plata/Oro, 50% para Platino). El resto puedes liquidarlo hasta 3 meses después, ya sea en pagos semanales, quincenales, mensuales o al final del plazo. Si el pago no se completa, el sitio se suspende temporalmente, pero tu año de hosting y dominio siguen contando."
    },
    {
        question: "¿El sitio web será 100% de mi propiedad?",
        answer: "Sí. Una vez liquidado el pago en su totalidad, tienes el 100% de la propiedad sobre el código y el diseño de tu sitio web. Te entregaremos todos los archivos y accesos correspondientes."
    },
    {
        question: "¿Qué pasa cuando termina el mantenimiento gratuito?",
        answer: "Después del periodo de mantenimiento incluido en tu plan, puedes optar por contratar uno de nuestros planes de mantenimiento mensual a un costo muy accesible, o bien, puedes gestionar el sitio por tu cuenta. ¡La decisión es tuya!"
    },
    {
        question: "¿Qué necesitan de mi parte para empezar?",
        answer: "Principalmente, necesitaremos los textos que quieres incluir en cada sección (información de tu negocio, descripción de servicios, etc.), tu logo (si ya lo tienes) y las imágenes que te gustaría mostrar."
    }
];

const ServicesPage = () => {
  // --- Lógica para inicializar las partículas ---
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
          id="tsparticles-services" // Es importante un ID único por página
          init={particlesInit}
          options={particlesConfig}
          className={styles.particles}
        />
        <div className={styles.heroContent}>
            <h1>Nuestros Planes</h1>
            <p>Soluciones claras y transparentes diseñadas para tu crecimiento.</p>
        </div>
      </header>
      
      <section className={styles.tableSection}>
        <ComparisonTable />
      </section>

      <Faq questions={faqData} />

      <section className={styles.ctaSection}>
        <h2>¿Listo para empezar?</h2>
        <a href="#" className={styles.ctaButton}>Solicitar Demo Gratuita</a>
      </section>

    </motion.div>
  );
};

export default ServicesPage;
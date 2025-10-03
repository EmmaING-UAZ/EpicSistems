import React from 'react';
import { motion } from 'framer-motion';
import styles from './PlanesServicio.module.css';

// Datos de los planes para mantener el código limpio
const planesData = [
  {
    nombre: 'Plan Plata',
    subtitulo: 'Página Informativa',
    precio: '$2,200',
    features: [
      'Hasta 3 Páginas',
      'Diseño Profesional y Moderno',
      'Catálogo en PDF integrado',
      '1 Mes de Mantenimiento',
    ],
    highlighted: false,
  },
  {
    nombre: 'Plan Oro',
    subtitulo: 'Landing Page Premium',
    precio: '$5,500',
    features: [
      'Página Única de Alto Impacto',
      'Enfocada en Conversión y Animaciones',
      'Catálogo simple (hasta 20 productos)',
      '2 Meses de Mantenimiento',
    ],
    highlighted: true,
  },
  {
    nombre: 'Plan Platino',
    subtitulo: 'Tienda Online',
    precio: '$15,000',
    features: [
      'E-commerce Completo',
      'Carrito de Compras y Pagos en Línea',
      'Ingreso de hasta 50 productos',
      '4 Meses de Mantenimiento',
    ],
    highlighted: false,
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};


const PlanesServicio = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Planes a la Medida de tu Crecimiento</h2>
        <motion.div 
            className={styles.plansWrapper}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {planesData.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`${styles.planCard} ${plan.highlighted ? styles.highlighted : ''}`}
              variants={cardVariants}
            >
              {plan.highlighted && <div className={styles.popularBadge}>Más Popular</div>}
              <h3 className={styles.planName}>{plan.nombre}</h3>
              <p className={styles.planSubtitle}>{plan.subtitulo}</p>
              <div className={styles.planPrice}>{plan.precio} <small>MXN</small></div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.planButton}>
                Me Interesa
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlanesServicio;
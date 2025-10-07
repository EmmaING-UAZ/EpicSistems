import React from 'react';
import { motion } from 'framer-motion';
import styles from './PlanesServicio.module.css';
import { Link } from 'react-router-dom'; // Importamos Link para el botón

// --- DATOS DE LOS PLANES ACTUALIZADOS ---
const planesData = [
  {
    nombre: 'Plan Plata',
    subtitulo: 'Página Informativa',
    precioOriginal: '$2,200',
    precioOferta: '$1,800',
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
    precioOriginal: '$5,500',
    precioOferta: '$4,500',
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
    precioOriginal: '$15,000',
    precioOferta: '$11,500',
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
              
              {/* --- BLOQUE DE PRECIO ACTUALIZADO --- */}
              <div className={styles.priceContainer}>
                <span className={styles.oldPrice}>{plan.precioOriginal}</span>
                <div className={styles.offerPrice}>{plan.precioOferta} <small>MXN</small></div>
                <span className={styles.offerBadge}>Oferta</span>
              </div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/contacto" className={styles.planButton}>
                Me Interesa
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlanesServicio;
import React from 'react';
import styles from './ComparisonTable.module.css';
import { motion } from 'framer-motion';

const planesData = {
  features: [
    'Número de Páginas',
    'Diseño',
    'Catálogo',
    'Reservación de Citas',
    'SEO',
    'Dominio y Hosting',
    'Mantenimiento Gratuito',
    'Bonus Exclusivo',
    'Tiempo de Entrega',
  ],
  planes: [
    {
      name: 'Plan Plata',
      price: '$2,200 MXN',
      isHighlighted: false,
      values: [
        'Hasta 3',
        'Plantilla Premium',
        'Catálogo en PDF',
        '❌',
        'Configuración Básica',
        '1 Año Incluido',
        '1 Mes',
        'Correo Profesional',
        '3-7 días hábiles',
      ],
    },
    {
      name: 'Plan Oro',
      price: '$5,500 MXN',
      isHighlighted: true,
      values: [
        'Hasta 6',
        'Diseño a Medida',
        'Catálogo Simple (20 productos)',
        '✅ (Google Calendar)',
        'Optimización Avanzada',
        '1 Año Incluido',
        '2 Meses',
        'Reporte de Google Analytics',
        '7-15 días hábiles',
      ],
    },
    {
      name: 'Plan Platino',
      price: '$15,000 MXN',
      isHighlighted: false,
      values: [
        '8 o más',
        'Diseño a Medida y Avanzado',
        'Tienda Online (hasta 50 productos)',
        '✅ (Integración Avanzada)',
        'Estrategia SEO Completa',
        '1 Año Incluido',
        '4 Meses',
        'Capacitación de 1 hora',
        '20-30 días hábiles',
      ],
    },
  ],
};

const ComparisonTable = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.table}>
        {/* Fila de Características (Primera Columna) */}
        <div className={styles.featuresColumn}>
          <div className={styles.headerCell}>Características</div>
          {planesData.features.map((feature, index) => (
            <div key={index} className={styles.featureCell}>{feature}</div>
          ))}
        </div>

        {/* Columnas de los Planes */}
        {planesData.planes.map((plan, planIndex) => (
          <motion.div 
            key={planIndex} 
            className={`${styles.planColumn} ${plan.isHighlighted ? styles.highlighted : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: planIndex * 0.2 }}
          >
            <div className={styles.headerCell}>
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
            </div>
            {plan.values.map((value, valueIndex) => (
              <div key={valueIndex} className={styles.valueCell}>{value}</div>
            ))}
            <div className={styles.buttonCell}>
                <a href="#" className={styles.ctaButton}>Me Interesa</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
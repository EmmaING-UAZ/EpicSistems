import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProblemaSolucion.module.css';

const ProblemaSolucion = () => {
  const problemas = [
    'Webs de 1 Sola Página',
    'Precios Abusivos y Sorpresas',
    'Entregas que Tardan Meses',
  ];

  const soluciones = [
    '¡Hasta 5 Páginas Iniciales!',
    'Costos Claros y Accesibles',
    'Tu Web Lista en Días',
  ];

  return (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>¿Cansado de Falsas Promesas y Costos Ocultos?</h2>
        <div className={styles.columnsWrapper}>
          {/* Columna del Problema */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle} id={styles.problemaTitle}>El Problema</h3>
            <ul className={styles.list}>
              {problemas.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={`${styles.icon} ${styles.problemaIcon}`}>❌</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de la Solución */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle} id={styles.solucionTitle}>La Solución</h3>
            <ul className={styles.list}>
              {soluciones.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={`${styles.icon} ${styles.solucionIcon}`}>✅</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemaSolucion;
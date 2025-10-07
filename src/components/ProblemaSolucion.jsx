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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <motion.section 
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.mainTitle} variants={itemVariants}>
          ¿Cansado de Falsas <span className={styles.highlight}>PROMESAS</span> y Costos Ocultos?
        </motion.h2>
        
        <div className={styles.columnsWrapper}>
          {/* Columna del Problema */}
          <motion.div 
            className={`${styles.column} ${styles.problemaColumn}`}
            variants={itemVariants}
          >
            <motion.h3 
              className={styles.columnTitle}
              variants={itemVariants}
            >
              El Problema
            </motion.h3>
            <ul className={styles.list}>
              {problemas.map((item, index) => (
                <motion.li key={index} className={styles.listItem} variants={itemVariants}>
                  <span className={`${styles.icon} ${styles.problemaIcon}`}>❌</span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna de la Solución */}
          <motion.div 
            className={`${styles.column} ${styles.solucionColumn}`}
            variants={itemVariants}
          >
            <motion.h3 
              className={`${styles.columnTitle} ${styles.solucionTitle}`}
              variants={itemVariants}
            >
              La Solución
            </motion.h3>
            <ul className={styles.list}>
              {soluciones.map((item, index) => (
                <motion.li key={index} className={styles.listItem} variants={itemVariants}>
                  <span className={`${styles.icon} ${styles.solucionIcon}`}>✅</span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemaSolucion;
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ComoFunciona.module.css';

const stepsData = [
  {
    number: '01',
    title: 'Solicita tu Demo',
    description: 'Agendamos una llamada corta para entender tus necesidades y te preparamos una demo sin compromiso.',
  },
  {
    number: '02',
    title: 'Diseñamos y Desarrollamos',
    description: 'Creamos un diseño a medida y lo convertimos en un sitio web rápido y moderno, manteniéndote al tanto en cada paso.',
  },
  {
    number: '03',
    title: 'Lanzamos y Pagas a tu Ritmo',
    description: 'Desplegamos tu nuevo sitio web para que todo el mundo lo vea y comienzas a pagar con nuestro plan flexible a 3 meses.',
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
};

const stepVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const ComoFunciona = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Un Proceso Simple y Transparente</h2>
        <motion.div 
            className={styles.stepsWrapper}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {stepsData.map((step, index) => (
            <motion.div key={index} className={styles.step} variants={stepVariants}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComoFunciona;
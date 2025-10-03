import React, { useState } from 'react';
import styles from './Faq.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <motion.header
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
      >
        {question}
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className={styles.icon}>+</motion.div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={styles.faqAnswer}
          >
            <div>{answer}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};


const Faq = ({ questions }) => {
  return (
    <div className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
        <div className={styles.accordion}>
            {questions.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    </div>
  )
}

export default Faq;
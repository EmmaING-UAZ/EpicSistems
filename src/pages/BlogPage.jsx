import React, { useCallback } from 'react';
import styles from './BlogPage.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Imports para las partículas ---
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from '../particlesConfig';

// Datos de ejemplo para los posts
const mockPosts = [
    {
        slug: 'por-que-tu-negocio-necesita-una-web',
        title: '5 Razones por las que tu Negocio Necesita una Página Web en 2025',
        excerpt: 'Descubre cómo una presencia online sólida puede transformar tu alcance, credibilidad y ventas, incluso si eres un negocio local en Zacatecas.',
    },
    {
        slug: 'redes-sociales-vs-web',
        title: 'Redes Sociales vs. Página Web: ¿Cuál es Mejor para tu Negocio?',
        excerpt: 'Analizamos las ventajas y desventajas de cada plataforma y te explicamos por qué una página web es tu activo digital más importante.',
    },
    {
        slug: 'una-web-que-trabaja-24-7',
        title: 'Tu Mejor Empleado: Cómo una Web Trabaja para ti 24/7',
        excerpt: 'Una página web no duerme. Aprende cómo automatiza la captación de clientes, responde preguntas frecuentes y vende por ti mientras te enfocas en tu negocio.',
    },
];

const BlogPage = () => {
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
        <Particles id="tsparticles-blog" init={particlesInit} options={particlesConfig} className={styles.particles} />
        <div className={styles.heroContent}>
          <h1>Nuestro Blog</h1>
          <p>Ideas y estrategias para digitalizar y hacer crecer tu negocio.</p>
        </div>
      </header>

      <section className={styles.postsSection}>
        <div className={styles.postsGrid}>
          {mockPosts.map((post, index) => (
            <motion.div
              key={index}
              className={styles.postCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className={styles.readMore}>Leer más</Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;
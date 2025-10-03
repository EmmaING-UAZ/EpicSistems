import React from 'react';
import styles from './SinglePostPage.module.css';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Para este ejemplo, importaremos los mismos datos que usamos en BlogPage.
// En un blog real, esto vendría de una base de datos o un CMS.
const mockPosts = [
    {
        slug: 'por-que-tu-negocio-necesita-una-web',
        title: '5 Razones por las que tu Negocio Necesita una Página Web en 2025',
        excerpt: 'Descubre cómo una presencia online sólida puede transformar tu alcance, credibilidad y ventas...',
        content: 'Este es el texto completo del artículo sobre por qué tu negocio necesita una página web. Aquí desarrollarías cada una de las 5 razones con detalle, añadiendo imágenes, ejemplos y estadísticas para convencer a tu lector. El contenido de calidad es clave para el SEO.'
    },
    {
        slug: 'redes-sociales-vs-web',
        title: 'Redes Sociales vs. Página Web: ¿Cuál es Mejor para tu Negocio?',
        excerpt: 'Analizamos las ventajas y desventajas de cada plataforma...',
        content: 'Aquí explicarías la diferencia fundamental: en redes sociales, alquilas un espacio. En tu propia web, eres el dueño de la propiedad. Desarrollarías esta idea mostrando cómo un sitio web centraliza tu marca y te da control total sobre tu mensaje y la relación con tus clientes.'
    },
    {
        slug: 'una-web-que-trabaja-24-7',
        title: 'Tu Mejor Empleado: Cómo una Web Trabaja para ti 24/7',
        excerpt: 'Una página web no duerme. Aprende cómo automatiza la captación de clientes...',
        content: 'Este artículo detallaría cómo una página web funciona como un recepcionista, un vendedor y un agente de soporte, todo al mismo tiempo. Explicarías cómo un buen formulario de contacto, una sección de FAQ y un portafolio bien presentado califican a los clientes y te ahorran tiempo.'
    },
];

const SinglePostPage = () => {
    // Este hook lee el ':slug' de la URL (ej: 'por-que-tu-negocio-necesita-una-web')
    const { slug } = useParams();
    
    // Buscamos el post correcto en nuestros datos de ejemplo
    const post = mockPosts.find((p) => p.slug === slug);

    if (!post) {
        return <div>Artículo no encontrado</div>;
    }

    return (
        <motion.div
            className={styles.postContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <header className={styles.postHeader}>
                <h1>{post.title}</h1>
            </header>
            <div className={styles.postContent}>
                <p>{post.content}</p>
                <Link to="/blog" className={styles.backLink}>← Volver al Blog</Link>
            </div>
        </motion.div>
    );
};

export default SinglePostPage;
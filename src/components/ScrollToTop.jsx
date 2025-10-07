import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extrae el "pathname" (ej: "/", "/servicios") de la ubicación actual
  const { pathname } = useLocation();

  // Este efecto se ejecuta cada vez que el "pathname" cambia
  useEffect(() => {
    // Le dice a la ventana del navegador que haga scroll a la posición 0, 0 (arriba del todo)
    window.scrollTo(0, 0);
  }, [pathname]); // El efecto depende del cambio en el pathname

  return null; // Este componente no renderiza nada visualmente
};

export default ScrollToTop;
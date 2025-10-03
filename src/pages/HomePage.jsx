import React from 'react';
import Hero from '../components/Hero';
import ProblemaSolucion from '../components/ProblemaSolucion';
import PlanesServicio from '../components/PlanesServicio';
import ComoFunciona from '../components/ComoFunciona';
import Cierre from '../components/Cierre';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <PlanesServicio />
      <ComoFunciona />
      <Cierre />
    </main>
  );
};

export default HomePage;
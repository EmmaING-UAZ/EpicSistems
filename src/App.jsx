import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import SinglePostPage from './pages/SinglePostPage'; // 1. Importa la nueva página
import NotFoundPage from './pages/NotFoundPage';
import AnalyticsTracker from './components/AnalyticsTracker';

// Components
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import ScrollToTop from './components/ScrollToTop'; // 1. IMPORTA EL COMPONENTE

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <AnalyticsTracker />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SinglePostPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
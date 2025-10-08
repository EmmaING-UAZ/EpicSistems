import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from "react-ga4"; // 1. Importamos la librería

// 2. Inicializamos Google Analytics con tu ID de Medición
ReactGA.initialize("G-BXM8BH22DX");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
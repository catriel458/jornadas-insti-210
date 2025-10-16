// src/App.jsx
import React, { useState } from 'react';

// Importar todos los componentes
import StarsBackground from './components/StarsBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProyectosCarrera from './components/ProyectosCarrera';
import GaleriaSection from './components/GaleriaSection';

/**
 * App - Componente principal de la aplicación
 * 
 * Landing page para las Jornadas Pedagógicas del Instituto 210
 * 
 * Estructura:
 * - StarsBackground: Fondo animado con estrellas
 * - Navbar: Navegación con selector de carreras y botón de galería
 * - HeroSection: Sección principal que cambia según la carrera seleccionada
 * - ProyectosCarrera: Muestra proyectos filtrados por carrera
 * - GaleriaSection: Carrusel dinámico de imágenes y videos
 * - Footer: Información institucional
 * 
 * Estado global:
 * - selectedCarrera: Controla qué carrera está seleccionada en el navbar
 */
function App() {
  // Estado para controlar la carrera seleccionada
  // Se comparte entre Navbar, HeroSection y ProyectosCarrera
  const [selectedCarrera, setSelectedCarrera] = useState('todas');

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      {/* ============================================ */}
      {/* ESTILOS GLOBALES */}
      {/* ============================================ */}
      <style>{`
        /* Scroll suave en toda la página */
        html {
          scroll-behavior: smooth;
        }

        /* Personalización de la scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }

        /* Mejoras de renderizado de fuentes */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: #0a0e27;
          color: white;
        }

        /* Prevenir highlight azul al tocar en móviles */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        /* Utilidad para truncar texto en 2 líneas */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Animación de fade in */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        /* Prevenir selección de texto en elementos interactivos */
        button, a {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>

      {/* ============================================ */}
      {/* FONDO DE ESTRELLAS ANIMADAS */}
      {/* ============================================ */}
      {/* 
        Renderiza un canvas con estrellas en movimiento
        Está en position: fixed con z-index: -10 para estar detrás de todo
      */}
      <StarsBackground />

      {/* ============================================ */}
      {/* NAVBAR - NAVEGACIÓN PRINCIPAL */}
      {/* ============================================ */}
      {/* 
        Barra de navegación fija en la parte superior
        Props:
        - selectedCarrera: Carrera actualmente seleccionada
        - setSelectedCarrera: Función para cambiar la carrera
      */}
      <Navbar 
        selectedCarrera={selectedCarrera} 
        setSelectedCarrera={setSelectedCarrera} 
      />

      {/* ============================================ */}
      {/* CONTENIDO PRINCIPAL */}
      {/* ============================================ */}
      <main>
        
        {/* HERO SECTION - Sección principal de bienvenida */}
        {/* 
          Se adapta dinámicamente según la carrera seleccionada:
          - Cambia título, subtítulo y descripción
          - Cambia los colores del gradiente
          - Muestra estadísticas institucionales
        */}
        <HeroSection selectedCarrera={selectedCarrera} />

        {/* PROYECTOS POR CARRERA */}
        {/* 
          Muestra proyectos filtrados según la carrera seleccionada:
          - Si selectedCarrera = 'todas' → muestra todos los proyectos
          - Si selectedCarrera = 'sistemas' → solo proyectos de sistemas
          - etc.
          
          También integra vista previa de la Biblioteca 210 para Sistemas
        */}
        <ProyectosCarrera selectedCarrera={selectedCarrera} />

        {/* GALERÍA INSTITUCIONAL */}
        {/* 
          Carrusel dinámico con:
          - 8 items (imágenes y videos)
          - Auto-play configurable
          - Navegación con flechas
          - Thumbnails clicables
          - Modal fullscreen
        */}
        <GaleriaSection />
      </main>

      {/* ============================================ */}
      {/* FOOTER - PIE DE PÁGINA */}
      {/* ============================================ */}
      <footer className="relative py-12 border-t border-white/10 mt-20">
        <div className="container mx-auto px-6">
          
          {/* Logo y descripción */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white mb-2">
              Instituto Superior N°210
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
              Instituto Superior de Formación Docente y Técnica. 
              Formando profesionales comprometidos con la educación, la tecnología y el futuro.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="#inicio" 
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-semibold"
            >
              Inicio
            </a>
            <a 
              href="#proyectos" 
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-semibold"
            >
              Proyectos
            </a>
            <a 
              href="#galeria" 
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-semibold"
            >
              Galería
            </a>
            <a 
              href="https://biblioteca-210-insti.vercel.app/libros/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-semibold"
            >
              Biblioteca 210
            </a>
          </div>

          {/* Divisor */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          {/* Copyright y créditos */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Instituto Superior N°210 - Jornadas Pedagógicas
            </p>
            <p className="text-gray-500 text-xs">
              Desarrollado con{' '}
              <span className="text-red-500 animate-pulse">❤️</span>
              {' '}por Catriel Cabrera estudiante de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
                Analista de Sistemas
              </span>
            </p>
          </div>

          {/* Badge flotante de estado */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 font-semibold">
                Sistema en línea
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* BOTÓN SCROLL TO TOP (opcional) */}
      {/* ============================================ */}
      {/* 
        Puedes descomentar esto si quieres un botón para volver arriba
      */}
      {/* 
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      */}
    </div>
  );
}

export default App;
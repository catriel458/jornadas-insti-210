import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, Image } from 'lucide-react';

const Navbar = ({ selectedCarrera, setSelectedCarrera }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const carreras = [
    { id: 'todas', nombre: 'Todas las Carreras', color: 'from-purple-400 to-pink-500' },
    { id: 'sistemas', nombre: 'Analista de Sistemas', color: 'from-cyan-400 to-blue-500' },
    { id: 'historia', nombre: 'Prof. de Educación Primaria e Inicial', color: 'from-amber-400 to-orange-500' },
    { id: 'geografia', nombre: 'Prof. de Geografía', color: 'from-green-400 to-emerald-500' },
    { id: 'politicas', nombre: 'Prof. de Ciencias Políticas', color: 'from-indigo-400 to-purple-500' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-all"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <GraduationCap className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-black text-white">Instituto 210</h1>
              <p className="text-xs font-bold text-cyan-400">Jornadas Pedagógicas 2025</p>
            </div>
          </div>

          {/* Desktop - Selector de Carreras + Galería */}
          <div className="hidden lg:flex items-center gap-3">
            {carreras.map((carrera) => (
              <button
                key={carrera.id}
                onClick={() => setSelectedCarrera(carrera.id)}
                className={`relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  selectedCarrera === carrera.id
                    ? 'text-white shadow-xl scale-105'
                    : 'text-gray-300 hover:text-white hover:scale-105'
                }`}
              >
                {selectedCarrera === carrera.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${carrera.color} rounded-xl -z-10`}></div>
                )}
                {selectedCarrera === carrera.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${carrera.color} rounded-xl blur-xl opacity-50 -z-20`}></div>
                )}
                {carrera.nombre}
              </button>
            ))}
            
            {/* Botón Galería */}
            <a
              href="#galeria"
              className="relative px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl blur-xl opacity-50"></div>
              <span className="relative flex items-center gap-2">
                <Image className="w-4 h-4" />
                Galería
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            {carreras.map((carrera) => (
              <button
                key={carrera.id}
                onClick={() => {
                  setSelectedCarrera(carrera.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all mb-2 relative ${
                  selectedCarrera === carrera.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {selectedCarrera === carrera.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${carrera.color} rounded-xl`}></div>
                )}
                <span className="relative">{carrera.nombre}</span>
              </button>
            ))}
            
            {/* Galería en mobile */}
            <a
              href="#galeria"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left px-4 py-3 rounded-xl font-semibold text-sm text-white transition-all relative block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl"></div>
              <span className="relative flex items-center gap-2">
                <Image className="w-4 h-4" />
                Galería
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Play, Pause, Maximize2, X, Volume2, VolumeX } from 'lucide-react';

const GaleriaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Array de medios (imágenes y videos)
  const mediaItems = [
    {
      type: 'image',
      title: 'Instituto 210',
      description: 'Vista del edificio principal',
      src: '/img/instituto-img.jpeg',
      color: 'from-cyan-400 via-blue-500 to-purple-500',
      icon: ImageIcon
    },
    {
      type: 'image',
      title: 'Laboratorio de Informática',
      description: 'Equipamiento tecnológico de última generación',
      color: 'from-purple-400 via-pink-500 to-rose-500',
      icon: ImageIcon
    },
    {
      type: 'video',
      title: 'Proyecto Biblioteca 210',
      description: 'Demostración del sistema de gestión bibliotecaria',
      src: '/videos/biblio-demo.mp4',
      color: 'from-green-400 via-emerald-500 to-teal-500',
      icon: Play
    },
    {
      type: 'image',
      title: 'Biblioteca Central',
      description: 'Espacio de estudio y recursos educativos',
      color: 'from-orange-400 via-red-500 to-pink-500',
      icon: ImageIcon
    },
    {
      type: 'video',
      title: 'Jornadas Pedagógicas',
      description: 'Resumen de actividades y presentaciones',
      color: 'from-blue-400 via-indigo-500 to-purple-500',
      icon: Play
    },
    {
      type: 'image',
      title: 'Eventos Estudiantiles',
      description: 'Comunidad activa y participativa',
      color: 'from-amber-400 via-yellow-500 to-orange-500',
      icon: ImageIcon
    },
    {
      type: 'image',
      title: 'Aulas Modernas',
      description: 'Espacios equipados para la enseñanza',
      color: 'from-teal-400 via-cyan-500 to-blue-500',
      icon: ImageIcon
    },
    {
      type: 'video',
      title: 'Sistema SIMEF',
      description: 'Presentación del sistema de gestión educativa',
      color: 'from-pink-400 via-purple-500 to-indigo-500',
      icon: Play
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Auto-play functionality (solo para slides que no sean videos)
  useEffect(() => {
    if (!isAutoPlaying || mediaItems[currentIndex].type === 'video') return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Pausar auto-play cuando hay un video reproduciéndose
  useEffect(() => {
    if (mediaItems[currentIndex].type === 'video' && isVideoPlaying) {
      setIsAutoPlaying(false);
    }
  }, [isVideoPlaying, currentIndex]);

  // Fullscreen modal
  const openFullscreen = (media) => {
    setSelectedMedia(media);
    setIsFullscreen(true);
    setIsAutoPlaying(false);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedMedia(null);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeFullscreen();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Renderizar contenido del slide
  const renderSlideContent = (item, index) => {
    if (item.type === 'video' && item.src) {
      return (
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          <video
            ref={index === currentIndex ? videoRef : null}
            src={item.src}
            className="w-full h-full object-contain"
            loop
            muted={isMuted}
            playsInline
          />
          
          {/* Texto compacto en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-8 py-4 z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
          
          {/* Controles del video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={toggleVideoPlay}
              className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border-4 border-white/40 pointer-events-auto"
            >
              {isVideoPlaying ? (
                <Pause className="w-10 h-10 text-white" fill="white" />
              ) : (
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              )}
            </button>
          </div>

          {/* Botón de mute */}
          <button
            onClick={toggleMute}
            className="absolute bottom-24 right-6 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/30 z-20"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Badge de video */}
          <div className="absolute top-6 left-6 bg-red-600 px-4 py-2 rounded-full flex items-center gap-2 z-20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-bold text-sm">VIDEO</span>
          </div>
        </div>
      );
    } else if (item.type === 'image' && item.src) {
      // Imagen real
      return (
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          
          {/* Texto compacto en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-8 py-4 z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
          
          {/* Botón de pantalla completa en la esquina */}
          <button
            onClick={() => openFullscreen(item)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg border border-gray-200 z-20"
          >
            <Maximize2 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      );
    } else {
      // Placeholder con gradiente (cuando no hay src)
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center transition-all duration-500`}>
          <div className="text-center text-white z-10 px-6">
            <div className="mb-6">
              {React.createElement(item.icon, {
                className: "w-24 h-24 mx-auto opacity-60 animate-pulse"
              })}
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-3">
              {item.title}
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              {item.description}
            </p>
            
            <button
              onClick={() => openFullscreen(item)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full font-semibold transition-all border border-white/30"
            >
              <Maximize2 className="w-5 h-5" />
              Ver en pantalla completa
            </button>
          </div>

          {/* Decoración con círculos flotantes */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>
      );
    }
  };

  return (
    <section id="galeria" className="relative py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-white/20">
            <ImageIcon className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-bold">Galería Institucional</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Nuestro
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"> Espacio</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recorre las instalaciones y conoce los proyectos en acción
          </p>
        </div>

        {/* Carrusel Principal */}
        <div className="relative group mb-12">
          
          {/* Glow effect */}
          <div className={`absolute -inset-4 bg-gradient-to-r ${mediaItems[currentIndex].color} rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
          
          {/* Contenedor principal */}
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            
            {/* Slide actual */}
            <div className="relative aspect-video overflow-hidden">
              {renderSlideContent(mediaItems[currentIndex], currentIndex)}

              {/* Overlay gradiente (solo para no-videos) */}
              {mediaItems[currentIndex].type !== 'video' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              )}
            </div>

            {/* Info bar inferior */}
            <div className="p-6 bg-gray-900/90 backdrop-blur-xl border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${mediaItems[currentIndex].color} rounded-xl flex items-center justify-center shadow-lg`}>
                    {React.createElement(mediaItems[currentIndex].icon, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {currentIndex + 1} / {mediaItems.length}
                    </div>
                    <div className="text-xs text-gray-400">
                      {mediaItems[currentIndex].type === 'video' ? 'Video' : 'Imagen'}
                    </div>
                  </div>
                </div>

                {/* Controles */}
                <div className="flex items-center gap-3">
                  {mediaItems[currentIndex].type !== 'video' && (
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold text-sm transition-all border border-white/10 flex items-center gap-2"
                    >
                      {isAutoPlaying ? (
                        <><Pause className="w-4 h-4" /> Pausar</>
                      ) : (
                        <><Play className="w-4 h-4" /> Reproducir</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all border border-white/20 z-20 group/btn"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover/btn:scale-125 transition-transform" strokeWidth={3} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all border border-white/20 z-20 group/btn"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover/btn:scale-125 transition-transform" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Dots indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-gradient-to-r from-cyan-400 to-purple-500'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-cyan-500 scale-105 shadow-2xl'
                  : 'hover:scale-105 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Thumbnail - Imagen real o gradiente */}
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  {React.createElement(item.icon, {
                    className: "w-8 h-8 text-white opacity-60"
                  })}
                </div>
              )}

              {/* Overlay */}
              <div className={`absolute inset-0 transition-opacity ${
                index === currentIndex
                  ? 'bg-black/0'
                  : 'bg-black/50 group-hover:bg-black/30'
              }`}></div>

              {/* Indicador activo */}
              {index === currentIndex && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
              )}

              {/* Tipo de medio */}
              {item.type === 'video' && (
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
                  <Play className="w-3 h-3 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Modal Fullscreen */}
      {isFullscreen && selectedMedia && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          {/* Botón cerrar */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Contenido fullscreen */}
          <div className="relative w-full max-w-6xl">
            <div className={`aspect-video bg-gradient-to-br ${selectedMedia.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
              <div className="text-center text-white p-8">
                {React.createElement(selectedMedia.icon, {
                  className: "w-32 h-32 mx-auto mb-6 opacity-50"
                })}
                <h3 className="text-5xl font-black mb-4">{selectedMedia.title}</h3>
                <p className="text-2xl opacity-90">{selectedMedia.description}</p>
              </div>
            </div>

            {/* Controles de navegación en fullscreen */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  prevSlide();
                  setSelectedMedia(mediaItems[(currentIndex - 1 + mediaItems.length) % mediaItems.length]);
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold transition-all border border-white/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setSelectedMedia(mediaItems[(currentIndex + 1) % mediaItems.length]);
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold transition-all border border-white/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GaleriaSection;
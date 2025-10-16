import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image, Play, Pause, Maximize2, X, Volume2, VolumeX } from 'lucide-react';

const GaleriaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const mediaItems = [
    {
      type: 'image',
      title: 'Jornadas Pedagógicas 2024',
      description: 'A la izquierda los profesores a la derecha los alumnos',
      src: '/img/jornadas4.jpg',
      color: 'from-cyan-400 via-blue-500 to-purple-500'
    },
    {
      type: 'image',
      title: 'Banner de las Jornadas Pedagógicas',
      description: 'Presentando la Biblioteca y el SIMEF',
      src: '/img/jornadas3.jpg',
      color: 'from-purple-400 via-pink-500 to-rose-500'
    },
    {
      type: 'video',
      title: 'Proyecto Biblioteca 210',
      description: 'Demostración del sistema de gestión bibliotecaria',
      src: '/videos/biblio-demo-2.mp4',
      thumbnail: '/img/video-portada-biblio.jpg',  // ← Aquí va tu imagen de portada
      color: 'from-green-400 via-emerald-500 to-teal-500'
    },
    {
      type: 'image',
      title: 'Taller de enseñanza en Ciencias Naturales',
      description: 'Los movimientos de rotación y traslación de la tierra. El día y la noche. Las estaciones del año',
      src: '/img/tallerbiologia.jpg',
      color: 'from-orange-400 via-red-500 to-pink-500'
    },
    {
          type: 'image',
          title: 'Cine Debate ',
          description: 'Profesorado Educación Inicial',
          src: '/img/Taller.png',
          color: 'from-cyan-400 via-blue-500 to-purple-500'
        },

    {
      type: 'image',
      title: 'Didáctica de las Ciencias Naturales',
      description: 'Profesorado de Educación Inicial y Primaria ',
      src: '/img/tallerbiologia3.jpg',
      color: 'from-purple-400 via-pink-500 to-rose-500'
    },


  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    setIsVideoPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setIsVideoPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsVideoPlaying(false);
    if (videoRef.current) videoRef.current.pause();
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

  useEffect(() => {
    if (!isAutoPlaying || mediaItems[currentIndex].type === 'video') return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  useEffect(() => {
    if (mediaItems[currentIndex].type === 'video' && isVideoPlaying) {
      setIsAutoPlaying(false);
    }
  }, [isVideoPlaying, currentIndex]);

  const openFullscreen = () => {
    setIsFullscreen(true);
    setIsAutoPlaying(false);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsVideoPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeFullscreen();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const currentItem = mediaItems[currentIndex];

  return (
    <section id="galeria" className="relative py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-white/20">
            <Image className="w-5 h-5 text-cyan-400" />
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

        <div className="relative group mb-12">
          <div className={`absolute -inset-4 bg-gradient-to-r ${currentItem.color} rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
          
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            
            <div className="relative aspect-video overflow-hidden">
              {currentItem.type === 'image' && currentItem.src ? (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="w-full h-full object-contain"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-8 py-4 z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{currentItem.title}</h3>
                    <p className="text-sm text-gray-600">{currentItem.description}</p>
                  </div>
                  
                  <button
                    onClick={openFullscreen}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg border border-gray-200 z-20"
                  >
                    <Maximize2 className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              ) : currentItem.type === 'video' && currentItem.src ? (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={currentItem.src}
                    className="w-full h-full object-contain"
                    loop
                    muted={isMuted}
                    playsInline
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-8 py-4 z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{currentItem.title}</h3>
                    <p className="text-sm text-gray-600">{currentItem.description}</p>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={toggleVideoPlay}
                      className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border-4 border-white/40"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-10 h-10 text-white" fill="white" />
                      ) : (
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="absolute bottom-24 right-6 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/30 z-20"
                  >
                    {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
                  </button>

                  <div className="absolute top-6 left-6 bg-red-600 px-4 py-2 rounded-full flex items-center gap-2 z-20">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm">VIDEO</span>
                  </div>
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${currentItem.color} flex items-center justify-center`}>
                  <div className="text-center text-white z-10 px-6">
                    <Image className="w-24 h-24 mx-auto opacity-60 animate-pulse mb-6" />
                    <h3 className="text-3xl md:text-4xl font-black mb-3">{currentItem.title}</h3>
                    <p className="text-lg md:text-xl opacity-90 mb-6">{currentItem.description}</p>
                    <button
                      onClick={openFullscreen}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full font-semibold transition-all border border-white/30"
                    >
                      <Maximize2 className="w-5 h-5" />
                      Ver en pantalla completa
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-gray-900/90 backdrop-blur-xl border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${currentItem.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    {currentItem.type === 'video' ? <Play className="w-6 h-6 text-white" /> : <Image className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{currentIndex + 1} / {mediaItems.length}</div>
                    <div className="text-xs text-gray-400">{currentItem.type === 'video' ? 'Video' : 'Imagen'}</div>
                  </div>
                </div>

                {currentItem.type !== 'video' && (
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold text-sm transition-all border border-white/10 flex items-center gap-2"
                  >
                    {isAutoPlaying ? <><Pause className="w-4 h-4" /> Pausar</> : <><Play className="w-4 h-4" /> Reproducir</>}
                  </button>
                )}
              </div>
            </div>

            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all border border-white/20 z-20">
              <ChevronLeft className="w-6 h-6 text-white" strokeWidth={3} />
            </button>

            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all border border-white/20 z-20">
              <ChevronRight className="w-6 h-6 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-12 bg-gradient-to-r from-cyan-400 to-purple-500' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentIndex ? 'ring-4 ring-cyan-500 scale-105 shadow-2xl' : 'hover:scale-105 shadow-lg hover:shadow-xl'
              }`}
            >
              {item.src ? (
                <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <Image className="w-8 h-8 text-white opacity-60" />
                </div>
              )}
              <div className={`absolute inset-0 transition-opacity ${index === currentIndex ? 'bg-black/0' : 'bg-black/50 group-hover:bg-black/30'}`}></div>
              {index === currentIndex && <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>}
              {item.type === 'video' && (
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
                  <Play className="w-3 h-3 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <button onClick={closeFullscreen} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-50">
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            {currentItem.src ? (
              <div className="relative w-full h-full">
                <img src={currentItem.src} alt={currentItem.title} className="w-full h-full object-contain rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-8 py-6 rounded-b-2xl">
                  <h3 className="text-3xl font-bold text-white mb-2">{currentItem.title}</h3>
                  <p className="text-lg text-gray-300">{currentItem.description}</p>
                </div>
              </div>
            ) : (
              <div className={`w-full h-full max-w-6xl aspect-video bg-gradient-to-br ${currentItem.color} rounded-3xl flex items-center justify-center`}>
                <div className="text-center text-white p-8">
                  <Image className="w-32 h-32 mx-auto mb-6 opacity-50" />
                  <h3 className="text-5xl font-black mb-4">{currentItem.title}</h3>
                  <p className="text-2xl opacity-90">{currentItem.description}</p>
                </div>
              </div>
            )}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
            <button onClick={prevSlide} className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold transition-all border border-white/20">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold transition-all border border-white/20">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GaleriaSection;
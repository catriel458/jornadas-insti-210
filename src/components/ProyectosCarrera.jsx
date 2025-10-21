import React, { useState, useEffect } from 'react';
import { Library, Monitor, BookOpen, Globe, Users, ExternalLink, Check, Star, FileText, Database, Workflow, Bug, Code2, ChevronLeft, ChevronRight, Info, X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const ProyectosCarrera = ({ selectedCarrera }) => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pdfModal, setPdfModal] = useState({ isOpen: false, url: '', title: '' });
  const [videoModal, setVideoModal] = useState({ isOpen: false, url: '', title: '' });
  const [podcastModal, setPodcastModal] = useState({ isOpen: false, title: '' });

  useEffect(() => {
    if (selectedCarrera === 'sistemas') {
      fetch('https://biblioteca-210-insti.vercel.app/libros/')
        .then(res => res.json())
        .then(data => {
          setLibros(data.slice(0, 3));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [selectedCarrera]);

  const openPdfModal = (url, title) => {
    setPdfModal({ isOpen: true, url, title });
  };

  const closePdfModal = () => {
    setPdfModal({ isOpen: false, url: '', title: '' });
  };

  const openVideoModal = (url, title) => {
    setVideoModal({ isOpen: true, url, title });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, url: '', title: '' });
  };

  const openPodcastModal = (title) => {
    setPodcastModal({ isOpen: true, title });
  };

  const closePodcastModal = () => {
    setPodcastModal({ isOpen: false, title: '' });
  };

  // Imágenes de la biblioteca con sus descripciones
  const imagesBiblioteca = [
    {
      src: '/img/biblio1.JPG',
      title: 'Sistema de Login',
      description: 'Sistema de login de la biblioteca digital con autenticación de usuarios'
    },
    {
      src: '/img/biblio2.JPG',
      title: 'Pantalla Principal',
      description: 'Pantalla principal con navegación y acceso rápido a funcionalidades'
    },
    {
      src: '/img/biblio3.JPG',
      title: 'Catálogo de Libros',
      description: 'Catálogo completo de libros con búsqueda y filtros avanzados'
    },
    {
      src: '/img/biblio4.JPG',
      title: 'Diseño Propuesto',
      description: 'Diseño propuesto para la pantalla principal (versión alfa 1.0)'
    },
    {
      src: '/img/biblio5.JPG',
      title: 'Editar Libros',
      description: 'Interfaz de administración para editar información de libros (version alfa 1.0)'
    },
    {
      src: '/img/biblio6.JPG',
      title: 'Reactivar Material',
      description: 'Sistema de gestión para reactivar material bibliográfico (version alfa 1.0)'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagesBiblioteca.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imagesBiblioteca.length) % imagesBiblioteca.length);
  };

  // Materiales educativos para Analista de Sistemas
  const materialesSistemas = [
    {
      nombre: 'Manual de React',
      descripcion: 'Guía completa para aprender React desde cero',
      url: 'https://docs.google.com/document/d/1tfShzZrRMyx99EjePpe2mKY0v6yHbb7xwLX5xfyU4eg/edit?usp=sharing',
      icon: Code2,
      color: 'from-cyan-400 to-blue-500',
      tipo: 'Manual'
    },
    {
      nombre: 'Sistemas Operativos',
      descripcion: 'Conceptos fundamentales y prácticas de SO',
      url: 'https://docs.google.com/document/d/1X9OM6IUi_qQLAKF-xD970qZKc-kKqc5wLwhTZHxycc4/edit?usp=sharing',
      icon: Monitor,
      color: 'from-purple-400 to-indigo-500',
      tipo: 'Apuntes'
    },
    {
      nombre: 'Django Framework',
      descripcion: 'Desarrollo web con Python y Django',
      url: 'https://docs.google.com/document/d/1xfU4Fll6X2sYOGj_H6xBOyuHdn-F_xapQIcwPfDE0Ps/edit?tab=t.0',
      icon: FileText,
      color: 'from-green-400 to-emerald-500',
      tipo: 'Tutorial'
    },
    {
      nombre: 'Bases de Datos',
      descripcion: 'Diseño, modelado y gestión de bases de datos',
      url: 'https://docs.google.com/document/d/1p8HgFOosFyWCjEo1NhU8oCQUkw3SdvKdvlLHDp9dqos/edit?tab=t.0',
      icon: Database,
      color: 'from-orange-400 to-red-500',
      tipo: 'Guía'
    },
    {
      nombre: 'Diagrama de Flujo - Biblioteca',
      descripcion: 'Diagramas y documentación del proyecto Biblioteca 210',
      url: 'https://drive.google.com/drive/folders/1_UGk73dLYR4xElz6BcTm88Q2JsHBcFPL',
      icon: Workflow,
      color: 'from-pink-400 to-rose-500',
      tipo: 'Diagrama'
    },
    {
      nombre: 'Plan QA',
      descripcion: 'Plan de Quality Assurance y testing',
      url: 'https://docs.google.com/document/d/1hTc2QWwGBgSFeI2eKrbJrAeU8cYPVyXh/edit',
      icon: Bug,
      color: 'from-yellow-400 to-amber-500',
      tipo: 'Documento'
    }
  ];

  const todosLosProyectos = [
    {
      carrera: 'sistemas',
      nombre: 'Biblioteca Digital 210',
      descripcion: 'Sistema completo de gestión bibliotecaria con catálogo digital, préstamos online y gestión de usuarios',
      url: 'https://biblioteca-210-insti.vercel.app/libros/',
      icon: Library,
      color: 'from-cyan-400 to-blue-500',
      features: ['Catálogo Digital', 'Préstamos Online', 'Sistema de Sanciones', 'Panel Administrativo'],
      tech: ['Python', 'Django', 'HTML5', 'CSS3','JavaScript','Bootstrap'],
      destacado: true
    },
    {
      carrera: 'sistemas',
      nombre: 'Sistema SIMEF',
      descripcion: 'Sistema Integral de Gestión Educativa con seguimiento académico en tiempo real',
      url: '#',
      icon: Monitor,
      color: 'from-purple-400 to-pink-500',
      features: ['Gestión de Alumnos', 'Inscripción a Finales y Materias', 'Gestión de Usuarios', 'Sistema de Mail'],
      tech: ['Python', 'Django', 'HTML5', 'CSS3','JavaScript','Bootstrap'],
      destacado: true
    },
    {
      carrera: 'historia',
      nombre: 'ESI: Incomodar la(s) mirada(s)',
      descripcion: 'Proyecto de ESI, cine, debates y fanzines que transversaliza la ESI en la formación docente inicial',
      url: 'https://drive.google.com/file/d/1RNQGxZRLZT3YwTqNQPP9MwEHQQ9qbQlW/view',
      videoUrl: '/videos/esi-incomodar-miradas.mp4',
      icon: BookOpen,
      color: 'from-pink-400 to-rose-500',
      features: ['Cine y Debates', 'Producción de Fanzines', 'ESI Transversal', 'Formación Docente'],
      tech: ['2do y 3er año', 'Ed. Primaria e Inicial', 'Cultura y Comunicación', 'Psicología Social'],
      destacado: true
    },
    {
      carrera: 'historia',
      nombre: 'Experiencias Pedagógicas en Ciencias Naturales',
      descripcion: 'Proyectos de didáctica de las ciencias naturales con experimentos controlados, modelos escolares y talleres de extensión',
      url: 'https://drive.google.com/drive/folders/1Xtri_CTS7vnpXxs7a_4aZPa9jMTaslRL',
      pdfUrl: '/docs/jornadas-2025.pdf',
      icon: Globe,
      color: 'from-green-400 to-emerald-500',
      features: ['Experimentos Controlados', 'Modelos de Rotación y Traslación', 'Taller Luz y Colores', 'Diseño de Posters Científicos'],
      tech: ['Didáctica de Cs. Naturales', 'Ed. Primaria e Inicial', 'Método Científico', 'Extensión Universitaria'],
      destacado: true
    },
    {
      carrera: 'historia',
      nombre: 'Nomeolvides - El Podcast del 210',
      descripcion: '"Urdiendo lecturas, entramando escrituras" - Relatos propios y ficticios de experiencias con la lectura y escritura de los Talleres de Lectura, Escritura y Oralidad',
      url: 'https://open.spotify.com/show/5gclt7ye0ujF7Z89b9VaPs',
      showPodcastModal: true,
      icon: Users,
      color: 'from-indigo-400 to-purple-500',
      features: ['Relatos Estudiantiles', 'Experiencias de Lectura', 'Talleres de Escritura y Oralidad', 'Construcción de Memoria'],
      tech: ['Profesorados Inicial y Primaria', 'Lectura y Escritura', 'Oralidad', 'Podcast en Spotify'],
      destacado: true
    }
  ];

  const proyectosFiltrados = selectedCarrera === 'todas' 
    ? todosLosProyectos 
    : todosLosProyectos.filter(p => p.carrera === selectedCarrera);

  return (
    <section id="proyectos" className="relative py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Proyectos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"> Destacados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluciones innovadoras desarrolladas por nuestros estudiantes
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {proyectosFiltrados.map((proyecto, index) => {
            const Icon = proyecto.icon;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${proyecto.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all shadow-2xl h-full flex flex-col">
                  
                  {/* Header con icono */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${proyecto.color} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    {proyecto.destacado && (
                      <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-500/30">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-bold text-yellow-400">Destacado</span>
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all">
                    {proyecto.nombre}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {proyecto.descripcion}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {proyecto.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className={`w-5 h-5 bg-gradient-to-br ${proyecto.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón */}
                  {proyecto.showPodcastModal ? (
                    <button
                      onClick={() => openPodcastModal(proyecto.nombre)}
                      className="relative group/btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white overflow-hidden transition-all"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${proyecto.color}`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-l ${proyecto.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`}></div>
                      <span className="relative flex items-center gap-2">
                        Ver Información
                        <Info className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  ) : proyecto.pdfUrl ? (
                    <button
                      onClick={() => openPdfModal(proyecto.pdfUrl, proyecto.nombre)}
                      className="relative group/btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white overflow-hidden transition-all"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${proyecto.color}`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-l ${proyecto.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`}></div>
                      <span className="relative flex items-center gap-2">
                        Ver Proyecto
                        <FileText className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  ) : proyecto.videoUrl ? (
                    <button
                      onClick={() => openVideoModal(proyecto.videoUrl, proyecto.nombre)}
                      className="relative group/btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white overflow-hidden transition-all"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${proyecto.color}`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-l ${proyecto.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`}></div>
                      <span className="relative flex items-center gap-2">
                        Ver Proyecto
                        <Play className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  ) : (
                    <a
                      href={proyecto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white overflow-hidden transition-all"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${proyecto.color}`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-l ${proyecto.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`}></div>
                      <span className="relative flex items-center gap-2">
                        Ver Proyecto
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* SECCIÓN DE MATERIALES - Solo para Analista de Sistemas */}
        {selectedCarrera === 'sistemas' && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-4 border border-cyan-500/30">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-bold">Materiales Educativos</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                Recursos de
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Aprendizaje</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Documentación, manuales y guías para estudiantes de Analista de Sistemas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialesSistemas.map((material, index) => {
                const Icon = material.icon;
                
                return (
                  <a
                    key={index}
                    href={material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${material.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500`}></div>
                    
                    {/* Card */}
                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all shadow-xl h-full">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${material.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        
                        {/* Badge de tipo */}
                        <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs font-bold text-gray-300 border border-white/10">
                          {material.tipo}
                        </span>
                      </div>

                      {/* Contenido */}
                      <h4 className="text-lg font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                        {material.nombre}
                      </h4>
                      
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        {material.descripcion}
                      </p>

                      {/* Botón de acción */}
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Abrir documento</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* NUEVA SECCIÓN: Vista Previa con Carrusel de Imágenes de la Biblioteca */}
        {selectedCarrera === 'sistemas' && (
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Library className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-black text-white">
                Vista Previa - Biblioteca 210
              </h3>
            </div>

            {/* Aviso de versión Beta */}
            <div className="mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-yellow-400 font-bold text-sm mb-1">Versión Beta Actual</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Actualmente la biblioteca deployada no cuenta con el diseño final, es un diseño beta. 
                    A la brevedad se subirá la <strong className="text-white">versión Alfa 1.0</strong> con las pantallas finales y mejoras visuales.
                  </p>
                </div>
              </div>
            </div>

            {/* Carrusel de Imágenes */}
            <div className="relative mb-6 group/carousel">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover/carousel:opacity-30 transition-opacity"></div>

              {/* Contenedor de imagen */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <div className="aspect-video relative">
                  <img
                    src={imagesBiblioteca[currentImageIndex].src}
                    alt={imagesBiblioteca[currentImageIndex].title}
                    className="w-full h-full object-contain bg-gray-800"
                  />

                  {/* Overlay con información */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <h4 className="text-white font-black text-xl mb-2">
                      {imagesBiblioteca[currentImageIndex].title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {imagesBiblioteca[currentImageIndex].description}
                    </p>
                  </div>
                </div>

                {/* Botones de navegación */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/20 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" strokeWidth={3} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/20 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" strokeWidth={3} />
                </button>

                {/* Indicador de posición */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-white font-bold text-sm">
                    {currentImageIndex + 1} / {imagesBiblioteca.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              {imagesBiblioteca.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-video rounded-xl overflow-hidden transition-all border-2 ${
                    currentImageIndex === index
                      ? 'border-cyan-500 scale-105 shadow-lg shadow-cyan-500/50'
                      : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Botón al catálogo */}
            <div className="text-center">
              <a
                href="https://biblioteca-210-insti.vercel.app/libros/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                Acceder al Sistema
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Mensaje si no hay proyectos */}
        {proyectosFiltrados.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No hay proyectos disponibles</h3>
            <p className="text-gray-400">Selecciona otra carrera para ver sus proyectos</p>
          </div>
        )}
      </div>

      {/* Modal de PDF */}
      {pdfModal.isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col">
            {/* Header del modal */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{pdfModal.title}</h3>
              <button
                onClick={closePdfModal}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Visor de PDF */}
            <div className="flex-1 bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <iframe
                src={pdfModal.url}
                className="w-full h-full"
                title={pdfModal.title}
              />
            </div>

            {/* Botón de descarga */}
            <div className="mt-4 text-center">
              <a
                href={pdfModal.url}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                Descargar Documento
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Video */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col">
            {/* Header del modal */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{videoModal.title}</h3>
              <button
                onClick={closeVideoModal}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Visor de Video */}
            <div className="flex-1 bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <video
                src={videoModal.url}
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal del Podcast Nomeolvides */}
      {podcastModal.isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4 py-8">
            <div className="relative w-full max-w-6xl">
              {/* Header del modal */}
              <div className="flex items-center justify-between mb-6 sticky top-0 bg-black/80 backdrop-blur-xl p-4 rounded-xl z-10">
                <h3 className="text-3xl font-bold text-white">{podcastModal.title}</h3>
                <button
                  onClick={closePodcastModal}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Contenedor de imágenes */}
              <div className="space-y-6">
                {/* Imagen 1 - Descripción completa */}
                <div className="bg-white rounded-2xl shadow-2xl">
                  <img
                    src="/img/podcast-info.jpg"
                    alt="Información del Podcast Nomeolvides"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Imagen 2 - Logo del podcast */}
                <div className="bg-white rounded-2xl shadow-2xl">
                  <img
                    src="/img/podcast-logo.jpg"
                    alt="Logo del Podcast Nomeolvides"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Botón a Spotify */}
                <div className="text-center pb-8">
                  <a
                    href="https://open.spotify.com/show/5gclt7ye0ujF7Z89b9VaPs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Escuchar en Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProyectosCarrera;
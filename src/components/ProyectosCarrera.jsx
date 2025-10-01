import React, { useState, useEffect } from 'react';
import { Library, Monitor, BookOpen, Globe, Users, ExternalLink, Check, Star, FileText, Database, Workflow, Bug, Code2, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const ProyectosCarrera = ({ selectedCarrera }) => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedCarrera === 'sistemas') {
      fetch('https://biblioteca210.pythonanywhere.com/libros/')
        .then(res => res.json())
        .then(data => {
          setLibros(data.slice(0, 3));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [selectedCarrera]);

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
      url: 'https://biblioteca210.pythonanywhere.com/libros/',
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
      nombre: 'Archivo Histórico Digital',
      descripcion: 'Plataforma de digitalización y catalogación de documentos históricos locales',
      url: '#',
      icon: BookOpen,
      color: 'from-amber-400 to-orange-500',
      features: ['Digitalización de Documentos', 'Línea de Tiempo Interactiva', 'Búsqueda por Época'],
      tech: ['Documentación', 'Investigación', 'Archivo Digital'],
      destacado: false
    },
    {
      carrera: 'geografia',
      nombre: 'Atlas Geográfico Interactivo',
      descripcion: 'Mapas interactivos con datos geoespaciales de la región',
      url: '#',
      icon: Globe,
      color: 'from-green-400 to-emerald-500',
      features: ['Mapas Interactivos', 'Datos Geoespaciales', 'Análisis Territorial'],
      tech: ['GIS', 'Cartografía', 'Análisis de Datos'],
      destacado: false
    },
    {
      carrera: 'politicas',
      nombre: 'Portal de Participación Ciudadana',
      descripcion: 'Plataforma educativa sobre democracia y participación política',
      url: '#',
      icon: Users,
      color: 'from-indigo-400 to-purple-500',
      features: ['Contenido Educativo', 'Recursos Didácticos', 'Análisis Político'],
      tech: ['Educación', 'Ciencias Políticas', 'Ciudadanía'],
      destacado: false
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
                href="https://biblioteca210.pythonanywhere.com/libros/"
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
    </section>
  );
};

export default ProyectosCarrera;
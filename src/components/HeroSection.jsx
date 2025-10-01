import React from 'react';
import { Sparkles, Rocket, Code } from 'lucide-react';

const HeroSection = ({ selectedCarrera }) => {
  const getCarreraInfo = () => {
    const info = {
      todas: {
        titulo: 'Jornadas Pedagógicas',
        subtitulo: 'Instituto Superior N°210',
        descripcion: 'Descubre los proyectos innovadores de todas nuestras carreras',
        color: 'from-purple-400 via-pink-500 to-rose-500'
      },
      sistemas: {
        titulo: 'Analista de Sistemas',
        subtitulo: 'Tecnología e Innovación',
        descripcion: 'Proyectos de desarrollo de software y soluciones tecnológicas',
        color: 'from-cyan-400 via-blue-500 to-purple-500'
      },
      historia: {
        titulo: 'Profesorado de Historia',
        subtitulo: 'Pedagogía y Análisis Crítico',
        descripcion: 'Proyectos de investigación histórica y didáctica',
        color: 'from-amber-400 via-orange-500 to-red-500'
      },
      geografia: {
        titulo: 'Profesorado de Geografía',
        subtitulo: 'Territorio y Ambiente',
        descripcion: 'Proyectos de análisis territorial y educación ambiental',
        color: 'from-green-400 via-emerald-500 to-teal-500'
      },
      politicas: {
        titulo: 'Profesorado de Ciencias Políticas',
        subtitulo: 'Democracia y Ciudadanía',
        descripcion: 'Proyectos de análisis político y formación ciudadana',
        color: 'from-indigo-400 via-purple-500 to-blue-500'
      }
    };
    return info[selectedCarrera] || info.todas;
  };

  const carreraInfo = getCarreraInfo();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        
        {/* Badge animado */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/20 shadow-2xl">
          <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
          <span className="text-white font-bold text-sm">Jornadas Pedagógicas 2025</span>
          <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
        </div>

        {/* Título principal con gradiente dinámico */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
          <span className="block text-white mb-2">{carreraInfo.titulo}</span>
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${carreraInfo.color} animate-gradient`}>
            {carreraInfo.subtitulo}
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {carreraInfo.descripcion}
        </p>

        {/* Botones CTA - SOLO para "Todas las Carreras" */}
        {selectedCarrera === 'todas' && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#proyectos"
              className="group relative px-8 py-4 rounded-full font-bold text-white text-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${carreraInfo.color}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-l ${carreraInfo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <span className="relative flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Ver Proyectos
              </span>
            </a>

            <a
              href="https://biblioteca210.pythonanywhere.com/libros/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full font-bold text-white text-lg bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Biblioteca 210
              </span>
            </a>
          </div>
        )}

        {/* Estadísticas flotantes - SOLO para "Todas las Carreras" */}
        {selectedCarrera === 'todas' && (
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: '7', label: 'Carreras' },
              { value: '100+', label: 'Estudiantes' },
              { value: '10', label: 'Años' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 transition-all"
              >
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${carreraInfo.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Círculos de resplandor flotantes */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${carreraInfo.color} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l ${carreraInfo.color} rounded-full blur-3xl opacity-20 animate-pulse`} style={{ animationDelay: '1s' }}></div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
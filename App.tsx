import React, { useEffect, useState } from 'react';
import { Icon } from './components/Icon';
import { PoemGenerator } from './components/PoemGenerator';

const benefits = [
  {
    id: 'conn',
    title: 'Conexión Profunda',
    description: 'La bachata no se baila solo con los pies, sino con el alma. Es un diálogo silencioso donde dos personas se convierten en una sola respiración.',
    iconName: 'heart' as const
  },
  {
    id: 'conf',
    title: 'Confianza y Entrega',
    description: 'Guiar y dejarse llevar requiere un acto de fe. En ese abrazo cerrado, se construye una seguridad que trasciende la pista de baile.',
    iconName: 'users' as const
  },
  {
    id: 'sens',
    title: 'Sensualidad Elegante',
    description: 'El movimiento de caderas, la suavidad del tacto y la cercanía crean un ambiente de romance puro, permitiendo expresar emociones sin palabras.',
    iconName: 'flame' as const
  },
  {
    id: 'musi',
    title: 'Terapia del Ritmo',
    description: 'El requinto melancólico y el bongó constante calman la mente, liberando el estrés y llenando el corazón de una dulce nostalgia alegre.',
    iconName: 'music' as const
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-rose-500 selection:text-white overflow-x-hidden bg-[#0f0508]">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-rose-950/90 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="heart" className="text-pink-500 animate-pulse" />
            <span className="text-2xl font-serif text-white tracking-widest">BACHATA<span className="text-pink-500">AMOR</span></span>
          </div>
          <button className="hidden md:block text-pink-100 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold border-b border-transparent hover:border-pink-500 pb-1">
            Descubre la Pasión
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546422401-68b415cbf8de?q=80&w=2070&auto=format&fit=crop" 
            alt="Pareja bailando bachata sensual" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rose-950/70 via-black/50 to-[#0f0508]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <div className="mb-6 inline-block animate-fade-in delay-100">
            <span className="py-1 px-4 border border-pink-500/40 rounded-full text-pink-200 text-xs md:text-sm uppercase tracking-[0.4em] backdrop-blur-md bg-black/20">
              Descubre los Beneficios
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-[1.1]">
            <span className="block text-4xl md:text-6xl lg:text-7xl opacity-90 mb-2">Por qué bailar</span>
            Bachata es<br /> 
            <span className="italic font-script text-pink-500 pr-2 animate-pulse-slow">Pura Magia</span>
          </h1>
          <p className="text-lg md:text-2xl text-pink-100/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Sumérgete en un mundo donde el estrés se disuelve y solo queda la conexión. Descubre por qué este baile es el mejor regalo para tu corazón y tu mente.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => document.getElementById('benefits')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-8 py-4 bg-pink-600 hover:bg-pink-500 rounded-full text-white transition-all shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_40px_rgba(219,39,119,0.6)]">
              <span className="relative z-10 flex items-center gap-3 font-serif italic text-lg">
                Ver los Beneficios <Icon name="arrow-right" size={20} />
              </span>
            </button>
            <button onClick={() => document.getElementById('poem')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 rounded-full text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all font-serif italic text-lg backdrop-blur-sm">
              Inspiración Poética
            </button>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-rose-900/40 to-pink-600/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop" 
                alt="Silueta romántica bachata" 
                className="relative rounded-2xl shadow-2xl opacity-90 border border-white/5 hover:scale-[1.01] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="order-1 md:order-2 space-y-10">
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                El lenguaje del<br/>
                <span className="text-gold-400 italic font-script">Alma</span>
              </h2>
              <div className="space-y-6 text-lg text-pink-100/80 font-light leading-relaxed">
                <p>
                  Bailar bachata no es solo mover los pies al compás de 1-2-3-tap. Es una forma de comunicación primitiva y sofisticada a la vez. Es decir "te siento" sin pronunciar palabra.
                </p>
                <p>
                  Es extremadamente bueno para la salud emocional porque nos obliga a estar <strong>presentes</strong>. No puedes pensar en tus problemas mientras intentas sincronizar tu latido con el de otra persona. Es una meditación compartida.
                </p>
                <blockquote className="border-l-2 border-pink-500 pl-6 italic text-white/90 text-xl font-serif">
                  "En la bachata, dos cuerpos escriben una historia que dura tres minutos, pero se recuerda toda la vida."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-32 bg-[#1a050b] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-4 block">Beneficios Holísticos</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">¿Por qué tu vida necesita Bachata?</h2>
            <p className="text-pink-200/60 max-w-2xl mx-auto font-light text-lg">Más allá de los pasos, descubre cómo este baile transforma tu bienestar interior.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="group glass-panel p-10 rounded-3xl hover:bg-rose-900/30 transition-all duration-500 border-white/5 hover:border-pink-500/30 shadow-lg hover:shadow-pink-900/20">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Icon name={benefit.iconName} size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-gold-400 transition-colors">{benefit.title}</h3>
                    <p className="text-pink-100/70 leading-relaxed font-light text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: El Abrazo */}
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0508] via-[#1f0810] to-[#0f0508]"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row-reverse items-center gap-16">
           <div className="md:w-1/2 text-left md:text-right">
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">
                El Poder Sanador del <br/>
                <span className="text-pink-500 font-script text-7xl">Abrazo</span>
              </h2>
              <p className="text-pink-100/70 text-lg leading-relaxed font-light mb-6">
                En la bachata, el marco cerrado es un refugio. Al bailar pecho con pecho, se crea un bucle de retroalimentación emocional. Estudios científicos sugieren que el contacto físico respetuoso libera <span className="text-gold-400 font-semibold">oxitocina</span>, la hormona del amor y la confianza, reduciendo drásticamente los niveles de cortisol (estrés).
              </p>
              <p className="text-pink-100/70 text-lg leading-relaxed font-light">
                Es una terapia donde no hacen falta palabras. Solo sentir el peso, el apoyo y la dirección del otro, creando un espacio seguro para la vulnerabilidad.
              </p>
           </div>
           <div className="md:w-1/2 relative group perspective-1000">
              <div className="absolute inset-0 bg-pink-500/20 blur-[80px] rounded-full group-hover:bg-pink-500/30 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1516651029879-bf8185d2ccac?q=80&w=1000&auto=format&fit=crop"
                alt="Abrazo íntimo de bachata" 
                className="relative rounded-xl shadow-2xl border border-white/10 -rotate-2 group-hover:rotate-0 transition-all duration-700 w-full object-cover h-[500px]"
              />
           </div>
        </div>
      </section>

      {/* AI Poetry Generator Section */}
      <section id="poem" className="py-32 relative overflow-hidden bg-rose-950/20">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <PoemGenerator />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-[#050203]">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
             <Icon name="sparkles" className="text-gold-400" size={24} />
             <h2 className="font-script text-5xl text-white">Baila con el corazón</h2>
             <Icon name="sparkles" className="text-gold-400" size={24} />
          </div>
          <p className="text-pink-100/40 text-sm mb-10 max-w-md mx-auto">
            Una experiencia digital dedicada a la belleza de la bachata.
            <br/>Diseñado para inspirar tu próximo baile.
          </p>
          <div className="flex justify-center gap-8 text-pink-200/60 font-serif italic">
            <a href="#" className="hover:text-pink-400 transition-colors hover:scale-110 transform block">Instagram</a>
            <a href="#" className="hover:text-pink-400 transition-colors hover:scale-110 transform block">Spotify Playlist</a>
            <a href="#" className="hover:text-pink-400 transition-colors hover:scale-110 transform block">Clases Cercanas</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
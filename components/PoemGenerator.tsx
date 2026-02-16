import React, { useState } from 'react';
import { generateRomanticPoem } from '../services/geminiService';
import { Icon } from './Icon';

export const PoemGenerator: React.FC = () => {
  const [poem, setPoem] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateRomanticPoem();
    setPoem(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <div className="glass-panel p-10 md:p-14 rounded-[2rem] relative overflow-hidden group border border-white/10 shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px]"></div>
        
        <Icon name="sparkles" className="mx-auto text-gold-400 mb-6 animate-pulse-slow" size={40} />
        
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Inspiración Divina</h3>
        <p className="text-pink-100/70 mb-10 font-light text-lg max-w-xl mx-auto">
          ¿Necesitas una razón más para bailar? Deja que la inteligencia artificial te regale un pensamiento sobre la magia de la bachata.
        </p>

        {poem ? (
          <div className="mb-10 p-8 bg-black/30 rounded-xl border border-white/5 animate-fade-in relative">
            <Icon name="heart" className="absolute -top-4 -left-4 text-pink-500/50 rotate-[-15deg]" size={40} />
            <p className="font-script text-3xl md:text-5xl text-pink-100 leading-relaxed drop-shadow-lg">
              "{poem}"
            </p>
            <Icon name="heart" className="absolute -bottom-4 -right-4 text-pink-500/50 rotate-[15deg]" size={40} />
          </div>
        ) : (
           <div className="h-20"></div> // Spacer to prevent jump
        )}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-serif text-lg font-medium tracking-wide text-white bg-rose-900/80 rounded-full group hover:bg-rose-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] border border-rose-700/50"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-pink-500 rounded-full group-hover:w-80 group-hover:h-80 opacity-20"></span>
          <span className="relative flex items-center gap-3">
            {loading ? 'Consultando a las Musas...' : 'Revelar Inspiración'}
            {!loading && <Icon name="heart" size={20} />}
          </span>
        </button>
      </div>
    </div>
  );
};
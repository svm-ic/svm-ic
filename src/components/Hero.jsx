// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import MagneticButton from './MagneticButton';

export default function Hero({ loaded }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => {
      setMouse({ x: (e.clientX / window.innerWidth) * 20, y: (e.clientY / window.innerHeight) * 20 });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 scale-110" style={{ transform: `translate(-${mouse.x}px, -${mouse.y}px)` }}>
        <img
          src="assets/svm.jpg"
          alt="School campus"
          className="w-full h-full object-cover will-change-transform"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/60 via-[#1E293B]/40 to-[#1E293B]/80" />
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0B5ED7]/20 rounded-full blur-3xl animate-float-1" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD43B]/10 rounded-full blur-3xl animate-float-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20 -translate-y-16 md:-translate-y-20">
        <div className="overflow-hidden mb-2">
          <h1 className={`font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] transition-transform duration-1000 ease-out ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
            Saraswati Vidya Mandir
          </h1>
        </div>
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-slate-200 font-light mb-10 leading-relaxed">
            Where curiosity meets excellence. Experience a world-class education that prepares students to lead with empathy, innovate with purpose, and thrive in a rapidly evolving world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton href="#achievements" className="bg-[#FFD43B] text-[#1E293B] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all hover:-translate-y-0.5">
              View Achievements
            </MagneticButton>
            <MagneticButton href="#about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
              Explore Campus
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
 <a href="#stats" onClick={(e) => { e.preventDefault(); document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="Scroll down" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <svg className="w-6 h-6 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>
  );
}
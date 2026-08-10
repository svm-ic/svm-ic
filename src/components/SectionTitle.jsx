// src/components/SectionTitle.jsx
import { useScrollReveal } from '../styles/animations.js';

export default function SectionTitle({ title, subtitle, centered = true, light = false }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className="overflow-hidden">
        <p className={`text-sm font-bold tracking-widest uppercase mb-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${light ? 'text-blue-200' : 'text-[#0B5ED7]'}`}>
          {subtitle}
        </p>
      </div>
      <div className="overflow-hidden">
        <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${light ? 'text-white' : 'text-[#1E293B]'}`}>
          {title}
        </h2>
      </div>
    </div>
  );
}
// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textColor = scrolled || open ? 'text-slate-700' : 'text-white/90';
  const logoBg = scrolled || open ? 'bg-[#0B5ED7]' : 'bg-white/20 backdrop-blur-sm border border-white/20';

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Faculty', href: '#teachers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || open ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className={`flex items-center gap-2 font-heading font-bold text-xl tracking-tight ${scrolled || open ? 'text-[#1E293B]' : 'text-white'}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${logoBg}`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 10l10 5 10-5" />
              </svg>
            </div>
            <span>उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }} className={`text-sm font-medium hover:opacity-70 transition-opacity ${textColor}`}>
                {l.label}
              </a>
            ))}
          </div>

          <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}>
 {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); setOpen(false); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }} className="text-2xl font-heading font-bold text-slate-800">
                {l.label}
              </a>
            ))}
            <MagneticButton href="#admissions" className="mt-4 w-full text-center py-4 rounded-full bg-[#0B5ED7] text-white font-bold">
              View Achievements
            </MagneticButton>
          </div>
        </div>
      )}
    </>
  );
}
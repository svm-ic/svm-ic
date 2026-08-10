// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = 'Saraswati Vidya Mandir — Empowering Young Minds For Tomorrow';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Saraswati Vidya Mandir is a premium K-12 institution offering world-class academics, sports, arts and hostel facilities. Admissions open for 2026-27.';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); }
  }, []);

  return (
 <>
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('assets/svm.jpg')" }}
        />
        {/* Blue tint overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#0B5ED7]/85" />

        {/* Content */}
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl ring-1 ring-white/20 p-3">
            <img src="logoo.png" alt="Saraswati Vidya Mandir Logo" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-white font-heading text-2xl font-bold tracking-tight mb-1">Saraswati Vidya Mandir</h3>
          <p className="text-blue-100 text-sm font-medium mb-8">Shaping Futures, Inspiring Minds</p>
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#FFD43B] rounded-full animate-[loader_2.8s_ease-out_forwards]" />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home loaded={loaded} />} />
      </Routes>
    </>
  );
}
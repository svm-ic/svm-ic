// src/components/Gallery.jsx
import { useState } from 'react';
import SectionTitle from './SectionTitle';

const galleryImages = [
  { src: 'assets/library.jpg', alt: 'Library' },
  { src: 'assets/ground.jpg', alt: 'Sports Day' },
  { src: 'assets/lab.jpg', alt: 'Science Lab' },
  { src: 'assets/class.jpg', alt: 'Classroom' },
  { src: 'assets/kg.jpg', alt: 'Kindergarten' },
  { src: 'assets/annual.jpg', alt: 'Annual Day' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Gallery" title="Moments That Define Us" />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
 <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="block w-full group rounded-2xl overflow-hidden break-inside-avoid focus:outline-none focus:ring-4 focus:ring-[#0B5ED7]"
            >
              <div className="relative">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
 <div className="absolute inset-0 bg-[#0B5ED7]/0 group-hover:bg-[#0B5ED7]/20 transition-all duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <svg className="w-5 h-5 text-[#0B5ED7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <img src={lightbox} alt="Gallery preview" className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl" />
          <button className="absolute top-6 right-6 text-white/80 hover:text-white p-2" aria-label="Close lightbox">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      )}
    </section>
  );
}
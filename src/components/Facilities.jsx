// src/components/Facilities.jsx
import { useState, useRef } from 'react';
import { useScrollReveal } from '../styles/animations.js';
import SectionTitle from './SectionTitle';

const facilitiesData = [
  { title: 'Library', img: 'assets/library.jpg', desc: '50,000+ volumes' },
  { title: 'Science Labs', img: 'assets/lab.jpg', desc: 'Research-grade equipment' },
  { title: 'Sports Ground', img: 'assets/ground.jpg', desc: 'Football, cricket & athletics' },
  { title: 'Auditorium', img: 'assets/audi.jpg', desc: '500-seat amphitheatre' },
  { title: 'Transport', img: 'assets/bus.jpg', desc: 'Fleet of 30 buses' },
  { title: 'Medical Room', img: 'assets/medical.jpg', desc: '24/7 basic healthcare' },
  { title: 'Digital Classrooms', img: 'assets/class.jpg', desc: 'Interactive smart panels' },
  { title: 'Art Studio', img: 'assets/art.jpg', desc: 'Fine arts & sculpture' },
];

function FacilityCard({ f, index }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`min-w-[300px] md:min-w-[380px] snap-center group rounded-3xl overflow-hidden relative aspect-[4/3] transition-all duration-700 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={f.img}
        alt={f.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-[#1E293B]/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white font-heading font-bold text-xl mb-1">
          {f.title}
        </h3>

        <p className="text-slate-300 text-sm">
          {f.desc}
        </p>
      </div>
    </div>
  );
}

export default function Facilities() {
  const containerRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleDown = (e) => {
    setIsDown(true);

    containerRef.current.classList.add('cursor-grabbing');

    setStartX(
      e.pageX - containerRef.current.offsetLeft
    );

    setScrollLeft(
      containerRef.current.scrollLeft
    );
  };

  const handleUp = () => {
    setIsDown(false);

    if (containerRef.current) {
      containerRef.current.classList.remove(
        'cursor-grabbing'
      );
    }
  };

  const handleMove = (e) => {
    if (!isDown || !containerRef.current) return;

    e.preventDefault();

    const x =
      e.pageX - containerRef.current.offsetLeft;

    const walk = (x - startX) * 1.5;

    containerRef.current.scrollLeft =
      scrollLeft - walk;
  };

  const scrollBy = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Heading */}
        <div className="relative mb-12">

          <div className="text-center">
            <SectionTitle
              subtitle="Facilities"
              title="World-Class Infrastructure"
              centered={true}
            />
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-3 absolute right-0 bottom-0">

            <button
              onClick={() => scrollBy(-400)}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0B5ED7] hover:text-white hover:border-blue-600 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => scrollBy(400)}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0B5ED7] hover:text-white hover:border-blue-600 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Facilities Slider */}
      <div
        ref={containerRef}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseLeave={handleUp}
        onMouseMove={handleMove}
        className="flex overflow-x-auto gap-6 px-6 pb-8 cursor-grab scrollbar-hide snap-x snap-mandatory max-w-[1440px] mx-auto"
      >
        {facilitiesData.map((f, i) => (
          <FacilityCard
            key={i}
            f={f}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
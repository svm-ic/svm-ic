// src/components/MagneticButton.jsx
import { useRef } from 'react';

export default function MagneticButton({ children, className = '', onClick, href, type = 'button' }) {
  const btnRef = useRef(null);
  const handleMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const handleLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0px, 0px)';
  };
  const inner = (
    <span
      ref={btnRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`inline-block transition-transform duration-200 will-change-transform ${className}`}
    >
      {children}
    </span>
  );
  if (href) {
    return (
      <a href={href} className="inline-block" onClick={(e) => { if (href.startsWith('#')) { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); } }}>
        {inner}
      </a>
    );
  }
  return <button type={type} className="inline-block">{inner}</button>;
}
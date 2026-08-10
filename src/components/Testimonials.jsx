// src/components/Testimonials.jsx
import { useAutoplay, useScrollReveal } from '../styles/animations.js';
import SectionTitle from './SectionTitle';

const testimonialsData = [
  { name: 'Aarav Mehta', role: 'Alumni (Batch 2024)', text: 'The teachers here don’t just teach; they mentor. My foundation in Physics helped me crack JEE with AIR 200.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Mrs. Sandhya Rao', role: 'Parent', text: 'From academics to ethics, the school has shaped my daughter into a confident, compassionate leader.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
  { name: 'Diya Sharma', role: 'Class 10 Student', text: 'I love the freedom to explore music and robotics together. This place feels like a second home.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
];

export default function Testimonials() {
  const [active, setActive] = useAutoplay(testimonialsData.length, 6000);
  const [ref, visible] = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle subtitle="Testimonials" title="Voices of Our Community" />
        </div>
        <div ref={ref} className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-[#F8FAFC] rounded-[2rem] p-8 md:p-14 text-center border border-slate-100">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
              <img src={testimonialsData[active].img} alt={testimonialsData[active].name} className="w-full h-full object-cover" />
            </div>
            <svg className="w-10 h-10 mx-auto text-[#0B5ED7]/20 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            <p className="text-xl md:text-2xl text-slate-700 italic font-light leading-relaxed mb-8 max-w-3xl mx-auto">"{testimonialsData[active].text}"</p>
            <h4 className="font-heading font-bold text-[#1E293B] text-lg">{testimonialsData[active].name}</h4>
 <p className="text-sm text-slate-500">{testimonialsData[active].role}</p>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonialsData.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Go to testimonial ${i + 1}`} className={`w-3 h-3 rounded-full transition-all ${i === active ? 'bg-[#0B5ED7] w-8' : 'bg-slate-300 hover:bg-[#0B5ED7]/50'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
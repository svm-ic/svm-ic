// src/components/About.jsx
import { useScrollReveal } from '../styles/animations.js';
import SectionTitle from './SectionTitle';

function AboutCard({ item, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`p-5 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <h4 className="font-heading font-bold text-[#1E293B] mb-2">{item.title}</h4>
      <p className="text-sm text-slate-500">{item.text}</p>
    </div>
  );
}

export default function About() {
  const [ref, visible] = useScrollReveal();
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref} className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/40">
                <img src="assets/logo.jpg" alt="Classroom" className="w-full h-auto object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#FFD43B] rounded-3xl -z-10 hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#0B5ED7]/20 rounded-3xl -z-10 hidden lg:block" />
 </div>
          </div>
          <div>
            <SectionTitle subtitle="About Us" title="A Legacy of Excellence in Education" centered={false} />
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Founded in 1996, Saraswati Vidya Mandir has grown from a small neighborhood school into one of the most trusted K-12 institutions in the region. Our philosophy blends rigorous academics with holistic development.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                {[
                  { title: 'Our Mission', text: 'To cultivate intellectually curious, morally grounded, and socially responsible global citizens.' },
                  { title: 'Our Vision', text: 'To be the leading institution where innovation and tradition converge for student success.' },
                  { title: 'Integrity', text: 'We operate with transparency, honesty and unwavering ethical standards.' },
                  { title: 'Innovation', text: 'Embracing technology and progressive pedagogies to stay ahead of the curve.' },
 ].map((item, i) => (
                  <AboutCard key={i} item={item} index={i} />
 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
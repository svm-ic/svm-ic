// src/pages/Home.jsx
import { useState, useRef, useEffect } from 'react';
import { useScrollReveal, useCountUp, useAutoplay } from '../styles/animations.js';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/* ---- Custom Cursor ---- */
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if(dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if(ringRef.current) ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block" style={{ marginLeft: -4, marginTop: -4 }}>
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
      <div ref={ringRef} className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block transition-transform duration-100 ease-out" style={{ marginLeft: -20, marginTop: -20 }}>
        <div className="w-10 h-10 border border-white rounded-full opacity-50" />
      </div>
    </>
  );
}

/* ---- Stats ---- */
const statsData = [
  { label: 'Years of Legacy', value: 25, suffix: '+' },
  { label: 'Happy Students', value: 5000, suffix: '+' },
  { label: 'Expert Teachers', value: 250, suffix: '+' },
  { label: 'Board Results', value: 98, suffix: '%' },
  { label: 'Smart Classrooms', value: 40, suffix: '+' },
];

function StatCard({ value, suffix, label }) {
  const [ref, count] = useCountUp(value, 2500);
  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-1">{count}{suffix}</span>
      <span className="text-blue-100 text-sm font-medium">{label}</span>
    </div>
  );
}

function Stats() {
  return (
    <section id="stats" className="relative z-20 -mt-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-[#0B5ED7] rounded-3xl shadow-2xl shadow-blue-900/20 p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
          {statsData.map((s, i) => (
            <StatCard key={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Principal Message ---- */
function PrincipalMessage() {
  const [ref, visible] = useScrollReveal();
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle subtitle="Director’s Message" title="Welcome to Our School Family" centered={false} />
            <div ref={ref} className={`relative pl-8 border-l-2 border-blue-100 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <svg className="absolute -left-5 -top-2 w-10 h-10 text-[#0B5ED7] opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
              <p className="text-lg text-slate-700 italic leading-relaxed mb-6">
                "Education is not just about textbooks and exams. It is about igniting a spark — a lifelong love for learning. At Saraswati Vidya Mandir, we see children not as empty vessels to be filled, but as fires to be kindled."
              </p>
              <div>
                <p className="font-heading font-bold text-[#1E293B] text-xl">Mr. Suresh Narayan Pandey</p>
                <p className="text-slate-500 text-sm mb-4">Director, SVM Inter College</p>
                <div className="h-px w-24 bg-[#FFD43B]" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img src="assets/manager.jpg" alt="Principal" className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]" loading="lazy" decoding="async" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800">ISO 9001:2015</p>
                  <p className="text-xs text-slate-500">Certified Institution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Why Choose Us ---- */
const featuresData = [
  { title: 'Smart Classes', desc: 'Digital boards, projectors & AI-driven learning modules in every room.' },
  { title: 'Science Labs', desc: 'State-of-the-art Physics, Chemistry & Biology labs for hands-on experimentation.' },
  { title: 'Computer Labs', desc: 'Modern computing suites with high-speed internet & coding workstations.' },
  { title: 'Sports', desc: 'Olympic-grade fields, indoor courts & professional coaching staff.' },
  { title: 'Auditorium', desc: 'Modern performance space for events, assemblies & cultural activities.' },
  { title: 'Library', desc: '50,000+ books, digital archives & silent reading pods.' },
  { title: 'Transport', desc: 'GPS-enabled AC buses with trained female attendants.' },
  { title: 'Medical Care', desc: 'On-campus infirmary with a qualified nurse & visiting pediatrician.' },
  { title: 'Music Room', desc: 'Sound-proof studios for vocal training & instrument mastery.' },
];

function FeatureCard({ f, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="w-12 h-12 bg-blue-50 text-[#0B5ED7] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="font-heading font-bold text-[#1E293B] mb-2">{f.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Why Choose Us" title="A Campus Built for Tomorrow's Leaders" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuresData.map((f, i) => (
            <FeatureCard key={i} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Academics ---- */
const academicsData = [
  { level: 'Pre-Primary', ages: 'Ages 3 – 5', desc: 'Montessori-based play & learn curriculum focusing on motor skills & social development.', color: 'bg-rose-500' },
  { level: 'Primary', ages: 'Classes I – V', desc: 'Foundational literacy, numeracy & inquiry-based science with art integration.', color: 'bg-emerald-500' },
  { level: 'Middle School', ages: 'Classes VI – VIII', desc: 'Subject specialization begins with coding, robotics & environmental science labs.', color: 'bg-violet-500' },
  { level: 'High School', ages: 'Classes IX – X', desc: 'Board-focused rigour with Olympiad prep, career counselling & leadership programs.', color: 'bg-amber-500' },
  { level: 'Senior Secondary', ages: 'Classes XI – XII', desc: 'CBSE / IB streams in Science, Commerce & Humanities with JEE/NEET mentorship.', color: 'bg-sky-500' },
];

function AcademicCard({ a, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className={`h-2 w-full ${a.color}`} />
      <div className="p-6">
        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-700 group-hover:bg-[#0B5ED7] group-hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.477 5.754 19 7.5 19s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.477 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        </div>
        <h3 className="font-heading font-bold text-lg text-[#1E293B] mb-1">{a.level}</h3>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{a.ages}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
      </div>
    </div>
  );
}

function Academics() {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Academics" title="Curriculum That Inspires Discovery" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {academicsData.map((a, i) => (
            <AcademicCard key={i} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Admissions ---- */
const admissionSteps = [
  { title: 'Inquiry', desc: 'Fill the enquiry form online or visit our Admissions Office.' },
  { title: 'Registration', desc: 'Submit the registration form along with the nominal fee.' },
  { title: 'Campus Visit', desc: 'Attend a guided campus tour & interact with the faculty.' },
  { title: 'Documents', desc: 'Provide previous report cards, birth certificate & ID proof.' },
  { title: 'Interaction', desc: 'Student & parent interaction with the Admissions Committee.' },
  { title: 'Fee Payment', desc: 'Secure your seat by completing the fee payment formalities.' },
];

function AdmissionStepCard({ step, index, isEven }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 });
  return (
    <div ref={ref} className={`relative flex items-start mb-12 md:mb-16 last:mb-0 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-[#0B5ED7] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
        <span className="text-white text-xs font-bold">{index + 1}</span>
      </div>
      <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-heading font-bold text-[#1E293B] mb-1">{step.title}</h4>
          <p className="text-sm text-slate-500">{step.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Admissions() {
  const [ref, visible] = useScrollReveal();
  return (
    <section id="admissions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Admissions" title="Your Journey Starts Here" />
        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-blue-100" />
          {admissionSteps.map((step, i) => (
            <AdmissionStepCard key={i} step={step} index={i} isEven={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Campus Tour ---- */
function CampusTour() {
  const [ref, visible] = useScrollReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/8] bg-[#1E293B] group">
          {playing ? (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
              poster="https://images.unsplash.com/photo-1562774053-701939376533?auto=format&fit=crop&w=1600&q=80"
            >
              <source src="assets/videos/campus-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939376533?auto=format&fit=crop&w=1600&q=80"
                alt="Campus aerial view"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4">
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play campus tour video"
                  className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-6 focus:outline-none flex-shrink-0"
                >
                  <span className="absolute inset-0 rounded-full bg-white/20 backdrop-blur animate-ping-ring" />
                  <span className="relative w-full h-full rounded-full bg-[#FFD43B] flex items-center justify-center shadow-xl">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1E293B] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </button>
                <h3 className="text-white font-heading text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">360° Campus Tour</h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md">Experience our lush green campus, modern labs & sports arenas from anywhere.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---- Achievements ---- */
const achievementsData = [
  { title: 'Olympiad Gold', desc: '12 National Toppers in Maths & Science Olympiads.' },
  { title: 'Board Toppers', desc: 'District Rank 1 in CBSE Class XII for 3 consecutive years.' },
  { title: 'Sports Champions', desc: 'Under-17 State Football Champions & Athletics record holders.' },
  { title: 'Tech Winners', desc: 'Winner of National Robotics Championship 2025.' },
];

function AchievementCard({ a, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="w-12 h-12 bg-[#FFD43B] rounded-xl flex items-center justify-center mb-4 text-[#1E293B]">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
      </div>
      <h4 className="text-white font-heading font-bold text-lg mb-2">{a.title}</h4>
      <p className="text-blue-100 text-sm leading-relaxed">{a.desc}</p>
    </div>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0B5ED7]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Achievements" title="Celebrating Excellence" light />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((a, i) => (
            <AchievementCard key={i} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Teachers ---- */
const teachersData = [
  { name: 'Pradeep Pandey', role: 'Manager', img: 'assets/pradeep.jpg' },
  { name: ' Vinod Tiwari', role: 'Principal (Senior Class)', img: 'assets/vinod.jpg' },
  { name: 'Kirti Prakash Tripathi', role: 'Principal (Junior Class)',img: 'assets/kp.jpg' },
];

function TeacherCard({ t, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="aspect-[4/3] overflow-hidden relative">
        <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button aria-label="email" className="w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0B5ED7] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </button>
          <button aria-label="linkedin" className="w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0B5ED7] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-[#1E293B]">{t.name}</h3>
        <p className="text-[#0B5ED7] text-sm font-semibold mb-1">{t.role}</p>
        <p className="text-slate-500 text-xs">{t.subject}</p>
      </div>
    </div>
  );
}

function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Our Faculty" title="Guided by the Best Minds" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachersData.map((t, i) => (
 <TeacherCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Events ---- */
const eventsData = [
  { title: 'Annual Day 2026', date: '15', month: 'Nov', type: 'Cultural', img: 'assets/annual.jpg' },
  { title: 'Inter-School Sports Meet', date: '22', month: 'Dec', type: 'Sports', img: 'assets/sportsmeet.jpg' },
  { title: 'Winter Olympiad Exams', date: '10', month: 'Jan', type: 'Academic', img: 'assets/exam.jpg' },
  { title: 'Summer Camp 2026', date: '05', month: 'May', type: 'Camp', img: 'assets/camp.jpg' },
];

function Events() {
  const [active, setActive] = useAutoplay(eventsData.length, 5000);
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
 <SectionTitle subtitle="Events" title="Life at Saraswati Vidya Mandir" />
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-4">
            {eventsData.map((e, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`min-w-[280px] md:min-w-0 rounded-2xl overflow-hidden border border-slate-100 bg-white cursor-pointer transition-all duration-500 ${i === active ? 'md:-translate-y-2 md:shadow-xl ring-1 ring-blue-100' : 'hover:-translate-y-1 shadow-sm'}`}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute top-3 left-3 bg-white rounded-lg shadow-sm px-3 py-2 text-center">
                    <span className="block text-lg font-bold text-[#0B5ED7]">{e.date}</span>
                    <span className="block text-[10px] uppercase font-bold text-slate-500">{e.month}</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-blue-50 text-[#0B5ED7] text-xs font-bold px-2 py-1 rounded-md mb-2">{e.type}</span>
                  <h4 className="font-heading font-bold text-[#1E293B] mb-1">{e.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- News ---- */
const newsData = [
  { title: 'New Bus Added', excerpt: 'A new school bus has been added to our fleet to provide safer and more convenient transportation for students.', date: '11 Jul 2026', img: 'assets/newbus.jpg' },
  { title: 'Farewell Ceremony', excerpt: 'Our school hosted a memorable farewell ceremony to celebrate and wish our graduating students success in their future endeavors.', date: '8 Feb 2026', img: 'assets/farewell.jpg' },
  { title: 'Republic Day Celebration', excerpt: 'Students and staff celebrated Republic Day with patriotic performances, cultural activities, and a special flag-hoisting ceremony.', date: '26 Jan 2026', img: 'assets/republicday.jpg' },
];

function NewsCard({ n, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <a href="#news" ref={ref} className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 block ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="aspect-[16/10] overflow-hidden">
        <img src={n.img} alt={n.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold text-slate-400 mb-2">{n.date}</p>
        <h4 className="font-heading font-bold text-[#1E293B] mb-2 group-hover:text-[#0B5ED7] transition-colors">{n.title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{n.excerpt}</p>
      </div>
    </a>
  );
}

function News() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
 <SectionTitle subtitle="News" title="Latest Updates" />
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((n, i) => (
            <NewsCard key={i} n={n} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ ---- */
const faqsData = [
  { q: 'What is the admission age criteria for Pre-Primary?', a: 'The child should be 3+ years old as of March 31st of the admission year.' },
  { q: 'Does the school provide transport facilities?', a: 'Yes. We operate a fleet of GPS-enabled buses covering most major localities in the city.' },
  { q: 'What curriculum does the school follow?', a: 'We follow the CBSE curriculum until Class X, with optional IB tracks in Senior Secondary.' },
  { q: 'Are hostel facilities available for boys and girls?', a: 'Yes, we have separate boarding houses for boys and girls with 24/7 residential staff.' },
  { q: 'How does the school support competitive exam preparation?', a: 'We have integrated coaching modules for JEE, NEET and CLAT from Grade IX onwards.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  const refs = useRef({});
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6">
 <SectionTitle subtitle="FAQs" title="Got Questions?" />
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {faqsData.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-slate-100 last:border-0">
 <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-slate-50 transition-colors focus:outline-none focus:bg-blue-50/50"
                >
                  <span className="font-heading font-bold text-[#1E293B] pr-4">{faq.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-[#0B5ED7]' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? (refs.current[i]?.scrollHeight + 'px') : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div ref={(el) => (refs.current[i] = el)} className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Home Export ---- */
export default function Home({ loaded }) {
  return (
    <div className="font-body text-slate-800 bg-white selection:bg-[#0B5ED7] selection:text-white">
      <a href="#stats" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-[#0B5ED7] text-white px-4 py-2 rounded-lg z-[100] text-sm font-bold">
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero loaded={loaded} />
        <Stats />
        <About />
        <PrincipalMessage />
        <WhyChooseUs />
        <Academics />
        <Facilities />
        <Admissions />
        <Gallery />
        <CampusTour />
        <Achievements />
        <Teachers />
        <Events />
        <News />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
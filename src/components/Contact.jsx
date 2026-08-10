// src/components/Contact.jsx
import { useState } from 'react';
import MagneticButton from './MagneticButton';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Contact" title="Find Us" />
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="relative">
            <a
              href="https://www.google.com/maps/place/Saraswati+Vidya+Mandir+Inter+College/@27.3015051,82.0336283,19z/data=!4m10!1m2!2m1!1ssaraswati+vidya+mandir+intiyathok!3m6!1s0x3999e9e11440c89d:0xe13a8ff220f3227c!8m2!3d27.3016093!4d82.0339281!15sCiFzYXJhc3dhdGkgdmlkeWEgbWFuZGlyIGludGl5YXRob2uSARdoaWdoZXJfc2Vjb25kYXJ5X3NjaG9vbOABAA!16s%2Fg%2F11rvjhnskr?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Open school location in Google Maps"
            >
              <div className="relative h-[430px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">

                <iframe
                  title="Excellence Academy Location"
                  src="https://www.google.com/maps?q=27.301659,82.0337774&output=embed"
                  className="w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                />

                {/* Click overlay */}
                <div className="absolute inset-0 bg-[#0B5ED7]/0 group-hover:bg-[#0B5ED7]/10 transition-all duration-300" />

                {/* Open in Google Maps */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 text-sm font-semibold text-[#0B5ED7] opacity-0 group-hover:opacity-100 transition-all duration-300">
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
                  Open in Google Maps
                </div>

              </div>
            </a>

            {/* Location label */}
            <div className="mt-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0B5ED7] rounded-xl flex items-center justify-center text-white">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Find Us
                </p>
                <p className="text-sm text-slate-700 font-medium">
                  Saraswati Vidya Mandir Inter College, Intiyathok, Balrampur Road, near Sarayu Nahar kaloni, Gonda, Karuwa Para, Uttar Pradesh 271202
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { label: 'Address', text: 'Saraswati Vidya Mandir Inter College, Intiyathok, Balrampur Road, near Sarayu Nahar kaloni, Gonda, Karuwa Para, Uttar Pradesh 271202', icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></> },
              { label: 'Phone', text: '+91 9599462884 | Admission Helpline', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
              { label: 'Email', text: 'N/A', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
              { label: 'WhatsApp', text: '+91 9599462884', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
 <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0B5ED7] shadow-sm flex-shrink-0">
 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-slate-700 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
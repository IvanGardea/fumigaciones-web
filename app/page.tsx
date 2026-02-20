"use client";
import React, { useState, useEffect } from 'react';
import { 
  Bug, Phone, CheckCircle2, MessageCircle, Menu, X, 
  Mail, GraduationCap, ClipboardCheck, ChevronRight, 
  Award, Microscope, Calendar as CalendarIcon 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================================
//  👇 CONFIGURACIÓN RÁPIDA DE CURSOS 
// ==========================================================
const MIS_CURSOS = [
  { fecha: "15 Mar", curso: "HACCP e Inocuidad", estado: "Cupo Disponible", urgencia: "baja" },
  { fecha: "22 Mar", curso: "Primeros Auxilios", estado: "Últimos Lugares", urgencia: "alta" },
  { fecha: "05 Abr", curso: "Buenas Prácticas (BPM)", estado: "Cupo Disponible", urgencia: "baja" },
  { fecha: "12 Abr", curso: "Prevención de Incendios", estado: "Cupo Disponible", urgencia: "baja" }
];

export default function CipsaEnterprise() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#84cc16] selection:text-white">
      
      {/* --- NAV BAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/cipsa-logo.png" alt="CIPSA Logo" className="h-14 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-10 font-bold text-sm uppercase tracking-widest">
            <a href="#inicio" className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:text-[#84cc16] transition-colors`}>Inicio</a>
            <a href="#servicios" className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:text-[#84cc16] transition-colors`}>Servicios</a>
            <a href="#capacitacion" className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:text-[#84cc16] transition-colors`}>Capacitación</a>
            <a href="#contacto" className="bg-[#84cc16] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-lime-500/40 transition-all active:scale-95">Contacto</a>
          </div>
          <button className="md:hidden text-[#84cc16]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/logo-sipsa-monito.jpg" alt="Fondo CIPSA" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <span className="bg-[#84cc16] text-white px-4 py-1 rounded text-xs font-black uppercase tracking-[0.3em]">Consultoría Elite</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
              Líderes en <span className="text-[#84cc16]">Inocuidad</span> <br />y Control Industrial
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Especialistas en certificar empresas agroindustriales. Asesoría técnica, capacitaciones de alto nivel y control de plagas con estándares internacionales.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="#contacto" className="px-10 py-5 bg-[#84cc16] text-white rounded-full font-bold text-lg hover:bg-lime-500 transition-all flex items-center justify-center gap-2">
                Solicitar Cotización <ChevronRight size={20} />
              </a>
              <div className="flex items-center justify-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-bold">
                <Award className="text-[#84cc16]" /> Certificación COFEPRIS
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MÉTRICAS --- */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { t: "Certificados", v: "DC3 / COFEPRIS" },
            { t: "Especialidad", v: "Agroindustria" },
            { t: "Normativa", v: "HACCP / BPM / BPA" },
            { t: "Atención", v: "Personalizada" }
          ].map((item, i) => (
            <div key={i} className="border-r last:border-0 border-slate-100">
              <p className="text-[#84cc16] font-black text-xl mb-1">{item.v}</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[#1e293b] text-4xl md:text-5xl font-black mb-6 italic">Nuestra Especialización Técnica</h2>
            <p className="text-slate-600 text-lg leading-relaxed">No solo controlamos plagas; aseguramos la integridad de su cadena de producción mediante sistemas avanzados de gestión de inocuidad.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Control Agroindustrial", icon: <Bug size={40} /> },
              { title: "Inocuidad Alimentaria", icon: <Microscope size={40} /> },
              { title: "Asesoría y Auditoría", icon: <ClipboardCheck size={40} /> }
            ].map((s, i) => (
              <div key={i} className="group bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="text-[#84cc16] mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{s.title}</h3>
                <div className="w-12 h-1 bg-[#84cc16] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAPACITACIÓN --- */}
      <section id="capacitacion" className="py-32 bg-[#1e293b] text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 italic">Formación Técnica con <span className="text-[#84cc16]">Valor Curricular</span></h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light">
              Capacitamos a su personal bajo los más estrictos estándares de seguridad y salud ocupacional. Se expiden constancias de habilidades laborales **DC3**.
            </p>
            <ul className="space-y-6">
              {['Primeros Auxilios', 'Buenas Prácticas de Manufactura', 'HACCP e Inocuidad', 'Prevención de Incendios'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <div className="w-6 h-6 bg-[#84cc16] rounded-full flex items-center justify-center text-white"><CheckCircle2 size={16} /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
            <GraduationCap className="text-[#84cc16] mb-8" size={60} />
            <h3 className="text-3xl font-bold mb-4 italic text-white">Próximos Talleres</h3>
            <p className="text-slate-400 mb-8">Consulte disponibilidad para capacitaciones in-situ en su empresa.</p>
            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="inline-block w-full text-center py-4 bg-white text-[#1e293b] font-black rounded-2xl hover:bg-[#84cc16] hover:text-white transition-all tracking-widest"
            >
              VER CALENDARIO
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-black mb-8 text-[#1e293b]">Establezcamos <br />un nuevo estándar.</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl text-[#84cc16] shadow-sm"><Mail /></div>
                <div><p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Email Corporativo</p><p className="text-xl font-bold text-[#1e293b]">hectoruev292@gmail.com</p></div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl text-[#84cc16] shadow-sm"><Phone /></div>
                <div><p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Línea Directa</p><p className="text-xl font-bold text-[#1e293b]">636 111 7811</p></div>
              </div>
            </div>

            {/* MAPA CORREGIDO */}
            <div className="mt-16 rounded-[2.5rem] overflow-hidden h-80 shadow-2xl grayscale border-8 border-slate-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.603348842145!2d-107.9157493!3d30.4190278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e0030029b392b5%3A0x600c7a599b596237!2sCIPSA%20Control%20Integral%20de%20Plagas%20y%20Seguridad%20Agroindustrial!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx7" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-12 rounded-[3rem] border border-slate-100 shadow-xl self-start">
            <h3 className="text-3xl font-black mb-8 text-[#1e293b] italic">Solicitud de Auditoría</h3>
            <form action="https://formspree.io/f/mjgeeygr" method="POST" className="space-y-6">
              <input type="text" name="nombre" required placeholder="Nombre Completo" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#84cc16] outline-none transition-all" />
              <input type="email" name="email" required placeholder="Email" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#84cc16] outline-none transition-all" />
              <select name="interes" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#84cc16] outline-none transition-all text-slate-500 font-medium">
                <option>Interés: Auditoría de Inocuidad</option>
                <option>Interés: Capacitación DC3</option>
                <option>Interés: Control de Plagas Industrial</option>
              </select>
              <textarea name="mensaje" required placeholder="Mensaje" className="w-full p-4 bg-white border border-slate-200 rounded-2xl h-40 focus:ring-2 focus:ring-[#84cc16] outline-none transition-all"></textarea>
              <button type="submit" className="w-full py-5 bg-[#1e293b] text-[#84cc16] font-black text-lg rounded-2xl hover:bg-[#84cc16] hover:text-white transition-all shadow-lg active:scale-95 uppercase tracking-widest">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- MODAL CALENDARIO --- */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0f172a]/95 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative shadow-2xl">
              <button onClick={() => setIsCalendarOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={32} /></button>
              <h3 className="text-4xl font-black text-[#1e293b] mb-10 italic">Calendario de Capacitación <span className="text-[#84cc16]">2026</span></h3>
              <div className="grid gap-6">
                {MIS_CURSOS.map((c, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className="text-center bg-[#1e293b] text-[#84cc16] p-4 rounded-2xl min-w-[80px]">
                        <p className="text-lg font-black">{c.fecha}</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-[#1e293b]">{c.curso}</p>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${c.urgencia === 'alta' ? 'bg-red-500' : 'bg-[#84cc16]'}`}></div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{c.estado}</p>
                        </div>
                      </div>
                    </div>
                    <a href={`https://wa.me/526361117811?text=Me interesa el curso de: ${c.curso}`} target="_blank" className="bg-[#84cc16] text-white px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest">Apartar</a>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">
          <img src="/cipsa-logo.png" alt="CIPSA" className="h-10 opacity-50 grayscale" />
          <p>© 2026 CIPSA México. Todos los derechos reservados.</p>
          <div className="flex gap-6 italic">
            <span className="text-[#84cc16]">Calidad</span>
            <span>Inocuidad</span>
            <span>Seguridad</span>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP --- */}
      <a href="https://wa.me/526361117811" target="_blank" className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all z-50 group">
        <MessageCircle size={38} />
      </a>
    </div>
  );
}

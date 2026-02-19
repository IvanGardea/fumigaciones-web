"use client";
import React, { useState, useEffect } from 'react';
import { 
  Bug, Phone, CheckCircle2, MessageCircle, Menu, X, 
  Mail, GraduationCap, ClipboardCheck, ChevronRight, 
  Award, Microscope, Calendar as CalendarIcon 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================================
//  👇 CONFIGURACIÓN RÁPIDA DE CURSOS (Cambia esto solamente)
// ==========================================================
const MIS_CURSOS = [
  { 
    fecha: "15 Mar", 
    curso: "HACCP e Inocuidad", 
    estado: "Cupo Disponible", 
    urgencia: "alta" // "alta" pone el punto rojo, "baja" pone punto verde
  },
  { 
    fecha: "22 Mar", 
    curso: "Primeros Auxilios", 
    estado: "Últimos Lugares", 
    urgencia: "alta" 
  },
  { 
    fecha: "05 Abr", 
    curso: "Buenas Prácticas (BPM)", 
    estado: "Cupo Disponible", 
    urgencia: "baja" 
  },
  { 
    fecha: "12 Abr", 
    curso: "Prevención de Incendios", 
    estado: "Cupo Disponible", 
    urgencia: "baja" 
  }
];
// ==========================================================


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
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#84cc16] selection:text-white italic">
      
      {/* --- NAVEGACIÓN --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/cipsa-logo.png" alt="CIPSA Logo" className="h-14 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-10 font-bold text-sm uppercase tracking-widest text-white">
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
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <span className="bg-[#84cc16] text-white px-4 py-1 rounded text-[10px] font-black uppercase tracking-[0.4em]">Consultoría Elite</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight uppercase tracking-tighter italic">Líderes en <span className="text-[#84cc16]">Inocuidad</span> <br />y Control Industrial</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">Especialistas en certificar empresas agroindustriales. Asesoría técnica, control de plagas y capacitación profesional <span className="text-white font-bold underline">DC3</span>.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="#contacto" className="px-10 py-5 bg-[#84cc16] text-white rounded-full font-black text-lg hover:bg-lime-500 transition-all uppercase tracking-widest shadow-xl shadow-lime-500/20">Solicitar Cotización</a>
              <div className="flex items-center justify-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-bold uppercase text-xs tracking-widest"><Award className="text-[#84cc16]" /> Licencia COFEPRIS</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MÉTRICAS --- */}
      <div className="bg-white py-12 border-b border-slate-100 italic">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center uppercase tracking-tighter">
          {[
            { t: "Certificados", v: "DC3 / STPS" }, { t: "Especialidad", v: "Agroindustrial" },
            { t: "Capacitación", v: "HACCP / BPM" }, { t: "Personalizada", v: "Atención" }
          ].map((item, i) => (
            <div key={i} className="border-r last:border-0 border-slate-100 px-4">
              <p className="text-[#84cc16] font-black text-2xl mb-1">{item.v}</p>
              <p className="text-slate-400 text-[10px] font-black tracking-[0.3em] uppercase">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-32 bg-slate-50 italic">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[#1e293b] text-5xl font-black mb-6 uppercase tracking-tighter italic">Especialización Técnica</h2>
            <p className="text-slate-600 text-xl font-light">Aseguramos la integridad de su cadena de producción mediante sistemas avanzados de gestión de inocuidad.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Control Agroindustrial", icon: <Bug size={40} /> },
              { title: "Inocuidad Alimentaria", icon: <Microscope size={40} /> },
              { title: "Asesoría y Auditoría", icon: <ClipboardCheck size={40} /> }
            ].map((s, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="text-[#84cc16] mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-[#1e293b] uppercase tracking-tighter italic">{s.title}</h3>
                <div className="w-12 h-1 bg-[#84cc16] group-hover:w-full transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAPACITACIÓN --- */}
      <section id="capacitacion" className="py-32 bg-[#1e293b] text-white italic">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Formación Técnica <span className="text-[#84cc16]">DC3</span></h2>
            <p className="text-slate-400 text-xl mb-10 font-light">Capacitamos a su personal bajo los más estrictos estándares con validez oficial ante la STPS.</p>
            <ul className="space-y-6">
              {['Primeros Auxilios', 'Buenas Prácticas de Manufactura', 'HACCP e Inocuidad', 'Prevención de Incendios'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-bold"><CheckCircle2 className="text-[#84cc16]" size={20} /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">Capacitación Especializada</h3>
            <p className="text-slate-400 mb-10 font-light">Consulte las fechas de nuestros próximos cursos técnicos y talleres de certificación.</p>
            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="w-full py-6 bg-[#84cc16] text-white font-black rounded-2xl uppercase tracking-[0.2em] hover:bg-lime-500 transition-all shadow-xl shadow-lime-500/20 active:scale-95"
            >
              Abrir Calendario Didáctico
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTACTO Y MAPA --- */}
      <section id="contacto" className="py-32 bg-white italic">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-black mb-8 text-[#1e293b] uppercase tracking-tighter italic">Ubicación y Contacto</h2>
            <div className="space-y-8 mb-12 font-bold">
              <div className="flex items-center gap-6 text-xl group cursor-pointer">
                <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-white transition-all"><Mail /></div>
                <div><p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Email Corporativo</p>hectoruev292@gmail.com</div>
              </div>
              <div className="flex items-center gap-6 text-xl group cursor-pointer">
                <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-white transition-all"><Phone /></div>
                <div><p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Línea Directa</p>636 111 7811</div>
              </div>
            </div>
            
            <div className="h-96 bg-slate-100 rounded-[3rem] overflow-hidden grayscale border-8 border-slate-50 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.789123456789!2d-108.18898123456789!3d30.88765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86da36f012345678%3A0x1234567890abcdef!2sCipsa%20-%20Control%20de%20Plagas!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-[#84cc16]/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-12 rounded-[3.5rem] border border-slate-100 shadow-xl self-start italic">
            <h3 className="text-3xl font-black mb-8 text-[#1e293b] uppercase tracking-tighter">Solicitud de Auditoría</h3>
            <form action="https://formspree.io/f/mjgeeygr" method="POST" className="space-y-6">
              <input type="text" name="nombre" required placeholder="Nombre Completo" className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#84cc16] transition-all" />
              <input type="email" name="email" required placeholder="Correo Electrónico" className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#84cc16] transition-all" />
              <textarea name="mensaje" required placeholder="Describa su requerimiento técnico..." className="w-full p-5 bg-white border border-slate-200 rounded-2xl h-40 outline-none focus:ring-2 focus:ring-[#84cc16] transition-all"></textarea>
              <button type="submit" className="w-full py-6 bg-[#1e293b] text-[#84cc16] font-black text-lg rounded-2xl uppercase tracking-[0.2em] hover:bg-[#84cc16] hover:text-white transition-all shadow-xl active:scale-95">Enviar Solicitud Profesional</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- MODAL CALENDARIO DIDÁCTICO --- */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0f172a]/95 backdrop-blur-xl italic">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-2xl rounded-[3.5rem] p-12 relative shadow-2xl border border-white/20">
              <button onClick={() => setIsCalendarOpen(false)} className="absolute top-10 right-10 text-slate-300 hover:text-slate-900 transition-colors"><X size={32} /></button>
              <div className="mb-10">
                <h3 className="text-4xl font-black text-[#1e293b] mb-2 uppercase italic tracking-tighter">Agenda de Cursos <span className="text-[#84cc16]">2026</span></h3>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">Validez Oficial DC3 - STPS</p>
              </div>
              
              <div className="grid gap-6">
                {/* 👇 Aquí se cargan los cursos de la lista maestra automáticamente */}
                {MIS_CURSOS.map((c, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className="text-center bg-[#1e293b] text-[#84cc16] p-4 rounded-[1.5rem] min-w-[85px] shadow-lg group-hover:scale-105 transition-transform">
                        <p className="text-[10px] font-black opacity-60 uppercase leading-none">Día/Mes</p>
                        <p className="text-lg font-black uppercase mt-1 leading-none">{c.fecha}</p>
                      </div>
                      <div>
                        <p className="text-xl font-black text-[#1e293b] uppercase tracking-tighter">{c.curso}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-2 h-2 rounded-full animate-pulse ${c.urgencia === 'alta' ? 'bg-red-500' : 'bg-[#84cc16]'}`}></div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{c.estado}</p>
                        </div>
                      </div>
                    </div>
                    <a 
                      href={`https://wa.me/526361117811?text=Hola! Me interesa información para el curso de: ${c.curso}`} 
                      target="_blank"
                      className="bg-[#84cc16] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-lime-600 transition-all shadow-lg active:scale-95"
                    >
                      Apartar Lugar
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-slate-400 text-[9px] uppercase font-black tracking-widest italic">* Sujeto a cambios sin previo aviso.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-slate-50 py-16 border-t border-slate-100 italic">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <img src="/cipsa-logo.png" alt="CIPSA" className="h-8 opacity-20 grayscale" />
            <p>© 2026 CIPSA México. Consultoría en Inocuidad y Control Industrial.</p>
          </div>
          <div className="flex gap-8"><span className="text-[#84cc16]">Calidad</span><span>Seguridad</span><span>Higiene</span></div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOAT --- */}
      <a href="https://wa.me/526361117811" target="_blank" className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-all hover:scale-110 active:scale-90 shadow-green-500/20">
        <MessageCircle size={38} />
      </a>
    </div>
  );
}

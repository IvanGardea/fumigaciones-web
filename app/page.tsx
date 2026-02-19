"use client";
import React, { useState, useEffect } from 'react';
import { 
  Bug, Phone, CheckCircle2, MessageCircle, Menu, X, 
  Mail, GraduationCap, ClipboardCheck, ChevronRight, 
  Award, Microscope 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CipsaEnterprise() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const proximosCursos = [
    { fecha: "Marzo 2026", curso: "HACCP e Inocuidad", cupo: "Disponible" },
    { fecha: "Marzo 2026", curso: "Primeros Auxilios", cupo: "Disponible" },
    { fecha: "Abril 2026", curso: "Buenas Prácticas (BPM)", cupo: "Disponible" },
    { fecha: "Abril 2026", curso: "Prevención de Incendios", cupo: "Disponible" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#84cc16] selection:text-white">
      {/* NAVEGACIÓN */}
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

      {/* HERO SECTION */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/logo-sipsa-monito.jpg" alt="Fondo CIPSA" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className="flex justify-center mb-6">
            <span className="bg-[#84cc16] text-white px-4 py-1 rounded text-xs font-black uppercase tracking-[0.3em]">Consultoría de Calidad</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight uppercase tracking-tighter">Líderes en <span className="text-[#84cc16]">Inocuidad</span> <br />y Control Industrial</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light italic leading-relaxed">Especialistas en certificar empresas agroindustriales. Asesoría técnica, control de plagas y capacitación DC3.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#contacto" className="px-10 py-5 bg-[#84cc16] text-white rounded-full font-black text-lg hover:bg-lime-500 transition-all uppercase tracking-widest shadow-xl shadow-lime-500/20">Solicitar Cotización</a>
            <div className="flex items-center justify-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-bold uppercase text-sm tracking-widest"><Award className="text-[#84cc16]" /> Licencia COFEPRIS</div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MÉTRICAS */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center italic">
          {[
            { t: "Constancia", v: "DC3" }, { t: "Especialidad", v: "Agroindustrial" },
            { t: "Capacitación", v: "HACCP / BPM" }, { t: "Personalizada", v: "Atención" }
          ].map((item, i) => (
            <div key={i} className="border-r last:border-0 border-slate-100 px-4 text-[#1e293b]">
              <p className="text-[#84cc16] font-black text-xl mb-1">{item.v}</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="py-32 bg-slate-50 italic">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[#1e293b] text-5xl font-black mb-6 uppercase tracking-tighter">Especialización Técnica</h2>
            <p className="text-slate-600 text-xl font-light">Garantizamos la integridad de su cadena de producción mediante sistemas avanzados de gestión de inocuidad.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Control Agroindustrial", icon: <Bug size={40} /> },
              { title: "Inocuidad Alimentaria", icon: <Microscope size={40} /> },
              { title: "Asesoría y Auditoría", icon: <ClipboardCheck size={40} /> }
            ].map((s, i) => (
              <div key={i} className="bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="text-[#84cc16] mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{s.title}</h3>
                <div className="w-12 h-1 bg-[#84cc16] group-hover:w-full transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITACIÓN */}
      <section id="capacitacion" className="py-32 bg-[#1e293b] text-white italic">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 italic uppercase tracking-tighter">Formación Técnica <span className="text-[#84cc16]">DC3</span></h2>
            <p className="text-slate-400 text-xl mb-10 font-light">Capacitamos a su personal bajo los más estrictos estándares de seguridad y salud ocupacional.</p>
            <ul className="space-y-6">
              {['Primeros Auxilios', 'Buenas Prácticas de Manufactura', 'HACCP e Inocuidad', 'Prevención de Incendios'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-bold"><CheckCircle2 className="text-[#84cc16]" size={20} /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm relative">
            <h3 className="text-3xl font-bold mb-8 uppercase tracking-tighter italic">Próximos Talleres</h3>
            <div className="space-y-4 mb-8">
              {proximosCursos.map((c, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div>
                    <p className="text-[#84cc16] text-xs font-black uppercase">{c.fecha}</p>
                    <p className="font-bold">{c.curso}</p>
                  </div>
                  <span className="text-[10px] px-2 py-1 bg-[#84cc16]/20 text-[#84cc16] rounded-full font-black uppercase">{c.cupo}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setIsCalendarOpen(true)} className="w-full py-5 bg-[#84cc16] text-white font-black rounded-2xl uppercase tracking-widest hover:bg-lime-500 transition-all shadow-lg shadow-lime-500/20">Consultar Calendario</button>
          </div>
        </div>
      </section>

      {/* CONTACTO Y MAPA */}
      <section id="contacto" className="py-32 bg-white italic">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-black mb-8 text-[#1e293b] uppercase tracking-tighter italic">Ubicación y Contacto</h2>
            <div className="space-y-8 mb-12 font-bold">
              <div className="flex items-center gap-6 text-xl"><Mail className="text-[#84cc16]" /> hectoruev292@gmail.com</div>
              <div className="flex items-center gap-6 text-xl"><Phone className="text-[#84cc16]" /> 636 111 7811</div>
            </div>
            <div className="h-96 bg-slate-100 rounded-[3rem] overflow-hidden grayscale border-8 border-slate-50 shadow-2xl">
              {/* MAPA ACTUALIZADO CON TU DIRECCIÓN DE NUEVO CASAS GRANDES */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.693633842368!2d-107.9158652!3d30.4305436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86da3775437885b5%3A0x6b49e2954826b5c3!2sAv%20Benito%20Ju%C3%A1rez%20803%2C%20Centro%2C%2031700%20Nuevo%20Casas%20Grandes%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1708380000000!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="bg-[#f8fafc] p-12 rounded-[3rem] border border-slate-100 shadow-xl self-start italic">
            <h3 className="text-3xl font-black mb-8 text-[#1e293b] uppercase tracking-tighter">Solicitud de Información</h3>
            <form action="https://formspree.io/f/mjgeeygr" method="POST" className="space-y-6">
              <input type="text" name="nombre" required placeholder="Nombre Completo" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#84cc16] transition-all" />
              <input type="email" name="email" required placeholder="Correo Electrónico" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#84cc16] transition-all" />
              <textarea name="mensaje" required placeholder="Describa su requerimiento técnica..." className="w-full p-4 bg-white border border-slate-200 rounded-2xl h-40 outline-none focus:ring-2 focus:ring-[#84cc16] transition-all"></textarea>
              <button type="submit" className="w-full py-5 bg-[#1e293b] text-[#84cc16] font-black text-lg rounded-2xl uppercase tracking-widest hover:bg-[#84cc16] hover:text-white transition-all shadow-xl active:scale-95">Enviar Solicitud Profesional</button>
            </form>
          </div>
        </div>
      </section>

      {/* MODAL CALENDARIO */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0f172a]/90 backdrop-blur-xl italic">
            <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative shadow-2xl">
              <button onClick={() => setIsCalendarOpen(false)} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors"><X size={32} /></button>
              <h3 className="text-4xl font-black text-[#1e293b] mb-2 uppercase italic tracking-tighter">Calendario 2026</h3>
              <p className="text-[#84cc16] font-bold mb-8 uppercase text-xs tracking-widest">CIPSA Capacitación Continua</p>
              <div className="grid gap-4">
                {proximosCursos.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-6 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-all">
                    <div className="flex items-center gap-6">
                      <div className="text-center bg-[#1e293b] text-white p-3 rounded-2xl min-w-[90px]">
                        <p className="text-[10px] font-black opacity-60">FECHA</p>
                        <p className="text-xs font-black">{c.fecha}</p>
                      </div>
                      <p className="text-xl font-black text-[#1e293b]">{c.curso}</p>
                    </div>
                    <a href="https://wa.me/526361117811" className="bg-[#84cc16] text-white px-5 py-2 rounded-xl font-black text-[10px] uppercase hover:bg-lime-600 transition-all">Info</a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-slate-50 py-16 border-t border-slate-100 italic">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 CIPSA México. Consultoría en Inocuidad y Control de Plagas.</p>
          <div className="flex gap-8"><span className="text-[#84cc16]">Calidad</span><span>Seguridad</span><span>Higiene</span></div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/526361117811" target="_blank" className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-all hover:scale-110 active:scale-90 shadow-green-500/20">
        <MessageCircle size={38} />
      </a>
    </div>
  );
}

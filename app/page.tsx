"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Bug, Factory, Phone, 
  CheckCircle2, MessageCircle, Menu, X,
  MapPin, Mail, GraduationCap, ClipboardCheck,
  ChevronRight, Award, Microscope, Calendar as CalendarIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CipsaEnterprise() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // --- CONFIGURACIÓN DE TUS PRÓXIMOS CURSOS ---
  // Puedes cambiar estos textos cuando quieras actualizar tus fechas
  const proximosCursos = [
    { fecha: "Próximamente", curso: "HACCP e Inocuidad", cupo: "Disponible" },
    { fecha: "Próximamente", curso: "Primeros Auxilios", cupo: "Disponible" },
    { fecha: "Próximamente", curso: "Buenas Prácticas (BPM)", cupo: "Disponible" },
    { fecha: "Próximamente", curso: "Prevención de Incendios", cupo: "Disponible" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#84cc16] selection:text-white">
      
      {/* --- NAVEGACIÓN --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/cipsa-logo.png" alt="CIPSA Logo" className="h-14 w-auto object-contain" />
          </div>
          
          <div className="hidden md:flex items-center gap-10 font-bold text-sm uppercase tracking-widest">
            <a href="#inicio" className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:text-[#84cc16] transition-colors`}>Inicio</a>
            <a href="#servicios" className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:text-[#84cc16] transition-colors`}>Servicios</a>
            <a href="#capacitacion" className={`${scrolled ? 'text-slate-800' : 'text-white'} hover:text-[#84cc16] transition-colors`}>Capacitación</a>
            <a href="#contacto" className="bg-[#84cc16] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-lime-500/40 transition-all active:scale-95">
              Contacto
            </a>
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
              <span className="bg-[#84cc16] text-white px-4 py-1 rounded text-xs font-black uppercase tracking-[0.3em]">Consultoría de Calidad</span>
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
                <Award className="text-[#84cc16]" /> Licencia COFEPRIS
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MÉTRICAS --- */}
      <div className="bg-white py-12 border-b border-slate-100 italic">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { t: "Constancia", v: "DC3" },
            { t: "Especialidad", v: "Agroindustrial" },
            { t: "Capacitación", v: "HACCP / BPM / BPA" },
            { t: "Personalizada", v: "Atención" }
          ].map((item, i) => (
            <div key={i} className="border-r last:border-0 border-slate-100 px-4">
              <p className="text-[#84cc16] font-black text-xl mb-1">{item.v}</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-32 bg-slate-50 italic">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[#1e293b] text-4xl md:text-5xl font-black mb-6">Nuestra Especialización Técnica</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">No solo controlamos plagas; aseguramos la integridad de su cadena de producción mediante sistemas avanzados de gestión de inocuidad.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Control Agroindustrial", desc: "Gestión integral de plagas diseñada para plantas de procesamiento y sectores agrícolas de alta exigencia.", icon: <Bug size={40} /> },
              { title: "Inocuidad Alimentaria", desc: "Implementación de sistemas HACCP, Buenas Prácticas de Manufactura (BPM) y Buenas Prácticas Agrícolas (BPA).", icon: <Microscope size={40} /> },
              { title: "Asesoría y Auditoría", desc: "Acompañamiento técnico para la certificación de empresas y cumplimiento de normativas de salud.", icon: <ClipboardCheck size={40} /> }
            ].map((s, i) => (
              <div key={i} className="group bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="text-[#84cc16] mb-8 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-light">{s.desc}</p>
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
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light italic">Capacitamos a su personal bajo los más estrictos estándares. Se expiden constancias de habilidades laborales **DC3**.</p>
            <ul className="space-y-6">
              {['Primeros Auxilios', 'Buenas Prácticas de Manufactura (BPM)', 'HACCP y Análisis de Riesgos', 'Reglamentos Internos de Trabajo', 'Prevención y Control de Incendios'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-bold italic"><CheckCircle2 className="text-[#84cc16]" size={20} /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm relative">
            <div className="absolute top-0 right-0 p-8 opacity-10"><GraduationCap size={120} /></div>
            <h3 className="text-3xl font-bold mb-4 italic uppercase">Próximos Talleres</h3>
            <p className="text-slate-400 mb-8 font-light italic">Consulte disponibilidad para capacitaciones in-situ.</p>
            
            <div className="space-y-4 mb-8">
              {proximosCursos.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 italic">
                  <div>
                    <p className="text-[#84cc16] font-black text-xs uppercase tracking-widest">{c.fecha}</p>
                    <p className="font-bold">{c.curso}</p>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full uppercase font-black bg-[#84cc16]/20 text-[#84cc16]">
                    {c.cupo}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="inline-block w-full text-center py-4 bg-[#84cc16] text-white font-black rounded-2xl hover:bg-lime-500 transition-all tracking-widest uppercase shadow-lg shadow-lime-500/20"
            >
              Consultar Calendario
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTACTO Y FORMULARIO --- */}
      <section id="contacto" className="py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-black mb-8 text-[#1e293b] italic uppercase">Establezcamos <br />un nuevo estándar.</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl text-[#84cc16] shadow-sm group-hover:bg-[#84cc16] group-hover:text-white transition-all"><Mail /></div>
                <div><p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Email Corporativo</p><p className="text-xl font-bold text-[#1e293b]">hectoruev292@gmail.com</p></div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl text-[#84cc16] shadow-sm group-hover:bg-[#84cc16] group-hover:text-white transition-all"><Phone /></div>
                <div><p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Línea Directa</p><p className="text-xl font-bold text-[#1e293b]">636 111 7811</p></div>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden h-80 shadow-2xl grayscale border-8 border-slate-50">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110059.03091924846!2d-107.98668291646093!3d30.41217031349586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8696014457e5b565%3A0x7c73a8712217c2f8!2sNuevo%20Casas%20Grandes%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-12 rounded-[3rem] border border-slate-100 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-[#1e293b] italic uppercase tracking-tighter">Solicitud de Información</h3>
            
            {/* FORMULARIO CONECTADO A MJGEEYGR */}
            <form action="https://formspree.io/f/mjgeeygr" method="POST" className="space-y-6 italic">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="nombre" required placeholder="Nombre Completo" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#84cc16] outline-none transition-all" />
                <input type="text" name="empresa" placeholder="Empresa" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#84cc16] outline-none transition-all" />
              </div>
              <input type="email" name="email" required placeholder="Correo Electrónico" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#84cc16] outline-none transition-all" />
              <select name="servicio_interes" className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#84cc16] outline-none transition-all text-slate-500 font-bold">
                <option>Interés: Asesoría de Inocuidad</option>
                <option>Interés: Capacitación DC3</option>
                <option>Interés: Control de Plagas Industrial</option>
              </select>
              <textarea name="mensaje" required placeholder="Escriba aquí los detalles de su solicitud..." className="w-full p-4 bg-white border border-slate-200 rounded-2xl h-40 focus:ring-2 focus:ring-[#84cc16] outline-none transition-all font-light"></textarea>
              <button type="submit" className="w-full py-5 bg-[#1e293b] text-[#84cc16] font-black text-lg rounded-2xl hover:bg-[#84cc16] hover:text-white transition-all shadow-lg uppercase tracking-widest active:scale-95">
                Enviar Solicitud Profesional
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- VENTANA EMERGENTE (CALENDARIO) --- */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0f172a]/90 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative">
              <button onClick={() => setIsCalendarOpen(false)} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors"><X size={32} /></button>
              <h3 className="text-4xl font-black text-[#1e293b] mb-2 italic uppercase tracking-tighter">Calendario 2026</h3>
              <p className="text-[#84cc16] font-bold mb-8 tracking-[0.2em] uppercase text-xs italic">CIPSA Capacitación Continua</p>
              
              <div className="grid gap-4 italic">
                {proximosCursos.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-6 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-all group">
                    <div className="flex items-center gap-6">
                      <div className="text-center bg-[#1e293b] text-white p-3 rounded-2xl min-w-[80px] shadow-lg">
                        <p className="text-[10px] font-black uppercase opacity-60">FECHA</p>
                        <p className="text-xs font-black">{c.fecha}</p>
                      </div>
                      <p className="text-xl font-black text-[#1e293b]">{c.curso}</p>
                    </div>
                    <a href={`https://wa.me/526361117811?text=Hola CIPSA, me interesa información sobre el curso: ${c.curso}`} className="bg-[#84cc16] text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase hover:bg-lime-600 transition-all">Info</a>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 py-16 border-t border-slate-100 italic">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center gap-4">
            <img src="/cipsa-logo.png" alt="CIPSA" className="h-8 opacity-20 grayscale" />
            <p>© 2026 CIPSA México. Consultoría en Inocuidad.</p>
          </div>
          <div className="flex gap-8">
            <span className="text-[#84cc16]">Calidad</span>
            <span>Seg

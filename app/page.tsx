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

      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/logo-sipsa-monito.jpg" alt="Fondo CIPSA" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className="flex justify-center mb-6">
            <span className="bg-[#84cc16] text-white px-4 py-1 rounded text-xs font-black uppercase tracking-[0.3em]">Consultoría de Calidad</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">Líderes en <span className="text-[#84cc16]">Inocuidad</span> <br />y Control Industrial</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light italic">Especialistas en certificar empresas agroindustriales. Asesoría técnica y capacitación DC3.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#contacto" className="px-10 py-5 bg-[#84cc16] text-white rounded-full font-bold text-lg hover:bg-lime-500 transition-all">Solicitar Cotización</a>
            <div className="flex items-center justify-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-bold"><Award className="text-[#84cc16]" /> Licencia COFEPRIS</div>
          </div>
        </div>
      </section>

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

      <section id="servicios" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20 italic">
            <h2 className="text-[#1e293b] text-4xl font-black mb-6">Especialización Técnica</h2>
            <p className="text-slate-600 text-lg">Aseguramos la integridad de su producción mediante sistemas avanzados de gestión de inocuidad.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 italic">
            {[
              { title: "Control Agroindustrial", icon: <Bug size={40} /> },
              { title: "Inocuidad Alimentaria", icon: <Microscope size={40} /> },
              { title: "Asesoría y Auditoría", icon: <ClipboardCheck size={40} /> }
            ].map((s, i) => (
              <div key={i} className="bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="text-[#84cc16] mb-8">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{s.title}</h3>
                <div className="w-12 h-1 bg-[#84cc16]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capacitacion" className="py-32 bg-[#1e293b] text-white italic">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 italic">Formación con <span className="text-[#84cc16]">Valor Curricular</span></h2>
            <ul className="space-y-6">
              {['Primeros Auxilios', 'BPM / HACCP', 'DC3 Skills'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg"><CheckCircle2 className="text-[#84cc16]" size={20} /> {item}</li>
              ))}

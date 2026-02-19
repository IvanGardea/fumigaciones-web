"use client";
import React, { useState } from 'react';
import { 
  ShieldCheck, Bug, Factory, Phone, 
  CheckCircle2, MessageCircle, Menu, X,
  MapPin, Mail, GraduationCap, ClipboardCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CipsaWeb() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/cipsa-logo.jpg" alt="CIPSA Logo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-[#1e293b]">
            <a href="#servicios" className="hover:text-[#84cc16] transition-colors">Servicios</a>
            <a href="#certificaciones" className="hover:text-[#84cc16] transition-colors">Capacitación</a>
            <a href="#contacto" className="bg-[#1e293b] text-white px-6 py-2 rounded-lg hover:bg-[#84cc16] transition-all">
              Cotizar
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 rounded-md bg-[#84cc16]/10 text-[#65a30d] font-bold text-sm mb-6 uppercase tracking-wider">
              Certificación COFEPRIS & Registro DS3
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-[#1e293b] leading-tight mb-6">
              Control Industrial de Plagas y <span className="text-[#84cc16]">Asesoría Especializada</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Expertos en inocuidad alimentaria y certificación agroindustrial. Protegemos su producción con estándares internacionales y capacitación técnica de alto nivel.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="px-8 py-4 bg-[#84cc16] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-[#65a30d] transition-all">
                Solicitar Auditoría
              </a>
              <a href="tel:6361117811" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2">
                <Phone size={20} /> 636 111 7811
              </a>
            </div>
          </motion.div>

          <div className="relative">
             {/* Aquí usa tu imagen principal de la agroindustria */}
            <img 
              src="/logo-sipsa-monito.jpg" 
              alt="CIPSA Especialistas" 
              className="rounded-3xl shadow-2xl border-8 border-white object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* --- SERVICIOS TÉCNICOS --- */}
      <section id="servicios" className="py-24">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Soluciones Integrales para la Industria</h2>
          <div className="w-24 h-1 bg-[#84cc16] mx-auto"></div>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
            <Factory className="text-[#84cc16] mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Control Agroindustrial</h3>
            <p className="text-slate-600">Control de plagas especializado en empresas de alimentos y sector agrícola con expedición de DS3.</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
            <ClipboardCheck className="text-[#84cc16] mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Inocuidad Alimentaria</h3>
            <p className="text-slate-600">Implementación de HACCP, Buenas Prácticas de Manufactura (BPM) y Prácticas Agrícolas.</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
            <GraduationCap className="text-[#84cc16] mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Capacitación y Cursos</h3>
            <p className="text-slate-600">Primeros auxilios, reglamentos internos y normativas vigentes para su personal técnico.</p>
          </div>
        </div>
      </section>

      {/* --- FORMULARIO Y CONTACTO --- */}
      <section id="contacto" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8 italic">Contacte con un consultor experto</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#84cc16] rounded-lg"><Mail /></div>
                <div>
                  <p className="text-slate-400 text-sm italic">Correo Electrónico</p>
                  <p className="text-xl font-medium">hectoruev292@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#84cc16] rounded-lg"><Phone /></div>
                <div>
                  <p className="text-slate-400 text-sm italic">Línea Directa</p>
                  <p className="text-xl font-medium">636 111 7811</p>
                </div>
              </div>
            </div>

            {/* MAPA GOOGLE MAPS */}
            <div className="mt-12 rounded-2xl overflow-hidden h-64 grayscale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113645.748126759!2d-107.97143642398555!3d30.413723363402664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86940d90956b9e7b%3A0xc3f607421160a006!2sNuevo%20Casas%20Grandes%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1700000000000" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
              </iframe>
            </div>
          </div>

          <form className="bg-white p-10 rounded-3xl text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-[#1e293b]">Solicitud de Presupuesto</h3>
            <div className="grid gap-4">
              <input type="text" placeholder="Nombre de la Empresa" className="p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#84cc16]" />
              <input type="email" placeholder="Correo Electrónico" className="p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#84cc16]" />
              <select className="p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#84cc16]">
                <option>Tipo de Servicio...</option>
                <option>Control de Plagas Industrial</option>
                <option>Capacitación HACCP / BPM</option>
                <option>Auditoría de Inocuidad</option>
              </select>
              <textarea placeholder="Detalles de su proyecto..." className="p-4 bg-slate-50 border border-slate-200 rounded-xl h-32 outline-none focus:border-[#84cc16]"></textarea>
              <button className="py-4 bg-[#84cc16] text-white font-bold rounded-xl shadow-lg hover:shadow-lime-500/30 transition-all uppercase tracking-widest">
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- BOTÓN WHATSAPP --- */}
      <a href="https://wa.me/526361117811" target="_blank" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

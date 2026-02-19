"use client";
import React, { useState } from 'react';
import { 
  ShieldCheck, Bug, Home, Factory, Phone, 
  CheckCircle2, MessageCircle, Menu, X,
  ChevronDown, MapPin, Mail, Instagram, Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePestControl() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-primary w-8 h-8" />
            <span className="text-xl font-bold tracking-tight text-primary">Control Integral</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#servicios" className="hover:text-secondary transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-secondary transition-colors">Nosotros</a>
            <a href="#contacto" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all">
              Cotizar ahora
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-primary font-semibold text-sm mb-6">
              🛡️ Certificados por COFEPRIS
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Protegemos tu hogar de <span className="text-primary"> Plagas </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Soluciones profesionales de fumigación y control de plagas con tecnología de punta y productos 100% seguros para tu familia y mascotas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-green-900/20 transition-all">
                Agendar Inspección
              </a>
              <a href="tel:6361117811" className="px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center gap-2">
                <Phone size={20} /> 636 111 7811
              </a>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-50" />
            <img 
              src="/logo-sipsa-monito.jpg" 
              alt="Técnico Fumigando" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestras Soluciones</h2>
            <p className="text-slate-600">Especialistas en la eliminación de cualquier amenaza</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cucarachas", desc: "Eliminación de raíz con geles y aspersión dirigida.", icon: <Bug /> },
              { title: "Roedores", desc: "Trampas y sellado de puntos de entrada estratégicos.", icon: <ShieldCheck /> },
              { title: "Termitas", desc: "Barreras químicas de larga duración para tu madera.", icon: <Home /> }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary transition-colors group">
                <div className="w-14 h-14 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <button className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saber más <CheckCircle2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTORES --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Atendemos todos los sectores</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {['Restaurantes', 'Hoteles', 'Hospitales', 'Industrias', 'Escuelas', 'Casas'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-green-100">
                      <CheckCircle2 size={18} className="text-secondary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                <p className="text-2xl font-light italic opacity-90">
                  "Desde que contratamos a Control Integral, nuestra certificación de salubridad siempre está al 100%."
                </p>
                <p className="mt-4 font-bold text-secondary">— Restaurante El Mesón</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULARIO --- */}
      <section id="contacto" className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Tienes una emergencia?</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Completa el formulario y un técnico certificado se pondrá en contacto contigo en menos de 20 minutos.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary"><Phone /></div>
                  <div><p className="text-sm text-slate-500">Llámanos</p><p className="font-bold">55 1234 5678</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary"><MapPin /></div>
                  <div><p className="text-sm text-slate-500">Ubicación</p><p className="font-bold">CDMX y Área Metropolitana</p></div>
                </div>
              </div>
            </div>
            
            <form className="space-y-4 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <input type="text" placeholder="Tu nombre" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="tel" placeholder="Teléfono" className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                <input type="email" placeholder="Email" className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <select className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none">
                <option>Tipo de plaga...</option>
                <option>Cucarachas</option>
                <option>Roedores</option>
                <option>Otro</option>
              </select>
              <textarea placeholder="Mensaje" className="w-full p-4 bg-slate-50 border-none rounded-xl h-32 focus:ring-2 focus:ring-primary outline-none"></textarea>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-green-800 transition-all">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/525512345678" 
        target="_blank" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={32} />
      </a>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white mb-6">
            <ShieldCheck className="text-secondary w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">Control Integral</span>
          </div>
          <p className="mb-8">© 2026 Control Integral Fumigaciones. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );

}


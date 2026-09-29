"use client";

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alejandro Morales',
    company: 'CEO en ScaleB2B Agency',
    timeAgo: 'hace 4 días',
    avatarColor: '#B73A25', // Brick red
    testimonial:
      'InHubFlow nos permitió triplicar el volumen de reuniones B2B para nuestros clientes. Las secuencias de seguimiento y las notas asistidas por IA tienen más del 45% de tasa de respuesta.',
  },
  {
    id: 2,
    name: 'Sofia Castiglione',
    company: 'VP of Growth en SaaS Venture',
    timeAgo: 'hace 1 semana',
    avatarColor: '#1E8E3E', // Forest green
    testimonial:
      'InHubFlow unificó todo nuestro pipeline de ventas. La gestión inteligente de contactos y el Asistente SDR nos llenan la agenda de demostraciones comerciales todas las semanas.',
  },
  {
    id: 3,
    name: 'Martín Benítez',
    company: 'Fundador en B2B Growth Lab',
    timeAgo: 'hace 2 semanas',
    avatarColor: '#6B3B30', // Rust brown
    testimonial:
      'La seguridad empresarial y los ritmos de actividad humanizados son impecables. Gestionamos múltiples cuentas corporativas con total tranquilidad y cumplimiento.',
  },
  {
    id: 4,
    name: 'Valeria Sotomayor',
    company: 'Head of Sales en Finova Enterprise',
    timeAgo: 'hace 3 semanas',
    avatarColor: '#8430CE', // Purple
    testimonial:
      'La importación y segmentación de contactos junto con las secuencias de email multietapa nos generaron 38 reuniones con Directores Financieros en nuestro primer mes.',
  },
  {
    id: 5,
    name: 'Carlos Da Silva',
    company: 'Director de Expansión en EnterpriseTech',
    timeAgo: 'hace 1 mes',
    avatarColor: '#247D8F', // Teal
    testimonial:
      'El Asistente SDR de IA responde en segundos a las dudas comerciales de los clientes en LinkedIn y les comparte nuestro enlace de Google Calendar en piloto automático.',
  },
  {
    id: 6,
    name: 'Lucía Fernández',
    company: 'Consultora de Negocios & Ventas B2B',
    timeAgo: 'hace 1 mes',
    avatarColor: '#8F7FB5', // Lavender
    testimonial:
      'Generé 14 llamadas calificadas en mi primera semana sin gastar horas en tareas manuales de venta. La interfaz es intuitiva y el flujo de automatización funciona a la perfección.',
  },
];

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6);

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[#070b14] text-white">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-purple-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          <div className="max-w-2xl mx-auto mb-10 sm:mb-14 text-center">
            {/* Google Reviews Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 shadow-sm">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <div className="flex items-center gap-0.5 text-[#FBBC04]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-[#FBBC04]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-xs">5.0</span>
              <span className="text-gray-400 text-xs">· Google Reviews</span>
            </div>

            <h2 className="mb-3 sm:mb-4 font-extrabold text-center text-white text-2xl sm:text-3xl md:text-4xl tracking-tight">
              Lo que dicen los equipos que{' '}
              <span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0099ff 0%, #0022ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                escalan con InHubFlow
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 px-2 leading-relaxed">
              Empresas, agencias y directores comerciales que optimizan su comunicación comercial multicanal y multiplican sus ventas cada mes.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 w-full">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Show More Button */}
          <div className="mt-8 text-center relative z-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-full transition-all duration-200 focus:outline-none cursor-pointer active:scale-98 shadow-lg backdrop-blur-md"
            >
              <span>{showAll ? 'Ver menos' : 'Ver más testimonios'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay when collapsed */}
      {!showAll && (
        <div
          className="h-[180px] sm:h-[264px] w-full absolute bottom-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(7, 11, 20, 0) 0%, #070b14 85%)',
          }}
        />
      )}
    </section>
  );
}

// Google Reviews Card Component
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="p-5 sm:p-6 bg-[#0b1324]/90 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl shadow-black/25 hover:-translate-y-1 flex flex-col justify-between group">
      <div>
        {/* Top Header: Avatar + User Info + Google G Icon */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3 min-w-0">
            {/* Google Profile Avatar (Initials on color) */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0 shadow-sm select-none"
              style={{ backgroundColor: testimonial.avatarColor }}
            >
              {testimonial.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-bold text-sm sm:text-base leading-tight truncate">
                {testimonial.name}
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                {testimonial.timeAgo}
              </p>
            </div>
          </div>

          {/* Official Google G Logo */}
          <div className="shrink-0 p-1.5 rounded-full bg-white/5 border border-white/10" title="Reseña verificada en Google">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
          </div>
        </div>

        {/* 5 Google Stars */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Comment Text */}
        <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-normal">
          &quot;{testimonial.testimonial}&quot;
        </p>
      </div>

      {/* Role / Company Footnote */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
        <span className="truncate">{testimonial.company}</span>
        <span className="text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Verificada
        </span>
      </div>
    </div>
  );
}

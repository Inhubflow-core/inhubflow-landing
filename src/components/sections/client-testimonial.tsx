"use client";

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alejandro Morales',
    company: 'CEO en ScaleB2B Agency',
    image: '/images/users/user-1.jpg',
    testimonial:
      'InHubFlow nos permitió triplicar el volumen de reuniones B2B para nuestros clientes. Las secuencias de seguimiento y las notas asistidas por IA tienen más del 45% de tasa de respuesta.',
  },
  {
    id: 2,
    name: 'Sofia Castiglione',
    company: 'VP of Growth en SaaS Venture',
    image: '/images/users/user-2.jpg',
    testimonial:
      'InHubFlow unificó todo nuestro pipeline de ventas. La gestión inteligente de contactos y el Asistente SDR nos llenan la agenda de demostraciones comerciales todas las semanas.',
  },
  {
    id: 3,
    name: 'Martín Benítez',
    company: 'Fundador en B2B Growth Lab',
    image: '/images/users/user-3.jpg',
    testimonial:
      'La seguridad empresarial y los ritmos de actividad humanizados son impecables. Gestionamos múltiples cuentas corporativas con total tranquilidad y cumplimiento.',
  },
  {
    id: 4,
    name: 'Valeria Sotomayor',
    company: 'Head of Sales en Finova Enterprise',
    image: '/images/users/user-4.jpg',
    testimonial:
      'La importación y segmentación de contactos junto con las secuencias de email multietapa nos generaron 38 reuniones con Directores Financieros en nuestro primer mes.',
  },
  {
    id: 5,
    name: 'Carlos Da Silva',
    company: 'Director de Expansión en EnterpriseTech',
    image: '/images/users/user-5.jpg',
    testimonial:
      'El Asistente SDR de IA responde en segundos a las dudas comerciales de los clientes en LinkedIn y les comparte nuestro enlace de Google Calendar en piloto automático.',
  },
  {
    id: 6,
    name: 'Lucía Fernández',
    company: 'Consultora de Negocios & Ventas B2B',
    image: '/images/users/user-6.jpg',
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

// Testimonial Card Component
function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="p-3 sm:p-3.5 bg-[#0b1324]/85 backdrop-blur-xl border border-white/10 hover:border-[#0099ff]/50 rounded-2xl sm:rounded-[22px] transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 group">
      <div className="flex items-center p-3 mb-3 bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl">
        <Image
          src={testimonial.image || '/placeholder.svg'}
          alt={testimonial.name}
          width={48}
          height={48}
          className="size-11 sm:size-12 object-cover ring-2 ring-[#0099ff]/40 mr-3.5 rounded-full shrink-0"
        />
        <div className="min-w-0">
          <h3 className="text-white font-bold text-sm sm:text-base truncate group-hover:text-sky-300 transition-colors">
            {testimonial.name}
          </h3>
          <p className="text-xs text-gray-400 truncate">
            {testimonial.company}
          </p>
        </div>
      </div>
      <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
        <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
          &quot;{testimonial.testimonial}&quot;
        </p>
      </div>
    </div>
  );
}

"use client";

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alejandro Morales',
    company: 'CEO en ScaleB2B Agency',
    image: '/images/users/user-1.png',
    testimonial:
      'InHubFlow nos permitió triplicar el volumen de reuniones B2B para nuestros clientes. El warm-up de correo y las notas de conexión en LinkedIn con IA tienen más del 45% de tasa de respuesta.',
  },
  {
    id: 2,
    name: 'Sofia Castiglione',
    company: 'VP of Growth en SaaS Venture',
    image: '/images/users/user-2.png',
    testimonial:
      'Reemplazamos Waalaxy y Lemlist. El buscador nativo de tomadores de decisión y el Agente SDR en LinkedIn nos llenan la agenda de demostraciones comerciales todas las semanas.',
  },
  {
    id: 3,
    name: 'Martín Benítez',
    company: 'Fundador en B2B Growth Lab',
    image: '/images/users/user-3.png',
    testimonial:
      'La seguridad anti-bloqueo y la emulación de comportamiento humano son impecables. Gestionamos múltiples cuentas corporativas en LinkedIn con total tranquilidad.',
  },
  {
    id: 4,
    name: 'Valeria Sotomayor',
    company: 'Head of Sales en Finova Enterprise',
    image: '/images/users/user-4.png',
    testimonial:
      'La extracción directa desde Sales Navigator y la combinación con Cold Email multietapa nos generó 38 reuniones con Directores Financieros en nuestro primer mes.',
  },
  {
    id: 5,
    name: 'Carlos Da Silva',
    company: 'Director de Expansión en EnterpriseTech',
    image: '/images/users/user-1.png',
    testimonial:
      'El Agente SDR de IA responde en segundos a las dudas comerciales de los prospectos en LinkedIn y les comparte nuestro enlace de Google Calendar en piloto automático.',
  },
  {
    id: 6,
    name: 'Lucía Fernández',
    company: 'Consultora de Negocios & Ventas B2B',
    image: '/images/users/user-2.png',
    testimonial:
      'Generé 14 llamadas calificadas en mi primera semana sin gastar horas buscando prospectos a mano. La interfaz es intuitiva y el flujo de automatización funciona a la perfección.',
  },
];

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6);

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-28 relative bg-gray-50/50 dark:bg-[#0c111d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="max-w-2xl mx-auto mb-10 sm:mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
              Casos de Éxito
            </span>
            <h2 className="mb-3 sm:mb-4 font-extrabold text-center text-gray-900 text-2xl sm:text-3xl md:text-4xl dark:text-white tracking-tight">
              Lo que dicen los equipos que escalan con InHubFlow
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">
              Empresas, agencias y directores comerciales que automatizan su prospección multicanal y multiplican sus ventas cada mes.
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
              className="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 px-6 py-3 text-xs sm:text-sm font-semibold text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-700 rounded-full shadow-xs hover:bg-gray-50 focus:outline-none cursor-pointer active:scale-98"
            >
              <span>{showAll ? 'Ver menos' : 'Ver más testimonios'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay when collapsed */}
      {!showAll && (
        <div className="white-gradient h-[180px] sm:h-[264px] w-full absolute bottom-0 pointer-events-none" />
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
    <div className="p-2 sm:p-2.5 bg-white dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-2xl sm:rounded-[20px] border-gray-200 shadow-xs hover:shadow-md transition-shadow">
      <div className="flex items-center p-3 mb-2.5 bg-gray-50/80 dark:bg-white/[0.03] rounded-xl sm:rounded-2xl">
        <Image
          src={testimonial.image || '/placeholder.svg'}
          alt={testimonial.name}
          width={48}
          height={48}
          className="size-11 sm:size-12 object-cover ring-2 ring-white dark:ring-gray-700 mr-3.5 rounded-full drop-shadow-sm shrink-0"
        />
        <div className="min-w-0">
          <h3 className="text-gray-900 font-bold text-sm sm:text-base dark:text-white/90 truncate">
            {testimonial.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {testimonial.company}
          </p>
        </div>
      </div>
      <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/50 dark:bg-white/[0.02]">
        <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          &quot;{testimonial.testimonial}&quot;
        </p>
      </div>
    </div>
  );
}

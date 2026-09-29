"use client";

import React from 'react';

// Fila 1: 9 testimonios únicos de directivos y fundadores B2B
const topRowTestimonials = [
  {
    id: 1,
    name: 'Alejandro Morales',
    company: 'CEO en ScaleB2B Agency',
    timeAgo: 'hace 3 días',
    avatarColor: '#B73A25',
    testimonial:
      'InHubFlow nos permitió triplicar el volumen de reuniones B2B para nuestros clientes. Las secuencias multicanal y notas por IA tienen más del 45% de respuesta real.',
  },
  {
    id: 2,
    name: 'Sofia Castiglione',
    company: 'VP of Growth en SaaS Venture',
    timeAgo: 'hace 5 días',
    avatarColor: '#1E8E3E',
    testimonial:
      'Unificó todo nuestro pipeline de prospección. La detección de señales de intención en LinkedIn nos llena la agenda comercial todas las semanas con decisores reales.',
  },
  {
    id: 3,
    name: 'Martín Benítez',
    company: 'Fundador en B2B Growth Lab',
    timeAgo: 'hace 1 semana',
    avatarColor: '#6B3B30',
    testimonial:
      'La seguridad en LinkedIn y los ritmos de actividad humanizados son de otro nivel. Llevamos 6 meses gestionando múltiples cuentas corporativas sin ningún bloqueo.',
  },
  {
    id: 4,
    name: 'Valeria Sotomayor',
    company: 'Head of Sales en Finova Enterprise',
    timeAgo: 'hace 1 semana',
    avatarColor: '#8430CE',
    testimonial:
      'La combinación del Radar de Señales con secuencias de correo frío nos generó 38 reuniones con Directores Financieros (CFOs) en nuestro primer mes de uso.',
  },
  {
    id: 5,
    name: 'Carlos Da Silva',
    company: 'Director de Expansión en EnterpriseTech',
    timeAgo: 'hace 2 semanas',
    avatarColor: '#247D8F',
    testimonial:
      'El Asistente SDR de IA responde las dudas complejas de los prospectos en LinkedIn y les comparte nuestro Calendly en minutos. Cierra agendas mientras dormimos.',
  },
  {
    id: 6,
    name: 'Lucía Fernández',
    company: 'Consultora de Negocios & Ventas B2B',
    timeAgo: 'hace 2 semanas',
    avatarColor: '#8F7FB5',
    testimonial:
      'Generé 14 llamadas calificadas en mi primera semana sin pasar horas en prospección manual. La herramienta es intuitiva y el soporte responde al instante.',
  },
  {
    id: 7,
    name: 'Javier Méndez',
    company: 'Co-Founder & CRO en CloudFlow Latam',
    timeAgo: 'hace 3 semanas',
    avatarColor: '#C2410C',
    testimonial:
      'Reemplazamos tres herramientas distintas por InHubFlow. El ROI fue positivo desde la segunda semana y nuestro equipo comercial ahora solo atiende reuniones listas.',
  },
  {
    id: 8,
    name: 'Mariana Rivas',
    company: 'Directora Comercial en Logix Solutions',
    timeAgo: 'hace 3 semanas',
    avatarColor: '#0891B2',
    testimonial:
      'El filtro contra falsos positivos con IA es brutal. Ya no perdemos tiempo con perfiles que no deciden presupuestos; solo entran leads con intención real de compra.',
  },
  {
    id: 9,
    name: 'Esteban Salazar',
    company: 'Gerente de Cuentas Estratégicas en Nexo B2B',
    timeAgo: 'hace 1 mes',
    avatarColor: '#15803D',
    testimonial:
      'Poder rastrear a los usuarios que interactúan con las publicaciones de nuestros competidores directos nos abrió un canal de captación que ninguna otra suite ofrecía.',
  },
];

// Fila 2: 9 testimonios diferentes adicionales
const bottomRowTestimonials = [
  {
    id: 10,
    name: 'Andrés Guimarães',
    company: 'Sales Operations Lead en FinTech Hub',
    timeAgo: 'hace 2 días',
    avatarColor: '#0284C7',
    testimonial:
      'La integración nativa con Google Calendar y Calendly automatizó el 90% de nuestra fricción de agendamiento. Los leads reservan su horario de demo en minutos.',
  },
  {
    id: 11,
    name: 'Camila Osorio',
    company: 'Founder & MD en Agencia VentaActiva',
    timeAgo: 'hace 4 días',
    avatarColor: '#7C3AED',
    testimonial:
      'Gestionamos más de 15 clientes B2B dentro de la plataforma. La capacidad de segmentar por industria y disparar cadencias personalizadas nos da una ventaja brutal.',
  },
  {
    id: 12,
    name: 'Diego Santillán',
    company: 'Head of Business Dev en DataSync Corp',
    timeAgo: 'hace 6 días',
    avatarColor: '#0D9488',
    testimonial:
      'El calentamiento de dominios (warmup) y la rotación inteligente de cuentas de correo multiplicaron nuestra tasa de apertura de email al 68%. Simplemente funciona.',
  },
  {
    id: 13,
    name: 'Paula Echeverría',
    company: 'VP of Enterprise Sales en Soluciones TI Latam',
    timeAgo: 'hace 1 semana',
    avatarColor: '#BE123C',
    testimonial:
      'El Radar de Señales nos avisa cuando un directivo clave asume su cargo o la empresa levanta capital. Entramos a la conversación antes que toda la competencia.',
  },
  {
    id: 14,
    name: 'Rodrigo Peñaloza',
    company: 'CEO en LeadRocket Outbound',
    timeAgo: 'hace 2 semanas',
    avatarColor: '#B45309',
    testimonial:
      'La calidad de los copies generados con IA para LinkedIn supera a la de cualquier SDR junior que hayamos contratado. Son naturales, directos y cero invasivos.',
  },
  {
    id: 15,
    name: 'Fernanda Alarcón',
    company: 'Directora de Alianzas en GrowthX Partners',
    timeAgo: 'hace 2 semanas',
    avatarColor: '#4338CA',
    testimonial:
      'La función de Social Selling con IA nos permite mantener presencia activa en LinkedIn y atraer prospectos calificados sin dedicarle más de 10 minutos a la semana.',
  },
  {
    id: 16,
    name: 'Matías Krumm',
    company: 'Partner en Valora Consultores',
    timeAgo: 'hace 3 semanas',
    avatarColor: '#4D7C0F',
    testimonial:
      'Duplicamos la tasa de conversión a videollamada comercial. El flujo de seguimiento multietapa nunca deja caer un lead interesado en el olvido.',
  },
  {
    id: 17,
    name: 'Elena Domínguez',
    company: 'Chief Commercial Officer en InnovaCorp',
    timeAgo: 'hace 1 mes',
    avatarColor: '#9333EA',
    testimonial:
      'Pasamos de enviar mensajes genéricos sin respuesta a tener una tasa de aceptación de conexión del 52% en perfiles de alta gerencia en toda Iberoamérica.',
  },
  {
    id: 18,
    name: 'Tomás Arismendi',
    company: 'Demand Generation Manager en SaaS Metrics',
    timeAgo: 'hace 1 mes',
    avatarColor: '#0369A1',
    testimonial:
      'InHubFlow es indispensable para cualquier empresa B2B que quiera escalar reuniones sin inflar los costes de personal. Nuestra mejor inversión de software este año.',
  },
];

export default function TestimonialsSection() {
  // Duplicamos cada fila para un loop continuo 100% fluido (0% a -50% translateX)
  const topLoop = [...topRowTestimonials, ...topRowTestimonials];
  const bottomLoop = [...bottomRowTestimonials, ...bottomRowTestimonials];

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[#070b14] text-white">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-purple-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-14 text-center">
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

        <h2 className="mb-3 sm:mb-4 font-extrabold text-center text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
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
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 px-2 leading-relaxed">
          Más de 120 empresas y agencias B2B en toda Iberoamérica prospectan y llenan su calendario comercial con InHubFlow.
        </p>
      </div>

      {/* Infinite Dual-Row Carousel Container with Side Gradient Masks */}
      <div className="relative w-full overflow-hidden space-y-5 sm:space-y-6">
        {/* Left Fade Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-20 bg-gradient-to-r from-[#070b14] via-[#070b14]/80 to-transparent" />
        {/* Right Fade Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-20 bg-gradient-to-l from-[#070b14] via-[#070b14]/80 to-transparent" />

        {/* Fila 1 (Superior): 9 testimonios moviéndose continuamente hacia la IZQUIERDA */}
        <div className="flex gap-5 sm:gap-6 w-max animate-marquee-left will-change-transform">
          {topLoop.map((t, idx) => (
            <GoogleReviewCard key={`top-${t.id}-${idx}`} testimonial={t} />
          ))}
        </div>

        {/* Fila 2 (Inferior): 9 testimonios diferentes moviéndose continuamente hacia la DERECHA */}
        <div className="flex gap-5 sm:gap-6 w-max animate-marquee-right will-change-transform">
          {bottomLoop.map((t, idx) => (
            <GoogleReviewCard key={`bottom-${t.id}-${idx}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Tarjeta individual con diseño fiel a Google Reviews
function GoogleReviewCard({
  testimonial,
}: {
  testimonial: (typeof topRowTestimonials)[number];
}) {
  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 p-5 sm:p-6 bg-[#0b1324]/90 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-xl shadow-black/25 flex flex-col justify-between">
      <div>
        {/* Cabecera: Avatar de Iniciales Google + Nombre/Tiempo + Logo Google */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Círculo de Inicial con color de perfil Google */}
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

          {/* Logo oficial de Google "G" */}
          <div className="shrink-0 p-1.5 rounded-full bg-white/5 border border-white/10" title="Reseña en Google">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
          </div>
        </div>

        {/* 5 Estrellas Google doradas */}
        <div className="flex items-center gap-1 mb-2.5">
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

        {/* Texto del comentario */}
        <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-normal">
          &quot;{testimonial.testimonial}&quot;
        </p>
      </div>

      {/* Cargo / Empresa y Verificación */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
        <span className="truncate max-w-[210px]">{testimonial.company}</span>
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

'use client';

import React from 'react';
import { useLanguage } from '@/app/providers/language';

export default function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      stepColor: 'text-blue-600 dark:text-blue-400',
      badge: 'Fase 1: Segmentación',
      badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
      stepHoverColor: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      cardHover: 'hover:border-blue-500/50 dark:hover:border-blue-500/50',
      title: 'Define tu cliente ideal',
      subtitle: 'Encuentra a los decisores adecuados',
      subtitleColor: 'text-blue-600 dark:text-blue-400',
      description:
        'Con Lead Finder, define el perfil de cliente ideal de tu negocio: cargo, país, ciudad, industria, tamaño de empresa y otros criterios relevantes para tu oferta. InHubFlow te ayuda a construir una lista de prospectos alineada con lo que vendes, antes de iniciar cualquier campaña.',
      bullet1: 'Segmentación por cargo, ubicación e industria',
      bullet2: 'Filtros para priorizar empresas y decisores relevantes',
      bullet3: 'Una base de prospectos enfocada en tu cliente ideal',
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" x2="18" y1="12" y2="12" />
          <line x1="6" x2="2" y1="12" y2="12" />
          <line x1="12" x2="12" y1="6" y2="2" />
          <line x1="12" x2="12" y1="22" y2="18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      step: '02',
      stepColor: 'text-blue-600 dark:text-blue-400',
      badge: 'Fase 2: Detección',
      badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      stepHoverColor: 'group-hover:text-amber-500 dark:group-hover:text-amber-400',
      cardHover: 'hover:border-amber-500/50 dark:hover:border-amber-500/50',
      title: 'Configura señales de compra',
      subtitle: 'Descubre el momento oportuno para contactar',
      subtitleColor: 'text-amber-600 dark:text-amber-400',
      description:
        'Define las palabras clave y los eventos que indican una posible oportunidad: conversaciones sobre tu industria, publicaciones relevantes o cambios recientes en puestos de dirección. InHubFlow cruza esas señales con tu perfil de cliente ideal para ayudarte a priorizar a quién contactar primero.',
      bullet1: 'Monitoreo de señales en LinkedIn y noticias',
      bullet2: 'Priorización de prospectos según su nivel de interés',
      bullet3: 'Contactos más relevantes, en lugar de campañas a ciegas',
      icon: (
        <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10" />
          <path d="M12 6a6 6 0 1 0 6 6" />
          <circle cx="12" cy="12" r="2" />
          <path d="m13.4 10.6 4.6-4.6" />
        </svg>
      ),
    },
    {
      step: '03',
      stepColor: 'text-blue-600 dark:text-blue-400',
      badge: 'Fase 3: Conexión',
      badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      stepHoverColor: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
      cardHover: 'hover:border-purple-500/50 dark:hover:border-purple-500/50',
      title: 'Lanza tus campañas',
      subtitle: 'Inicia conversaciones por LinkedIn y correo',
      subtitleColor: 'text-purple-600 dark:text-purple-400',
      description:
        'Crea secuencias de contacto adaptadas a cada prospecto. InHubFlow puede combinar interacciones en LinkedIn con mensajes personalizados por IA y cadencias de correo, manteniendo pausas y un ritmo de envío configurable.',
      bullet1: 'Secuencias de contacto por LinkedIn',
      bullet2: 'Correos personalizados y seguimiento multicanal',
      bullet3: 'Ritmos y pausas configurables para cada campaña',
      icon: (
        <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      ),
    },
    {
      step: '04',
      stepColor: 'text-blue-600 dark:text-blue-400',
      badge: 'Fase 4: Cierre',
      badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      stepHoverColor: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
      cardHover: 'hover:border-emerald-500/50 dark:hover:border-emerald-500/50',
      title: 'Califica y agenda reuniones',
      subtitle: 'Convierte el interés en una cita comercial',
      subtitleColor: 'text-emerald-600 dark:text-emerald-400',
      description:
        'Cuando un prospecto responde, el SDR IA continúa la conversación: resuelve dudas con la información aprobada de tu negocio, identifica si existe una oportunidad real y, cuando corresponde, propone horarios disponibles. La reunión se agenda en tu calendario y tu equipo recibe el contexto necesario para continuar la venta.',
      bullet1: 'Respuestas basadas en tu información comercial aprobada',
      bullet2: 'Aprobación manual o atención autónoma, según tu configuración',
      bullet3: 'Agendamiento y actualización del pipeline comercial',
      icon: (
        <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden bg-white dark:bg-[#0b1120] border-y border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-5 leading-tight">
            De encontrar a tu cliente ideal a agendar reuniones comerciales:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              todo en un solo flujo.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            InHubFlow te acompaña en cada paso de la prospección: define a quién quieres llegar, detecta señales de compra, activa campañas personalizadas y convierte las conversaciones en reuniones para tu equipo comercial.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`p-6 rounded-3xl border border-gray-300 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/60 ${item.cardHover} hover:bg-white dark:hover:bg-gray-850 transition-all group flex flex-col justify-between`}
            >
              <div>
                {/* Step number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl sm:text-3xl font-black tracking-tight shrink-0 select-none ${item.stepColor} transition-colors`}>
                    {item.step}
                  </span>
                  <span className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </div>

                {/* Badge */}
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border mb-3 ${item.badgeColor}`}>
                  {item.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className={`text-xs font-semibold ${item.subtitleColor} mb-2.5`}>
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-gray-300 dark:border-gray-700 space-y-2">
                <div className="flex items-start gap-2 text-[11px] text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  <span className="text-emerald-500 shrink-0 font-bold mt-0.5">✓</span>
                  <span>{item.bullet1}</span>
                </div>
                <div className="flex items-start gap-2 text-[11px] text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  <span className="text-emerald-500 shrink-0 font-bold mt-0.5">✓</span>
                  <span>{item.bullet2}</span>
                </div>
                <div className="flex items-start gap-2 text-[11px] text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  <span className="text-emerald-500 shrink-0 font-bold mt-0.5">✓</span>
                  <span>{item.bullet3}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">¿Listo para llenar tu agenda comercial de reuniones calificadas?</h4>
            <p className="text-blue-100 text-xs sm:text-sm">Configura tu primera campaña con señales de intención en menos de 3 minutos.</p>
          </div>
          <a
            href="#pricing"
            className="px-7 py-3.5 rounded-full text-gray-900 font-extrabold text-sm transition-all shrink-0 active:scale-95 border border-gray-200 hover:opacity-95"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E5E7EB 100%)',
            }}
          >
            Comenzar Prueba Gratis →
          </a>
        </div>
      </div>
    </section>
  );
}

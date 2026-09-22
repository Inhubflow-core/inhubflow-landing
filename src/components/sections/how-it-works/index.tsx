'use client';

import React from 'react';
import { useLanguage } from '@/app/providers/language';

export default function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      badge: 'Fase 1: Detección',
      badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      title: 'Detecta Señales de Compra',
      description:
        'Configura palabras clave de tu industria, vigila publicaciones de tus competidores o filtra nuevos directores nombrados hace menos de 90 días. InHubFlow identifica exactamente quién tiene presupuesto y necesidad activa.',
      bullet1: 'Radar continuo en LinkedIn y noticias',
      bullet2: 'Scoring de intención de compra (0 a 100%)',
      bullet3: 'Sin spam a ciegas, solo prospectos calientes',
      icon: (
        <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      step: '02',
      badge: 'Fase 2: Conexión',
      badgeColor: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
      title: 'Activa Secuencias Multicanal Humanizadas',
      description:
        'InHubFlow visita el perfil del decisor, lo sigue, envía la solicitud de conexión con notas personalizadas por IA y refuerza el contacto mediante cadencias de correo frío con calentamiento (warmup) continuo.',
      bullet1: 'LinkedIn Outreach (Visita + Conexión + InMail)',
      bullet2: 'Cold Email con rotación multicuenta y warmup',
      bullet3: 'Ritmos y pausas humanizadas anti-bloqueo',
      icon: (
        <svg className="w-6 h-6 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      step: '03',
      badge: 'Fase 3: Conversación',
      badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      title: 'El SDR IA Califica en Tiempo Real',
      description:
        'Tu agente SDR de inteligencia artificial responde dudas, maneja objeciones y explica tus servicios en segundos utilizando tu propia base de conocimiento (PDFs, web y precios aprobados), con total naturalidad.',
      bullet1: 'Respuestas fundamentadas sin inventar datos',
      bullet2: 'Modo Aprobación manual o Modo 100% Autónomo',
      bullet3: 'Handoff inmediato a humano ante casos especiales',
      icon: (
        <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      ),
    },
    {
      step: '04',
      badge: 'Fase 4: Cierre',
      badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      title: 'Reunión Agendada Directa a tu Calendario',
      description:
        'Una vez que el prospecto confirma su interés y disponibilidad, el SDR ofrece tus horarios disponibles y agenda la videollamada comercial directamente en tu Calendly o Google Calendar.',
      bullet1: 'Sincronización nativa con Calendly y Google Calendar',
      bullet2: 'Pipeline CRM con avance automático de etapas',
      bullet3: 'Tu equipo entra a la videollamada listo para cerrar',
      icon: (
        <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden bg-white dark:bg-[#0b1120] border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
            PROCESO INTEGRAL DE PROSPECCIÓN
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-5 leading-tight">
            De la Señal de Intención a la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Reunión Cerrada en 4 Pasos
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Elimina la improvisación comercial. InHubFlow orquesta todo el embudo de ventas B2B con precisión matemática.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60 hover:border-brand-500/40 dark:hover:border-brand-500/40 hover:bg-white dark:hover:bg-gray-850 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Step number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-gray-300 dark:text-gray-700 font-mono group-hover:text-brand-500 transition-colors">
                    {item.step}
                  </span>
                  <span className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </div>

                {/* Badge */}
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border mb-3 ${item.badgeColor}`}>
                  {item.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-gray-200/80 dark:border-gray-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] text-gray-700 dark:text-gray-300 font-medium">
                  <span className="text-emerald-500">✓</span>
                  <span>{item.bullet1}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-700 dark:text-gray-300 font-medium">
                  <span className="text-emerald-500">✓</span>
                  <span>{item.bullet2}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-700 dark:text-gray-300 font-medium">
                  <span className="text-emerald-500">✓</span>
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
            className="px-7 py-3.5 rounded-full bg-white text-gray-900 font-extrabold text-sm hover:bg-gray-100 transition-all shrink-0 active:scale-95"
          >
            Comenzar Prueba Gratis →
          </a>
        </div>
      </div>
    </section>
  );
}

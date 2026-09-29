'use client';

import React, { useState } from 'react';

const contentTypes = [
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: 'Post de Reflexión',
    color: 'blue',
    day: 'Lun 2',
    preview: '"El mayor error que cometen los equipos de ventas B2B es confundir actividad con productividad..."',
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    label: 'Carrusel Educativo',
    color: 'purple',
    day: 'Mié 4',
    preview: '"5 señales de intención que indican que un prospecto está listo para comprar ahora mismo"',
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    label: 'Caso de Éxito',
    color: 'emerald',
    day: 'Vie 6',
    preview: '"Cómo un equipo de 2 personas generó 40 reuniones en 30 días usando IA y LinkedIn"',
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
    label: 'Pregunta Polémica',
    color: 'amber',
    day: 'Lun 9',
    preview: '"¿Realmente necesitas un CRM caro o solo automatización inteligente? Hilo 🧵"',
  },
];

const pillars = [
  {
    gradient: 'from-blue-600 to-indigo-600',
    glow: 'shadow-blue-500/20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6a6 6 0 1 0 6 6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Atrae sin perseguir',
    description: 'Publica contenido de alto valor que posiciona tu marca y atrae prospectos que YA tienen intención de compra.',
  },
  {
    gradient: 'from-purple-600 to-pink-600',
    glow: 'shadow-purple-500/20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
    title: 'IA genera todo el contenido',
    description: '1 mes entero de publicaciones listas en minutos. Posts, carruseles, casos de éxito y preguntas virales según tu ICP.',
  },
  {
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" />
        <path d="m22 2-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
    title: 'Programa y olvídate',
    description: 'Programa todos tus posts del mes con un solo clic. InHubFlow publica automáticamente en los mejores horarios.',
  },
  {
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
    title: 'Convierte lectores en leads',
    description: 'Los prospectos que interactúan con tu contenido entran automáticamente al Radar de Señales y disparan secuencias.',
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/50 text-purple-600 dark:text-purple-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/50 text-amber-600 dark:text-amber-400',
};

const dotMap: Record<string, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
};

export function CoreFeatures() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="features" className="py-16 sm:py-24 lg:py-28 bg-gray-200 dark:bg-[#0f1523] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          {/* NEW FEATURE badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-purple-400/30 dark:border-purple-500/30 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Nueva Función
            </span>
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400">• Social Selling con IA</span>
          </div>

          <h2 className="font-extrabold text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
            Un mes de contenido{' '}
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0099ff 0%, #0022ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                viral y calificado
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #0099ff 0%, #0022ff 100%)' }}
              />
            </span>
            {' '}programado en minutos
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            El mejor vendedor no persigue clientes — los <strong className="text-gray-900 dark:text-white font-semibold">atrae publicando contenido de alto valor</strong>. InHubFlow crea, planifica y publica por ti, y convierte cada interacción en una oportunidad de negocio.
          </p>
        </div>

        {/* Main grid: pillar cards (left) + content calendar mock (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: 4 pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-5 sm:p-6 rounded-2xl border bg-white dark:bg-white/5 border-gray-200 dark:border-gray-700/60 transition-all duration-300 cursor-default hover:border-transparent hover:shadow-xl ${activeCard === idx ? `shadow-xl shadow-${pillar.glow} -translate-y-1 scale-[1.02]` : ''}`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${pillar.gradient} text-white flex items-center justify-center mb-4 shadow-md ${pillar.glow}`}>
                  {pillar.icon}
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Hover glow overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${pillar.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>

          {/* Right: Content calendar simulation */}
          <div className="relative">
            {/* Decorative glow blobs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/80 dark:border-gray-700/60 shadow-2xl shadow-black/10 p-4 sm:p-6">
              {/* App-bar */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-500">inhubflow / social-selling</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  30 posts • Octubre 2026
                </span>
              </div>

              {/* KPI bar */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { label: 'Posts Generados', value: '30', sub: 'con IA · 1 mes', color: 'text-purple-500' },
                  { label: 'Tiempo invertido', value: '8 min', sub: 'vs. 12 horas', color: 'text-blue-500' },
                  { label: 'Leads Inbound Est.', value: '+120', sub: 'por mes', color: 'text-emerald-500' },
                ].map((kpi) => (
                  <div key={kpi.label} className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 text-center">
                    <p className={`text-lg font-extrabold ${kpi.color}`}>{kpi.value}</p>
                    <p className="text-[9px] text-gray-500 dark:text-gray-400 font-medium leading-tight mt-0.5">{kpi.label}</p>
                    <p className="text-[9px] text-gray-400 dark:text-gray-500">{kpi.sub}</p>
                  </div>
                ))}
              </div>

              {/* Content queue preview */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                  Cola de contenido — programado automáticamente
                </p>
                {contentTypes.map((ct, i) => (
                  <div
                    key={ct.label}
                    className={`flex items-center gap-3 p-3 rounded-xl border ${colorMap[ct.color]} transition-all duration-200 hover:scale-[1.01]`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* Day badge */}
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 w-[38px] shrink-0">{ct.day}</span>
                    {/* Type pill */}
                    <span className={`flex items-center gap-1 shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border ${colorMap[ct.color]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotMap[ct.color]}`} />
                      {ct.label}
                    </span>
                    {/* Preview text */}
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 truncate flex-1 italic">{ct.preview}</p>
                    {/* Scheduled check */}
                    <svg className="w-4 h-4 shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                ))}

                {/* Remaining posts indicator */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium whitespace-nowrap">+ 26 posts más programados</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                </div>
              </div>

              {/* Status indicator at bottom */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700/50 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>LinkedIn · Publicación automática activa</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

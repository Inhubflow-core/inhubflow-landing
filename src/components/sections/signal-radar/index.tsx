'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/providers/language';

export default function SignalRadarSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const levels = [
    {
      id: 'level-1',
      levelNum: 'NIVEL 1',
      levelTag: 'Competencia & Contenido',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      accentColor: '#f59e0b',
      title: 'Posts en LinkedIn: Likes y Comentarios de Competidores',
      shortTitle: 'Posts de Competencia',
      shortDesc: 'Capta decisores que reaccionan o piden información en posts de tus rivales.',
      icon: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      desc: 'Pega el enlace de una publicación viral de tu competencia o de un referente del sector. El Radar detecta al instante a los directores y decisores que dieron Like o comentaron solicitando información o demo.',
      metric: '92% Tasa de Interés',
      metricLabel: 'Impacto Comercial',
      triggers: [
        { label: 'Likes en Posts de Competidores', icon: '👍' },
        { label: 'Comentarios en Lead Magnets', icon: '💬' },
        { label: 'Interacciones en Posts Virales', icon: '🔥' },
        { label: 'Debates sobre Herramientas Rivales', icon: '⚔️' },
      ],
      leadExample: {
        name: 'Camila Rossi',
        role: 'Head of Sales & Growth',
        company: 'Logix Tech (250 emp.)',
        event: 'Comentó en el post de Competidor X: "Me interesa una demo, ¿envían propuesta comercial?"',
        signalScore: '98% Intención de Compra',
        signalType: 'Reacción a Lead Magnet',
        action: 'SDR IA activó conexión personalizada con mención del debate del post',
        responseTime: '< 2 horas',
      },
    },
    {
      id: 'level-2',
      levelNum: 'NIVEL 2',
      levelTag: 'Palabras Clave & Mercado',
      badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
      accentColor: '#0099ff',
      title: 'Monitoreo de Necesidad Activa, Noticias y Menciones',
      shortTitle: 'Palabras Clave & Noticias',
      shortDesc: 'Alertas en tiempo real por rondas de inversión, expansión, fusiones o búsqueda de soluciones.',
      icon: (
        <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
      desc: 'Monitorea términos de intención activa ("busco CRM", "alternativa a...", "automatización") y eventos corporativos de alto impacto (rondas de inversión, expansión territorial, noticias y fusiones).',
      metric: '4.2x Más Respuestas',
      metricLabel: 'Efectividad en Conversión',
      triggers: [
        { label: 'Rondas de Inversión (Seed, Serie A/B)', icon: '💰' },
        { label: 'Expansión de Operaciones', icon: '🌍' },
        { label: 'Noticias & Menciones en Medios', icon: '📰' },
        { label: 'Fusiones y Adquisiciones (M&A)', icon: '🤝' },
      ],
      leadExample: {
        name: 'Fernando Silva',
        role: 'Chief Technology Officer (CTO)',
        company: 'FinNova Latam (Serie A cerrada: $3.5M)',
        event: 'Publicó en LinkedIn: "Buscamos herramienta para escalar prospección B2B sin saturar el equipo técnico"',
        signalScore: '95% Intención de Compra',
        signalType: 'Ronda Reciente + Intención Activa',
        action: 'Secuencia multicanal enviada con caso de estudio específico para Serie A',
        responseTime: '< 45 minutos',
      },
    },
    {
      id: 'level-3',
      levelNum: 'NIVEL 3',
      levelTag: '6 Señales de ICP & Cuenta',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      accentColor: '#a855f7',
      title: '6 Señales Clave de Traspaso de Mando y Cuenta',
      shortTitle: '6 Señales de ICP',
      shortDesc: 'Nuevos cargos, ascensos, contrataciones activas, hipercrecimiento y visitantes a tu perfil.',
      icon: (
        <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      desc: 'El 70% de los nuevos líderes renuevan tecnología durante sus primeros 90 días. InHubFlow vigila 6 señales críticas en tus cuentas objetivo para que llegues antes que cualquier competidor.',
      metric: 'Ventana Crítica 90 Días',
      metricLabel: 'Momento Óptimo',
      triggers: [
        { label: 'Nuevos en el Cargo (<90 Días)', icon: '🎯' },
        { label: 'Ascenso Interno a Decisor', icon: '📈' },
        { label: 'Hiring Intent (Contratación Activa)', icon: '💼' },
        { label: 'Empresas en Hipercrecimiento (+30%)', icon: '🚀' },
        { label: 'Visitantes Recientes a tu Perfil', icon: '👀' },
        { label: 'Más Activos en tu ICP (<48 Horas)', icon: '⚡' },
      ],
      leadExample: {
        name: 'Mariana Duarte',
        role: 'VP of Operations (Nuevo en el cargo: 18 días)',
        company: 'Grupo Retail Sur (1.200 emp. • 15 ofertas activas)',
        event: 'Asumió cargo hace 18 días • Empresa abrió 15 vacantes comerciales • Visitó tu perfil',
        signalScore: '99% Intención de Compra',
        signalType: 'Traspaso de Mando + Hiring Intent',
        action: 'Invitación con felicitación personalizada y auditoría gratuita de procesos',
        responseTime: '< 1 hora',
      },
    },
  ];

  const active = levels[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? levels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === levels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="signals" className="py-16 sm:py-24 relative overflow-hidden bg-[#070b14] text-white">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-blue-600/20 via-sky-600/20 to-purple-600/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0099ff] animate-pulse" />
            <span>Radar de Señales de Intención Multicanal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Vende en el{' '}
            <span style={{ color: '#0099ff' }}>
              momento exacto
            </span>
            {' '}en que quieren comprar.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            El 95% de los decisores ignora los mensajes genéricos. InHubFlow vigila la red en 3 niveles y te avisa cuando un prospecto muestra una señal real de compra para contactarlo al instante.
          </p>
        </div>

        {/* 3 Level Tabs (Interactive Navigation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
          {levels.map((lvl, index) => {
            const isSelected = currentSlide === index;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-white/10 border-white/40 shadow-lg scale-[1.01]'
                    : 'bg-white/5 border-white/15 hover:bg-white/[0.08] hover:border-white/30'
                }`}
                style={isSelected ? { borderColor: lvl.accentColor } : {}}
              >
                {/* Active Indicator Top Line */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: lvl.accentColor }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-extrabold uppercase tracking-wider"
                    style={{ color: lvl.accentColor }}
                  >
                    {lvl.levelNum}: {lvl.shortTitle}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${lvl.accentColor}20` }}
                  >
                    {lvl.icon}
                  </div>
                </div>
                <p className="text-base font-bold text-white mb-1.5">{lvl.title.split(':')[0]}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{lvl.shortDesc}</p>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Slide Showcase Card */}
        <div className="w-full rounded-3xl border border-white/25 bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Top Bar of the Slide */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/20">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold border ${active.badgeColor}`}>
                  {active.levelNum} • {active.levelTag}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Monitor Activo 24/7
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                {active.title}
              </h3>
            </div>

            {/* Metric Badge & Slider Arrow Controls */}
            <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/20 text-xs font-semibold text-gray-300">
                <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-gray-400">{active.metricLabel}:</span>
                <span className="text-white font-extrabold text-sm" style={{ color: active.accentColor }}>{active.metric}</span>
              </div>

              {/* Prev / Next Navigation Arrows */}
              <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/15">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  aria-label="Nivel Anterior"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <span className="text-xs font-mono font-bold px-1.5 text-gray-400">
                  {currentSlide + 1}/3
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  aria-label="Siguiente Nivel"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 2-Column Responsive Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Explanation & Triggers List */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-base text-gray-300 leading-relaxed">
                {active.desc}
              </p>

              {/* Disparadores Detectados (Grid de Pills) */}
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                  Señales y Disparadores Monitoreados:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.triggers.map((trig) => (
                    <div
                      key={trig.label}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-gray-200"
                    >
                      <span className="text-base shrink-0">{trig.icon}</span>
                      <span className="leading-snug">{trig.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Safeguards */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Filtro anti-spam con IA y descarte de perfiles sin poder de decisión.</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Activación automática de secuencias multicanal contextualizadas.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Simulated Lead Detection Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/20 bg-black/60 p-5 sm:p-6 space-y-4 shadow-xl relative overflow-hidden">
                
                {/* Header of Detected Lead */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-full text-white font-extrabold text-base flex items-center justify-center shrink-0 border border-white/30"
                      style={{ background: `linear-gradient(135deg, ${active.accentColor}, #0022ff)` }}
                    >
                      {active.leadExample.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm sm:text-base font-bold text-white">{active.leadExample.name}</p>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          LinkedIn Verificado
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/10 text-gray-300 border border-white/15">
                          {active.leadExample.signalType}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {active.leadExample.role} • <strong className="text-gray-300">{active.leadExample.company}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 px-3 py-1.5 rounded-xl self-start sm:self-auto shrink-0">
                    <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    <span className="text-emerald-400 font-extrabold text-xs">{active.leadExample.signalScore}</span>
                  </div>
                </div>

                {/* Event Trigger Detected Box */}
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/15 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      Evento Disparador Detectado por el Radar:
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">Hace 4 min</span>
                  </div>
                  <p className="text-gray-100 font-medium italic leading-relaxed">
                    "{active.leadExample.event}"
                  </p>
                </div>

                {/* Automated Action Triggered */}
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-sky-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span>Acción Automática SDR IA:</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      Respuesta esperada: {active.leadExample.responseTime}
                    </span>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed pl-4">
                    {active.leadExample.action}
                  </p>
                </div>

                {/* Step Indicators within card */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Lead calificado automáticamente
                  </span>
                  <span className="font-mono text-gray-400">Canal: LinkedIn + Smart Email</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footnote & Quick Slider Dots */}
          <div className="mt-8 pt-5 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 gap-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>✓ Filtro contra falsos positivos con IA</span>
              <span>✓ Exportable a listas de prospección en 1 clic</span>
              <span>✓ 100% Nativo en tu suscripción de InHubFlow</span>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center gap-2 self-center sm:self-auto">
              {levels.map((lvl, idx) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    currentSlide === idx ? 'w-6 bg-[#0099ff]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir al Nivel ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

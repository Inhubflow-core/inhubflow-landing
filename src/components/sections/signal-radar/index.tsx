'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/providers/language';

export default function SignalRadarSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

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
        {
          label: 'Likes en Posts de Competidores',
          icon: (
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          ),
        },
        {
          label: 'Comentarios en Lead Magnets',
          icon: (
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          ),
        },
        {
          label: 'Interacciones en Posts Virales',
          icon: (
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
          ),
        },
        {
          label: 'Debates sobre Herramientas Rivales',
          icon: (
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          ),
        },
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
        {
          label: 'Rondas de Inversión (Seed, Serie A/B)',
          icon: (
            <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          ),
        },
        {
          label: 'Expansión de Operaciones',
          icon: (
            <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          ),
        },
        {
          label: 'Noticias & Menciones en Medios',
          icon: (
            <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>
          ),
        },
        {
          label: 'Fusiones y Adquisiciones (M&A)',
          icon: (
            <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M13 6h3a2 2 0 0 1 2 2v7" />
              <line x1="6" y1="9" x2="6" y2="21" />
            </svg>
          ),
        },
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
        {
          label: 'Nuevos en el Cargo (<90 Días)',
          icon: (
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
          ),
        },
        {
          label: 'Ascenso Interno a Decisor',
          icon: (
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          ),
        },
        {
          label: 'Hiring Intent (Contratación Activa)',
          icon: (
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          ),
        },
        {
          label: 'Empresas en Hipercrecimiento (+30%)',
          icon: (
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          ),
        },
        {
          label: 'Visitantes Recientes a tu Perfil',
          icon: (
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ),
        },
        {
          label: 'Más Activos en tu ICP (<48 Horas)',
          icon: (
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
        },
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

  // Autoplay Slider every 7 seconds, pauses on mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  return (
    <section id="signals" className="py-16 sm:py-24 relative overflow-hidden bg-[#070b14] text-white">
      {/* Background Glow Effects */}
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
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #0099ff 0%, #0022ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              momento exacto
            </span>
            {' '}en que quieren comprar.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            El 95% de los decisores ignora los mensajes genéricos. InHubFlow vigila la red en 3 niveles de intención y te avisa cuando un prospecto muestra una señal real de compra para contactarlo al instante.
          </p>

        </div>

        {/* Carousel Container with Prominent Side Arrows */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prominent Floating Left Arrow (Desktop / Tablet) */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0b1324] border-2 border-white/20 hover:border-[#0099ff] hover:bg-[#0099ff] text-white transition-all items-center justify-center shadow-2xl cursor-pointer active:scale-95 group"
            aria-label="Nivel Anterior"
            title="Ver pantalla anterior"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Prominent Floating Right Arrow (Desktop / Tablet) */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0b1324] border-2 border-white/20 hover:border-[#0099ff] hover:bg-[#0099ff] text-white transition-all items-center justify-center shadow-2xl cursor-pointer active:scale-95 group"
            aria-label="Siguiente Nivel"
            title="Ver siguiente pantalla"
          >
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Main Interactive Slide Showcase Card */}
          <div className="w-full rounded-3xl border border-white/25 bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl transition-all duration-300">
            
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

              {/* Metric Badge & Compact Header Controls */}
              <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/20 text-xs font-semibold text-gray-300">
                  <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span className="text-gray-400">{active.metricLabel}:</span>
                  <span className="text-white font-extrabold text-sm" style={{ color: active.accentColor }}>{active.metric}</span>
                </div>

                {/* Mobile / Header Prev & Next Controls */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/15">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                    aria-label="Nivel Anterior"
                    title="Anterior"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <span className="text-xs font-mono font-bold px-2 text-white">
                    {currentSlide + 1} / 3
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                    aria-label="Siguiente Nivel"
                    title="Siguiente"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 2-Column Responsive Body */}
            <div key={active.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
              
              {/* Left Column: Explanation & Triggers List */}
              <div className="lg:col-span-5 space-y-6">
                <p className="text-base text-gray-300 leading-relaxed">
                  {active.desc}
                </p>

                {/* Disparadores Detectados (Grid de UI Icons) */}
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                    Señales y Disparadores Monitoreados:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {active.triggers.map((trig) => (
                      <div
                        key={trig.label}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-gray-200"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          {trig.icon}
                        </div>
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

              {/* Right Column: Live Simulated Lead Detection Card (Light Theme) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 space-y-4 shadow-2xl shadow-black/50 relative overflow-hidden text-gray-900">
                  
                  {/* Header of Detected Lead */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-full text-white font-extrabold text-base flex items-center justify-center shrink-0 border border-white shadow-md"
                        style={{ background: `linear-gradient(135deg, ${active.accentColor}, #0022ff)` }}
                      >
                        {active.leadExample.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm sm:text-base font-extrabold text-gray-900">{active.leadExample.name}</p>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/25">
                            LinkedIn Verificado
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
                            {active.leadExample.signalType}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {active.leadExample.role} • <strong className="text-gray-800 font-semibold">{active.leadExample.company}</strong>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-300/80 px-3 py-1.5 rounded-xl self-start sm:self-auto shrink-0 shadow-xs">
                      <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      <span className="text-emerald-700 font-extrabold text-xs">{active.leadExample.signalScore}</span>
                    </div>
                  </div>

                  {/* Event Trigger Detected Box (Light Warm) */}
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-amber-900/90 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                        Evento Disparador Detectado por el Radar:
                      </span>
                      <span className="text-[10px] text-amber-700/80 font-mono font-medium">Hace 4 min</span>
                    </div>
                    <p className="text-gray-900 font-semibold italic leading-relaxed">
                      "{active.leadExample.event}"
                    </p>
                  </div>

                  {/* Automated Action Triggered (Light Sky/Blue) */}
                  <div className="p-3.5 rounded-xl bg-sky-50/90 border border-sky-200 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 text-[#0066cc] font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#0099ff]" />
                        <span>Acción Automática SDR IA:</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md">
                        Respuesta esperada: {active.leadExample.responseTime}
                      </span>
                    </div>
                    <p className="text-xs text-gray-800 leading-relaxed pl-4 font-medium">
                      {active.leadExample.action}
                    </p>
                  </div>

                  {/* Step Indicators within card */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      Lead calificado automáticamente
                    </span>
                    <span className="font-mono text-gray-500 font-medium">Canal: LinkedIn + Smart Email</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Global Safeguards Footnote (justo debajo del slide y encima de los puntos) */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-gray-400 text-center">
          <span>✓ Filtro contra falsos positivos con IA</span>
          <span>✓ Exportable a listas de prospección en 1 clic</span>
          <span>✓ 100% Nativo en tu suscripción de InHubFlow</span>
        </div>

        {/* 3 Pagination Dots (debajo de los textos) */}
        <div className="flex items-center justify-center gap-2.5 mt-4 sm:mt-5">
          {levels.map((lvl, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir a ${lvl.levelNum}`}
                className="group py-2 px-1 focus:outline-none cursor-pointer"
              >
                <span
                  className={`block h-3 rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? 'w-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
                      : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

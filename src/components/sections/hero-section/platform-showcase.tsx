'use client';

import React, { useState, useEffect } from 'react';
const SLIDES = ['signals', 'sequences', 'sdr'] as const;
type TabType = typeof SLIDES[number];

export function PlatformShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeTab = SLIDES[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setIsPaused(true);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsPaused(true);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setIsPaused(true);
  };

  // Auto-rotate every 8 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Touch Swipe Handlers for Mobile
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
  };

  return (
    <div
      className="w-full max-w-7xl mx-auto relative z-30 px-1 sm:px-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Relative wrapper for showcase and floating arrow buttons */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Slide anterior"
          className="absolute -left-2 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-md cursor-pointer group"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Siguiente slide"
          className="absolute -right-2 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-md cursor-pointer group"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Main Glassmorphic Showcase Window */}
        <div
          className="p-3 sm:p-5 rounded-2xl sm:rounded-[32px] border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Browser / App Frame Header */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 mb-3 rounded-xl sm:rounded-2xl bg-white/70 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 text-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-400/80 inline-block" />
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-900/70 text-gray-600 dark:text-gray-400 text-[10px] sm:text-[11px] font-mono max-w-[200px] sm:max-w-md truncate">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <span className="truncate">
                {activeTab === 'signals'
                  ? 'b2b.inhubflow.online/signals/radar-live'
                  : activeTab === 'sequences'
                  ? 'b2b.inhubflow.online/workflows/growth-b2b'
                  : 'b2b.inhubflow.online/sdr/live-qualifier'}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 font-semibold shrink-0">
              <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                {activeTab === 'signals'
                  ? '1/3 Radar de Sinais'
                  : activeTab === 'sequences'
                  ? '2/3 Sequências Multicanais'
                  : '3/3 SDR de IA 24/7'}
              </span>
            </div>
          </div>

          {/* Sliding Carousel Track (Left to Right / Horizontal Slide Effect) */}
          <div className="relative overflow-hidden w-full">
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* SLIDE 0: RADAR DE SEÑALES */}
              <div className="w-full shrink-0 space-y-3 sm:space-y-4 px-0.5">
                {/* Realtime KPI Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Señales Hoy</p>
                    <p className="text-lg sm:text-xl font-bold text-amber-500 mt-0.5">84 activas</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">LinkedIn live</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Score de Intención</p>
                    <p className="text-lg sm:text-xl font-bold text-orange-500 mt-0.5">96.8%</p>
                    <span className="text-[9px] sm:text-[10px] text-orange-500 font-semibold">Alta probabilidad</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Decisores Detectados</p>
                    <p className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">312</p>
                    <span className="text-[9px] sm:text-[10px] text-blue-500 font-semibold">CEOs & Directores</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Conversión a Respuesta</p>
                    <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">48.2%</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">vs 3% outbound frío</span>
                  </div>
                </div>

                {/* Live Signals Stream */}
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 min-h-[280px] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3 border-b border-gray-300 dark:border-gray-700 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping shrink-0" />
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                        Radar en Vivo: Oportunidades de Compra Detectadas
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      3 Fuentes Activas
                    </span>
                  </div>

                  <div className="space-y-2 text-xs flex-1 flex flex-col justify-around">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 dark:text-white truncate">Reacción en Post de Competidor X</p>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                            Valeria Montero (Directora de Operaciones) comentó: <em>&quot;Buscamos una alternativa que integre LinkedIn e IA...&quot;</em>
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 font-bold text-[10px] shrink-0 inline-flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        98% Intención
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-sky-500/5 dark:bg-sky-950/20 border border-sky-500/20 gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-500 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 dark:text-white truncate">Nuevo en el Cargo (&lt;30 días)</p>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                            Martín Gómez asumió como VP Comercial en SaaS Corp • Presupuesto de contratación activo
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-500 font-bold text-[10px] shrink-0 inline-flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        95% Intención
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/5 dark:bg-purple-950/20 border border-purple-500/20 gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-500 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 dark:text-white truncate">Palabras Clave de Búsqueda de Solución</p>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                            Publicación en LinkedIn: <em>&quot;Recomendaciones de herramientas B2B para agendar reuniones con IA...&quot;</em>
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-500 font-bold text-[10px] shrink-0 inline-flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        96% Intención
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 1: WORKFLOW SEQUENCES SHOWCASE */}
              <div className="w-full shrink-0 space-y-3 sm:space-y-4 px-0.5">
                {/* Realtime KPI Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Contactos Gestionados</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-0.5">3,420</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">+18.4% semana</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Aceptación LinkedIn</p>
                    <p className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">48.6%</p>
                    <span className="text-[9px] sm:text-[10px] text-blue-500 font-semibold">Notas con IA</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Apertura de Email</p>
                    <p className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">71.4%</p>
                    <span className="text-[9px] sm:text-[10px] text-indigo-500 font-semibold">Alta entrega</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Citas Agendadas</p>
                    <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">42</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">Google Sync</span>
                  </div>
                </div>

                {/* Campaign Sequence Flow Simulation */}
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 min-h-[280px] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 animate-ping shrink-0" />
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                        Pipeline Activo: Prospección Multicanal LinkedIn + Email
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                      En Ejecución
                    </span>
                  </div>

                  <div className="space-y-2 text-xs flex-1 flex flex-col justify-between">
                    <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-700">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold shrink-0 text-xs">
                        1
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs">
                          Paso 1: Detección y Enriquecimiento de Cuentas
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-[11px] leading-tight">
                          Decisores identificados desde el Radar de Señales y sincronizados al CRM.
                        </p>
                      </div>
                      <span className="text-emerald-500 font-semibold text-[10px] sm:text-[11px] shrink-0">Completado</span>
                    </div>

                    <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-700">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                        2
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs">
                          Paso 2: Invitación Personalizada en LinkedIn
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-[11px] leading-tight">
                          Nota con referencia a la señal detectada. Delay aleatorio de 15 a 45 min.
                        </p>
                      </div>
                      <span className="text-blue-500 font-semibold text-[10px] sm:text-[11px] shrink-0 animate-pulse">En Proceso</span>
                    </div>

                    <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-700">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold shrink-0 text-xs">
                        3
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs">
                          Paso 3: Email de Seguimiento con Contexto de Compra
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-[11px] leading-tight">
                          Envío multicuenta de alta entregabilidad si no responde en 48h en LinkedIn.
                        </p>
                      </div>
                      <span className="text-purple-400 font-medium text-[10px] sm:text-[11px] shrink-0">Programado</span>
                    </div>

                    <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                        4
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-emerald-900 dark:text-emerald-200 text-xs">
                          Paso 4: Agendamiento Automático de Reunión
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-[11px] leading-tight">
                          Sincronización directa con Google Calendar y confirmación de la cita.
                        </p>
                      </div>
                      <span className="text-emerald-500 font-semibold text-[10px] sm:text-[11px] shrink-0">Confirmado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 2: AI SDR INTERACTION SHOWCASE */}
              <div className="w-full shrink-0 space-y-3 sm:space-y-4 px-0.5">
                {/* Realtime KPI Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Conversaciones Activas</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-0.5">128</p>
                    <span className="text-[9px] sm:text-[10px] text-purple-500 font-semibold">24/7 sin descanso</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Calificación Automática</p>
                    <p className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">99.4%</p>
                    <span className="text-[9px] sm:text-[10px] text-blue-500 font-semibold">Criterios BANT/ICP</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Tiempo de Respuesta</p>
                    <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">&lt; 12 seg</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">Inmediato</span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700">
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Tasa de Conversión a Cita</p>
                    <p className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">34.8%</p>
                    <span className="text-[9px] sm:text-[10px] text-indigo-500 font-semibold">Leads a Demo</span>
                  </div>
                </div>

                {/* Simulated AI SDR Chat Console */}
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 min-h-[280px] flex flex-col justify-between">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-gray-300 dark:border-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs font-bold">
                        IA
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">
                          InHubFlow SDR Bot • Calificador Activo
                        </p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">
                          Conversando con Esteban Solís (CTO en Fintech MX)
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      Calificado
                    </span>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-2 sm:space-y-3 text-xs flex-1 flex flex-col justify-between">
                    <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%]">
                      <div className="p-2.5 sm:p-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-[11px] sm:text-xs">
                        <p>Hola, vi su nota sobre automatización. ¿Cómo resuelven el agendamiento y seguimiento comercial sin sonar a spam?</p>
                        <span className="text-[8px] sm:text-[9px] text-gray-400 block mt-1">10:14 AM</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%] ml-auto justify-end">
                      <div className="p-2.5 sm:p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] sm:text-xs">
                        <p>¡Hola Esteban! Nuestra suite combina detección de señales de compra con ritmos humanizados. Como SDR respondo dudas técnicas usando nuestra base de conocimiento y agendo directo en tu Calendly.</p>
                        <span className="text-[8px] sm:text-[9px] text-blue-200 block mt-1">10:14 AM • InHubFlow AI SDR</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%]">
                      <div className="p-2.5 sm:p-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-[11px] sm:text-xs">
                        <p>¡Excelente! ¿Tienen disponibilidad mañana a las 11:00 AM para videollamada?</p>
                        <span className="text-[8px] sm:text-[9px] text-gray-400 block mt-1">10:15 AM</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%] ml-auto justify-end">
                      <div className="p-2.5 sm:p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] sm:text-xs">
                        <p>¡Listo Esteban! He reservado el espacio para mañana a las 11:00 AM en Google Meet. ¡Nos vemos en la demo!</p>
                        <span className="text-[8px] sm:text-[9px] text-emerald-200 block mt-1">10:15 AM • Confirmada en Google Calendar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security Notice */}
          <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-300 dark:border-gray-700 flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-[11px] sm:text-xs">Seguridad empresarial activa con intervalos humanizados y cumplimiento normativo.</span>
          </div>
        </div>
      </div>

      {/* 3 Pagination Dots (debajo de la imagen con efecto activo y clic directo) */}
      <div className="flex items-center justify-center gap-2.5 mt-5 sm:mt-7">
        {SLIDES.map((slide, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={slide}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Ir a presentación ${idx + 1}`}
              className="group py-2 px-1 focus:outline-none cursor-pointer"
            >
              <span
                className={`block h-3 rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? 'w-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
                    : 'w-3 bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

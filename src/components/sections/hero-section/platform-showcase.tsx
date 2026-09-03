'use client';

import React, { useState, useEffect } from 'react';

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<'sequences' | 'sdr'>('sequences');
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 8 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 'sequences' ? 'sdr' : 'sequences'));
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="w-full max-w-[1100px] mx-auto relative z-30 px-1 sm:px-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Workflow Feature Label */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 backdrop-blur-md shadow-sm text-xs sm:text-sm font-bold text-gray-900 dark:text-white text-center">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </span>
          <span className="tracking-tight">
            Asistente LinkedIn / Email + Agente SDR de IA &amp; Agenda Reunión
          </span>
        </div>
      </div>

      {/* Main Glassmorphic Showcase Window */}
      <div className="p-3 sm:p-5 rounded-2xl sm:rounded-[32px] border border-white/60 dark:border-white/10 bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl sm:shadow-2xl relative overflow-hidden">
        {/* Browser / App Frame Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 mb-3 rounded-xl sm:rounded-2xl bg-white/70 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400/80 inline-block" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-900/70 text-gray-600 dark:text-gray-400 text-[10px] sm:text-[11px] font-mono max-w-[200px] sm:max-w-md truncate">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="truncate">
              {activeTab === 'sequences'
                ? 'b2b.inhubflow.online/workflows/growth-b2b'
                : 'b2b.inhubflow.online/sdr/live-qualifier'}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 font-semibold shrink-0">
            <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400">
              InHubFlow B2B Activo
            </span>
          </div>
        </div>

        {/* TAB 1: WORKFLOW SEQUENCES SHOWCASE */}
        {activeTab === 'sequences' && (
          <div className="animate-fadeIn space-y-3 sm:space-y-4">
            {/* Realtime KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Decisores Extraídos</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-0.5">3,420</p>
                <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">+18.4% semana</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Aceptación LinkedIn</p>
                <p className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">48.6%</p>
                <span className="text-[9px] sm:text-[10px] text-blue-500 font-semibold">Notas con IA</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Apertura de Email</p>
                <p className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">71.4%</p>
                <span className="text-[9px] sm:text-[10px] text-indigo-500 font-semibold">Alta entrega</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Citas Agendadas</p>
                <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">42</p>
                <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">Google Sync</span>
              </div>
            </div>

            {/* Campaign Sequence Flow Simulation */}
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 min-h-[280px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 animate-ping shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                    Campaña Activa: CEOs & Directores Comerciales
                  </h4>
                </div>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                  En Ejecución
                </span>
              </div>

              <div className="space-y-2 text-xs flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold shrink-0 text-xs">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs">
                      Paso 1: Segmentación & Verificación de Contactos
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-[11px] leading-tight">
                      500 contactos calificados con emails corporativos verificados.
                    </p>
                  </div>
                  <span className="text-emerald-500 font-semibold text-[10px] sm:text-[11px] shrink-0">Completado</span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                    2
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-blue-900 dark:text-blue-200 text-xs">
                      Paso 2: Solicitud de Conexión con IA
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-[10px] sm:text-[11px] leading-tight">
                      <em>&quot;Hola [Nombre], vi tu rol en [Empresa]... te contacto para automatizar tu captación B2B.&quot;</em>
                    </p>
                  </div>
                  <span className="text-blue-500 font-semibold animate-pulse text-[10px] sm:text-[11px] shrink-0">Enviando...</span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold shrink-0 text-xs">
                    3
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs">
                      Paso 3: Mensaje de Seguimiento Condicionado
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-[11px] leading-tight">
                      Envío automático al aceptar conexión. Se pausa si responde.
                    </p>
                  </div>
                  <span className="text-purple-500 font-semibold text-[10px] sm:text-[11px] shrink-0">Condicionado</span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold shrink-0 text-xs">
                    4
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs">
                      Paso 4: Email de Seguimiento & Cita
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-[11px] leading-tight">
                      Correo de seguimiento en 48h con link a Google Calendar.
                    </p>
                  </div>
                  <span className="text-emerald-500 font-semibold text-[10px] sm:text-[11px] shrink-0">Confirmado</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI SDR INTERACTION SHOWCASE */}
        {activeTab === 'sdr' && (
          <div className="animate-fadeIn space-y-3 sm:space-y-4">
            {/* Realtime KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Decisiones IA</p>
                <p className="text-lg sm:text-xl font-bold text-violet-600 dark:text-violet-400 mt-0.5">1,280</p>
                <span className="text-[9px] sm:text-[10px] text-violet-500 font-semibold">Tiempo real</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Velocidad IA</p>
                <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">&lt; 3s</p>
                <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold">24/7 activo</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Conversión a Cita</p>
                <p className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">38.2%</p>
                <span className="text-[9px] sm:text-[10px] text-blue-500 font-semibold">Calificación</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">Precisión IA</p>
                <p className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400 mt-0.5">94%</p>
                <span className="text-[9px] sm:text-[10px] text-purple-500 font-semibold">Seguridad</span>
              </div>
            </div>

            {/* Live LinkedIn AI SDR Conversation Simulation */}
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 min-h-[280px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2.5 border-b border-gray-100 dark:border-gray-700 pb-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs">
                      in
                    </span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-800" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate">
                      Esteban Navarro (VP of Sales)
                    </h4>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 truncate">LinkedIn • InHubFlow AI SDR</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 shrink-0">
                  Calificado
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-2 sm:space-y-3 text-xs flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%]">
                  <div className="p-2.5 sm:p-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-[11px] sm:text-xs">
                    <p>Hola, vi tu solicitud. ¿Cómo funciona su sistema para automatizar la prospección en LinkedIn?</p>
                    <span className="text-[8px] sm:text-[9px] text-gray-400 block mt-1">10:14 AM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%] ml-auto justify-end">
                  <div className="p-2.5 sm:p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md text-[11px] sm:text-xs">
                    <p>¡Hola Esteban! Nuestra suite aplica ritmos de trabajo humanizados y privacidad corporativa de nivel empresarial. Como SDR de IA respondo dudas y agendo videollamadas en tu calendario.</p>
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
                  <div className="p-2.5 sm:p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md text-[11px] sm:text-xs">
                    <p>¡Listo Esteban! He reservado el espacio para mañana a las 11:00 AM en Google Meet. ¡Nos vemos en la demo!</p>
                    <span className="text-[8px] sm:text-[9px] text-emerald-200 block mt-1">10:15 AM • Confirmada en Google Calendar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Quick Access CTA Bar */}
        <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-center sm:text-left">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-[11px] sm:text-xs">Seguridad empresarial activa con intervalos humanizados y cumplimiento normativo.</span>
          </div>

          <div className="w-full sm:w-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold hover:scale-105 active:scale-98 transition-transform shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Comenzar con InHubFlow B2B</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

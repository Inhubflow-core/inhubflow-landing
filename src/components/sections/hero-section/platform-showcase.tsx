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
      className="w-full max-w-[1100px] mx-auto relative z-30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tab Switcher */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex p-1.5 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 backdrop-blur-md shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab('sequences')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'sequences'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <span>⚡</span> Secuencias Automatizadas de LinkedIn & Email
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('sdr')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'sdr'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <span>🤖</span> Agente SDR de IA & Cierre de Citas
          </button>
        </div>
      </div>

      {/* Main Glassmorphic Showcase Window */}
      <div className="p-3 sm:p-5 rounded-[32px] border border-white/60 dark:border-white/10 bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Browser / App Frame Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-3 rounded-2xl bg-white/70 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-900/70 text-gray-600 dark:text-gray-400 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>
              {activeTab === 'sequences'
                ? 'https://b2b.inhubflow.online/workflows/growth-ceos-saas'
                : 'https://b2b.inhubflow.online/sdr/live-qualifier'}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 font-semibold">
            <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400">
              InHubFlow B2B Engine Activo
            </span>
          </div>
        </div>

        {/* TAB 1: WORKFLOW SEQUENCES SHOWCASE */}
        {activeTab === 'sequences' && (
          <div className="animate-fadeIn space-y-4">
            {/* Realtime KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Decisores Extraídos (SalesNav)</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">3,420 Leads</p>
                <span className="text-[10px] text-emerald-500 font-semibold">+18.4% esta semana</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Tasa de Aceptación LinkedIn</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">48.6%</p>
                <span className="text-[10px] text-blue-500 font-semibold">Notas personalizadas por IA</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Apertura Cold Email</p>
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">71.4%</p>
                <span className="text-[10px] text-indigo-500 font-semibold">Warm-up activo (0% SPAM)</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Reuniones Agendadas</p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">42 Citas</p>
                <span className="text-[10px] text-emerald-500 font-semibold">Calendly / Google Sync</span>
              </div>
            </div>

            {/* Campaign Sequence Flow Simulation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 min-h-[295px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Campaña Activa: CEOs & Directores Comerciales (SaaS & Fintech B2B)
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  En Ejecución ⚡
                </span>
              </div>

              <div className="space-y-2 text-xs flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Paso 1: Extracción & Verificación de Decisores
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                      Extracción de 500 tomadores de decisión de Sales Navigator + enriquecimiento de emails corporativos verificados.
                    </p>
                  </div>
                  <span className="text-emerald-500 font-semibold text-[11px]">Completado ✓</span>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-blue-900 dark:text-blue-200">
                      Paso 2: Visita de Perfil + Solicitud de Conexión en LinkedIn con IA
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-[11px]">
                      <em>&quot;Hola [Nombre], vi tu rol liderando [Empresa] en el sector B2B. Te contacto porque ayudamos a directores como tú a automatizar su captación corporativa con IA...&quot;</em>
                    </p>
                  </div>
                  <span className="text-blue-500 font-semibold animate-pulse text-[11px]">Enviando (45/día)...</span>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Paso 3: Mensaje de Seguimiento Condicionado en LinkedIn
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                      Al aceptar la conexión, envía un mensaje con propuesta de valor adaptada al sector de la empresa. Se pausa automáticamente si responde.
                    </p>
                  </div>
                  <span className="text-purple-500 font-semibold text-[11px]">Condicionado</span>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Paso 4: Cold Email de Respaldo Multietapa & Agendamiento
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                      Si no responde en LinkedIn en 48h, envía automáticamente un correo personalizado con enlace directo de reserva en Google Calendar / Calendly.
                    </p>
                  </div>
                  <span className="text-emerald-500 font-semibold text-[11px]">Confirmado 🎉</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI SDR INTERACTION SHOWCASE */}
        {activeTab === 'sdr' && (
          <div className="animate-fadeIn space-y-4">
            {/* Realtime KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Decisiones IA en LinkedIn</p>
                <p className="text-xl font-bold text-violet-600 dark:text-violet-400 mt-0.5">1,280</p>
                <span className="text-[10px] text-violet-500 font-semibold">Análisis en tiempo real</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Velocidad de Respuesta IA</p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">&lt; 3 Segundos</p>
                <span className="text-[10px] text-emerald-500 font-semibold">24/7 sin retrasos</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Tasa de Conversión a Cita</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">38.2%</p>
                <span className="text-[10px] text-blue-500 font-semibold">Calificación automática</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Nivel de Confianza IA</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400 mt-0.5">94% Precisión</p>
                <span className="text-[10px] text-purple-500 font-semibold">Hard-stops de seguridad</span>
              </div>
            </div>

            {/* Live LinkedIn AI SDR Conversation Simulation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 min-h-[295px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3 border-b border-gray-100 dark:border-gray-700 pb-2.5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs">
                      in
                    </span>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <span>Esteban Navarro (VP of Sales en TechFin Corp)</span>
                    </h4>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Canal: LinkedIn Inbox • Asignado a: InHubFlow AI SDR Agent</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                  Calificado: Alta Intención 🔥
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3 text-xs flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="p-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    <p>Hola, vi tu solicitud de conexión. ¿Cómo funciona exactamente su sistema para automatizar la prospección en LinkedIn sin riesgo de bloqueo?</p>
                    <span className="text-[9px] text-gray-400 block mt-1">10:14 AM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 max-w-[85%] ml-auto justify-end">
                  <div className="p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                    <p>¡Hola Esteban! Nuestro motor utiliza Playwright Stealth para emular la navegación humana con pausas aleatorias y límites diarios de seguridad. Además, yo como SDR de IA analizo las respuestas en tiempo real, resuelvo dudas comerciales y agendo las demos directamente en tu calendario 📅.</p>
                    <span className="text-[9px] text-blue-200 block mt-1">10:14 AM • Respondido por InHubFlow AI SDR 🤖</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="p-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    <p>¡Suena perfecto! Nos interesa para nuestro equipo de 6 comerciales. ¿Tienen disponibilidad mañana a las 11:00 AM para una videollamada?</p>
                    <span className="text-[9px] text-gray-400 block mt-1">10:15 AM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 max-w-[85%] ml-auto justify-end">
                  <div className="p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md">
                    <p>¡Listo Esteban! He reservado el espacio para mañana a las 11:00 AM en tu Google Calendar y te envié la confirmación con el link de Google Meet. ¡Nos vemos en la llamada! 🚀</p>
                    <span className="text-[9px] text-emerald-200 block mt-1">10:15 AM • Cita Confirmada en Google Calendar ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Quick Access CTA Bar */}
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>Seguridad anti-bloqueo activa con Playwright Stealth y límites diarios inteligentes.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href="#pricing"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold hover:scale-105 transition-transform shadow-md"
            >
              Comenzar con InHubFlow B2B ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

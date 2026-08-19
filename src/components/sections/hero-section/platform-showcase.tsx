'use client';

import React, { useState, useEffect } from 'react';

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<'b2b' | 'b2c'>('b2b');
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 7 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 'b2b' ? 'b2c' : 'b2b'));
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="w-full max-w-[1100px] mx-auto relative z-30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Glassmorphic Showcase Window */}
      <div className="p-3 sm:p-5 rounded-[32px] border border-white/60 dark:border-white/10 bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl relative overflow-hidden">
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
              {activeTab === 'b2b'
                ? 'https://b2b.inhubflow.online/campaigns/growth-b2b'
                : 'https://b2c.inhubflow.online/app/inbox-view/live-ai'}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 font-semibold">
            <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400">
              SDR IA v2.4 Activo
            </span>
          </div>
        </div>

        {/* TAB 1: B2B OUTREACH SHOWCASE */}
        {activeTab === 'b2b' && (
          <div className="animate-fadeIn space-y-4">
            {/* Realtime KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Leads Extraídos (Apollo/SalesNav)</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">3,420</p>
                <span className="text-[10px] text-emerald-500 font-semibold">+18.4% esta semana</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Tasa de Conexión LinkedIn</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">46.8%</p>
                <span className="text-[10px] text-blue-500 font-semibold">Notas personalizadas con IA</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Apertura Cold Email</p>
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">68.2%</p>
                <span className="text-[10px] text-indigo-500 font-semibold">Warm-up activo (0% SPAM)</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Reuniones Agendadas</p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">42 Citas</p>
                <span className="text-[10px] text-emerald-500 font-semibold">Google Calendar Sync</span>
              </div>
            </div>

            {/* Campaign Sequence Flow Simulation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 min-h-[295px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Campaña Activa: CEOs & Directores Comerciales (SaaS & Fintech)
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
                      Paso 1: Extracción & Verificación Inteligente
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                      Extrayendo 500 tomadores de decisión de Sales Navigator + enriquecimiento de emails corporativos con Apollo.io.
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
                      Paso 2: Solicitud de Conexión en LinkedIn con IA Redactora
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-[11px]">
                      <em>&quot;Hola [Nombre], vi tu trayectoria escalando [Empresa] en el sector B2B. Te contacto porque ayudamos a directores como tú a automatizar su prospección multicanal...&quot;</em>
                    </p>
                  </div>
                  <span className="text-blue-500 font-semibold animate-pulse text-[11px]">Enviando (48/día)...</span>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-purple-50/40 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Paso 3: Cold Email Multietapa con Detección de Respuestas
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                      Si no responde en LinkedIn en 48h, envía automáticamente correo personalizado de seguimiento. Se detiene al recibir respuesta.
                    </p>
                  </div>
                  <span className="text-purple-500 font-semibold text-[11px]">Programado</span>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Paso 4: Auto-Agendamiento de Cita & Sincronización en CRM
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                      Al calificar al prospecto, agenda la videollamada directamente en tu Google Calendar / Calendly y actualiza el estado en el CRM.
                    </p>
                  </div>
                  <span className="text-emerald-500 font-semibold text-[11px]">Confirmado 🎉</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: B2C OMNICHANNEL SHOWCASE */}
        {activeTab === 'b2c' && (
          <div className="animate-fadeIn space-y-4">
            {/* Realtime KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Miembros de Grupos WhatsApp</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">8,950</p>
                <span className="text-[10px] text-emerald-500 font-semibold">Extraídos en 1 clic</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Seguidores de Instagram</p>
                <p className="text-xl font-bold text-pink-600 dark:text-pink-400 mt-0.5">14,200</p>
                <span className="text-[10px] text-pink-500 font-semibold">Segmentados por nicho</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Velocidad de Respuesta IA</p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">&lt; 3 Segundos</p>
                <span className="text-[10px] text-emerald-500 font-semibold">24/7 sin interrupciones</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70">
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Tasa de Conversión a Cita</p>
                <p className="text-xl font-bold text-teal-600 dark:text-teal-400 mt-0.5">31.5%</p>
                <span className="text-[10px] text-teal-500 font-semibold">Cierre automático</span>
              </div>
            </div>

            {/* Live Chatwoot AI Conversation Simulation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 min-h-[295px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3 border-b border-gray-100 dark:border-gray-700 pb-2.5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                      WA
                    </span>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <span>Carlos Mendoza (Lead de Grupo WhatsApp &quot;Empresarios Inmobiliarios&quot;)</span>
                    </h4>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Canal: WhatsApp Evolution API • Asignado a: InHub AI SDR Bot</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                  Calificado: Alta Intención 🔥
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3 text-xs flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="p-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    <p>Hola, recibí su mensaje. ¿Cómo funciona el sistema para captar clientes para nuestra inmobiliaria en automático?</p>
                    <span className="text-[9px] text-gray-400 block mt-1">10:14 AM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 max-w-[85%] ml-auto justify-end">
                  <div className="p-3 rounded-2xl rounded-tr-none bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md">
                    <p>¡Hola Carlos! Extraemos los compradores e inversores directamente de grupos de bienes raíces en WhatsApp y seguidores de tu competencia en Instagram. Luego nuestro SDR de IA conversa con ellos y te agenda las visitas a propiedades en tu Google Calendar 📲.</p>
                    <span className="text-[9px] text-emerald-200 block mt-1">10:14 AM • Respondido por InHub AI SDR 🤖</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="p-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    <p>¡Excelente! ¿Tienen disponibilidad mañana para una videollamada y ver cómo se configura?</p>
                    <span className="text-[9px] text-gray-400 block mt-1">10:15 AM</span>
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
            <span>Infraestructura VPS aislada con seguridad anti-bloqueo y backups automáticos.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href="#pricing"
              className="px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-105 transition-transform"
            >
              Comenzar con {activeTab === 'b2b' ? 'Outreach B2B' : 'Omnicanal B2C'} ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

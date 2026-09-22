'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/providers/language';

export default function SignalRadarSection() {
  const { t } = useLanguage();
  const [selectedSignal, setSelectedSignal] = useState<'competitor' | 'keywords' | 'icp'>('competitor');

  const signalsContent = {
    competitor: {
      tag: 'Competencia & Contenido',
      tagColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
      title: 'Interacciones en Posts de Competidores y Lead Magnets',
      desc: 'Pega el enlace de una publicación viral de tu competencia o de un referente del sector. El Radar detecta al instante a los directores y decisores que dieron Like o comentaron solicitando información.',
      metric: '92% Tasa de Interés',
      leadExample: {
        name: 'Camila Rossi',
        role: 'Head of Sales & Growth',
        company: 'Logix Tech (250 emp.)',
        event: 'Comentó en el post de Competidor X: "Me interesa una demo, ¿envían propuesta?"',
        signalScore: '98% Intención de Compra',
        action: 'SDR IA activó conexión personalizada con mención del debate',
      },
    },
    keywords: {
      tag: 'Palabras Clave & Mercado',
      tagColor: 'text-sky-500 bg-sky-500/10 border-sky-500/30',
      title: 'Monitoreo de Necesidad Activa por Palabras Clave',
      desc: 'Define términos clave como "busco CRM", "alternativa a...", "automatización de ventas" o rondas de inversión. InHubFlow rastrea discusiones públicas y te alerta en el momento exacto en que buscan solución.',
      metric: '4.2x Más Respuestas',
      leadExample: {
        name: 'Fernando Silva',
        role: 'Chief Technology Officer (CTO)',
        company: 'FinNova Latam (Serie A)',
        event: 'Publicó en LinkedIn: "Buscamos herramienta para escalar prospección B2B sin saturar el equipo"',
        signalScore: '95% Intención de Compra',
        action: 'Secuencia multicanal enviada con caso de estudio relevante',
      },
    },
    icp: {
      tag: 'Traspaso de Mando en tu ICP',
      tagColor: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
      title: 'Nuevos en el Cargo y Ascensos (<90 Días)',
      desc: 'El 70% de los nuevos CEOs, Directores y VPs contratan nuevos proveedores durante sus primeros 90 días para demostrar resultados rápidos. El radar los detecta automáticamente en tu cliente ideal.',
      metric: 'Ventana Crítica de 90 Días',
      leadExample: {
        name: 'Mariana Duarte',
        role: 'Vice President of Operations (Nuevo en el cargo)',
        company: 'Grupo Retail Sur (1.200 emp.)',
        event: 'Asumió nuevo cargo hace 18 días • Empresa con 15 ofertas de empleo activas',
        signalScore: '96% Intención de Compra',
        action: 'Invitación con felicitación + propuesta de optimización enviada',
      },
    },
  };

  const active = signalsContent[selectedSignal];

  return (
    <section id="signals" className="py-16 sm:py-24 relative overflow-hidden bg-[#070b14] text-white">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            NUEVA TECNOLOGÍA: RADAR DE SEÑALES DE INTENCIÓN
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Deja de Escribir en Frío.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
              Vende en el Momento Exacto en que Quieren Comprar.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            El 95% de los decisores ignora los mensajes genéricos. InHubFlow vigila la red las 24 horas y te avisa cuando un decisor muestra una señal real de compra para contactarlo al instante.
          </p>
        </div>

        {/* 3 Selector Tabs - Full width aligned with max-w-7xl */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
          <button
            type="button"
            onClick={() => setSelectedSignal('competitor')}
            className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              selectedSignal === 'competitor'
                ? 'bg-white/10 border-amber-500/70 scale-[1.01]'
                : 'bg-white/5 border-white/20 hover:bg-white/[0.08] hover:border-white/35'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">1. Competidores</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>
            <p className="text-base font-bold text-white mb-1">Posts de Competencia</p>
            <p className="text-xs text-gray-400 leading-relaxed">Capta a decisores que reaccionan o solicitan demos en publicaciones de tus rivales.</p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSignal('keywords')}
            className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              selectedSignal === 'keywords'
                ? 'bg-white/10 border-sky-500/70 scale-[1.01]'
                : 'bg-white/5 border-white/20 hover:bg-white/[0.08] hover:border-white/35'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">2. Palabras Clave</span>
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
            <p className="text-base font-bold text-white mb-1">Búsqueda de Intención</p>
            <p className="text-xs text-gray-400 leading-relaxed">Alertas instantáneas cuando publican buscando alternativas, soluciones o proveedores.</p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSignal('icp')}
            className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              selectedSignal === 'icp'
                ? 'bg-white/10 border-purple-500/70 scale-[1.01]'
                : 'bg-white/5 border-white/20 hover:bg-white/[0.08] hover:border-white/35'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">3. Traspaso de Mando</span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <p className="text-base font-bold text-white mb-1">Nuevos Cargos (&lt;90 Días)</p>
            <p className="text-xs text-gray-400 leading-relaxed">Identifica a nuevos directores de tu cliente ideal con presupuesto para sus primeros 90 días.</p>
          </button>
        </div>

        {/* Live Signal Interactive Showcase Card - Full Width 7xl */}
        <div className="w-full rounded-3xl border border-white/25 bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Top Bar of the Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${active.tagColor}`}>
                  {active.tag}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Radar Activo en Tiempo Real
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{active.title}</h3>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/20 text-xs font-semibold text-gray-300 self-start sm:self-auto shrink-0">
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="text-amber-400 font-bold">Impacto Comercial:</span>
              <span className="text-white font-extrabold text-sm">{active.metric}</span>
            </div>
          </div>

          {/* 2-Column Responsive Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Context & Value Props */}
            <div className="lg:col-span-5 space-y-5">
              <p className="text-base text-gray-300 leading-relaxed">
                {active.desc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Filtro anti-spam y descarte de perfiles sin poder de decisión.</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Activación inmediata de secuencias LinkedIn + Email contextualizadas.</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Integrado de forma nativa en todos los planes sin costes por API externa.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Simulated Lead Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/25 bg-black/50 p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-base flex items-center justify-center shrink-0 border border-white/30">
                      {active.leadExample.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm sm:text-base font-bold text-white">{active.leadExample.name}</p>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          LinkedIn Verificado
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{active.leadExample.role} • <strong className="text-gray-300">{active.leadExample.company}</strong></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/40 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                    <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    <span className="text-emerald-400 font-extrabold text-xs">{active.leadExample.signalScore}</span>
                  </div>
                </div>

                {/* Event Trigger Quote */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/20 text-xs sm:text-sm">
                  <span className="text-gray-400 font-semibold block mb-1">Evento disparador detectado por el Radar:</span>
                  <p className="text-gray-200 font-medium italic">"{active.leadExample.event}"</p>
                </div>

                {/* Automated Outbound Action Triggered */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-indigo-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span>Acción automática: <strong className="text-white">{active.leadExample.action}</strong></span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    Respuesta esperada en &lt; 2 horas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="mt-8 pt-5 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 gap-3">
            <span>✓ Filtro contra falsos positivos con IA</span>
            <span>✓ Exportable a listas de prospección en 1 clic</span>
            <span>✓ 100% Nativo en tu suscripción de InHubFlow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

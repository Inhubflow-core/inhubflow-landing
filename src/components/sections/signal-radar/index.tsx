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

        {/* 3 Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10">
          <button
            type="button"
            onClick={() => setSelectedSignal('competitor')}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
              selectedSignal === 'competitor'
                ? 'bg-white/10 border-amber-500/60 shadow-lg shadow-amber-500/10 scale-[1.02]'
                : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">1. Competidores</span>
              <span className="text-lg">🎯</span>
            </div>
            <p className="text-sm font-bold text-white mb-1">Posts de Competencia</p>
            <p className="text-xs text-gray-400 line-clamp-2">Capta a quienes reaccionan o comentan en publicaciones de tus rivales.</p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSignal('keywords')}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
              selectedSignal === 'keywords'
                ? 'bg-white/10 border-sky-500/60 shadow-lg shadow-sky-500/10 scale-[1.02]'
                : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">2. Palabras Clave</span>
              <span className="text-lg">🔍</span>
            </div>
            <p className="text-sm font-bold text-white mb-1">Búsqueda de Intención</p>
            <p className="text-xs text-gray-400 line-clamp-2">Alertas cuando buscan "alternativa a...", recomendaciones o proveedores.</p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSignal('icp')}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
              selectedSignal === 'icp'
                ? 'bg-white/10 border-purple-500/60 shadow-lg shadow-purple-500/10 scale-[1.02]'
                : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">3. Traspaso de Mando</span>
              <span className="text-lg">👔</span>
            </div>
            <p className="text-sm font-bold text-white mb-1">Nuevos Cargos (&lt;90 Días)</p>
            <p className="text-xs text-gray-400 line-clamp-2">Nuevos directores con presupuesto asignado para sus primeros 3 meses.</p>
          </button>
        </div>

        {/* Live Signal Interactive Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Top Bar of the Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${active.tagColor}`}>
                  {active.tag}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Señal Capturada en Vivo
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{active.title}</h3>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-xs font-semibold text-gray-300">
              <span className="text-amber-400">⚡ Impacto:</span>
              <span className="text-white font-bold">{active.metric}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            {active.desc}
          </p>

          {/* Simulated Lead Card Detected by Radar */}
          <div className="rounded-2xl border border-white/15 bg-black/40 p-4 sm:p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-base flex items-center justify-center shrink-0 border border-white/20 shadow-md">
                  {active.leadExample.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white">{active.leadExample.name}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      LinkedIn Verificado
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{active.leadExample.role} • <strong className="text-gray-300">{active.leadExample.company}</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                <span className="text-emerald-400 font-extrabold text-xs">🔥 {active.leadExample.signalScore}</span>
              </div>
            </div>

            {/* Event Trigger Quote */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
              <span className="text-gray-400 font-medium block mb-1">Evento disparador detectado por el Radar:</span>
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

          {/* Bottom Footnote */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 gap-2">
            <span>✓ Filtro contra falsos positivos con IA</span>
            <span>✓ Exportable a listas de prospección en 1 clic</span>
            <span>✓ 100% Nativo en tu suscripción de InHubFlow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

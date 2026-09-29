'use client';

import React, { useState } from 'react';

export default function HowItWorksSection() {
  // Estado interactivo para el Paso 1 (Lead Finder)
  const [selectedTitle, setSelectedTitle] = useState('Director Comercial');
  const [strictFilter, setStrictFilter] = useState(true);

  // Estado interactivo para el Paso 3 (Filtro o vista de Analytics)
  const [activeMetricTab, setActiveMetricTab] = useState<'all' | 'signals' | 'direct'>('signals');

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative overflow-hidden bg-white dark:bg-[#0b1120] border-y border-gray-200 dark:border-gray-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              Flujo Paso a Paso • Prospección B2B
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            De encontrar a tu cliente ideal a<br />
            agendar reuniones comerciales:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Todo en un solo Flujo.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            InHubFlow conecta cada etapa de tu proceso comercial: define perfiles con datos actualizados en tiempo real, detecta señales de compra, activa secuencias inteligentes y sincroniza las reuniones en tu CRM.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PASO 1: Encuentra prospectos directamente en LinkedIn (Lead Finder)        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Información del Paso 1 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
                1
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Encuentra prospectos directamente en LinkedIn
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Crea listas de prospectos cualificados con perfiles de LinkedIn reales y actualizados, sin bases de datos obsoletas ni información desactualizada.
            </p>

            <div className="space-y-3 pt-2">
              {/* Checklist 1 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Usa LinkedIn Search, Sales Navigator o Recruiter Lite sin restricciones
                </span>
              </div>

              {/* Checklist 2 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Segmenta con señales de intención: decisores que interactúan con posts, grupos o eventos
                </span>
              </div>

              {/* Checklist 3 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  No necesitas bases de datos externas: exporta o sincroniza listas directas con un clic
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mockup Lead Finder */}
          <div className="lg:col-span-7">
            <div className="relative bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-blue-500/5 p-4 sm:p-6 transition-all">
              
              {/* App Bar macOS */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 dark:text-gray-500">
                    inhubflow / lead-finder
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Captura en tiempo real activa
                </span>
              </div>

              {/* Formulario y Filtros tipo Lead Finder */}
              <div className="bg-gray-50/70 dark:bg-gray-800/40 rounded-2xl border border-gray-200/70 dark:border-gray-800/60 p-3.5 sm:p-4 mb-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    Criterios de Búsqueda
                  </span>
                  <span className="text-[11px] text-gray-500 font-normal">Filtro de Decisores</span>
                </div>

                {/* Input de Cargo con sugerencias */}
                <div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-xs">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    <span className="font-semibold text-gray-900 dark:text-white">{selectedTitle}</span>
                    <span className="ml-auto text-[10px] px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">LinkedIn Match</span>
                  </div>

                  {/* Pills de sugerencias */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Director Comercial', 'Head of Sales', 'VP of Growth', 'CEO / Founder'].map((pill) => (
                      <button
                        key={pill}
                        onClick={() => setSelectedTitle(pill)}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                          selectedTitle === pill
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-400'
                        }`}
                      >
                        {selectedTitle === pill ? `✓ ${pill}` : `+ ${pill}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filtro estricto y País */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/80">
                    <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Filtro estricto de cargo
                    </span>
                    <button
                      onClick={() => setStrictFilter(!strictFilter)}
                      className={`w-7 h-4 rounded-full transition-colors relative ${strictFilter ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                    >
                      <span className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${strictFilter ? 'left-3.5' : 'left-0.5'}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/80 text-[11px]">
                    <span className="text-gray-500 dark:text-gray-400">Ubicación:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Chile, España, México</span>
                  </div>
                </div>
              </div>

              {/* Lista de resultados en vivo capturados */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1 text-xs font-bold text-gray-700 dark:text-gray-300">
                  <span>Prospectos Detectados (28 listos para sincronizar)</span>
                  <span className="text-blue-600 dark:text-blue-400 text-[11px]">Verificado por IA</span>
                </div>

                {/* Lead 1 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      CM
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-gray-900 dark:text-white">Carlos Mendonça</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.2 rounded">in</span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate max-w-[200px] sm:max-w-xs">
                        {selectedTitle} • CloudScale Tech (120 emp.)
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      98% Fit ICP
                    </span>
                  </div>
                </div>

                {/* Lead 2 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      SV
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-gray-900 dark:text-white">Sofía Valenzuela</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.2 rounded">in</span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate max-w-[200px] sm:max-w-xs">
                        Head of Business Development • Nexus Corp
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      95% Fit ICP
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FLECHA CONECTORA 1 -> 2 (Curva de derecha a izquierda)                    */}
        {/* ========================================================================= */}
        <div className="py-6 sm:py-10 flex justify-center items-center pointer-events-none select-none">
          <img
            src="/images/arrows/arrow-to-left.png"
            alt="Flecha conectora hacia el paso 2"
            className="w-56 sm:w-80 lg:w-[420px] max-w-full h-auto object-contain dark:invert dark:opacity-85 pointer-events-none select-none"
            loading="lazy"
          />
        </div>

        {/* ========================================================================= */}
        {/* PASO 2: Lanza campañas con toque personal (Monitores de Señales)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Mockup Monitores de Señales & Campañas */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-indigo-500/5 p-4 sm:p-6 transition-all">
              
              {/* App Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 dark:text-gray-500">
                    inhubflow / signal-radar & campaigns
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Señal de Intención Detectada
                </span>
              </div>

              {/* Tarjeta de Señal Capturada */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m13.4 10.6 4.6-4.6"/><circle cx="12" cy="12" r="2"/></svg>
                    Post de Competidor • LinkedIn
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-red-500 text-white">
                    98% Intención de Compra
                  </span>
                </div>
                <p className="text-xs text-gray-800 dark:text-gray-200 font-medium">
                  <strong>Camila Rossi</strong> comentó en post de Competidor X: <span className="italic text-gray-600 dark:text-gray-300">"Me interesa una demo, ¿tienen integración con HubSpot?"</span>
                </p>
              </div>

              {/* Secuencia Visual conectada */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                
                {/* Paso Secuencia (Sidebar visual) */}
                <div className="sm:col-span-4 space-y-2">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <span className="text-sm">🔗</span> Invitación
                  </div>
                  <div className="py-0.5 px-3 text-[10px] text-gray-400 font-mono text-center">
                    ⏳ Esperar 1 día
                  </div>
                  <div className="p-2.5 rounded-xl bg-indigo-600 text-white border border-indigo-500 text-xs font-bold flex items-center gap-2 shadow-md shadow-indigo-500/20">
                    <span className="text-sm">✉️</span> Mensaje IA Activo
                  </div>
                  <div className="py-0.5 px-3 text-[10px] text-gray-400 font-mono text-center">
                    ⏳ Esperar 3 días
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span className="text-sm">📩</span> Seguimiento Multicanal
                  </div>
                </div>

                {/* Vista previa del Mensaje con IA Contextual */}
                <div className="sm:col-span-8 p-4 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700/80 shadow-xs">
                  <div className="flex items-center gap-2.5 pb-2.5 mb-2.5 border-b border-gray-100 dark:border-gray-700">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-[10px] flex items-center justify-center">
                      CR
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white block">Para: Camila Rossi</span>
                      <span className="text-[10px] text-gray-500">Head of Growth • Generado con IA Contextual</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                    Hola <span className="font-semibold text-blue-600 dark:text-blue-400">Camila</span>, vi tu comentario en el debate sobre automatización comercial.
                    <br /><br />
                    En InHubFlow sincronizamos prospectos directamente con <strong className="text-gray-900 dark:text-white">HubSpot</strong> y agendamos reuniones automáticamente sin prospectar en frío.
                    <br /><br />
                    ¿Te haría sentido ver un demo de 10 min esta semana?
                  </p>

                  <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-[10px] text-gray-500">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Cadencia segura: 18 msgs/día
                    </span>
                    <span>Listo para enviar ✓</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Columna Derecha: Información del Paso 2 */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                2
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Lanza campañas de prospección con un toque personal
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Envía invitaciones, mensajes y seguimientos basados en señales reales que generan conversaciones genuinas en el momento exacto en que tu prospecto busca soluciones.
            </p>

            <div className="space-y-3 pt-2">
              {/* Checklist 1 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-indigo-500/30">
                <div className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  99+ secuencias de prospección y plantillas de alto impacto listas para usar
                </span>
              </div>

              {/* Checklist 2 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-indigo-500/30">
                <div className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Seguimientos automáticos en LinkedIn o por email sin sonar como un robot
                </span>
              </div>

              {/* Checklist 3 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-indigo-500/30">
                <div className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Ritmo de envío natural que respeta estrictamente los límites de tu cuenta de LinkedIn
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FLECHA CONECTORA 2 -> 3 (Curva de izquierda a derecha)                    */}
        {/* ========================================================================= */}
        <div className="py-6 sm:py-10 flex justify-center items-center pointer-events-none select-none">
          <img
            src="/images/arrows/arrow-to-right.png"
            alt="Flecha conectora hacia el paso 3"
            className="w-56 sm:w-80 lg:w-[420px] max-w-full h-auto object-contain dark:invert dark:opacity-85 pointer-events-none select-none"
            loading="lazy"
          />
        </div>

        {/* ========================================================================= */}
        {/* PASO 3: Descubre qué funciona y escálalo (Analytics & Optimización)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Información del Paso 3 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
                3
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Descubre qué funciona y escálalo
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Identifica qué campañas, copys y señales generan respuestas... y haz más de eso con reportes claros y optimización continua.
            </p>

            <div className="space-y-3 pt-2">
              {/* Checklist 1 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Tu tasa de respuesta por campaña, comparada en tiempo real con el sector
                </span>
              </div>

              {/* Checklist 2 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Análisis visual: descubre qué mensaje generó más respuestas positivas
                </span>
              </div>

              {/* Checklist 3 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Dashboard de rendimiento claro para ti, tu equipo comercial y tus clientes
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mockup Analytics & Performance */}
          <div className="lg:col-span-7">
            <div className="relative bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-blue-500/5 p-4 sm:p-6 transition-all">
              
              {/* App Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 dark:text-gray-500">
                    inhubflow / performance-analytics
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    RESPONSE RATE: 24.8%
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Top 5% del Sector
                  </span>
                </div>
              </div>

              {/* KPIs superiores del Paso 3 */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-blue-600 dark:text-blue-400">24.8%</p>
                  <p className="text-[10px] font-bold text-gray-600 dark:text-gray-300">Tasa Respuesta</p>
                  <p className="text-[9px] text-gray-400">vs. 6% estándar</p>
                </div>
                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-purple-600 dark:text-purple-400">58.4%</p>
                  <p className="text-[10px] font-bold text-gray-600 dark:text-gray-300">Aceptación</p>
                  <p className="text-[9px] text-gray-400">Invitaciones LinkedIn</p>
                </div>
                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400">+34</p>
                  <p className="text-[10px] font-bold text-gray-600 dark:text-gray-300">Reuniones</p>
                  <p className="text-[9px] text-gray-400">Este mes</p>
                </div>
              </div>

              {/* Comparador de rendimiento y niveles (como en la imagen 3 del usuario) */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center justify-between">
                  <span>¿Cómo están funcionando tus campañas?</span>
                  <span className="text-[10px] font-normal text-gray-400">Benchmark B2B</span>
                </p>

                {/* Nivel 1: Strong performer */}
                <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-300/80 dark:border-emerald-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <div>
                      <span className="text-xs font-bold text-emerald-950 dark:text-emerald-200">
                        Strong performer (Campaña Señales Competencia)
                      </span>
                      <p className="text-[10px] text-emerald-700 dark:text-emerald-400">
                        Duplica este mensaje y replica la prueba a otros decisores
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-900 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                    &gt; 20% 🚀
                  </span>
                </div>

                {/* Nivel 2: Good traction */}
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <div>
                      <span className="text-xs font-bold text-blue-950 dark:text-blue-200">
                        Good traction (Campaña Directores Comerciales)
                      </span>
                      <p className="text-[10px] text-blue-700 dark:text-blue-400">
                        Corta un 20% del texto y termina con una sola pregunta directa
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900 px-2 py-0.5 rounded-lg border border-blue-200 dark:border-blue-800">
                    10-20%
                  </span>
                </div>

                {/* Nivel 3: Getting there */}
                <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div>
                      <span className="text-xs font-bold text-amber-950 dark:text-amber-200">
                        Getting there (Prospección General Tech)
                      </span>
                      <p className="text-[10px] text-amber-700 dark:text-amber-400">
                        Añade un detalle preciso sobre su sector o cargo
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-white dark:bg-gray-900 px-2 py-0.5 rounded-lg border border-amber-200 dark:border-amber-800">
                    5-10%
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FLECHA CONECTORA 3 -> 4 (Curva de derecha a izquierda)                    */}
        {/* ========================================================================= */}
        <div className="py-6 sm:py-10 flex justify-center items-center pointer-events-none select-none">
          <img
            src="/images/arrows/arrow-to-left.png"
            alt="Flecha conectora hacia el paso 4"
            className="w-56 sm:w-80 lg:w-[420px] max-w-full h-auto object-contain dark:invert dark:opacity-85 pointer-events-none select-none"
            loading="lazy"
          />
        </div>

        {/* ========================================================================= */}
        {/* PASO 4: Sincroniza con tu CRM y SDR IA                                    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Mockup Sincronización CRM & Agendamiento */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-blue-500/5 p-4 sm:p-6 transition-all">
              
              {/* App Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 dark:text-gray-500">
                    inhubflow / crm-sync & sdr-agent
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Sincronización 100% Automática
                </span>
              </div>

              {/* Chat con Asistente SDR IA agendando */}
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-850 border border-gray-200 dark:border-gray-700/80 mb-4 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
                  <span>Conversación en Vivo (LinkedIn + SDR IA)</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Reunión Agendada ✓</span>
                </div>

                {/* Mensaje del prospecto */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    CM
                  </div>
                  <div className="p-2.5 rounded-2xl rounded-tl-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200">
                    "Me parece genial, ¿podemos revisar la demo el jueves a las 11:00 AM?"
                  </div>
                </div>

                {/* Respuesta del SDR IA */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="p-2.5 rounded-2xl rounded-tr-sm bg-blue-600 text-white text-xs max-w-sm shadow-xs">
                    "¡Listo Carlos! Agendé la sesión en Google Calendar y te envié la invitación con el link de Google Meet. ¡Nos vemos el jueves!"
                  </div>
                  <div className="w-7 h-7 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    IA
                  </div>
                </div>
              </div>

              {/* Tarjeta de Evento y Enlaces CRM (como en la imagen 4 del usuario) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Evento en Calendario */}
                <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-800/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-xs">
                    📅
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 dark:text-white block">
                      Demo Comercial Confirmada
                    </span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">
                      Jueves 11:00 AM • Google Calendar / Meet
                    </span>
                  </div>
                </div>

                {/* Exportar a CSV */}
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">📥</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">Exportar a CSV</span>
                  </div>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                    Descargar
                  </span>
                </div>

              </div>

              {/* Botones de Integraciones CRM activas */}
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/60 text-xs font-semibold text-orange-700 dark:text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Sincronizado con HubSpot
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Sincronizado con Pipedrive
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <span>⚡</span>
                  +2.000 Apps vía Zapier
                </div>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Información del Paso 4 */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 shrink-0">
                4
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Sincroniza las respuestas con tu CRM
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Envía los prospectos cualificados y las reuniones confirmadas directamente a tus herramientas comerciales sin trabajo manual ni fricción.
            </p>

            <div className="space-y-3 pt-2">
              {/* Checklist 1 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  HubSpot, Pipedrive y más de 2.000 integraciones automáticas
                </span>
              </div>

              {/* Checklist 2 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Enriquece tus prospectos automáticamente con correos profesionales verificados
                </span>
              </div>

              {/* Checklist 3 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-blue-500/30">
                <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                  Exportación completa en CSV con historial y trazabilidad total
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/10">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">¿Listo para llenar tu agenda comercial de reuniones calificadas?</h4>
            <p className="text-blue-100 text-xs sm:text-sm">Configura tu primera campaña con señales de intención en menos de 3 minutos.</p>
          </div>
          <a
            href="#pricing"
            className="px-8 py-3.5 rounded-full text-gray-900 font-extrabold text-sm transition-all shrink-0 active:scale-95 border border-gray-200 hover:opacity-95 shadow-md"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E5E7EB 100%)',
            }}
          >
            Comenzar Prueba Gratis →
          </a>
        </div>

      </div>
    </section>
  );
}

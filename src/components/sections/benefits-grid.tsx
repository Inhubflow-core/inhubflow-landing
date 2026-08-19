import React from "react";

export default function BenefitsGrid() {
  return (
    <section className="bg-gray-900 py-16 md:py-28 px-4 sm:px-6">
      <div className="wrapper max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            Ventajas Competitivas
          </span>
          <h2 className="mb-4 font-extrabold text-center text-white text-3xl sm:text-4xl tracking-tight">
            Diseñado para generar reuniones y ventas todos los días
          </h2>
          <p className="max-w-2xl mx-auto text-base font-normal leading-relaxed text-gray-400">
            Aumenta tu pipeline de ventas sin contratar un equipo masivo de prospección. InHubFlow multiplica la productividad de tu equipo comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative flex flex-col justify-between bg-gradient-to-b from-blue-900/40 to-gray-900 border border-blue-500/30 rounded-3xl p-8 shadow-xl hover:border-blue-400/60 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-6">
                🎯
              </div>
              <h3 className="font-bold text-white text-xl mb-3">
                Extracción Precisa de Leads
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Obtén contactos verificados con correos corporativos y números de teléfono directo desde LinkedIn Sales Navigator, Apollo.io, miembros de grupos de WhatsApp y negocios de Google Maps.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-blue-400 font-semibold">
              <span>Filtros avanzados por cargo e industria</span>
              <span>100% Verificado</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col justify-between bg-gradient-to-b from-indigo-900/40 to-gray-900 border border-indigo-500/30 rounded-3xl p-8 shadow-xl hover:border-indigo-400/60 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="font-bold text-white text-xl mb-3">
                Secuencias Multicanal con Warm-up
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Combina LinkedIn, Cold Email con calentamiento de bandejas para 0% SPAM y WhatsApp masivo con algoritmos inteligentes que emulan comportamiento humano para máxima seguridad.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-indigo-400 font-semibold">
              <span>Protección anti-bloqueo activa</span>
              <span>Alta entregabilidad</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col justify-between bg-gradient-to-b from-emerald-900/40 to-gray-900 border border-emerald-500/30 rounded-3xl p-8 shadow-xl hover:border-emerald-400/60 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-6">
                🤖
              </div>
              <h3 className="font-bold text-white text-xl mb-3">
                Agentes SDR de IA 24/7
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Tus prospectos no tienen que esperar. La IA responde en segundos por WhatsApp, Instagram y LinkedIn, resuelve dudas comerciales complejas y agenda citas en Calendly o Google Calendar.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
              <span>Sincronización de Calendario</span>
              <span>Respuesta en &lt; 3 seg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

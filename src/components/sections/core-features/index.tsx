import { CORE_FEATURES } from "./data";

export function CoreFeatures() {
  return (
    <section id="features" className="py-24 sm:py-30 bg-gray-50 dark:bg-[#0f1523] px-4 sm:px-6">
      <div className="max-w-[76rem] mx-auto">
        <div className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            Capacidades de Alto Rendimiento
          </span>
          <h2 className="mb-4 font-extrabold text-gray-900 text-3xl sm:text-4xl dark:text-white max-w-2xl mx-auto tracking-tight">
            Todo lo que necesitas para prospectar y vender en una sola suite
          </h2>

          <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-400">
            Elimina el uso de 5 herramientas diferentes. InHubFlow unifica la extracción de leads, secuencias de LinkedIn, Cold Email, WhatsApp y Agentes de IA en un solo lugar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-9 border border-gray-200 dark:bg-white/5 dark:border-white/3 rounded-[20px] shadow-[0px_30px_50px_-32px_rgba(107,110,148,0.04)] hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

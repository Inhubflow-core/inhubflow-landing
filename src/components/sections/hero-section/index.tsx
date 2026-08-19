import Image from 'next/image';
import HeroLogos from '../hero-logos';
import { Subheading } from './subheading';
import { PlatformShowcase } from './platform-showcase';

export default function HeroSection() {
  return (
    <section className="pt-12 sm:pt-20 pb-16 relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] dark:from-[#0F172A] dark:via-[#171F2E] dark:to-[#1E293B]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper px-4 sm:px-6 lg:px-8">
          <div className="max-w-[920px] mx-auto">
            <div className="text-center pb-12 sm:pb-16">
              <Subheading text="⚡ La Suite Todo-en-Uno de Prospección & Cierre de Ventas con IA" />

              <h1 className="text-gray-900 font-extrabold mb-6 text-4xl sm:text-5xl lg:text-6xl dark:text-white sm:leading-[1.15] tracking-tight">
                Genera Leads y Cierra Ventas en Piloto Automático con{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  Agentes SDR de IA
                </span>
              </h1>
              <p className="max-w-[720px] text-center mx-auto dark:text-gray-300 text-gray-600 text-base sm:text-lg leading-relaxed">
                Atrae tomadores de decisión con <strong>Cold Email y LinkedIn B2B</strong>. Convierte y agenda reuniones 24/7 en <strong>WhatsApp e Instagram B2C</strong> con extracción masiva de leads de grupos, perfiles y Google Maps.
              </p>

              <div className="mt-8 sm:mt-10 flex sm:flex-row flex-col gap-4 relative z-30 items-center justify-center">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-xl shadow-blue-500/25 h-12 inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-bold scale-100 hover:scale-105"
                >
                  🚀 Ver Planes y Comenzar Ahora
                </a>

                <a
                  href="#features"
                  className="w-full sm:w-auto bg-white/90 dark:bg-gray-800/90 hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700 h-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-gray-800 dark:text-gray-200 text-sm font-semibold shadow-sm backdrop-blur-md"
                >
                  🔍 Ver Cómo Funciona
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Dual-Platform Showcase */}
          <PlatformShowcase />
        </div>

        {/* Floating Feature Badges */}
        <div className="max-[1100px]:hidden pointer-events-none select-none">
          <Image
            src="/images/hero/shape-left-1.svg"
            className="absolute top-16 left-12 floating-1 opacity-90 hover:opacity-100 transition-opacity"
            alt="LinkedIn Outreach"
            width={170}
            height={44}
          />
          <Image
            src="/images/hero/shape-left-2.svg"
            className="absolute left-[130px] top-[320px] floating-2 max-[1240px]:left-[60px] opacity-90 hover:opacity-100 transition-opacity"
            alt="Cold Email Sequences"
            width={181}
            height={44}
          />
          <Image
            src="/images/hero/shape-right-1.svg"
            className="absolute right-12 top-[120px] floating-3 opacity-90 hover:opacity-100 transition-opacity"
            alt="WhatsApp Automations"
            width={176}
            height={44}
          />
          <Image
            src="/images/hero/shape-right-2.svg"
            className="absolute top-[340px] right-[180px] floating-4 max-[1240px]:right-[60px] max-[1350px]:right-[130px] opacity-90 hover:opacity-100 transition-opacity"
            alt="AI Sales SDR"
            width={179}
            height={44}
          />
        </div>
      </div>

      {/* Brand Logos Bar */}
      <HeroLogos />
    </section>
  );
}

import Link from 'next/link';
import { Subheading } from './subheading';
import { PlatformShowcase } from './platform-showcase';

export default function HeroSection() {
  return (
    <section className="pt-12 sm:pt-20 pb-16 relative overflow-hidden dark:bg-[#0c111d]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper px-4 sm:px-6 lg:px-8">
          <div className="max-w-[920px] mx-auto">
            <div className="text-center pb-12 sm:pb-16">
              <Subheading text="⚡ La Suite Todo-en-Uno de Prospección & Cierre de Ventas con IA" />

              <h1 className="text-gray-900 font-extrabold mb-6 text-4xl sm:text-5xl lg:text-6xl dark:text-white sm:leading-[1.15] tracking-tight">
                Genera Leads y Cierra Ventas en Piloto Automático con{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                  Agentes SDR de IA
                </span>
              </h1>
              <p className="max-w-[700px] text-center mx-auto dark:text-gray-300 text-gray-600 text-base sm:text-lg leading-relaxed">
                Atrae tomadores de decisión con <strong>Cold Email y LinkedIn B2B</strong>. Convierte y agenda reuniones 24/7 en <strong>WhatsApp e Instagram B2C</strong> con extracción masiva de leads de grupos, perfiles y Google Maps.
              </p>

              <div className="mt-8 sm:mt-10 flex sm:flex-row flex-col gap-4 relative z-30 items-center justify-center">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-xl shadow-blue-500/25 h-13 inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white text-base font-bold scale-100 hover:scale-105"
                >
                  🚀 Ver Planes y Comenzar Ahora
                </a>

                <a
                  href="#features"
                  className="w-full sm:w-auto bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700 h-13 inline-flex items-center justify-center px-6 py-3.5 rounded-full text-gray-800 dark:text-gray-200 text-sm font-semibold backdrop-blur-md"
                >
                  🔍 Ver Cómo Funciona
                </a>
              </div>
            </div>
          {/* Interactive Dual-Platform Carousel Showcase */}
          <PlatformShowcase />
        </div>

        <div className="absolute hidden lg:block z-10 -top-20 -translate-y-20 left-1/2 -translate-x-1/2">
              <svg
                width="1300"
                height="1001"
                viewBox="0 0 1300 1001"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.7" filter="url(#filter0_f_9279_7148)">
                  <circle cx="800" cy="500.03" r="300" fill="#4E6EFF" />
                </g>
                <g opacity="0.3" filter="url(#filter1_f_9279_7148)">
                  <circle cx="500" cy="500.03" r="300" fill="#FF58D5" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9279_7148"
                    x="300"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                  <filter
                    id="filter1_f_9279_7148"
                    x="0"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="max-[1100px]:hidden">
          <Image
            src="/images/hero/shape-left-1.svg"
            className="absolute top-14 left-16 floating-1"
            alt=""
            width={170}
            height={44}
          />
          <Image
            src="/images/hero/shape-left-2.svg"
            className="absolute left-[145px] top-[298px] floating-2 max-[1240px]:left-[80px]"
            alt=""
            width={181}
            height={44}
          />
          <Image
            src="/images/hero/shape-right-1.svg"
            className="absolute right-16 top-[108px] floating-3"
            alt=""
            width={176}
            height={44}
          />
          <Image
            src="/images/hero/shape-right-2.svg"
            className="absolute top-[316px] right-[200px] floating-4 max-[1240px]:right-[80px] max-[1350px]:right-[150px] max-[1500px]:right-[200px]"
            alt=""
            width={179}
            height={44}
          />
        </div>
      </div>
      <div className="hero-glow-bg pointer-events-none w-full h-167.5 absolute z-10 bottom-0"></div>
      <HeroLogos />
    </section>
  );
}

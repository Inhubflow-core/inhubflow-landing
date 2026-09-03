'use client';

import Image from 'next/image';
import HeroLogos from '../hero-logos';
import { Subheading } from './subheading';
import { PlatformShowcase } from './platform-showcase';
import { useLanguage } from '@/app/providers/language';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] dark:from-[#0F172A] dark:via-[#171F2E] dark:to-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div>
          <div className="max-w-[820px] mx-auto">
            <div className="text-center pb-8 sm:pb-12 lg:pb-16">
              <Subheading text={t.hero.subheading} />

              <h1 className="text-gray-900 font-extrabold mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] dark:text-white sm:leading-[1.16] tracking-tight">
                {t.hero.title1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="max-w-[680px] text-center mx-auto dark:text-gray-300 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                {t.hero.description}
              </p>

              {/* Mobile & Tablet Capabilities Pills (< 1280px) */}
              <div className="xl:hidden mt-6 flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 border border-sky-200 dark:border-sky-800/50 shadow-xs text-xs font-bold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                  </span>
                  <span>{t.hero.badge1}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 border border-indigo-200 dark:border-indigo-800/50 shadow-xs text-xs font-bold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>{t.hero.badge2}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 border border-sky-200 dark:border-sky-800/50 shadow-xs text-xs font-bold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                  </span>
                  <span>{t.hero.badge3}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 border border-indigo-200 dark:border-indigo-800/50 shadow-xs text-xs font-bold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </span>
                  <span>{t.hero.badge4}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 sm:mt-10 flex sm:flex-row flex-col gap-3 sm:gap-4 relative z-30 items-center justify-center">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 h-12 inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-bold scale-100 hover:scale-105 active:scale-98 cursor-pointer shadow-md shadow-blue-600/20"
                >
                  {t.hero.ctaPrimary}
                </a>

                <a
                  href="#features"
                  className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700 h-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-gray-800 dark:text-gray-200 text-sm font-semibold cursor-pointer shadow-xs active:scale-98"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>

          {/* Interactive UI Platform Showcase */}
          <PlatformShowcase />
        </div>
      </div>

      {/* Floating Badges (Framed near the hero content boundary, without touching text) */}
      <div className="hidden xl:block pointer-events-none select-none absolute inset-0 max-w-[1360px] mx-auto">
        {/* Badge 1: Sincronizar Contactos (Upper Left) */}
        <div className="absolute top-16 left-0 2xl:left-2 floating-1 w-[220px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-sky-200/80 dark:border-sky-800/60 shadow-[0_8px_25px_rgba(10,102,194,0.18)] backdrop-blur-md">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm shadow-blue-500/40">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="16 11 18 13 22 9" />
            </svg>
          </span>
          <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge1}</span>
          <span className="absolute -bottom-1.5 right-6 w-2.5 h-2.5 bg-[#0A66C2] rotate-45 rounded-[2px]" />
        </div>

        {/* Badge 2: Calificación con IA (Lower Left) */}
        <div className="absolute top-[320px] left-2 2xl:left-6 floating-2 w-[215px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-indigo-200/80 dark:border-indigo-800/60 shadow-[0_8px_25px_rgba(99,102,241,0.18)] backdrop-blur-md">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-blue-600 text-white shadow-sm shadow-indigo-500/40">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge2}</span>
          <span className="absolute -top-1.5 right-6 w-2.5 h-2.5 bg-indigo-600 rotate-45 rounded-[2px]" />
        </div>

        {/* Badge 3: Atención Multicanal (Upper Right) */}
        <div className="absolute top-20 right-0 2xl:right-2 floating-3 w-[215px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-sky-200/80 dark:border-sky-800/60 shadow-[0_8px_25px_rgba(10,102,194,0.18)] backdrop-blur-md">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm shadow-blue-500/40">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </span>
          <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge3}</span>
          <span className="absolute -bottom-1.5 left-6 w-2.5 h-2.5 bg-[#0A66C2] rotate-45 rounded-[2px]" />
        </div>

        {/* Badge 4: Agendar Reunión (Lower Right) */}
        <div className="absolute top-[330px] right-2 2xl:right-6 floating-4 w-[215px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-emerald-200/80 dark:border-emerald-800/60 shadow-[0_8px_25px_rgba(16,185,129,0.18)] backdrop-blur-md">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-500/40">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
          </span>
          <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge4}</span>
          <span className="absolute -top-1.5 left-6 w-2.5 h-2.5 bg-emerald-600 rotate-45 rounded-[2px]" />
        </div>
      </div>

      {/* Brand Logos Bar */}
      <HeroLogos />
    </section>
  );
}

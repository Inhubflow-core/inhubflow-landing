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
                <span
                  className="bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #0099ff 0%, #0022ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="max-w-[760px] text-center mx-auto dark:text-gray-300 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-2">
                {(() => {
                  const text = t.hero.description;
                  const parts = text.split('LinkedIn');
                  if (parts.length === 1) return text;
                  return (
                    <>
                      {parts[0]}
                      <span className="inline-flex items-center font-semibold text-gray-700 dark:text-gray-200 align-baseline">
                        <span>Linked</span>
                        <svg
                          className="inline-block w-[1.08em] h-[1.08em] ml-[1.5px] -translate-y-[1px] shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="in"
                        >
                          <rect width="24" height="24" rx="4" fill="#0A66C2" />
                          <path
                            d="M7.6 9H4.8V18H7.6V9ZM6.2 7.7C7.15 7.7 7.9 6.95 7.9 6C7.9 5.05 7.15 4.3 6.2 4.3C5.25 4.3 4.5 5.05 4.5 6C4.5 6.95 5.25 7.7 6.2 7.7ZM19.2 18V13.1C19.2 10.7 17.9 9.6 16.2 9.6C14.8 9.6 14.1 10.4 13.8 11V9H11C11.04 9.8 11 18 11 18H13.8V13.9C13.8 13.68 13.82 13.46 13.88 13.3C14.05 12.87 14.45 12.4 15.1 12.4C15.95 12.4 16.3 13.05 16.3 14V18H19.2Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      {parts[1]}
                    </>
                  );
                })()}
              </p>

              {/* Mobile & Tablet Capabilities Pills (< 1280px) */}
              <div className="xl:hidden mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-gray-800/85 backdrop-blur-md border border-white/70 dark:border-gray-700 shadow-sm text-xs font-semibold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </span>
                  <span>{t.hero.badge1}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-gray-800/85 backdrop-blur-md border border-white/70 dark:border-gray-700 shadow-sm text-xs font-semibold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 2a10 10 0 1 0 10 10" />
                      <path d="M12 6a6 6 0 1 0 6 6" />
                    </svg>
                  </span>
                  <span>{t.hero.badge2}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-gray-800/85 backdrop-blur-md border border-white/70 dark:border-gray-700 shadow-sm text-xs font-semibold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 2 11 13" />
                      <path d="m22 2-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </span>
                  <span>{t.hero.badge3}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-gray-800/85 backdrop-blur-md border border-white/70 dark:border-gray-700 shadow-sm text-xs font-semibold text-gray-800 dark:text-gray-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  </span>
                  <span>{t.hero.badge4}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 sm:mt-10 flex sm:flex-row flex-col gap-3 sm:gap-4 relative z-30 items-center justify-center">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto transition-all duration-300 h-12 inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-bold scale-100 hover:scale-105 active:scale-98 cursor-pointer hover:opacity-95"
                  style={{
                    background: 'linear-gradient(90deg, #0099ff 0%, #0022ff 100%)',
                  }}
                >
                  {t.hero.ctaPrimary}
                </a>

                <a
                  href="#features"
                  className="w-full sm:w-auto transition border border-gray-300 h-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-gray-900 text-sm font-semibold cursor-pointer active:scale-98 hover:opacity-95"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #E5E7EB 100%)',
                  }}
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

      {/* Floating Badges: Interactive Glassmorphism Micro-Cards */}
      <div className="hidden xl:block pointer-events-none select-none absolute inset-0 max-w-[1360px] mx-auto">
        {/* Card 1: Defina su Cliente (Upper Left) */}
        <div className="absolute top-12 left-0 2xl:left-4 floating-1 pointer-events-auto flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/70 dark:border-white/10 hover:scale-105 hover:border-blue-300/60 dark:hover:border-blue-700/60 transition-all duration-300 cursor-default">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <circle cx="19" cy="11" r="2" />
              <path d="M19 8v1" />
              <path d="M19 13v1" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 border border-white dark:border-gray-900" />
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{t.hero.badgeStep1}</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t.hero.badge1}</span>
          </div>
        </div>

        {/* Card 2: Configure Señales (Lower Left) */}
        <div className="absolute top-[300px] left-2 2xl:left-8 floating-2 pointer-events-auto flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/70 dark:border-white/10 hover:scale-105 hover:border-purple-300/60 dark:hover:border-purple-700/60 transition-all duration-300 cursor-default">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10" />
              <path d="M12 6a6 6 0 1 0 6 6" />
              <circle cx="12" cy="12" r="2" />
              <path d="M19.07 4.93 21 3" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 border border-white dark:border-gray-900" />
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">{t.hero.badgeStep2}</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t.hero.badge2}</span>
          </div>
        </div>

        {/* Card 3: Lance sus Campañas (Upper Right) */}
        <div className="absolute top-14 right-0 2xl:right-4 floating-3 pointer-events-auto flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/70 dark:border-white/10 hover:scale-105 hover:border-cyan-300/60 dark:hover:border-cyan-700/60 transition-all duration-300 cursor-default">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13" />
              <path d="m22 2-7 20-4-9-9-4 20-7z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 border border-white dark:border-gray-900" />
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">{t.hero.badgeStep3}</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t.hero.badge3}</span>
          </div>
        </div>

        {/* Card 4: Agende Reuniones (Lower Right) */}
        <div className="absolute top-[310px] right-2 2xl:right-8 floating-4 pointer-events-auto flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/70 dark:border-white/10 hover:scale-105 hover:border-emerald-300/60 dark:hover:border-emerald-700/60 transition-all duration-300 cursor-default">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="m9 16 2 2 4-4" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white dark:border-gray-900" />
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{t.hero.badgeStep4}</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t.hero.badge4}</span>
          </div>
        </div>
      </div>

      {/* Brand Logos Bar */}
      <HeroLogos />
    </section>
  );
}

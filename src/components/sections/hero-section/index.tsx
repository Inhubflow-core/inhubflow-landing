'use client';

import Image from 'next/image';
import HeroLogos from '../hero-logos';
import { Subheading } from './subheading';
import { PlatformShowcase } from './platform-showcase';
import { useLanguage } from '@/app/providers/language';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-12 sm:pt-20 pb-16 relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] dark:from-[#0F172A] dark:via-[#171F2E] dark:to-[#1E293B]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper px-4 sm:px-6 lg:px-8">
          <div className="max-w-[920px] mx-auto">
            <div className="text-center pb-12 sm:pb-16">
              <Subheading text={`⚡ ${t.hero.subheading}`} />

              <h1 className="text-gray-900 font-extrabold mb-6 text-4xl sm:text-5xl lg:text-6xl dark:text-white sm:leading-[1.15] tracking-tight">
                {t.hero.title1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <p className="max-w-[720px] text-center mx-auto dark:text-gray-300 text-gray-600 text-base sm:text-lg leading-relaxed">
                {t.hero.description}
              </p>

              <div className="mt-8 sm:mt-10 flex sm:flex-row flex-col gap-4 relative z-30 items-center justify-center">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 h-12 inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-bold scale-100 hover:scale-105 cursor-pointer"
                >
                  🚀 {t.hero.ctaPrimary}
                </a>

                <a
                  href="#features"
                  className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700 h-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-gray-800 dark:text-gray-200 text-sm font-semibold cursor-pointer"
                >
                  🔍 {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Dual-Platform Showcase */}
          <PlatformShowcase />
        </div>

        {/* Floating Feature Badges (LinkedIn Sales Nav, AI SDR Agent, Lead Finder B2B, Cold Email Warm-up) */}
        <div className="max-[1100px]:hidden pointer-events-none select-none">
          {/* Badge 1: LinkedIn Sales Nav (Top Left) */}
          <div className="absolute top-16 left-8 lg:left-12 floating-1 w-[215px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-sky-200/80 dark:border-sky-800/60 shadow-[0_8px_25px_rgba(10,102,194,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm shadow-blue-500/40">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge1}</span>
            <span className="absolute -bottom-1.5 right-6 w-2.5 h-2.5 bg-[#0A66C2] rotate-45 rounded-[2px]" />
          </div>

          {/* Badge 2: AI SDR Agent (Bottom Left) */}
          <div className="absolute left-[80px] top-[320px] max-[1240px]:left-[30px] floating-2 w-[215px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-purple-200/80 dark:border-purple-800/60 shadow-[0_8px_25px_rgba(139,92,246,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 to-purple-600 text-white shadow-sm shadow-purple-500/40">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge2}</span>
            <span className="absolute -top-1.5 right-6 w-2.5 h-2.5 bg-violet-600 rotate-45 rounded-[2px]" />
          </div>

          {/* Badge 3: Lead Finder B2B (Top Right) */}
          <div className="absolute right-8 lg:right-12 top-[110px] floating-3 w-[215px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-blue-200/80 dark:border-blue-800/60 shadow-[0_8px_25px_rgba(37,99,235,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm shadow-blue-500/40">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
                <path d="M11 8v6" />
                <path d="M8 11h6" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge3}</span>
            <span className="absolute -bottom-1.5 left-6 w-2.5 h-2.5 bg-blue-600 rotate-45 rounded-[2px]" />
          </div>

          {/* Badge 4: Cold E-mail Warm-up (Bottom Right) */}
          <div className="absolute top-[330px] right-[120px] max-[1240px]:right-[40px] max-[1350px]:right-[80px] floating-4 w-[215px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-indigo-200/80 dark:border-indigo-800/60 shadow-[0_8px_25px_rgba(99,102,241,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-sm shadow-indigo-500/40">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badge4}</span>
            <span className="absolute -top-1.5 left-6 w-2.5 h-2.5 bg-indigo-600 rotate-45 rounded-[2px]" />
          </div>
        </div>
      </div>

      {/* Brand Logos Bar */}
      <HeroLogos />
    </section>
  );
}

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
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-xl shadow-blue-500/25 h-12 inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-base font-bold scale-100 hover:scale-105 cursor-pointer"
                >
                  🚀 {t.hero.ctaPrimary}
                </a>

                <a
                  href="#features"
                  className="w-full sm:w-auto bg-white/90 dark:bg-gray-800/90 hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700 h-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-gray-800 dark:text-gray-200 text-sm font-semibold shadow-sm backdrop-blur-md cursor-pointer"
                >
                  🔍 {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Dual-Platform Showcase */}
          <PlatformShowcase />
        </div>

        {/* Floating Feature Badges (WhatsApp, Instagram, LinkedIn, Cold E-mail) */}
        <div className="max-[1100px]:hidden pointer-events-none select-none">
          {/* Badge 1: WhatsApp (Top Left) */}
          <div className="absolute top-16 left-8 lg:left-12 floating-1 w-[205px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-emerald-200/80 dark:border-emerald-800/60 shadow-[0_8px_25px_rgba(37,211,102,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm shadow-emerald-500/40">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.58C14.64 13.5 14.48 13.46 14.31 13.71C14.15 13.96 13.67 14.52 13.53 14.68C13.38 14.85 13.24 14.87 12.99 14.74C12.74 14.62 11.94 14.36 10.99 13.51C10.25 12.85 9.75 12.04 9.6 11.79C9.46 11.55 9.59 11.41 9.71 11.29C9.82 11.18 9.96 11 10.08 10.86C10.21 10.72 10.25 10.62 10.33 10.45C10.41 10.29 10.37 10.14 10.31 10.02C10.25 9.9 9.76 8.7 9.56 8.2C9.36 7.72 9.16 7.78 9.01 7.77C8.87 7.77 8.71 7.76 8.54 7.76C8.38 7.76 8.11 7.82 7.89 8.07C7.66 8.31 7.02 8.91 7.02 10.13C7.02 11.35 7.91 12.53 8.03 12.69C8.16 12.85 9.78 15.35 12.26 16.42C12.85 16.67 13.31 16.82 13.67 16.94C14.26 17.13 14.8 17.1 15.22 17.04C15.7 16.97 16.68 16.45 16.88 15.87C17.09 15.3 17.09 14.81 17.03 14.71C16.97 14.6 16.82 14.52 16.57 14.39Z" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badgeWhatsapp}</span>
            <span className="absolute -bottom-1.5 right-6 w-2.5 h-2.5 bg-[#25D366] rotate-45 rounded-[2px]" />
          </div>

          {/* Badge 2: Instagram (Bottom Left) */}
          <div className="absolute left-[80px] top-[320px] max-[1240px]:left-[30px] floating-2 w-[205px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-pink-200/80 dark:border-pink-800/60 shadow-[0_8px_25px_rgba(225,48,108,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm shadow-pink-500/40">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badgeInstagram}</span>
            <span className="absolute -top-1.5 right-6 w-2.5 h-2.5 bg-[#dc2743] rotate-45 rounded-[2px]" />
          </div>

          {/* Badge 3: LinkedIn (Top Right) */}
          <div className="absolute right-8 lg:right-12 top-[110px] floating-3 w-[205px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-sky-200/80 dark:border-sky-800/60 shadow-[0_8px_25px_rgba(10,102,194,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm shadow-blue-500/40">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badgeLinkedin}</span>
            <span className="absolute -bottom-1.5 left-6 w-2.5 h-2.5 bg-[#0A66C2] rotate-45 rounded-[2px]" />
          </div>

          {/* Badge 4: Cold E-mail (Bottom Right) */}
          <div className="absolute top-[330px] right-[120px] max-[1240px]:right-[40px] max-[1350px]:right-[80px] floating-4 w-[205px] h-12 flex items-center gap-3 px-4.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-indigo-200/80 dark:border-indigo-800/60 shadow-[0_8px_25px_rgba(99,102,241,0.18)] backdrop-blur-md">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-indigo-500/40">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{t.hero.badgeColdEmail}</span>
            <span className="absolute -top-1.5 left-6 w-2.5 h-2.5 bg-indigo-600 rotate-45 rounded-[2px]" />
          </div>
        </div>
      </div>

      {/* Brand Logos Bar */}
      <HeroLogos />
    </section>
  );
}

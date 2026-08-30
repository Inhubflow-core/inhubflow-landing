'use client';

import React from 'react';
import { useLanguage } from '@/app/providers/language';

export default function BenefitsGrid() {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="bg-gray-900 py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            {t.benefits.badge}
          </span>
          <h2 className="mb-3 sm:mb-4 font-extrabold text-center text-white text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {t.benefits.title}
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed text-gray-400 px-2">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Card 1 */}
          <div className="relative flex flex-col justify-between bg-gradient-to-b from-blue-900/40 to-gray-900 border border-blue-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:border-blue-400/60 transition-all">
            <div>
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-2.5">
                {t.benefits.card1Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t.benefits.card1Desc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-[11px] sm:text-xs text-blue-400 font-semibold">
              <span>{t.benefits.card1Tag1}</span>
              <span>{t.benefits.card1Tag2}</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col justify-between bg-gradient-to-b from-indigo-900/40 to-gray-900 border border-indigo-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:border-indigo-400/60 transition-all">
            <div>
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-2.5">
                {t.benefits.card2Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t.benefits.card2Desc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-[11px] sm:text-xs text-indigo-400 font-semibold">
              <span>{t.benefits.card2Tag1}</span>
              <span>{t.benefits.card2Tag2}</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col justify-between bg-gradient-to-b from-emerald-900/40 to-gray-900 border border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:border-emerald-400/60 transition-all">
            <div>
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-2.5">
                {t.benefits.card3Title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t.benefits.card3Desc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-800 flex items-center justify-between text-[11px] sm:text-xs text-emerald-400 font-semibold">
              <span>{t.benefits.card3Tag1}</span>
              <span>{t.benefits.card3Tag2}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { getCurrentYear } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/providers/language";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-[#0A0F1D] text-gray-400">
      <span className="absolute top-0 -translate-x-1/2 left-1/2 pointer-events-none">
        <svg
          width="1260"
          height="457"
          viewBox="0 0 1260 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" opacity="0.35" />
          </g>
          <defs>
            <filter
              id="filter0_f_11105_867"
              x="0"
              y="-803.299"
              width="1260"
              height="1260"
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
                stdDeviation="200"
                result="effect1_foregroundBlur_11105_867"
              />
            </filter>
          </defs>
        </svg>
      </span>

      <div className="relative z-10 py-12 sm:py-16 xl:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-y-10 gap-x-8 xl:gap-x-12 grid-cols-1 lg:grid-cols-[30%_40%_30%] items-start">
            {/* Columna 1 (30%): Brand & Description */}
            <div className="w-full">
              <Link href="/" className="inline-flex items-center mb-4 sm:mb-6">
                <Image
                  src="/logo-master-dark.png"
                  alt="InHubFlow Logo"
                  width={220}
                  height={55}
                  className="h-9 sm:h-11 w-auto max-w-[170px] sm:max-w-[200px] object-contain"
                />
              </Link>
              <p className="block text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
                {t.footer.desc}
              </p>
              <div className="flex items-center gap-2.5 text-xs text-emerald-400 font-medium">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.footer.status}</span>
              </div>
            </div>

            {/* Columna 2 (40%): Platform + Comparar */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {/* Plataforma */}
                <div>
                  <span className="block mb-3 sm:mb-4 text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    {t.footer.col1Title}
                  </span>
                  <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                    <a
                      href="https://b2b.inhubflow.online"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item1}
                    </a>
                    <Link
                      href="/terms"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item2}
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item3}
                    </Link>
                    <a
                      href="/contact"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item4}
                    </a>
                    <Link
                      href="/partners"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item5}
                    </Link>
                  </nav>
                </div>

                {/* Comparar */}
                <div>
                  <span className="block mb-3 sm:mb-4 text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    {t.footer.col2Title}
                  </span>
                  <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                    <a
                      href="#compare-waalaxy"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item1}
                    </a>
                    <a
                      href="#compare-lemlist"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item2}
                    </a>
                    <a
                      href="#compare-dripify"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item3}
                    </a>
                    <a
                      href="#compare-expandi"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item4}
                    </a>
                    <a
                      href="#compare-la-growth-machine"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item5}
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            {/* Columna 3 (30%): Card Official Partner */}
            <div className="w-full">
              <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-indigo-950/50 via-gray-900/40 to-white/[0.03] border border-indigo-500/30 hover:border-indigo-400/60 shadow-xl shadow-indigo-950/40 transition-all duration-300 group overflow-hidden">
                {/* Subtle ambient spotlight */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/30 transition-all" />

                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                  <span>{t.footer.col4Title}</span>
                  <span className="text-indigo-400 text-xs sm:text-sm font-semibold">InHubFlow</span>
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed mb-5">
                  {t.footer.col4Desc}
                </p>

                {/* CTA Button */}
                <Link
                  href="/partners"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/30 active:scale-98 cursor-pointer"
                >
                  <span>{t.footer.col4Cta}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                {/* Micro trust perk */}
                <p className="mt-3 text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 font-medium">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>{t.footer.partnerPerks}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 sm:py-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              &copy; {getCurrentYear()} InHubFlow | AI-Powered B2B Sales Suite - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

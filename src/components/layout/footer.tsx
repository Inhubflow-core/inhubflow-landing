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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-y-8 sm:gap-y-10 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand & Description */}
            <div className="lg:col-span-4 xl:col-span-4">
              <div>
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
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-7">
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
                    <a
                      href="#features"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item2}
                    </a>
                    <a
                      href="#benefits"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item3}
                    </a>
                    <a
                      href="#pricing"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item4}
                    </a>
                  </nav>
                </div>

                <div>
                  <span className="block mb-3 sm:mb-4 text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    {t.footer.col2Title}
                  </span>
                  <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                    <a
                      href="#features"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item1}
                    </a>
                    <a
                      href="#features"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item2}
                    </a>
                    <a
                      href="#features"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item3}
                    </a>
                    <a
                      href="#features"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col2Item4}
                    </a>
                  </nav>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="block mb-3 sm:mb-4 text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    {t.footer.col3Title}
                  </span>
                  <nav className="flex flex-col space-y-2.5 sm:space-y-3">
                    <a
                      href="https://b2b.inhubflow.online"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col3Item1}
                    </a>
                    <a
                      href="#testimonials"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col3Item2}
                    </a>
                    <a
                      href="#faq"
                      className="text-xs sm:text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col3Item3}
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            {/* Partner Oficial CTA Box */}
            <div className="lg:col-span-3 xl:col-span-3">
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-indigo-950/50 via-gray-900/40 to-white/[0.03] border border-indigo-500/30 hover:border-indigo-400/60 shadow-xl shadow-indigo-950/40 transition-all duration-300 group overflow-hidden">
                {/* Subtle ambient spotlight */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/30 transition-all" />

                {/* Sparkling Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/15 to-indigo-500/15 border border-amber-500/30 text-[10px] sm:text-[11px] font-bold text-amber-300 mb-3 tracking-wide shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>{t.footer.col4Badge}</span>
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mb-2 flex items-center gap-1.5">
                  <span>{t.footer.col4Title}</span>
                  <span className="text-indigo-400 text-xs font-semibold">InHubFlow</span>
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed mb-4">
                  {t.footer.col4Desc}
                </p>

                {/* CTA Link to /partners */}
                <Link
                  href="/partners"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white transition rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/30 active:scale-98 cursor-pointer"
                >
                  <span>{t.footer.col4Cta}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                {/* Micro trust perks */}
                <p className="mt-2.5 text-[11px] text-gray-400 text-center flex items-center justify-center gap-1 font-medium">
                  <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

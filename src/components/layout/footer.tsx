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

            {/* Quick CTA Box */}
            <div className="lg:col-span-3 xl:col-span-3">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="block mb-2 text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {t.footer.col4Title}
                </span>
                <p className="block mb-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {t.footer.col4Desc}
                </p>
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-bold text-white transition rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md active:scale-98"
                >
                  {t.footer.col4Cta}
                </a>
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
              &copy; {getCurrentYear()} InHubFlow | AI-Powered B2B Outreach Engine - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

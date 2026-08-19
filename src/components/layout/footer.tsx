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
      <div className="relative z-10 py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-4 xl:col-span-4">
              <div>
                <Link href="/" className="inline-flex items-center mb-6">
                  <Image
                    src="/logo-master-dark.png"
                    alt="InHubFlow Logo"
                    width={220}
                    height={55}
                    className="h-10 sm:h-11 w-auto max-w-[200px] object-contain"
                  />
                </Link>
                <p className="block text-sm text-gray-400 mb-8 leading-relaxed max-w-sm">
                  {t.footer.desc}
                </p>
                <div className="flex items-center gap-3 text-xs text-emerald-400 font-medium">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.footer.status}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-7">
                <div>
                  <span className="block mb-5 text-sm font-semibold text-white uppercase tracking-wider">
                    {t.footer.col1Title}
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <a
                      href="https://b2b.inhubflow.online"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item1}
                    </a>
                    <a
                      href="https://b2c.inhubflow.online"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item2}
                    </a>
                    <a
                      href="#features"
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item3}
                    </a>
                    <a
                      href="#pricing"
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col1Item4}
                    </a>
                  </nav>
                </div>

                <div>
                  <span className="block mb-5 text-sm font-semibold text-white uppercase tracking-wider">
                    {t.footer.col2Title}
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <span className="text-sm text-gray-400">
                      {t.footer.col2Item1}
                    </span>
                    <span className="text-sm text-gray-400">
                      {t.footer.col2Item2}
                    </span>
                    <span className="text-sm text-gray-400">
                      {t.footer.col2Item3}
                    </span>
                    <span className="text-sm text-gray-400">
                      {t.footer.col2Item4}
                    </span>
                  </nav>
                </div>

                <div>
                  <span className="block mb-5 text-sm font-semibold text-white uppercase tracking-wider">
                    {t.footer.col3Title}
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <a
                      href="https://b2b.inhubflow.online"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-400 font-semibold transition hover:text-blue-300"
                    >
                      {t.footer.col3Item1}
                    </a>
                    <a
                      href="https://b2c.inhubflow.online"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-emerald-400 font-semibold transition hover:text-emerald-300"
                    >
                      {t.footer.col3Item2}
                    </a>
                    <a
                      href="#faq"
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {t.footer.col3Item3}
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 xl:col-span-3">
              <div>
                <span className="block mb-5 text-sm font-semibold text-white uppercase tracking-wider">
                  {t.footer.col4Title}
                </span>
                <p className="block mb-6 text-sm text-gray-400 leading-relaxed">
                  {t.footer.col4Desc}
                </p>
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500"
                >
                  {t.footer.col4Cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800/80">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-6 text-center">
            <p className="text-sm text-gray-400 font-medium">
              &copy; {getCurrentYear()} InHubFlow | AI-Powered Prospecting System - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

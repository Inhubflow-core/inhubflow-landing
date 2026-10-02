'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';

export function PlatformShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto relative z-30 px-1 sm:px-0">
      {/* Ambient Gradient Glow Background */}
      <div className="absolute -inset-1 sm:-inset-3 bg-gradient-to-r from-blue-600/25 via-indigo-600/20 to-cyan-500/25 rounded-2xl sm:rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

      {/* Main Glassmorphic Showcase Window */}
      <div className="relative rounded-2xl sm:rounded-[32px] border border-gray-200 dark:border-gray-700/80 bg-white/80 dark:bg-gray-900/85 backdrop-blur-xl shadow-2xl p-2.5 sm:p-4.5 overflow-hidden transition-all duration-300">
        
        {/* Browser / App Frame Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 mb-2.5 sm:mb-3.5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700 text-xs shadow-xs">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/90 hover:opacity-80 transition inline-block cursor-pointer" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400/90 hover:opacity-80 transition inline-block cursor-pointer" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/90 hover:opacity-80 transition inline-block cursor-pointer" />
          </div>

          {/* Centered URL / Status Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-900/80 text-gray-600 dark:text-gray-300 text-[11px] sm:text-xs font-mono border border-gray-200/60 dark:border-gray-800 shadow-2xs">
            <svg className="w-3 h-3 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="font-semibold text-gray-800 dark:text-gray-200 truncate">app.inhubflow.online/dashboard</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0 ml-0.5" />
          </div>

          {/* Right Live Status Badge */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium shrink-0">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping inline-block" />
              Panel de Control en Vivo
            </span>
          </div>
        </div>

        {/* Dashboard Screenshot Display Container */}
        <div 
          onClick={() => setLightboxOpen(true)}
          className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/90 dark:border-gray-700/80 shadow-inner bg-slate-900/5 cursor-zoom-in transition-all duration-300 hover:shadow-xl"
          title="Clic para ampliar imagen"
        >
          <Image
            src="/images/hero/dashboard-screenshot.png"
            alt="InHubFlow - Painel Principal y Motor de Prospección B2B"
            width={1357}
            height={636}
            priority
            quality={95}
            className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Subtle Hover Overlay Hint */}
          <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-950/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full bg-gray-900/80 text-white text-xs font-semibold backdrop-blur-md shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
                <path d="M11 8v6" />
                <path d="M8 11h6" />
              </svg>
              Clic para ver en pantalla completa
            </span>
          </div>
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-200/70 dark:border-gray-800 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600 dark:text-gray-400 px-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Interfaz real de InHubFlow B2B • Prospección multicanal y analíticas activas
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              ✓ 80% tasa de aceptación LinkedIn
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
              ✓ SDR con IA 24/7 integrado
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox for Full-screen preview */}
      <FsLightbox
        toggler={lightboxOpen}
        sources={['/images/hero/dashboard-screenshot.png']}
      />
    </div>
  );
}

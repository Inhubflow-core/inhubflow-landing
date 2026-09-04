'use client';

import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/app/providers/language';

export default function HeroLogos() {
  const { t } = useLanguage();
  const logos = [
    { src: '/images/brands/br-1.svg', alt: 'Brand 1', width: 80, height: 32 },
    { src: '/images/brands/br-2.svg', alt: 'Brand 2', width: 80, height: 32 },
    { src: '/images/brands/br-3.svg', alt: 'Brand 3', width: 80, height: 32 },
    { src: '/images/brands/br-4.svg', alt: 'Brand 4', width: 80, height: 32 },
    { src: '/images/brands/br-5.svg', alt: 'Brand 5', width: 80, height: 32 },
    { src: '/images/brands/br-6.svg', alt: 'Brand 6', width: 80, height: 32 },
    { src: '/images/brands/br-7.svg', alt: 'Brand 7', width: 80, height: 32 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full relative z-30 mx-auto pt-12 sm:pt-14 pb-14 sm:pb-16 border-t border-gray-200/70 dark:border-gray-800/80 mt-12 sm:mt-16">
        <p className="text-center text-gray-500 dark:text-white/60 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 sm:mb-8">
          {t.hero.logosTitle}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="brightness-0 opacity-60 hover:opacity-100 dark:brightness-100 dark:opacity-40 transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

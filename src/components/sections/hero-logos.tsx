'use client';

import React from 'react';
import { useLanguage } from '@/app/providers/language';
import { BrandLogosRow } from '@/components/ui/brand-logos';

export default function HeroLogos() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full relative z-30 mx-auto pt-10 sm:pt-14 pb-12 sm:pb-16 border-t border-gray-200/70 dark:border-gray-800/80 mt-10 sm:mt-14">
        <p className="text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          {t.hero.logosTitle}
        </p>
        <BrandLogosRow gapClass="gap-7 sm:gap-10 md:gap-12 lg:gap-14" />
      </div>
    </div>
  );
}

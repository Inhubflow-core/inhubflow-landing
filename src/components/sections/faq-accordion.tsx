'use client';

import { MinusIcon, PlusIcon } from '@/icons/icons';
import { useState } from 'react';
import { useLanguage } from '@/app/providers/language';

export default function FaqAccordion() {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 dark:bg-[#0c111d] px-4 sm:px-6">
      <div className="wrapper max-w-4xl mx-auto">
        <div className="mb-10 sm:mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            FAQ
          </span>
          <h2 className="mb-3 sm:mb-4 font-extrabold text-center text-gray-900 text-2xl sm:text-3xl md:text-4xl dark:text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">
            {t.faq.subtitle}
          </p>
        </div>
        <div className="max-w-[680px] mx-auto">
          <div className="space-y-3 sm:space-y-4">
            {t.faq.items.map((item, index) => {
              const isActive = activeItem === index;
              return (
                <div key={index} className="pb-4 sm:pb-5 border-b border-gray-200 dark:border-gray-800">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left cursor-pointer focus:outline-none py-1 group"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isActive}
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-white/90 group-hover:text-blue-600 transition-colors pr-4">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 text-blue-500 p-1 rounded-full bg-blue-50 dark:bg-blue-900/30">
                      {isActive ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  {isActive && (
                    <div className="mt-3 sm:mt-4 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

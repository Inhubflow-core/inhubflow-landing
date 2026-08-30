'use client';

import { MinusIcon, PlusIcon } from '@/icons/icons';
import { useState } from 'react';
import { useLanguage } from '@/app/providers/language';

export default function FaqAccordion() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 dark:bg-[#0c111d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            FAQ
          </span>
          <h2 className="mb-3 sm:mb-4 font-extrabold text-center text-gray-900 text-2xl sm:text-3xl md:text-4xl dark:text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Full-width 2-Column Responsive FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 w-full">
          {t.faq.items.map((item, index) => {
            const isOpen = !!openItems[index];
            return (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 shadow-xs hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <button
                  type="button"
                  className="flex items-start justify-between w-full text-left cursor-pointer focus:outline-none group gap-3"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-blue-500 p-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 transition-colors">
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pt-3 border-t border-gray-100 dark:border-gray-800/80 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

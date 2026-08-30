'use client';

import { useLanguage } from '@/app/providers/language';

function getFeatureIcon(index: number) {
  switch (index) {
    case 0:
      // Lead Extraction / Target
      return (
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 1:
      // LinkedIn Automation / Briefcase
      return (
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 2:
      // Cold Email / Mail
      return (
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 3:
      // Anti-Ban / Shield
      return (
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 4:
      // AI SDR / Bot
      return (
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      );
    case 5:
    default:
      // Inbox CRM / MessageSquare
      return (
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
  }
}

export function CoreFeatures() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-16 sm:py-24 lg:py-30 bg-gray-50 dark:bg-[#0f1523] px-4 sm:px-6">
      <div className="max-w-[76rem] mx-auto">
        <div className="mb-10 sm:mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            {t.features.badge}
          </span>
          <h2 className="mb-3 sm:mb-4 font-extrabold text-gray-900 text-2xl sm:text-3xl md:text-4xl dark:text-white max-w-2xl mx-auto tracking-tight">
            {t.features.title}
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {t.features.items.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 sm:p-8 md:p-9 border border-gray-200 dark:bg-white/5 dark:border-white/5 rounded-2xl sm:rounded-[20px] shadow-[0px_20px_40px_-25px_rgba(107,110,148,0.06)] hover:shadow-xl transition-shadow"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6">
                {getFeatureIcon(index)}
              </div>

              <h3 className="mb-2 sm:mb-3 text-gray-800 dark:text-white/90 font-bold text-lg sm:text-xl md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

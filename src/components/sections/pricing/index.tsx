'use client';

import { useState } from 'react';
import { getBillingPeriods, getBillingPlans } from '@/components/sections/pricing/data';
import { cn } from '@/lib/utils';
import { PricingCard } from '@/components/sections/pricing/card';
import { useLanguage } from '@/app/providers/language';
import { usePartnerDiscount } from '@/components/partner-tracker';

export default function PricingSection() {
  const { locale, t } = useLanguage();
  const [activeBillingPeriodKey, setActiveBillingPeriodKey] =
    useState<'monthly' | 'yearly'>('monthly');

  const { hasPartnerDiscount, partnerCode } = usePartnerDiscount();
  const billingPeriods = getBillingPeriods(locale);
  const billingPlans = getBillingPlans(locale, hasPartnerDiscount);

  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-gray-50 dark:bg-[#0c111d] dark:bg-linear-180 dark:from-white/3 dark:to-white/0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-3 inline-block">
            {t.pricing.badge}
          </span>
          <h2 className="mb-3 sm:mb-4 font-extrabold text-center text-gray-900 text-2xl sm:text-3xl md:text-4xl dark:text-white tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-300 px-2">
            {t.pricing.subtitle}
          </p>
        </div>

        {hasPartnerDiscount && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-blue-500/15 border border-amber-500/30 text-center shadow-lg animate-in fade-in slide-in-from-top-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider mb-2 shadow-xs">
              🎉 Descuento de Embajador Oficial Activado
            </div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              ¡Tienes <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-base">20% OFF de por vida</span> en todos los planes gracias a tu Partner Oficial <span className="font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400">({partnerCode})</span>!
            </p>
          </div>
        )}

        <div>
          {/* Billing Toggle */}
          <div className="flex justify-center relative z-30 mt-6 sm:mt-8">
            <div className="relative flex p-1 sm:p-1.5 bg-white dark:bg-[#1D2939] rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              {billingPeriods.map((period) => (
                <button
                  key={period.key}
                  onClick={() => setActiveBillingPeriodKey(period.key)}
                  className={cn(
                    'relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer rounded-full text-gray-700 dark:text-gray-400',
                    {
                      'bg-blue-600 text-white shadow-sm':
                        period.key === activeBillingPeriodKey,
                      'pr-1.5 sm:pr-2': period.saving,
                    }
                  )}
                >
                  <span>{period.label}</span>

                  {period.saving && (
                    <span className="bg-emerald-500 text-white text-[10px] sm:text-[11px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                      {period.saving}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 z-30 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {billingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                billingPeriod={activeBillingPeriodKey}
              />
            ))}
          </div>

          {/* Footnote below cards */}
          <div className="mt-6 sm:mt-8 text-center z-30 relative">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              {t.pricing.limitsNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

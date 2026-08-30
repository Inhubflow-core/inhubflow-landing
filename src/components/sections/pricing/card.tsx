'use client';

import { useState } from 'react';
import { CheckIcon } from '@/icons/icons';
import GlowGradient from '@/assets/pricing/glow';
import type { TBILLING_PLAN } from '@/components/sections/pricing/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/app/providers/language';
import { CheckoutModal } from './checkout-modal';

type Props = {
  plan: TBILLING_PLAN;
  billingPeriod: keyof TBILLING_PLAN['pricing'];
};

export function PricingCard({ plan, billingPeriod }: Props) {
  const { locale } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const monthSuffix =
    locale === 'pt-BR'
      ? billingPeriod === 'yearly'
        ? '/ mês (cobrado anual)'
        : '/ mês'
      : locale === 'en'
      ? billingPeriod === 'yearly'
        ? '/ month (billed annually)'
        : '/ month'
      : billingPeriod === 'yearly'
      ? '/ mes (facturado anual)'
      : '/ mes';

  const badgeText =
    locale === 'pt-BR'
      ? 'Mais Popular'
      : locale === 'en'
      ? 'Most Popular'
      : 'Recomendado';

  return (
    <div className="relative">
      <div
        className={`bg-white dark:bg-dark-primary rounded-2xl sm:rounded-[20px] shadow-one relative z-10 h-full flex flex-col justify-between ${
          plan.popular ? 'border-2 border-primary-500 shadow-xl' : 'border border-gray-200 dark:border-gray-800'
        }`}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {plan.name}
            </h2>
            {plan.popular && (
              <span className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shrink-0">
                {badgeText}
              </span>
            )}
          </div>
          <p className="flex items-baseline mt-3 sm:mt-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              {plan.pricing[billingPeriod].formattedPrice}
            </span>

            {!!plan.pricing[billingPeriod].amount && (
              <span className="ml-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                {monthSuffix}
              </span>
            )}
          </p>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 min-h-[36px] sm:min-h-[40px] leading-relaxed">
            {plan.description}
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={cn(
              'block w-full px-5 sm:px-6 py-3 sm:py-3.5 mt-5 sm:mt-7 text-xs sm:text-sm font-bold text-center rounded-full transition-all duration-200 cursor-pointer active:scale-98',
              {
                'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20':
                  plan.popular,
                'bg-gray-900 hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 text-white':
                  !plan.popular,
              }
            )}
          >
            {plan.cta}
          </button>
        </div>
        <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-2 border-t border-gray-100 dark:border-gray-800/80">
          <ul className="space-y-2.5 sm:space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 dark:text-blue-400 mt-0.5">
                  <CheckIcon />
                </div>

                <p className="ml-2 text-xs sm:text-sm text-gray-800 dark:text-white/90">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {plan.popular && (
        <GlowGradient className="absolute -left-full -translate-x-20 top-0 max-lg:hidden" />
      )}

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={plan}
        billingPeriod={billingPeriod}
      />
    </div>
  );
}

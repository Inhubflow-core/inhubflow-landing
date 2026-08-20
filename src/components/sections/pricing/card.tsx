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
      ? '🔥 Mais Popular'
      : locale === 'en'
      ? '🔥 Most Popular'
      : '🔥 Recomendado';

  return (
    <div className="relative">
      <div
        className={`bg-white dark:bg-dark-primary rounded-[20px] shadow-one relative z-10 h-full ${
          plan.popular ? 'relative border-2 border-primary-500' : ''
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
              {plan.name}
            </h2>
            {plan.popular && (
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                {badgeText}
              </span>
            )}
          </div>
          <p className="flex items-baseline mt-4">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
              {plan.pricing[billingPeriod].formattedPrice}
            </span>

            {!!plan.pricing[billingPeriod].amount && (
              <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {monthSuffix}
              </span>
            )}
          </p>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 min-h-[40px]">
            {plan.description}
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={cn(
              'block w-full px-6 py-3.5 mt-7 text-sm font-bold text-center rounded-full transition-all duration-200 cursor-pointer',
              {
                'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white scale-[1.02]':
                  plan.popular,
                'bg-gray-900 hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 text-white':
                  !plan.popular,
              }
            )}
          >
            {plan.cta}
          </button>
        </div>
        <div className="px-8 pb-7">
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <div className="flex-shrink-0 text-gray-500 dark:text-gray-400">
                  <CheckIcon />
                </div>

                <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
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

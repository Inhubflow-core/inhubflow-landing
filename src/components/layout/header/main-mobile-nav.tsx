'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/app/providers/language';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MainMobileNav({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const items = useMemo(() => [
    { href: '#features', label: t.nav.features },
    { href: '#benefits', label: t.nav.benefits },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ], [t]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 bg-white/95 dark:bg-[#101828]/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-2xl z-50 flex flex-col justify-between animate-fadeIn overflow-y-auto">
      <div className="pt-6 pb-4 space-y-2 px-5 sm:px-6">
        <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 px-3 pb-1">
          Navegación
        </p>

        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              'block px-4 py-3 rounded-2xl text-base font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
              {
                'text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-900/30': pathname === item.href,
              }
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="p-6 space-y-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60">
        <a
          href="https://b2b.inhubflow.online"
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
          className="flex items-center justify-center w-full h-12 border border-gray-300 dark:border-gray-700 px-5 rounded-full text-center text-sm font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-xs hover:border-blue-500 transition-all"
        >
          <span>{t.nav.clientAccess}</span>
        </a>

        <a
          href="#pricing"
          onClick={onClose}
          className="flex items-center justify-center w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white rounded-full shadow-md shadow-blue-500/20 active:scale-98 transition-all"
        >
          <span>{t.nav.startNow}</span>
        </a>
      </div>
    </div>
  );
}

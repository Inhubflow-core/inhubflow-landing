'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/icons/icons';
import { useLanguage } from '@/app/providers/language';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MainMobileNav({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState('');

  const items = useMemo(() => [
    { type: 'link', href: '#features', label: t.nav.features },
    { type: 'link', href: '#benefits', label: t.nav.benefits },
    { type: 'link', href: '#pricing', label: t.nav.pricing },
    { type: 'link', href: '#faq', label: t.nav.faq },
    { type: 'link', href: 'https://b2b.inhubflow.online', label: `${t.nav.clientAccess} ➔` },
  ], [t]);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? '' : key);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden h-screen absolute top-full bg-white dark:bg-dark-primary w-full border-b border-gray-200 dark:border-gray-800 shadow-2xl z-50">
      <div className="flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto">
          <div className="pt-4 pb-3 space-y-2 px-4 sm:px-6">
            {items.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-4 py-2.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
                      {
                        'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20': pathname === item.href,
                      }
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === 'dropdown') {
                return (
                  <div key={item.label} className="border-t border-gray-100 dark:border-gray-800 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="flex justify-between items-center w-full px-4 py-2.5 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span>{item.label}</span>
                      <span
                        className={cn(
                          'size-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      >
                        <ChevronDownIcon />
                      </span>
                    </button>

                    {activeDropdown === item.label && (
                      <div className="mt-2 space-y-1 pl-4">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            <span>{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col pt-4 pb-6 space-y-3 px-6">
          <a
            href="https://b2b.inhubflow.online"
            target="_blank"
            rel="noreferrer"
            className="text-sm block w-full border h-11 border-gray-200 dark:border-gray-700 px-5 py-2.5 rounded-full text-center font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            {t.nav.clientAccess}
          </a>

          <a
            href="#pricing"
            className="flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 justify-center text-sm font-bold text-white rounded-full h-11"
          >
            {t.nav.startNow}
          </a>
        </div>
      </div>
    </div>
  );
}

'use client';

import { ChevronDown2Icon } from '@/icons/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { useLanguage } from '@/app/providers/language';

type NavItem =
  | { type: 'link'; href: string; label: string }
  | { type: 'dropdown'; label: string; items: Array<{ href: string; label: string }> };

export default function DesktopNav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [activeDropdownKey, setActiveDropdownKey] = useState('');

  const items: NavItem[] = useMemo(() => [
    { type: 'link', href: pathname === '/' ? '#features' : '/#features', label: t.nav.features },
    { type: 'link', href: pathname === '/' ? '#benefits' : '/#benefits', label: t.nav.benefits },
    { type: 'link', href: pathname === '/' ? '#pricing' : '/#pricing', label: t.nav.pricing },
    { type: 'link', href: pathname === '/' ? '#faq' : '/#faq', label: t.nav.faq },
    { type: 'link', href: '/partners', label: t.nav.partners || 'Partners 50%' },
  ], [t, pathname]);

  function toggleActiveDropdown(key: string) {
    setActiveDropdownKey((prevKey) => (prevKey === key ? '' : key));
  }

  useEffect(() => {
    setActiveDropdownKey('');
  }, [pathname]);

  return (
    <nav className="hidden lg:flex lg:items-center bg-[#F9FAFB] dark:bg-white/3 rounded-full p-1 max-h-fit shrink-0">
      {items.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-gray-500 dark:text-gray-400 text-xs xl:text-sm px-3 xl:px-4 py-1.5 rounded-full hover:text-primary-500 font-medium transition-colors whitespace-nowrap shrink-0',
                {
                  'bg-white dark:bg-white/5 font-medium text-gray-800 dark:text-white/90 shadow-xs':
                    pathname === item.href,
                }
              )}
            >
              {item.label}
            </Link>
          );
        }

        if (item.type === 'dropdown') {
          const toggleThisDropdown = () => {
            toggleActiveDropdown(item.label);
          };

          const isDropdownActive = activeDropdownKey === item.label;

          return (
            <div key={item.label} className="relative">
              <button
                type="button"
                onClick={toggleThisDropdown}
                onMouseEnter={toggleThisDropdown}
                onMouseLeave={toggleThisDropdown}
                className={cn(
                  'text-gray-500 dark:text-gray-400 hover:text-primary-500 group text-sm inline-flex gap-1 items-center px-4 py-1.5 font-medium rounded-full cursor-pointer transition-colors',
                  {
                    'bg-white dark:bg-white/5 font-medium text-gray-800 dark:text-white/90 shadow-xs':
                      item.items?.some(({ href }) => pathname?.includes(href)),
                  }
                )}
              >
                <span>{item.label}</span>
                <ChevronDown2Icon
                  className={cn('size-4 transition-transform duration-200', {
                    'rotate-180': isDropdownActive,
                  })}
                />
              </button>

              {isDropdownActive && (
                <div
                  onMouseEnter={toggleThisDropdown}
                  onMouseLeave={toggleThisDropdown}
                  className="absolute right-0 w-[266px] bg-white dark:bg-dark-secondary dark:border-gray-800 rounded-2xl shadow-theme-lg border border-gray-100 p-3 z-50 animate-in fade-in duration-150"
                >
                  <div className="space-y-1">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
}

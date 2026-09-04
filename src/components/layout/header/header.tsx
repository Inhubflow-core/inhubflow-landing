'use client';
import { CloseIcon, MenuIcon } from '@/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './desktop-nav';
import MainMobileNav from './main-mobile-nav';
import LanguageSelector from './language-selector';
import { useLanguage } from '@/app/providers/language';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white/95 dark:bg-dark-primary/95 backdrop-blur-md border-b dark:border-gray-800 border-gray-100 sticky top-0 z-50 py-2 sm:py-2.5 lg:py-3.5 transition-all">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between gap-3 sm:gap-4 xl:gap-8">
          {/* Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-master-light.png"
                className="block dark:hidden h-8 sm:h-10 w-auto max-w-[140px] sm:max-w-[190px] object-contain"
                alt="InHubFlow Logo"
                width={220}
                height={55}
                priority
              />

              <Image
                src="/logo-master-dark.png"
                className="hidden dark:block h-8 sm:h-10 w-auto max-w-[140px] sm:max-w-[190px] object-contain"
                alt="InHubFlow Logo"
                width={220}
                height={55}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 xl:gap-4 justify-end shrink-0">
            {/* Language Selector matching Linki & Chatwoot */}
            <LanguageSelector />

            <a
              href="https://b2b.inhubflow.online"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm hidden xl:block font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.clientAccess}
            </a>

            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs sm:text-sm font-bold text-white rounded-full transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
            >
              {t.nav.startNow}
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="shrink-0 inline-flex items-center justify-center p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}

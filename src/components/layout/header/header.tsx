'use client';
import { CloseIcon, MenuIcon } from '@/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './desktop-nav';
import MainMobileNav from './main-mobile-nav';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white dark:bg-dark-primary border-b dark:border-gray-800 border-gray-100 sticky top-0 z-50 py-2 lg:py-4">
      <div className="px-4 sm:px-6 lg:px-7">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-master-light.png"
                className="block dark:hidden h-10 sm:h-11 w-auto max-w-[200px] object-contain"
                alt="InHubFlow Logo"
                width={220}
                height={55}
                priority
              />

              <Image
                src="/logo-master-dark.png"
                className="hidden dark:block h-10 sm:h-11 w-auto max-w-[200px] object-contain"
                alt="InHubFlow Logo"
                width={220}
                height={55}
                priority
              />
            </Link>
          </div>

          <DesktopNav />

          <div className="flex items-center gap-3 sm:gap-4 justify-self-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="order-last shrink-0 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <a
              href="https://b2b.inhubflow.online"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm hidden xl:block font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Acceso Clientes
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center px-4 sm:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs sm:text-sm font-semibold text-white rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              Comenzar Ahora ⚡
            </a>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}

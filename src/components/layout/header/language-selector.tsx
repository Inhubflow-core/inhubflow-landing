'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, SUPPORTED_LOCALES } from '@/app/providers/language';

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption =
    SUPPORTED_LOCALES.find((item) => item.code === locale) || SUPPORTED_LOCALES[1];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50 shadow-xs cursor-pointer focus:outline-none"
        title="Seleccionar Idioma / Select Language"
      >
        <span className="text-[10px] font-extrabold text-gray-500 tracking-wider">
          {currentOption.badge}
        </span>
        <span className="font-bold text-xs text-gray-800 uppercase">
          {currentOption.label.includes('Português') ? 'PT-BR' : currentOption.code.toUpperCase()}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-2xl border border-gray-100 bg-white p-2 shadow-xl backdrop-blur-md z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 border-b border-gray-100 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Idioma / Language
            </span>
          </div>

          <div className="space-y-1">
            {SUPPORTED_LOCALES.map((option) => (
              <button
                key={option.code}
                onClick={() => {
                  setLocale(option.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  locale === option.code
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{option.flag}</span>
                  <span>{option.label}</span>
                </div>
                {locale === option.code && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

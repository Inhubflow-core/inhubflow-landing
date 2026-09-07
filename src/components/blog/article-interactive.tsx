'use client';

import React, { useState, useEffect } from 'react';
import { FaqItem } from '@/data/blog/types';

interface ArticleInteractiveProps {
  faq: FaqItem[];
  canonicalUrl: string;
}

export default function ArticleInteractive({ faq, canonicalUrl }: ArticleInteractiveProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedGsc, setCopiedGsc] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopiedGsc(true);
      setTimeout(() => setCopiedGsc(false), 3000);
    } catch {
      // Fallback
      setCopiedGsc(true);
      setTimeout(() => setCopiedGsc(false), 3000);
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-200/50">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Interactive FAQ Accordion */}
      {faq && faq.length > 0 && (
        <section className="my-12 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-indigo-600 font-bold text-sm">💡 PREGUNTAS FRECUENTES</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            Todo lo que Necesitas Saber Antes de Empezar
          </h3>
          <div className="space-y-3">
            {faq.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200/80 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 bg-gray-50/70 hover:bg-gray-100/70 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-gray-900 transition cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <span className="text-indigo-600 shrink-0 text-base">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Google Search Console URL Tool for Admin / Roberto */}
      <div className="my-8 p-4 sm:p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="text-base">🚀</span>
          <div>
            <span className="font-bold text-indigo-950 block">
              Herramienta de Indexación Rápida:
            </span>
            <span className="text-indigo-800 text-[11px]">
              Copia la URL canónica para solicitar indexación inmediata en Google Search Console.
            </span>
          </div>
        </div>
        <button
          onClick={copyToClipboard}
          className={`px-4 py-2 rounded-xl font-bold transition shadow-2xs shrink-0 cursor-pointer ${
            copiedGsc
              ? 'bg-emerald-600 text-white'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          {copiedGsc ? '✓ ¡URL Copiada!' : 'Copiar URL para GSC'}
        </button>
      </div>
    </>
  );
}

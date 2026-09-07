import React from 'react';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blog/posts';
import BlogCatalog from '@/components/blog/blog-catalog';

export const metadata: Metadata = {
  title: 'Blog de Prospección B2B, LinkedIn Seguro & SDR con IA | InHubFlow',
  description:
    'Estrategias avanzadas de prospección B2B, automatización segura en LinkedIn sin bloqueos, y cartas de venta sobre agentes SDR con Inteligencia Artificial.',
  keywords: [
    'blog prospeccion b2b',
    'estrategias linkedin 2026',
    'sdr inteligencia artificial',
    'automatizacion de ventas b2b',
    'prospeccion multicanal'
  ],
  alternates: {
    canonical: 'https://inhubflow.online/blog',
  },
  openGraph: {
    title: 'Blog de Prospección B2B & Ventas con IA | InHubFlow',
    description:
      'Guías tácticas y cartas de venta sobre automatización segura en LinkedIn, prospección multicanal y agentes SDR 24/7.',
    url: 'https://inhubflow.online/blog',
    siteName: 'InHubFlow',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Prospección B2B & Ventas con IA | InHubFlow',
    description:
      'Guías tácticas sobre automatización segura en LinkedIn y SDRs de Inteligencia Artificial.',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-gray-900 selection:bg-indigo-600 selection:text-white">
      {/* Header & Hero Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            Estrategias B2B Probadas en el Campo de Batalla
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Blog de Prospección B2B, LinkedIn & SDR IA
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Descubre las estrategias reales, tácticas anti-baneo y sistemas de automatización que las empresas de mayor crecimiento utilizan para llenar sus calendarios de ventas.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <BlogCatalog posts={BLOG_POSTS} />
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostsByLang } from '@/data/blog/posts';
import { BlogLanguage } from '@/data/blog/types';
import BlogCatalog from '@/components/blog/blog-catalog';

type Props = {
  params: Promise<{ lang: string }>;
};

const validLangs: BlogLanguage[] = ['es', 'en', 'pt'];

export async function generateStaticParams() {
  return validLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!validLangs.includes(lang as BlogLanguage)) {
    return { title: 'Blog | InHubFlow' };
  }

  const titles: Record<BlogLanguage, string> = {
    es: 'Blog de Prospección B2B, LinkedIn Seguro & SDR con IA | InHubFlow',
    en: 'B2B Sales Outreach, Safe LinkedIn & AI SDR Blog | InHubFlow',
    pt: 'Blog de Prospecção B2B, LinkedIn Seguro & SDR com IA | InHubFlow',
  };

  const descriptions: Record<BlogLanguage, string> = {
    es: 'Estrategias avanzadas de prospección B2B, automatización segura en LinkedIn sin bloqueos, y guías sobre agentes SDR con Inteligencia Artificial.',
    en: 'Advanced B2B outbound strategies, safe LinkedIn automation without bans, and high-conversion playbooks on autonomous AI SDR agents.',
    pt: 'Estratégias avançadas de prospecção B2B, automação segura no LinkedIn sem bloqueios e guias práticos sobre agentes SDR com Inteligência Artificial.',
  };

  const canonicalUrl = `https://inhubflow.online/blog/${lang}`;

  return {
    title: titles[lang as BlogLanguage],
    description: descriptions[lang as BlogLanguage],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: 'https://inhubflow.online/blog/es',
        en: 'https://inhubflow.online/blog/en',
        pt: 'https://inhubflow.online/blog/pt',
        'x-default': 'https://inhubflow.online/blog/es',
      },
    },
    openGraph: {
      title: titles[lang as BlogLanguage],
      description: descriptions[lang as BlogLanguage],
      url: canonicalUrl,
      siteName: 'InHubFlow',
      type: 'website',
    },
  };
}

export default async function BlogLanguagePage({ params }: Props) {
  const { lang } = await params;
  if (!validLangs.includes(lang as BlogLanguage)) {
    notFound();
  }

  const currentLang = lang as BlogLanguage;
  const posts = getBlogPostsByLang(currentLang);

  const heroTexts: Record<
    BlogLanguage,
    { badge: string; title: string; desc: string }
  > = {
    es: {
      badge: 'Estrategias B2B Probadas en el Campo de Batalla',
      title: 'Blog de Prospección B2B, LinkedIn & SDR IA',
      desc: 'Descubre las estrategias reales, tácticas anti-baneo y sistemas de automatización que las empresas de mayor crecimiento utilizan para llenar sus calendarios de ventas.',
    },
    en: {
      badge: 'Battle-Tested B2B Outbound Strategies',
      title: 'B2B Outbound, LinkedIn Safety & AI SDR Blog',
      desc: 'Discover actionable strategies, anti-ban protocols, and revenue automation systems that high-growth companies use to fill sales calendars on autopilot.',
    },
    pt: {
      badge: 'Estratégias B2B Validadas no Campo de Batalha',
      title: 'Blog de Prospecção B2B, LinkedIn & SDR com IA',
      desc: 'Descubra estratégias práticas, táticas anti-bloqueio e sistemas de automação comercial que empresas de alto crescimento utilizam para bater metas de vendas.',
    },
  };

  const hero = heroTexts[currentLang];

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-gray-900 selection:bg-indigo-600 selection:text-white">
      {/* Header & Hero Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            {hero.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            {hero.title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {hero.desc}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <BlogCatalog posts={posts} currentLang={currentLang} />
      </div>
    </div>
  );
}

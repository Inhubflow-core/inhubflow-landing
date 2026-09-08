import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BLOG_POSTS,
  getBlogPostByLangAndSlug,
  getAlternateTranslations,
} from '@/data/blog/posts';
import { BlogLanguage } from '@/data/blog/types';
import ArticleInteractive from '@/components/blog/article-interactive';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

const validLangs: BlogLanguage[] = ['es', 'en', 'pt'];

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    lang: post.lang,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!validLangs.includes(lang as BlogLanguage)) {
    return { title: 'Artículo no encontrado | InHubFlow' };
  }

  const post = getBlogPostByLangAndSlug(lang as BlogLanguage, slug);
  if (!post) {
    return { title: 'Artículo no encontrado | InHubFlow' };
  }

  const canonicalUrl = `https://inhubflow.online/blog/${post.lang}/${post.slug}`;
  const alternates = getAlternateTranslations(post);

  const languageAlternates: Record<string, string> = {
    'x-default': alternates.es
      ? `https://inhubflow.online/blog/es/${alternates.es.slug}`
      : canonicalUrl,
  };

  if (alternates.es) {
    languageAlternates.es = `https://inhubflow.online/blog/es/${alternates.es.slug}`;
  }
  if (alternates.en) {
    languageAlternates.en = `https://inhubflow.online/blog/en/${alternates.en.slug}`;
  }
  if (alternates.pt) {
    languageAlternates.pt = `https://inhubflow.online/blog/pt/${alternates.pt.slug}`;
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: 'InHubFlow',
      locale:
        post.lang === 'en' ? 'en_US' : post.lang === 'pt' ? 'pt_BR' : 'es_ES',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostLanguagePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!validLangs.includes(lang as BlogLanguage)) {
    notFound();
  }

  const post = getBlogPostByLangAndSlug(lang as BlogLanguage, slug);
  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://inhubflow.online/blog/${post.lang}/${post.slug}`;
  const alternates = getAlternateTranslations(post);
  const vsl = post.vsl;

  // Schema JSON-LD Structured Data
  const jsonLdBlogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    inLanguage: post.lang,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'InHubFlow',
      url: 'https://inhubflow.online',
      logo: {
        '@type': 'ImageObject',
        url: 'https://inhubflow.online/logo-master-dark.png',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    keywords: post.keywords.join(', '),
  };

  const breadcrumbLabels: Record<
    BlogLanguage,
    { home: string; blog: string }
  > = {
    es: { home: 'Inicio', blog: 'Blog' },
    en: { home: 'Home', blog: 'Blog' },
    pt: { home: 'Início', blog: 'Blog' },
  };

  const labels = breadcrumbLabels[post.lang];

  const ctaLabels: Record<
    BlogLanguage,
    {
      badge: string;
      title: string;
      desc: string;
      btn: string;
      subtext: string;
    }
  > = {
    es: {
      badge: 'SOFTWARE B2B DE ALTO RENDIMIENTO',
      title: 'Multiplica tus reuniones comerciales sin riesgo de baneo',
      desc: 'Únete a más de 300 agencias y empresas que ya automatizan su prospección en LinkedIn y Email con SDRs de IA y cadencia humana 100% segura.',
      btn: 'Comenzar Prueba Gratuita de 7 Días ➔',
      subtext: 'Acceso inmediato • Sin compromiso • Cancela cuando quieras',
    },
    en: {
      badge: 'HIGH-PERFORMANCE B2B OUTBOUND',
      title: 'Multiply qualified sales meetings with zero ban risk',
      desc: 'Join over 300 B2B companies automating outreach with 24/7 AI SDRs and undetectable human cadence.',
      btn: 'Start 7-Day Free Trial ➔',
      subtext: 'Instant access • No commitment • Cancel anytime',
    },
    pt: {
      badge: 'PROSPECÇÃO B2B DE ALTO RENDIMENTO',
      title: 'Multiplique suas reuniões comerciais sem risco de bloqueio',
      desc: 'Junte-se a mais de 300 empresas B2B que automatizam prospecção no LinkedIn e E-mail com SDR de IA e cadência humana.',
      btn: 'Iniciar Teste Gratuito de 7 Dias ➔',
      subtext: 'Acesso imediato • Sem compromisso • Cancele quando quiser',
    },
  };

  const cta = ctaLabels[post.lang];

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: labels.home,
        item: 'https://inhubflow.online',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${labels.blog} (${post.lang.toUpperCase()})`,
        item: `https://inhubflow.online/blog/${post.lang}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <article className="relative min-h-screen bg-[#FAFAFC] text-gray-900 selection:bg-indigo-600 selection:text-white">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Interactive elements: Top reading bar */}
      <ArticleInteractive />

      {/* Article Header & Breadcrumbs Hero */}
      <header className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-gray-600 flex-wrap"
            >
              <Link href="/" className="hover:text-indigo-600 transition">
                {labels.home}
              </Link>
              <span>/</span>
              <Link
                href={`/blog/${post.lang}`}
                className="hover:text-indigo-600 transition font-semibold"
              >
                Blog ({post.lang.toUpperCase()})
              </Link>
              <span>/</span>
              <span className="text-indigo-700 font-semibold truncate max-w-xs">
                {post.categoryLabel}
              </span>
            </nav>

            {/* Language Switcher for Sibling Translations */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto bg-white/80 p-1 rounded-xl border border-gray-200 shadow-2xs">
              <span className="text-[11px] text-gray-500 font-medium px-2">
                Idioma:
              </span>
              {alternates.es && (
                <Link
                  href={`/blog/es/${alternates.es.slug}`}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                    post.lang === 'es'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title="Versión en Español"
                >
                  🇪🇸 ES
                </Link>
              )}
              {alternates.en && (
                <Link
                  href={`/blog/en/${alternates.en.slug}`}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                    post.lang === 'en'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title="English Version"
                >
                  🇺🇸 EN
                </Link>
              )}
              {alternates.pt && (
                <Link
                  href={`/blog/pt/${alternates.pt.slug}`}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                    post.lang === 'pt'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  title="Versão em Português"
                >
                  🇧🇷 PT
                </Link>
              )}
            </div>
          </div>

          {/* Category & Read Time Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              {post.categoryLabel}
            </span>
            <span className="text-xs text-gray-600 bg-white/90 px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
              ⏱️ {post.readTime}
            </span>
            <span className="text-xs text-gray-600 bg-white/90 px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
              📅 {post.updatedAt}
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pt-4 border-t border-indigo-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0">
              IH
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-gray-900">
                {post.author.name}
              </p>
              <p className="text-[11px] sm:text-xs text-gray-600">
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Editorial Content - Flowing text without cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <main className="space-y-12">
          {/* 1. Gancho Impactante */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight max-w-4xl">
              {vsl.hook.headline}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed max-w-4xl">
              {vsl.hook.subheadline}
            </p>
            <blockquote className="border-l-4 border-indigo-600 pl-5 py-2 my-6 italic text-gray-800 text-base sm:text-lg max-w-4xl">
              &quot;{vsl.hook.boldTake}&quot;
            </blockquote>
          </div>

          {/* 2. El Problema (PAS: Exponer, Agitar, Empujar al límite) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {vsl.problem.exposureTitle}
              </h3>
              <div className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed max-w-5xl">
                {vsl.problem.exposureParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Agitación */}
            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {vsl.problem.agitationTitle}
              </h3>
              <div className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed max-w-5xl">
                {vsl.problem.agitationParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Punto de Quiebre / Límite */}
            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {vsl.problem.limitTitle}
              </h3>
              <div className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl">
                {vsl.problem.limitParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Puntos de dolor */}
              <div className="my-6">
                <p className="font-bold text-gray-900 mb-4 text-base sm:text-lg flex items-center gap-2">
                  <span>🛑</span>
                  <span>
                    {post.lang === 'en'
                      ? 'The cost of doing outbound the legacy way:'
                      : post.lang === 'pt'
                      ? 'O custo de continuar prospectando no modelo antigo:'
                      : 'Lo que te cuesta seguir haciéndolo del modo antiguo:'}
                  </span>
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-5xl">
                  {vsl.problem.painBullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-base text-gray-700 font-medium"
                    >
                      <span className="text-rose-600 font-bold shrink-0">✕</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. La Solución InHubFlow */}
          <div className="space-y-8 pt-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {vsl.solution.title}
              </h2>
              <p className="text-sm sm:text-base text-indigo-600 font-semibold mb-4">
                {vsl.solution.subtitle}
              </p>
              <div className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl">
                {vsl.solution.introParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Proceso en 3 Pasos */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {vsl.solution.processTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vsl.solution.steps.map((st) => (
                  <div key={st.step} className="border-t-2 border-indigo-600 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                      <span className="text-xl">{st.icon}</span>
                      <span>{st.step}. {st.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base font-semibold text-emerald-800 bg-emerald-50/70 border-l-4 border-emerald-500 py-3.5 px-5 rounded-r-xl max-w-5xl flex items-center gap-2.5">
              <span>💎</span>
              <span>{vsl.solution.keyBenefit}</span>
            </p>
          </div>

          {/* 4. Credibilidad & Prueba Social */}
          <div className="space-y-8 pt-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {vsl.credibility.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 font-medium">
                {vsl.credibility.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-5xl">
                {vsl.credibility.points.map((pt, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 flex items-center gap-2">
                      <span>{pt.icon}</span>
                      <span>{pt.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-7">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-indigo-900 font-semibold my-4 flex items-center gap-2">
                <span className="text-lg">🛡️</span>
                <span>{vsl.credibility.securityBadgeText}</span>
              </p>
            </div>

            {/* Resultados y Prueba Social */}
            <div className="pt-6 border-t border-gray-200 space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {vsl.socialProof.title}
              </h3>

              {/* 3 Hard Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
                {vsl.socialProof.stats.map((st, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1">
                      {st.value}
                    </div>
                    <div className="font-bold text-xs sm:text-sm text-gray-900 mb-1">
                      {st.label}
                    </div>
                    <p className="text-xs text-gray-600 leading-tight">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="my-6 pl-6 border-l-4 border-indigo-600 space-y-3 max-w-4xl">
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  ★★★★★
                </div>
                <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed">
                  &quot;{vsl.socialProof.testimonial.quote}&quot;
                </p>
                <footer className="text-xs sm:text-sm text-gray-600 flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-gray-900">
                    {vsl.socialProof.testimonial.author}
                  </span>
                  <span>•</span>
                  <span>
                    {vsl.socialProof.testimonial.role}, {vsl.socialProof.testimonial.company}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-xs border border-indigo-200">
                    ✓ {vsl.socialProof.testimonial.highlight}
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* 5. Cierre y CTA Global Banner - 2 Columns */}
          <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left Column: Title & Description */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-400/20 text-indigo-200 border border-indigo-400/30 mb-3">
                  {cta.badge}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-white leading-tight">
                  {cta.title}
                </h2>
                <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
                  {cta.desc}
                </p>
              </div>

              {/* Right Column: CTA Button & Subtext */}
              <div className="flex flex-col items-start lg:items-center gap-2.5 shrink-0">
                <a
                  href="https://b2b.inhubflow.online"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-indigo-900 font-extrabold text-sm sm:text-base hover:bg-gray-100 transition shadow-lg text-center cursor-pointer transform hover:-translate-y-0.5"
                >
                  {cta.btn}
                </a>
                <span className="text-xs sm:text-sm text-indigo-200 font-medium">
                  {cta.subtext}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </main>
      </div>
    </article>
  );
}

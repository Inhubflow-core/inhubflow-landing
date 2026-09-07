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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
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

      {/* Main Reading Layout - Centered & Distraction-Free */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <main className="space-y-10 sm:space-y-12">
          {/* 1. Gancho Impactante (Hook Box) */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white shadow-xl border border-indigo-800/40 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4">
                ⚠️ {vsl.hook.alertText}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-snug">
                {vsl.hook.headline}
              </h2>
              <p className="text-sm sm:text-base text-indigo-100 mb-5 leading-relaxed">
                {vsl.hook.subheadline}
              </p>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <p className="text-xs sm:text-sm text-white font-semibold italic leading-relaxed">
                  &quot;{vsl.hook.boldTake}&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 2. El Problema (PAS: Exponer, Agitar, Empujar al límite) */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {vsl.problem.exposureTitle}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                {vsl.problem.exposureParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Agitation */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {vsl.problem.agitationTitle}
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                {vsl.problem.agitationParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Breaking Point / Limit */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {vsl.problem.limitTitle}
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                {vsl.problem.limitParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Pain Bullets Callout */}
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
                <h4 className="text-xs sm:text-sm font-bold text-rose-950 mb-3 flex items-center gap-2">
                  <span>🛑</span>
                  <span>
                    {post.lang === 'en'
                      ? 'The cost of doing outbound the legacy way:'
                      : post.lang === 'pt'
                      ? 'O custo de continuar prospectando no modelo antigo:'
                      : 'Lo que te cuesta seguir haciéndolo del modo antiguo:'}
                  </span>
                </h4>
                <ul className="space-y-2">
                  {vsl.problem.painBullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-900 font-medium"
                    >
                      <span className="text-rose-600 font-bold shrink-0">✕</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 3. La Solución InHubFlow */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {vsl.solution.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 font-medium">
                {vsl.solution.subtitle}
              </p>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                {vsl.solution.introParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* 3-Step Visual Process */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                {vsl.solution.processTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {vsl.solution.steps.map((st) => (
                  <div
                    key={st.step}
                    className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:border-indigo-300 transition"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xl">{st.icon}</span>
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                        {st.step}
                      </span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 mb-1.5 leading-snug">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200">
              <p className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2">
                <span>💎</span>
                <span>{vsl.solution.keyBenefit}</span>
              </p>
            </div>
          </section>

          {/* 4. Credibilidad (Seguridad de Nivel Empresarial y Casos de Éxito) */}
          <section className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {vsl.credibility.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 font-medium">
                {vsl.credibility.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {vsl.credibility.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80"
                  >
                    <div className="text-xl mb-2">{pt.icon}</div>
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 mb-1">
                      {pt.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-center gap-3 text-xs sm:text-sm text-indigo-950 font-semibold mb-8">
                <span className="text-xl">🛡️</span>
                <span>{vsl.credibility.securityBadgeText}</span>
              </div>
            </div>

            {/* Resultados y Prueba Social */}
            <div className="pt-6 border-t border-gray-100 space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {vsl.socialProof.title}
              </h3>

              {/* 3 Hard Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {vsl.socialProof.stats.map((st, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-indigo-50/40 border border-indigo-100 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1">
                      {st.value}
                    </div>
                    <div className="font-bold text-xs text-gray-900 mb-1">
                      {st.label}
                    </div>
                    <p className="text-[11px] text-gray-600 leading-tight">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Testimonial Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900 via-slate-900 to-indigo-950 text-white shadow-md border border-gray-800">
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                  ★★★★★
                </div>
                <blockquote className="text-xs sm:text-sm italic text-gray-200 mb-4 leading-relaxed">
                  &quot;{vsl.socialProof.testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center justify-between gap-4 flex-wrap text-xs">
                  <div>
                    <p className="font-bold text-white">
                      {vsl.socialProof.testimonial.author}
                    </p>
                    <p className="text-gray-400 text-[11px]">
                      {vsl.socialProof.testimonial.role} •{' '}
                      {vsl.socialProof.testimonial.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 font-bold text-[11px]">
                    ✓ {vsl.socialProof.testimonial.highlight}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. CTA (7 Días de Test Gratuito) */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-amber-400 text-gray-950 mb-4 shadow-xs">
                {vsl.closingCta.urgencyBadge}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                {vsl.closingCta.headline}
              </h2>
              <p className="text-sm sm:text-base text-indigo-100 mb-6 leading-relaxed">
                {vsl.closingCta.subheadline}
              </p>

              <ul className="space-y-2.5 mb-8">
                {vsl.closingCta.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium"
                  >
                    <span className="text-amber-300 font-bold">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={vsl.closingCta.targetUrl}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-white text-indigo-900 font-extrabold text-sm sm:text-base hover:bg-gray-100 transition shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                >
                  {vsl.closingCta.ctaLabel}
                </a>
                <p className="text-xs text-indigo-200">
                  {vsl.closingCta.ctaSubtext}
                </p>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
          </section>
        </main>
      </div>
    </article>
  );
}

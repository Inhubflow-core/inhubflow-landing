import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BLOG_POSTS,
  getBlogPostByLangAndSlug,
  getAlternateTranslations,
  getAdjacentBlogPosts,
} from '@/data/blog/posts';
import { BlogLanguage } from '@/data/blog/types';
import ArticleInteractive from '@/components/blog/article-interactive';
import BlogLangSync from '@/components/blog/blog-lang-sync';

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

  // 4 high-converting CTA models faithful to the 2-column gradient card design
  const ctaModels: Record<
    BlogLanguage,
    Array<{
      badge: string;
      title: string;
      desc: string;
      btn: string;
      subtext: string;
    }>
  > = {
    es: [
      {
        badge: 'SEGURIDAD OUTBOUND & ANTI-BANEO',
        title: 'Multiplica tus reuniones comerciales sin riesgo de baneo',
        desc: 'Únete a más de 300 agencias y empresas que ya automatizan su prospección en LinkedIn y Email con SDRs de IA y cadencia humana 100% segura.',
        btn: 'Comenzar Prueba Gratuita de 7 Días ➔',
        subtext: 'Acceso inmediato • Sin compromiso • Cancela cuando quieras',
      },
      {
        badge: 'SDR CON INTELIGENCIA ARTIFICIAL 24/7',
        title: 'Pon a tu SDR de IA a agendar reuniones cualificadas hoy mismo',
        desc: 'Ahorra hasta un 80% en costes comerciales y deja que la inteligencia artificial responda objeciones, califique leads y agende citas en tu Calendly.',
        btn: 'Activar Mi SDR IA Gratis por 7 Días ➔',
        subtext: 'Acceso inmediato • Sin compromiso • Cancela cuando quieras',
      },
      {
        badge: 'SISTEMA OUTBOUND MULTICANAL',
        title: 'Duplica tus respuestas combinando LinkedIn y Correo en un solo flujo',
        desc: 'Sincroniza tus mensajes directos y secuencias de email en una sola bandeja inteligente para que ningún prospecto con alto valor se escape.',
        btn: 'Lanzar Flujo Multicanal Gratis por 7 Días ➔',
        subtext: 'Acceso inmediato • Sin compromiso • Cancela cuando quieras',
      },
      {
        badge: 'MOTOR DE ADQUISICIÓN B2B ESCALABLE',
        title: 'Llena tu calendario con tomadores de decisión listos para comprar',
        desc: 'Deja de depender del boca a boca o de bases de datos obsoletas. Inyecta prospectos calificados cada semana de forma 100% predecible.',
        btn: 'Probar InHubFlow Gratis por 7 Días ➔',
        subtext: 'Acceso inmediato • Sin compromiso • Cancela cuando quieras',
      },
    ],
    en: [
      {
        badge: 'ANTI-BAN & SAFE OUTBOUND INFRASTRUCTURE',
        title: 'Multiply qualified sales meetings with zero ban risk',
        desc: 'Join over 300 B2B companies automating outreach with 24/7 AI SDRs and undetectable human cadence.',
        btn: 'Start 7-Day Free Trial ➔',
        subtext: 'Instant access • No commitment • Cancel anytime',
      },
      {
        badge: 'AUTONOMOUS 24/7 AI SDR',
        title: 'Deploy your AI SDR to book qualified sales calls while you sleep',
        desc: 'Cut pipeline generation costs by 80% and let artificial intelligence qualify decision-makers and fill your calendar automatically.',
        btn: 'Activate My AI SDR Free for 7 Days ➔',
        subtext: 'Instant access • No commitment • Cancel anytime',
      },
      {
        badge: 'SYNCHRONIZED MULTICHANNEL CADENCE',
        title: 'Double your reply rates by pairing LinkedIn and Email workflows',
        desc: 'Connect intelligent touchpoints: if a prospect ignores LinkedIn, InHubFlow seamlessly triggers high-deliverability email cadences.',
        btn: 'Launch Multichannel Cadence Free for 7 Days ➔',
        subtext: 'Instant access • No commitment • Cancel anytime',
      },
      {
        badge: 'SCALABLE B2B ACQUISITION ENGINE',
        title: 'Fill your sales calendar with high-intent decision-makers',
        desc: 'Stop relying on unpredictable referrals or stale lead lists. Inject high-value enterprise pipeline into your business every week.',
        btn: 'Try InHubFlow Free for 7 Days ➔',
        subtext: 'Instant access • No commitment • Cancel anytime',
      },
    ],
    pt: [
      {
        badge: 'SEGURANÇA & INFRAESTRUTURA ANTI-BLOQUEIO',
        title: 'Multiplique suas reuniões comerciais sem risco de bloqueio',
        desc: 'Junte-se a mais de 300 empresas B2B que automatizam prospecção no LinkedIn e E-mail com SDR de IA e cadência humana.',
        btn: 'Iniciar Teste Gratuito de 7 Dias ➔',
        subtext: 'Acesso imediato • Sem compromisso • Cancele quando quiser',
      },
      {
        badge: 'SDR AUTÔNOMO COM IA 24/7',
        title: 'Coloque seu SDR de IA para agendar reuniões enquanto você dorme',
        desc: 'Reduza até 80% dos custos de prospecção e deixe a inteligência artificial qualificar leads e preencher seu calendário no Calendly.',
        btn: 'Ativar Meu SDR IA Grátis por 7 Dias ➔',
        subtext: 'Acesso imediato • Sem compromisso • Cancele quando quiser',
      },
      {
        badge: 'OUTBOUND MULTICANAL SINCRONIZADO',
        title: 'Duplique suas respostas combinando LinkedIn e E-mail em um só fluxo',
        desc: 'Conecte etapas inteligentes: se o lead não responder no LinkedIn, o InHubFlow ativa sequências de e-mail com alta entregabilidade.',
        btn: 'Criar Sequência Multicanal Grátis por 7 Dias ➔',
        subtext: 'Acesso imediato • Sem compromisso • Cancele quando quiser',
      },
      {
        badge: 'MOTOR DE AQUISIÇÃO B2B ESCALÁVEL',
        title: 'Encha seu calendário com tomadores de decisão prontos para comprar',
        desc: 'Pare de depender de indicações imprevisíveis. Injete novas reuniões qualificadas no seu funil comercial toda semana com previsibilidade.',
        btn: 'Testar InHubFlow Grátis por 7 Dias ➔',
        subtext: 'Acesso imediato • Sem compromisso • Cancele quando quiser',
      },
    ],
  };

  // Deterministic rotation across the 4 CTA models based on post slug
  const modelIndex =
    Math.abs(
      post.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    ) % 4;

  const cta = ctaModels[post.lang][modelIndex];

  const adjacent = getAdjacentBlogPosts(post.lang, post.slug);

  const navLabels: Record<BlogLanguage, { prev: string; next: string }> = {
    es: { prev: 'ARTÍCULO ANTERIOR', next: 'PRÓXIMO ARTÍCULO' },
    en: { prev: 'PREVIOUS ARTICLE', next: 'NEXT ARTICLE' },
    pt: { prev: 'ARTIGO ANTERIOR', next: 'PRÓXIMO ARTIGO' },
  };
  const currentNavLabels = navLabels[post.lang];

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

      {/* Sync language with global header preference */}
      <BlogLangSync
        currentLang={post.lang}
        alternateSlugs={{
          es: alternates.es?.slug,
          en: alternates.en?.slug,
          pt: alternates.pt?.slug,
        }}
      />

      {/* Article Header & Breadcrumbs Hero */}
      <header className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-gray-600 flex-wrap mb-6"
          >
            <Link href="/" className="hover:text-indigo-600 transition">
              {labels.home}
            </Link>
            <span>/</span>
            <Link
              href={`/blog/${post.lang}`}
              className="hover:text-indigo-600 transition font-semibold"
            >
              {labels.blog}
            </Link>
            <span>/</span>
            <span className="text-indigo-700 font-semibold truncate max-w-xs">
              {post.categoryLabel}
            </span>
          </nav>

          {/* Category & Read Time Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              {post.categoryLabel}
            </span>
            <span className="text-xs text-gray-600 bg-white/90 px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
              {post.readTime}
            </span>
            <span className="text-xs text-gray-600 bg-white/90 px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
              {post.updatedAt}
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 w-full">
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight w-full">
              {vsl.hook.headline}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed w-full text-justify">
              {vsl.hook.subheadline}
            </p>
            <blockquote className="border-l-4 border-indigo-600 pl-5 py-2 my-6 italic text-gray-800 text-base sm:text-lg w-full text-justify">
              &quot;{vsl.hook.boldTake}&quot;
            </blockquote>
          </div>

          {/* 2. El Problema (PAS: Exponer, Agitar, Empujar al límite) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {vsl.problem.exposureTitle.replace(/^\d+\.\s*/, '')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed w-full text-justify">
                {vsl.problem.exposureParagraphs.join(' ')}
              </p>
            </div>

            {/* Agitación */}
            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {vsl.problem.agitationTitle.replace(/^\d+\.\s*/, '')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed w-full text-justify">
                {vsl.problem.agitationParagraphs.join(' ')}
              </p>
            </div>

            {/* Punto de Quiebre / Límite */}
            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {vsl.problem.limitTitle.replace(/^\d+\.\s*/, '')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 w-full text-justify">
                {vsl.problem.limitParagraphs.join(' ')}
              </p>

              {/* Puntos de dolor */}
              <div className="my-6">
                <p className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
                  {post.lang === 'en'
                    ? 'The cost of doing outbound the legacy way:'
                    : post.lang === 'pt'
                    ? 'O custo de continuar prospectando no modelo antigo:'
                    : 'Lo que te cuesta seguir haciéndolo del modo antiguo:'}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
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
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 w-full text-justify">
                {vsl.solution.introParagraphs.join(' ')}
              </p>
            </div>

            {/* Proceso en 3 Pasos */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {vsl.solution.processTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vsl.solution.steps.map((st) => (
                  <div key={st.step} className="border-t-2 border-indigo-600 pt-4 space-y-2">
                    <div className="text-indigo-600 font-bold text-sm">
                      <span>{st.step}. {st.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base font-semibold text-emerald-800 bg-emerald-50/70 border-l-4 border-emerald-500 py-3.5 px-5 rounded-r-xl w-full">
              {vsl.solution.keyBenefit}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 w-full">
                {vsl.credibility.points.map((pt, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">
                      {pt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-indigo-900 font-semibold my-4">
                {vsl.credibility.securityBadgeText}
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
              <blockquote className="my-6 pl-6 border-l-4 border-indigo-600 space-y-3 w-full">
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  ★★★★★
                </div>
                <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed text-justify">
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
                  href="https://inhubflow.online/"
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

          {/* Navegación entre Artículos (Anterior / Próximo) */}
          {(adjacent.prev || adjacent.next) && (
            <nav
              aria-label="Navegación entre artículos"
              className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {adjacent.prev ? (
                <Link
                  href={`/blog/${adjacent.prev.lang}/${adjacent.prev.slug}`}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 group flex flex-col justify-center text-left"
                >
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                    <span className="text-sm font-bold">&lsaquo;</span>
                    <span>{currentNavLabels.prev}</span>
                  </div>
                  <h3 className="mt-3 text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                    {adjacent.prev.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}

              {adjacent.next ? (
                <Link
                  href={`/blog/${adjacent.next.lang}/${adjacent.next.slug}`}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 group flex flex-col justify-center text-right"
                >
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-indigo-600 transition-colors flex items-center justify-end gap-1.5">
                    <span>{currentNavLabels.next}</span>
                    <span className="text-sm font-bold">&rsaquo;</span>
                  </div>
                  <h3 className="mt-3 text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                    {adjacent.next.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          )}
        </main>
      </div>
    </article>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost, BlogLanguage } from '@/data/blog/types';

interface BlogCatalogProps {
  posts: BlogPost[];
  currentLang: BlogLanguage;
}

export default function BlogCatalog({ posts, currentLang }: BlogCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const i18nLabels = useMemo(() => {
    switch (currentLang) {
      case 'en':
        return {
          allCategories: 'All Articles',
          searchPlaceholder: 'Search by pain point or keyword...',
          featuredBadge: 'FEATURED GUIDE',
          readArticle: 'Read Sales Guide ➔',
          noResultsTitle: 'No articles found for that search',
          noResultsDesc: 'Try terms like "LinkedIn", "SDR" or "multichannel".',
          seeAll: 'View all articles',
          by: 'By',
          readMore: 'Read Guide ➔',
          globalCtaBadge: 'HIGH-PERFORMANCE B2B OUTBOUND',
          globalCtaTitle: 'Multiply qualified sales meetings with zero ban risk',
          globalCtaDesc:
            'Join over 300 B2B companies automating outreach with 24/7 AI SDRs and undetectable human cadence.',
          globalCtaBtn: 'Start 14-Day Free Trial ➔',
          globalCtaSubtext: '✓ No credit card required',
          categories: [
            { id: 'all', label: 'All Articles' },
            { id: 'linkedin-automation', label: 'LinkedIn & Security' },
            { id: 'sdr-ia', label: 'AI SDR' },
            { id: 'cold-outreach', label: 'Multichannel Outreach' },
          ],
        };
      case 'pt':
        return {
          allCategories: 'Todos os Artigos',
          searchPlaceholder: 'Buscar por desafio ou palavra-chave...',
          featuredBadge: 'GUIA EM DESTAQUE',
          readArticle: 'Ler Carta de Vendas ➔',
          noResultsTitle: 'Nenhum artigo encontrado para essa busca',
          noResultsDesc: 'Tente palavras como "LinkedIn", "SDR" ou "multicanal".',
          seeAll: 'Ver todos os artigos',
          by: 'Por',
          readMore: 'Ler Guia ➔',
          globalCtaBadge: 'PROSPECÇÃO B2B DE ALTO RENDIMENTO',
          globalCtaTitle: 'Multiplique suas reuniões comerciais sem risco de bloqueio',
          globalCtaDesc:
            'Junte-se a mais de 300 empresas B2B que automatizam prospecção no LinkedIn e E-mail com SDR de IA e cadência humana.',
          globalCtaBtn: 'Iniciar Teste Gratuito de 14 Dias ➔',
          globalCtaSubtext: '✓ Sem cartão de crédito obrigatório',
          categories: [
            { id: 'all', label: 'Todos os Artigos' },
            { id: 'linkedin-automation', label: 'LinkedIn & Segurança' },
            { id: 'sdr-ia', label: 'SDR com IA' },
            { id: 'cold-outreach', label: 'Outreach Multicanal' },
          ],
        };
      case 'es':
      default:
        return {
          allCategories: 'Todos los Artículos',
          searchPlaceholder: 'Buscar por dolor o palabra clave...',
          featuredBadge: 'ARTÍCULO DESTACADO',
          readArticle: 'Leer Carta de Ventas & Guía ➔',
          noResultsTitle: 'No encontramos artículos para esa búsqueda',
          noResultsDesc: 'Prueba con otros términos como "LinkedIn", "SDR" o "multicanal".',
          seeAll: 'Ver todos los artículos',
          by: 'Por',
          readMore: 'Leer Guia ➔',
          globalCtaBadge: 'SOFTWARE B2B DE ALTO RENDIMIENTO',
          globalCtaTitle: 'Multiplica tus reuniones comerciales sin riesgo de baneo',
          globalCtaDesc:
            'Únete a más de 300 agencias y empresas que ya automatizan su prospección en LinkedIn y Email con SDRs de IA y cadencia humana 100% segura.',
          globalCtaBtn: 'Comenzar Prueba Gratuita de 14 Días ➔',
          globalCtaSubtext: '✓ Sin tarjeta de crédito requerida',
          categories: [
            { id: 'all', label: 'Todos los Artículos' },
            { id: 'linkedin-automation', label: 'LinkedIn & Seguridad' },
            { id: 'sdr-ia', label: 'SDR & IA' },
            { id: 'cold-outreach', label: 'Outreach Multicanal' },
          ],
        };
    }
  }, [currentLang]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.metaDescription.toLowerCase().includes(q) ||
        post.vsl.hook.headline.toLowerCase().includes(q) ||
        post.keywords.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return posts.find((p) => p.featured) || posts[0];
  }, [posts]);

  return (
    <div className="w-full">
      {/* Language Switcher Tabs */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Link
          href="/blog/es"
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
            currentLang === 'es'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
          }`}
        >
          🇪🇸 Español
        </Link>
        <Link
          href="/blog/en"
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
            currentLang === 'en'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
          }`}
        >
          🇺🇸 English
        </Link>
        <Link
          href="/blog/pt"
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
            currentLang === 'pt'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
          }`}
        >
          🇧🇷 Português
        </Link>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="mb-10 p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/90 shadow-xs">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {i18nLabels.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={i18nLabels.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-indigo-600 focus:outline-hidden transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Featured Article Hero */}
      {selectedCategory === 'all' && !searchQuery && featuredPost && (
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101828] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-gray-800">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-4">
                <span>⭐ {i18nLabels.featuredBadge}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                {featuredPost.vsl.hook.boldTake}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/blog/${currentLang}/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition shadow-md hover:shadow-indigo-500/25"
                >
                  {i18nLabels.readArticle}
                </Link>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>
                    {i18nLabels.by} {featuredPost.author.name}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.publishedAt}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-gray-200/90 shadow-xs">
          <p className="text-3xl mb-3">🔍</p>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {i18nLabels.noResultsTitle}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">
            {i18nLabels.noResultsDesc}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition"
          >
            {i18nLabels.seeAll}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition duration-200 overflow-hidden group"
            >
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {post.categoryLabel}
                  </span>
                  <span className="text-xs text-gray-600 font-medium">
                    ⏱️ {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition leading-snug">
                  <Link
                    href={`/blog/${currentLang}/${post.slug}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* VSL Hook Snippet */}
                <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed line-clamp-3">
                  {post.vsl.hook.headline}
                </p>

                {/* Pain bullet reminder */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-600 font-medium">
                    📅 {post.publishedAt}
                  </span>
                  <Link
                    href={`/blog/${currentLang}/${post.slug}`}
                    className="font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition"
                  >
                    {i18nLabels.readMore}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Bottom Global CTA Banner */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-400/20 text-indigo-200 border border-indigo-400/30 mb-3">
            ⚡ {i18nLabels.globalCtaBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
            {i18nLabels.globalCtaTitle}
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 mb-6 leading-relaxed">
            {i18nLabels.globalCtaDesc}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://b2b.inhubflow.online"
              className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-extrabold text-xs sm:text-sm hover:bg-gray-100 transition shadow-md"
            >
              {i18nLabels.globalCtaBtn}
            </a>
            <span className="text-xs text-indigo-200">
              {i18nLabels.globalCtaSubtext}
            </span>
          </div>
        </div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-500/30 rounded-full blur-2xl pointer-events-none" />
      </div>
    </div>
  );
}

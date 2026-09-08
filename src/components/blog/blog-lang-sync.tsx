'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/providers/language';
import { BlogLanguage } from '@/data/blog/types';

interface BlogLangSyncProps {
  currentLang: BlogLanguage;
  alternateSlugs?: {
    es?: string;
    en?: string;
    pt?: string;
  };
}

export default function BlogLangSync({
  currentLang,
  alternateSlugs,
}: BlogLangSyncProps) {
  const { locale } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const preferredLang: BlogLanguage = locale.startsWith('pt')
      ? 'pt'
      : locale.startsWith('en')
      ? 'en'
      : 'es';

    // If the global navbar language preference does not match this page's language
    if (preferredLang !== currentLang) {
      if (alternateSlugs && alternateSlugs[preferredLang]) {
        router.replace(`/blog/${preferredLang}/${alternateSlugs[preferredLang]}`);
      } else {
        router.replace(`/blog/${preferredLang}`);
      }
    }
  }, [locale, currentLang, alternateSlugs, router]);

  return null;
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/providers/language';
import { BlogLanguage } from '@/data/blog/types';

export default function BlogRootPage() {
  const { locale } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const targetLang: BlogLanguage = locale.startsWith('pt')
      ? 'pt'
      : locale.startsWith('en')
      ? 'en'
      : 'es';

    router.replace(`/blog/${targetLang}`);
  }, [locale, router]);

  return (
    <div className="min-h-screen bg-[#FAFAFC] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

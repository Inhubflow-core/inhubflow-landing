import { BlogPost, BlogLanguage } from './types';
import { BLOG_POSTS_ES } from './posts-es';
import { BLOG_POSTS_EN } from './posts-en';
import { BLOG_POSTS_PT } from './posts-pt';

export { BLOG_POSTS_ES } from './posts-es';
export { BLOG_POSTS_EN } from './posts-en';
export { BLOG_POSTS_PT } from './posts-pt';

export const BLOG_POSTS: BlogPost[] = [
  ...BLOG_POSTS_ES,
  ...BLOG_POSTS_EN,
  ...BLOG_POSTS_PT,
];

export function getBlogPostsByLang(lang: BlogLanguage): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.lang === lang);
}

export function getBlogPostByLangAndSlug(
  lang: BlogLanguage,
  slug: string
): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.lang === lang && post.slug === slug);
}

export function getAllBlogSlugsByLang(lang: BlogLanguage): string[] {
  return BLOG_POSTS.filter((post) => post.lang === lang).map((post) => post.slug);
}

export function getAlternateTranslations(post: BlogPost): {
  es?: BlogPost;
  en?: BlogPost;
  pt?: BlogPost;
} {
  const siblings = BLOG_POSTS.filter(
    (p) => p.translationKey === post.translationKey
  );
  return {
    es: siblings.find((p) => p.lang === 'es'),
    en: siblings.find((p) => p.lang === 'en'),
    pt: siblings.find((p) => p.lang === 'pt'),
  };
}

export function getAdjacentBlogPosts(
  lang: BlogLanguage,
  slug: string
): {
  prev?: BlogPost;
  next?: BlogPost;
} {
  const posts = getBlogPostsByLang(lang);
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  if (currentIndex === -1 || posts.length <= 1) return {};

  const prev =
    currentIndex > 0 ? posts[currentIndex - 1] : posts[posts.length - 1];
  const next =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : posts[0];

  return { prev, next };
}

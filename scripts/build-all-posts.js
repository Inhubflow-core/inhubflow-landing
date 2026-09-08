const fs = require('fs');
const path = require('path');

const part1 = require('./new-posts-data-part1.js');
const part2 = require('./new-posts-data-part2.js');
const part3 = require('./new-posts-data-part3.js');

const allNewPosts = [...part1, ...part2, ...part3];
console.log('Loaded new pillar topics:', allNewPosts.length);

const currentPostsTs = fs.readFileSync(path.join(__dirname, '../src/data/blog/posts.ts'), 'utf8');
const lines = currentPostsTs.split('\n');

// Existing slices
const existingEsRaw = lines.slice(6, 532).join('\n');
const existingEnRaw = lines.slice(536, 1058).join('\n');
const existingPtRaw = lines.slice(1062, 1584).join('\n');

// Format new post as TypeScript object
function formatPostTs(topic, lang) {
  const data = topic[lang];
  const postObj = {
    slug: data.slug,
    lang: lang,
    translationKey: topic.translationKey,
    title: data.title,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords,
    publishedAt: topic.publishedAt,
    updatedAt: topic.updatedAt,
    featured: topic.featured || false,
    author: data.author,
    category: topic.category,
    categoryLabel: data.categoryLabel,
    readTime: topic.readTime,
    vsl: data.vsl,
    faq: data.faq,
  };
  return '  ' + JSON.stringify(postObj, null, 2).replace(/\n/g, '\n  ') + ',';
}

const newEsPosts = allNewPosts.map((t) => formatPostTs(t, 'es')).join('\n\n');
const newPtPosts = allNewPosts.map((t) => formatPostTs(t, 'pt')).join('\n\n');
const newEnPosts = allNewPosts.map((t) => formatPostTs(t, 'en')).join('\n\n');

// 1. Write posts-es.ts
const postsEsContent = `import { BlogPost } from './types';

export const BLOG_POSTS_ES: BlogPost[] = [
${existingEsRaw}

${newEsPosts}
];
`;

// 2. Write posts-pt.ts
const postsPtContent = `import { BlogPost } from './types';

export const BLOG_POSTS_PT: BlogPost[] = [
${existingPtRaw}

${newPtPosts}
];
`;

// 3. Write posts-en.ts
const postsEnContent = `import { BlogPost } from './types';

export const BLOG_POSTS_EN: BlogPost[] = [
${existingEnRaw}

${newEnPosts}
];
`;

// 4. Write posts.ts
const postsTsContent = `import { BlogPost, BlogLanguage } from './types';
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
`;

fs.writeFileSync(path.join(__dirname, '../src/data/blog/posts-es.ts'), postsEsContent, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/data/blog/posts-pt.ts'), postsPtContent, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/data/blog/posts-en.ts'), postsEnContent, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/data/blog/posts.ts'), postsTsContent, 'utf8');

console.log('Successfully generated:');
console.log('- src/data/blog/posts-es.ts (9 posts)');
console.log('- src/data/blog/posts-pt.ts (9 posts)');
console.log('- src/data/blog/posts-en.ts (9 posts)');
console.log('- src/data/blog/posts.ts (27 posts total)');

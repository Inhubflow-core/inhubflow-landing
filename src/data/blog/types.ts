export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface VslStep {
  step: number;
  title: string;
  desc: string;
  icon: string;
}

export interface CredibilityPoint {
  title: string;
  desc: string;
  icon: string;
}

export interface SocialProofStat {
  value: string;
  label: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: string; // ISO date string: YYYY-MM-DD
  updatedAt: string;
  author: BlogAuthor;
  category: 'linkedin-automation' | 'sdr-ia' | 'cold-outreach' | 'b2b-growth';
  categoryLabel: string;
  readTime: string;
  coverImage?: string;
  featured?: boolean;
  
  // High-Conversion VSL Sales Letter Structure
  vsl: {
    // 1. Gancho impactante y chocante
    hook: {
      headline: string;
      subheadline: string;
      alertText: string;
      boldTake: string;
    };
    
    // 2. El Problema (Exposición, Agitación, Empujar al límite)
    problem: {
      exposureTitle: string;
      exposureParagraphs: string[];
      agitationTitle: string;
      agitationParagraphs: string[];
      limitTitle: string;
      limitParagraphs: string[];
      painBullets: string[];
    };
    
    // 3. La Solución
    solution: {
      title: string;
      subtitle: string;
      introParagraphs: string[];
      processTitle: string;
      steps: VslStep[];
      keyBenefit: string;
    };
    
    // 4. Credibilidad (Seguridad, Anti-ban, Arquitectura)
    credibility: {
      title: string;
      subtitle: string;
      points: CredibilityPoint[];
      securityBadgeText: string;
    };
    
    // 5. Prueba Social
    socialProof: {
      title: string;
      stats: SocialProofStat[];
      testimonial: {
        quote: string;
        author: string;
        role: string;
        company: string;
        highlight: string;
      };
    };
    
    // 6. El Cierre, Urgencia y CTA
    closingCta: {
      headline: string;
      subheadline: string;
      urgencyBadge: string;
      bullets: string[];
      ctaLabel: string;
      ctaSubtext: string;
      targetUrl: string;
    };
  };

  // Schema SEO Rich Snippets FAQs
  faq: FaqItem[];
}

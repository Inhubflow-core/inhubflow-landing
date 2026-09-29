import { Locale } from '@/app/providers/language';

export const getBillingPeriods = (locale: Locale) => [
  {
    label: locale === 'pt-BR' ? 'Faturamento Mensal' : locale === 'en' ? 'Monthly Billing' : 'Facturación Mensual',
    key: 'monthly' as const,
    saving: null,
  },
  {
    label: locale === 'pt-BR' ? 'Faturamento Anual' : locale === 'en' ? 'Annual Billing' : 'Facturación Anual',
    key: 'yearly' as const,
    saving: '20% OFF',
  },
];

export const getAmounts = (hasPartnerDiscount: boolean = false) => {
  if (hasPartnerDiscount) {
    return {
      starter: {
        monthly: 32,
        yearly: 25.6,
        formattedMonthly: '$32',
        formattedYearly: '$25.60',
        originalMonthly: '$40',
        originalYearly: '$32',
      },
      growth: {
        monthly: 128,
        yearly: 102.4,
        formattedMonthly: '$128',
        formattedYearly: '$102.40',
        originalMonthly: '$160',
        originalYearly: '$128',
      },
      business: {
        monthly: 192,
        yearly: 153.6,
        formattedMonthly: '$192',
        formattedYearly: '$153.60',
        originalMonthly: '$240',
        originalYearly: '$192',
      },
    };
  }

  return {
    starter: {
      monthly: 40,
      yearly: 32,
      formattedMonthly: '$40',
      formattedYearly: '$32',
      originalMonthly: null as string | null,
      originalYearly: null as string | null,
    },
    growth: {
      monthly: 160,
      yearly: 128,
      formattedMonthly: '$160',
      formattedYearly: '$128',
      originalMonthly: null as string | null,
      originalYearly: null as string | null,
    },
    business: {
      monthly: 240,
      yearly: 192,
      formattedMonthly: '$240',
      formattedYearly: '$192',
      originalMonthly: null as string | null,
      originalYearly: null as string | null,
    },
  };
};

export const LEMON_CHECKOUTS = {
  starter: {
    url: 'https://inhubflow.lemonsqueezy.com/checkout/buy/1c4e9363-186e-40e7-a74e-f9d89117ba3a',
    variantId: '2088572',
  },
  growth: {
    url: 'https://inhubflow.lemonsqueezy.com/checkout/buy/46fd950f-5631-4e6c-bd2e-a15da16d97cc',
    variantId: '2088578',
  },
  business: {
    url: 'https://inhubflow.lemonsqueezy.com/checkout/buy/3ea48412-43ed-4330-97c5-c06073d1d00d',
    variantId: '2088581',
  },
};

export const getBillingPlans = (locale: Locale, hasPartnerDiscount: boolean = false) => {
  const AMOUNTS = getAmounts(hasPartnerDiscount);

  if (locale === 'pt-BR') {
    const commonFeaturesPt = [
      'Lead Finder: Busca e extração de prospectos qualificados no LinkedIn',
      'Monitores de Sinais de Intenção B2B em Tempo Real',
      'Social Selling com IA: Geração e agendamento de posts para o LinkedIn',
      'Sequências e Campanhas Automatizadas com Pausas Inteligentes',
      'Assistente SDR de IA 24/7 Ilimitado (Respostas e Qualificação)',
      'Agendamento Automático de Reuniões no Google Calendar e Calendly',
      'Smart Inbox: Gestão centralizada de conversas em tempo real',
      'Sincronização com CRM (HubSpot, Pipedrive) e Exportação em CSV',
      'Proteção Anti-bloqueio: Ritmos humanizados de navegação segura',
    ];

    return [
      {
        id: 'slots-1',
        name: 'Plano Starter (1 Conta)',
        description: 'Acesso completo a todas as ferramentas para 1 conta comercial de LinkedIn.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        },
        features: [
          '1 Conta do LinkedIn Conectada (1 Slot Dedicado)',
          'Até 20 interações comerciais / dia* (400 por mês • Seg a Sex)',
          ...commonFeaturesPt,
        ],
        cta: 'Começar com 1 Conta',
        popular: false,
      },
      {
        id: 'slots-5',
        name: 'Plano Growth (5 Contas)',
        description: 'Acesso completo a todas as ferramentas para gerenciar 5 contas comerciais de LinkedIn.',
        pricing: {
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        },
        features: [
          '5 Contas do LinkedIn Conectadas (5 Slots Dedicados)',
          'Até 100 interações comerciais / dia* (2.000 por mês • Seg a Sex)',
          ...commonFeaturesPt,
        ],
        cta: 'Começar com 5 Contas',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Plano Business (10 Contas)',
        description: 'Acesso completo a todas as ferramentas para gerenciar 10 contas comerciais de LinkedIn.',
        pricing: {
          monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
          yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        },
        features: [
          '10 Contas do LinkedIn Conectadas (10 Slots Dedicados)',
          'Até 200 interações comerciais / dia* (4.000 por mês • Seg a Sex)',
          ...commonFeaturesPt,
        ],
        cta: 'Começar com 10 Contas',
        popular: false,
      },
    ];
  }

  if (locale === 'en') {
    const commonFeaturesEn = [
      'Lead Finder: Real-time search & extraction of qualified B2B leads',
      'Real-Time B2B Intent Signal Monitors',
      'AI Social Selling: Generate & schedule viral LinkedIn content',
      'Automated Outreach Sequences with Smart Natural Pacing',
      'Unlimited 24/7 AI SDR Assistant (Contextual replies & qualification)',
      'Automated Meeting Booking with Google Calendar & Calendly',
      'Smart Inbox: Centralized real-time conversation management',
      'CRM Sync (HubSpot, Pipedrive) & Full CSV History Export',
      'Anti-Detection Protection: Humanized browsing safety limits',
    ];

    return [
      {
        id: 'slots-1',
        name: 'Starter Plan (1 Account)',
        description: 'Full access to all platform features for 1 connected LinkedIn account.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        },
        features: [
          '1 Connected LinkedIn Account (1 Dedicated Slot)',
          'Up to 20 commercial interactions / day* (400 / month • Mon to Fri)',
          ...commonFeaturesEn,
        ],
        cta: 'Start with 1 Account',
        popular: false,
      },
      {
        id: 'slots-5',
        name: 'Growth Plan (5 Accounts)',
        description: 'Full access to all platform features to manage 5 connected LinkedIn accounts.',
        pricing: {
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        },
        features: [
          '5 Connected LinkedIn Accounts (5 Dedicated Slots)',
          'Up to 100 commercial interactions / day* (2,000 / month • Mon to Fri)',
          ...commonFeaturesEn,
        ],
        cta: 'Start with 5 Accounts',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Business Plan (10 Accounts)',
        description: 'Full access to all platform features to manage 10 connected LinkedIn accounts.',
        pricing: {
          monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
          yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        },
        features: [
          '10 Connected LinkedIn Accounts (10 Dedicated Slots)',
          'Up to 200 commercial interactions / day* (4,000 / month • Mon to Fri)',
          ...commonFeaturesEn,
        ],
        cta: 'Start with 10 Accounts',
        popular: false,
      },
    ];
  }

  // Default Spanish (Todos los planes tienen exactamente los mismos recursos)
  const commonFeaturesEs = [
    'Lead Finder: Búsqueda y extracción de prospectos calificados en LinkedIn',
    'Monitores de Señales de Intención B2B en Tiempo Real',
    'Social Selling con IA: Generación y programación de contenido para LinkedIn',
    'Secuencias y Campañas Automatizadas con Pausas Inteligentes',
    'Asistente SDR de IA 24/7 Ilimitado (Respuestas y Calificación)',
    'Agendamiento Automático de Reuniones en Google Calendar y Calendly',
    'Smart Inbox: Gestión centralizada de conversaciones en tiempo real',
    'Sincronización con CRM (HubSpot, Pipedrive) y Exportación en CSV',
    'Protección Anti-bloqueos: Ritmos humanizados de navegación segura',
  ];

  return [
    {
      id: 'slots-1',
      name: 'Plan Starter (1 Cuenta)',
      description: 'Acceso completo a todos los recursos para administrar 1 cuenta comercial de LinkedIn.',
      pricing: {
        monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
      },
      features: [
        '1 Cuenta de LinkedIn Conectada (1 Slot Dedicado)',
        'Hasta 20 interacciones comerciales / día* (400 al mes • Lun a Vie)',
        ...commonFeaturesEs,
      ],
      cta: 'Comenzar con 1 Cuenta',
      popular: false,
    },
    {
      id: 'slots-5',
      name: 'Plan Growth (5 Cuentas)',
      description: 'Acceso completo a todos los recursos para administrar 5 cuentas comerciales de LinkedIn.',
      pricing: {
        monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
      },
      features: [
        '5 Cuentas de LinkedIn Conectadas (5 Slots Dedicados)',
        'Hasta 100 interacciones comerciales / día* (2.000 al mes • Lun a Vie)',
        ...commonFeaturesEs,
      ],
      cta: 'Comenzar con 5 Cuentas',
      popular: true,
    },
    {
      id: 'slots-10',
      name: 'Plan Business (10 Cuentas)',
      description: 'Acceso completo a todos los recursos para administrar 10 cuentas comerciales de LinkedIn.',
      pricing: {
        monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
      },
      features: [
        '10 Cuentas de LinkedIn Conectadas (10 Slots Dedicados)',
        'Hasta 200 interacciones comerciales / día* (4.000 al mes • Lun a Vie)',
        ...commonFeaturesEs,
      ],
      cta: 'Comenzar con 10 Cuentas',
      popular: false,
    },
  ];
};

export type TBILLING_PLAN = ReturnType<typeof getBillingPlans>[number];

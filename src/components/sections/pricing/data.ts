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
    return [
      {
        id: 'slots-1',
        name: 'Plano Starter (1 Conta)',
        description: 'Ideal para profissionais e fundadores que buscam automatizar sua prospecção e agendar reuniões qualificadas.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        },
        features: [
          '1 Conta do LinkedIn Conectada (1 Slot Dedicado)',
          'Lead Finder: Busca e extração de prospectos qualificados no LinkedIn',
          'Monitores de Sinais de Intenção: 3 Monitores ativos (Concorrentes e Palavras-chave)',
          'Social Selling com IA: Geração e agendamento de posts para atrair clientes',
          'Campanhas Multicanal: Até 20 conexões e interações / dia* (600 por mês)',
          'Assistente SDR de IA 24/7 Ilimitado (Respostas contextuais e quebra de objeções)',
          'Agendamento Automático de Reuniões no Google Calendar e Calendly',
          'Smart Inbox Unificado: Gestão centralizada de conversas em tempo real',
          'Sincronização com CRM (HubSpot, Pipedrive) e Exportação em CSV',
          'Algoritmo Anti-bloqueio: Ritmos humanizados e proteção total da conta',
        ],
        cta: 'Começar com 1 Conta',
        popular: false,
      },
      {
        id: 'slots-5',
        name: 'Plano Growth (5 Contas)',
        description: 'Perfeito para equipes comerciais que precisam escalar seu pipeline com sinais de intenção e Social Selling.',
        pricing: {
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        },
        features: [
          '5 Contas do LinkedIn Conectadas (5 Slots Dedicados para a equipe)',
          'Lead Finder Multicontas: Extração massiva de decisores B2B por perfil',
          'Monitores de Sinais de Intenção: 15 Monitores ativos em tempo real',
          'Social Selling com IA: Planejamento e publicação para todas as contas',
          'Campanhas Multicanal: Até 100 conexões e interações / dia* (3.000 por mês)',
          'Assistente SDR de IA 24/7 Ilimitado (Respostas autônomas e qualificação)',
          'Agendamento Multiequipe no Google Calendar e Calendly',
          'Smart Inbox Colaborativo com atribuição de leads para o time de vendas',
          'Sincronização Bidirecional com CRM (HubSpot, Pipedrive, Webhooks)',
          'Proteção Empresarial Avançada com Proxies Dedicados por conta',
        ],
        cta: 'Começar com 5 Contas',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Plano Business (10 Contas)',
        description: 'Capacidade máxima e alto rendimento para empresas B2B e agências com equipes de vendas em expansão.',
        pricing: {
          monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
          yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        },
        features: [
          '10 Contas do LinkedIn Conectadas (10 Slots Dedicados de alto volume)',
          'Lead Finder Ilimitado: Extração massiva corporativa com filtros avançados',
          'Monitores de Sinais de Intenção Ilimitados em tempo real (Radar Completo)',
          'Social Selling com IA Ilimitado: Calendário editorial em escala para o time',
          'Campanhas Multicanal: Até 200 conexões e interações / dia* (6.000 por mês)',
          'Assistente SDR de IA Corporativo treinado com os playbooks da sua empresa',
          'Agendamento Inteligente com distribuição round-robin entre executivos',
          'Gestão de Equipe & Permissões: Papéis granulares e métricas por vendedor',
          'Integrações CRM Enterprise (HubSpot, Pipedrive, Salesforce via Zapier/API)',
          'Suporte Prioritário VIP & Onboarding Estratégico Dedicado',
        ],
        cta: 'Começar com 10 Contas',
        popular: false,
      },
    ];
  }

  if (locale === 'en') {
    return [
      {
        id: 'slots-1',
        name: 'Starter Plan (1 Account)',
        description: 'Ideal for founders and sales reps looking to automate outreach and book qualified meetings.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        },
        features: [
          '1 Connected LinkedIn Account (1 Dedicated Slot)',
          'Lead Finder: Real-time search & extraction of qualified B2B leads',
          'Intent Signal Monitors: 3 Active Monitors (Competitor posts & Keywords)',
          'AI Social Selling: Generate and schedule viral LinkedIn content to attract buyers',
          'Multichannel Outreach: Up to 20 daily interactions & connection requests* (600/month)',
          'Unlimited 24/7 AI SDR Assistant (Contextual replies & objection handling)',
          'Automated Meeting Booking with Google Calendar & Calendly',
          'Unified Smart Inbox: Centralized conversation and lead tracking',
          'CRM Integration (HubSpot, Pipedrive) & Full CSV History Export',
          'Anti-Detection Protection: Humanized browsing pacing & safety limits',
        ],
        cta: 'Start with 1 Account',
        popular: false,
      },
      {
        id: 'slots-5',
        name: 'Growth Plan (5 Accounts)',
        description: 'Perfect for sales teams scaling their pipeline with intent signals and AI Social Selling.',
        pricing: {
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        },
        features: [
          '5 Connected LinkedIn Accounts (5 Dedicated Slots for your team)',
          'Multi-Account Lead Finder: Mass extraction of B2B decision makers',
          'Intent Signal Monitors: 15 Real-time active monitors',
          'AI Social Selling: Automated planning and publishing for all team accounts',
          'Multichannel Outreach: Up to 100 daily interactions & connection requests* (3,000/month)',
          'Unlimited 24/7 AI SDR Assistant (Autonomous qualification & booking)',
          'Team-wide Meeting Booking with Google Calendar & Calendly',
          'Collaborative Smart Inbox with lead assignment among sales reps',
          'Two-Way CRM Synchronization (HubSpot, Pipedrive, Webhooks)',
          'Enterprise Security Guard with Dedicated Proxies per account',
        ],
        cta: 'Start with 5 Accounts',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Business Plan (10 Accounts)',
        description: 'Maximum capacity and high performance for B2B companies and agencies with growing sales teams.',
        pricing: {
          monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
          yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        },
        features: [
          '10 Connected LinkedIn Accounts (10 Dedicated High-Volume Slots)',
          'Unlimited Lead Finder: Enterprise bulk extraction with priority export',
          'Unlimited Real-Time Intent Signal Monitors (Full Signal Radar)',
          'Unlimited AI Social Selling: Scaled content engine for leaders and reps',
          'Multichannel Outreach: Up to 200 daily interactions & connection requests* (6,000/month)',
          'Corporate AI SDR Assistant fine-tuned on your company playbooks',
          'Round-Robin Smart Meeting Booking across sales reps',
          'Team & Role Management: Granular permissions and sales performance metrics',
          'Enterprise CRM Integrations (HubSpot, Pipedrive, Salesforce via Zapier/API)',
          'VIP Priority Support & Dedicated Strategic Onboarding',
        ],
        cta: 'Start with 10 Accounts',
        popular: false,
      },
    ];
  }

  // Default Spanish
  return [
    {
      id: 'slots-1',
      name: 'Plan Starter (1 Cuenta)',
      description: 'Ideal para profesionales y fundadores que buscan automatizar su prospección y agendar reuniones calificadas.',
      pricing: {
        monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
      },
      features: [
        '1 Cuenta de LinkedIn Conectada (1 Slot Dedicado)',
        'Lead Finder: Búsqueda y extracción de prospectos calificados en LinkedIn',
        'Monitores de Señales de Intención: 3 Monitores activos (Competidores y Palabras Clave)',
        'Social Selling con IA: Generación y programación de publicaciones para captar leads',
        'Campañas Multicanal: Hasta 20 interacciones y conexiones comerciales / día* (600 al mes)',
        'Asistente SDR de IA 24/7 Ilimitado (Respuestas contextuales y manejo de objeciones)',
        'Agendamiento Automático de Reuniones en Google Calendar y Calendly',
        'Smart Inbox Centralizado: Gestión de conversaciones y respuestas en un solo lugar',
        'Sincronización con CRM (HubSpot, Pipedrive) y Exportación completa en CSV',
        'Algoritmo Anti-bloqueos: Ritmos humanizados y navegación segura de LinkedIn',
      ],
      cta: 'Comenzar con 1 Cuenta',
      popular: false,
    },
    {
      id: 'slots-5',
      name: 'Plan Growth (5 Cuentas)',
      description: 'Perfecto para equipos comerciales que necesitan escalar su pipeline con señales de intención y Social Selling.',
      pricing: {
        monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
      },
      features: [
        '5 Cuentas de LinkedIn Conectadas (5 Slots Dedicados para tu equipo)',
        'Lead Finder Multicuenta: Búsqueda y extracción masiva de decisores B2B',
        'Monitores de Señales de Intención: 15 Monitores activos en tiempo real',
        'Social Selling con IA: Planificación y publicación automática para todas las cuentas',
        'Campañas Multicanal: Hasta 100 interacciones y conexiones comerciales / día* (3.000 al mes)',
        'Asistente SDR de IA 24/7 Ilimitado (Respuestas autónomas y calificación)',
        'Agendamiento Multiequipo en Google Calendar y Calendly',
        'Smart Inbox Colaborativo con asignación de prospectos para el equipo',
        'Sincronización Bidireccional CRM (HubSpot, Pipedrive, Webhooks)',
        'Protección Empresarial Avanzada con Proxies Dedicados por cuenta',
      ],
      cta: 'Comenzar con 5 Cuentas',
      popular: true,
    },
    {
      id: 'slots-10',
      name: 'Plan Business (10 Cuentas)',
      description: 'Capacidad máxima y alto rendimiento para empresas B2B y agencias con equipos de venta en expansión.',
      pricing: {
        monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
      },
      features: [
        '10 Cuentas de LinkedIn Conectadas (10 Slots Dedicados de alto volumen)',
        'Lead Finder Ilimitado: Extracción masiva corporativa con filtros avanzados',
        'Monitores de Señales de Intención Ilimitados en tiempo real (Radar Completo)',
        'Social Selling con IA Ilimitado: Motor de contenido a escala para todo el equipo',
        'Campañas Multicanal: Hasta 200 interacciones y conexiones comerciales / día* (6.000 al mes)',
        'Asistente SDR de IA Corporativo entrenado con los playbooks de tu empresa',
        'Agendamiento Inteligente con distribución round-robin entre ejecutivos',
        'Gestión de Equipo & Permisos: Roles granulares y métricas de rendimiento',
        'Integraciones CRM Enterprise (HubSpot, Pipedrive, Salesforce vía Zapier/API)',
        'Soporte Prioritario VIP & Onboarding Estratégico Dedicado',
      ],
      cta: 'Comenzar con 10 Cuentas',
      popular: false,
    },
  ];
};

export type TBILLING_PLAN = ReturnType<typeof getBillingPlans>[number];

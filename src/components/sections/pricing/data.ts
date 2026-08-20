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
    saving: locale === 'pt-BR' ? '20% OFF' : locale === 'en' ? '20% OFF' : '20% OFF',
  },
];

const AMOUNTS = {
  b2c: {
    monthly: 59,
    yearly: 49,
  },
  b2b: {
    monthly: 79,
    yearly: 69,
  },
  allInOne: {
    monthly: 129,
    yearly: 99,
  },
};

export const getBillingPlans = (locale: Locale) => {
  if (locale === 'pt-BR') {
    return [
      {
        id: 'b2c',
        name: 'Plano B2C (WhatsApp & Instagram)',
        description:
          'Projetado para negócios e prestadores de serviços que captam e atendem clientes finais por WhatsApp e Instagram com IA.',
        pricing: {
          monthly: {
            amount: AMOUNTS['b2c']['monthly'],
            formattedPrice: '$' + AMOUNTS['b2c']['monthly'],
            paddlePriceId: 'pri_b2c_monthly',
          },
          yearly: {
            amount: AMOUNTS['b2c']['yearly'],
            formattedPrice: '$' + AMOUNTS['b2c']['yearly'],
            paddlePriceId: 'pri_b2c_yearly',
          },
        },
        features: [
          '👑 Central Omnichannel (Chatwoot) com até 4 Agentes',
          'Conexão Oficial WhatsApp + Conta Instagram',
          'Extrator de Leads de Grupos de WhatsApp',
          'Extrator de Seguidores de Perfis do Instagram',
          'Extrator de Negócios do Google Maps',
          'Disparos em massa com intervalos anti-bloqueio',
          'SDR de IA 24/7 (Responde, qualifica e agenda reuniões)',
          'Suporte Técnico Dedicado via WhatsApp e E-mail',
        ],
        cta: 'Começar Plano B2C',
        popular: false,
      },
      {
        id: 'b2b',
        name: 'Plano B2B (LinkedIn & Cold Email)',
        description:
          'Ideal para agências, consultores e empresas B2B que buscam agendar reuniões com tomadores de decisão corporativos.',
        pricing: {
          monthly: {
            amount: AMOUNTS['b2b']['monthly'],
            formattedPrice: '$' + AMOUNTS['b2b']['monthly'],
            paddlePriceId: 'pri_b2b_monthly',
          },
          yearly: {
            amount: AMOUNTS['b2b']['yearly'],
            formattedPrice: '$' + AMOUNTS['b2b']['yearly'],
            paddlePriceId: 'pri_b2b_yearly',
          },
        },
        features: [
          '👑 Até 4 Slots/Instâncias de Prospecção Dedicadas',
          'Subdomínio Exclusivo (ex: suaempresa.b2b.inhubflow.online)',
          'Integração com Sales Navigator & Apollo.io',
          'Extrator de Empresas no Google Maps',
          'Sequências automáticas (Conectar, Visitar, DMs)',
          'Aquecimento de E-mails (Warm-up) & 0% SPAM',
          'IA Redatora de Prospecção Hiperpersonalizada',
          'Painel de Métricas e Taxa de Conversão B2B',
        ],
        cta: 'Começar Plano B2B',
        popular: false,
      },
      {
        id: 'allinone',
        name: 'InHubFlow All-In-One (Suíte Completa)',
        description:
          'O poder total do InHubFlow: Combine prospecção corporativa B2B e fechamento em massa B2C em uma única assinatura.',
        pricing: {
          monthly: {
            amount: AMOUNTS['allInOne']['monthly'],
            formattedPrice: '$' + AMOUNTS['allInOne']['monthly'],
            paddlePriceId: 'pri_allinone_monthly',
          },
          yearly: {
            amount: AMOUNTS['allInOne']['yearly'],
            formattedPrice: '$' + AMOUNTS['allInOne']['yearly'],
            paddlePriceId: 'pri_allinone_yearly',
          },
        },
        features: [
          '👑 TUDO INCLUSO DO PLANO B2C E PLANO B2B',
          '4 Agentes Omnichannel B2C + 4 Slots B2B Dedicados',
          'Extração Ilimitada (Sales Nav, Apollo, Grupos WA, IG, Maps)',
          'SDRs de IA Ilimitados treinados com o seu negócio',
          'Autoagendamento no Google Calendar & Calendly',
          'Subdomínio Dedicado B2B + Acesso B2C Instantâneo',
          'Webhooks e Conexão com CRMs externos',
          'Suporte VIP Prioritário 1 a 1 e Onboarding guiado',
        ],
        cta: 'Obter Suíte Completa 🔥',
        popular: true,
      },
    ];
  }

  if (locale === 'en') {
    return [
      {
        id: 'b2c',
        name: 'B2C Plan (WhatsApp & Instagram)',
        description:
          'Designed for e-commerce, businesses, and service providers booking clients on WhatsApp and Instagram with AI.',
        pricing: {
          monthly: {
            amount: AMOUNTS['b2c']['monthly'],
            formattedPrice: '$' + AMOUNTS['b2c']['monthly'],
            paddlePriceId: 'pri_b2c_monthly',
          },
          yearly: {
            amount: AMOUNTS['b2c']['yearly'],
            formattedPrice: '$' + AMOUNTS['b2c']['yearly'],
            paddlePriceId: 'pri_b2c_yearly',
          },
        },
        features: [
          '👑 Omnichannel Inbox (Chatwoot) with up to 4 Teammates',
          'Official WhatsApp Connection + Instagram Direct',
          'WhatsApp Group Members Lead Extractor',
          'Instagram Profile Followers Scraper',
          'Google Maps Business Extractor',
          'Bulk broadcasts with smart anti-ban pacing',
          '24/7 AI SDR (Replies, qualifies, and books meetings)',
          'Priority WhatsApp & Email Support',
        ],
        cta: 'Start B2C Plan',
        popular: false,
      },
      {
        id: 'b2b',
        name: 'B2B Plan (LinkedIn & Cold Email)',
        description:
          'Perfect for agencies, SaaS companies, and B2B consultants looking to book calls with high-value decision-makers.',
        pricing: {
          monthly: {
            amount: AMOUNTS['b2b']['monthly'],
            formattedPrice: '$' + AMOUNTS['b2b']['monthly'],
            paddlePriceId: 'pri_b2b_monthly',
          },
          yearly: {
            amount: AMOUNTS['b2b']['yearly'],
            formattedPrice: '$' + AMOUNTS['b2b']['yearly'],
            paddlePriceId: 'pri_b2b_yearly',
          },
        },
        features: [
          '👑 Up to 4 Dedicated Outreach Slots / Workspaces',
          'Dedicated Subdomain (e.g., yourcompany.b2b.inhubflow.online)',
          'Sales Navigator & Apollo.io Integration',
          'Google Maps Business Extractor',
          'Automated Sequences (Connect, Visit, DM)',
          'Automated Mailbox Warm-up & 0% Spam',
          'Hyper-Personalized AI Copywriting',
          'B2B Analytics and Conversion Dashboard',
        ],
        cta: 'Start B2B Plan',
        popular: false,
      },
      {
        id: 'allinone',
        name: 'InHubFlow All-In-One (Complete Suite)',
        description:
          'The ultimate outbound & sales engine: Combine B2B LinkedIn/Email with B2C WhatsApp/Instagram AI closing.',
        pricing: {
          monthly: {
            amount: AMOUNTS['allInOne']['monthly'],
            formattedPrice: '$' + AMOUNTS['allInOne']['monthly'],
            paddlePriceId: 'pri_allinone_monthly',
          },
          yearly: {
            amount: AMOUNTS['allInOne']['yearly'],
            formattedPrice: '$' + AMOUNTS['allInOne']['yearly'],
            paddlePriceId: 'pri_allinone_yearly',
          },
        },
        features: [
          '👑 EVERYTHING IN B2C PLAN & B2B PLAN INCLUDED',
          '4 Omnichannel B2C Agents + 4 Dedicated B2B Slots',
          'Unlimited Extraction (Sales Nav, Apollo, Groups, IG, Maps)',
          'Unlimited AI SDRs trained on your business data',
          'Auto-booking on Google Calendar & Calendly',
          'Dedicated B2B Subdomain + Instant B2C Access',
          'Webhooks & External CRM Integrations',
          'Priority 1-on-1 VIP Support & Assisted Onboarding',
        ],
        cta: 'Get Complete Suite 🔥',
        popular: true,
      },
    ];
  }

  // Default Spanish
  return [
    {
      id: 'b2c',
      name: 'Plan B2C (WhatsApp & Instagram)',
      description:
        'Diseñado para negocios, e-commerce y servicios que captan y cierran clientes por WhatsApp e Instagram con IA.',
      pricing: {
        monthly: {
          amount: AMOUNTS['b2c']['monthly'],
          formattedPrice: '$' + AMOUNTS['b2c']['monthly'],
          paddlePriceId: 'pri_b2c_monthly',
        },
        yearly: {
          amount: AMOUNTS['b2c']['yearly'],
          formattedPrice: '$' + AMOUNTS['b2c']['yearly'],
          paddlePriceId: 'pri_b2c_yearly',
        },
      },
      features: [
        '👑 Central Omnicanal (Chatwoot) con hasta 4 Agentes',
        'Conexión Oficial WhatsApp + Cuenta Instagram',
        'Extractor de Leads de Grupos de WhatsApp',
        'Extractor de Seguidores de Perfiles de Instagram',
        'Extractor de Negocios de Google Maps',
        'Disparos masivos con intervalos anti-bloqueo',
        'SDR IA 24/7 (Responde, califica y agenda citas)',
        'Soporte Técnico Especializado por WhatsApp y Email',
      ],
      cta: 'Comenzar Plan B2C',
      popular: false,
    },
    {
      id: 'b2b',
      name: 'Plan B2B (LinkedIn & Cold Email)',
      description:
        'Ideal para agencias, empresas B2B y consultores que buscan agendar reuniones con tomadores de decisión.',
      pricing: {
        monthly: {
          amount: AMOUNTS['b2b']['monthly'],
          formattedPrice: '$' + AMOUNTS['b2b']['monthly'],
          paddlePriceId: 'pri_b2b_monthly',
        },
        yearly: {
          amount: AMOUNTS['b2b']['yearly'],
          formattedPrice: '$' + AMOUNTS['b2b']['yearly'],
          paddlePriceId: 'pri_b2b_yearly',
        },
      },
      features: [
        '👑 Hasta 4 Slots/Instancias de Prospección Dedicadas',
        'Subdominio Exclusivo (ej: tuempresa.b2b.inhubflow.online)',
        'Integración con Sales Navigator & Apollo.io',
        'Extractor de Empresas en Google Maps',
        'Secuencias automáticas (Conectar, Visitar, DMs)',
        'Calentamiento de Emails (Warm-up) & 0% SPAM',
        'IA Redactora de Prospección Hiperpersonalizada',
        'Panel de Analíticas y Tasa de Conversión B2B',
      ],
      cta: 'Comenzar Plan B2B',
      popular: false,
    },
    {
      id: 'allinone',
      name: 'InHubFlow All-In-One (Suite Completa)',
      description:
        'El poder total de InHubFlow: Combina prospección B2B y cierre de ventas B2C en una sola suscripción.',
      pricing: {
        monthly: {
          amount: AMOUNTS['allInOne']['monthly'],
          formattedPrice: '$' + AMOUNTS['allInOne']['monthly'],
          paddlePriceId: 'pri_allinone_monthly',
        },
        yearly: {
          amount: AMOUNTS['allInOne']['yearly'],
          formattedPrice: '$' + AMOUNTS['allInOne']['yearly'],
          paddlePriceId: 'pri_allinone_yearly',
        },
      },
      features: [
        '👑 TODO LO INCLUIDO EN PLAN B2C Y PLAN B2B',
        '4 Agentes Omnicanal B2C + 4 Slots B2B Dedicados',
        'Extracción Ilimitada (Sales Nav, Apollo, Grupos WA, IG, Maps)',
        'SDRs de IA Ilimitados entrenados con tu negocio',
        'Auto-agendamiento en Google Calendar & Calendly',
        'Subdominio Dedicado B2B + Acceso B2C Instantáneo',
        'Webhooks y Conexión con CRMs externos',
        'Soporte VIP Prioritario 1 a 1 y Onboarding guiado',
      ],
      cta: 'Obtener Suite Completa 🔥',
      popular: true,
    },
  ];
};

export type TBILLING_PLAN = ReturnType<typeof getBillingPlans>[number];

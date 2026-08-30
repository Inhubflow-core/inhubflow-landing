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

const AMOUNTS = {
  starter: {
    monthly: 100,
    yearly: 80,
    formattedMonthly: '$100',
    formattedYearly: '$80',
  },
  growth: {
    monthly: 180,
    yearly: 144,
    formattedMonthly: '$180',
    formattedYearly: '$144',
  },
  scale: {
    monthly: 260,
    yearly: 208,
    formattedMonthly: '$260',
    formattedYearly: '$208',
  },
};

export const getBillingPlans = (locale: Locale) => {
  if (locale === 'pt-BR') {
    return [
      {
        id: 'slots-5',
        name: 'Plano Starter (5 Contas)',
        description:
          'Ideal para pequenas equipes e consultores que buscam gerar reuniões constantes com tomadores de decisão.',
        pricing: {
          monthly: {
            amount: AMOUNTS.starter.monthly,
            formattedPrice: AMOUNTS.starter.formattedMonthly,
            paddlePriceId: 'pri_starter_monthly',
          },
          yearly: {
            amount: AMOUNTS.starter.yearly,
            formattedPrice: AMOUNTS.starter.formattedYearly,
            paddlePriceId: 'pri_starter_yearly',
          },
        },
        features: [
          '5 Contas do LinkedIn Conectadas (5 Slots Dedicados)',
          'Até 100 pedidos de conexão / dia (3.000 por mês)',
          'Até 100 mensagens e follow-ups / dia (3.000 por mês)',
          'Até 100 visitas de perfil / dia (3.000 por mês)',
          'Agente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo (ex: suaempresa-b2b.inhubflow.online)',
          'Extração Inteligente de Leads (Sales Navigator & Apollo)',
          'Cold Email Multicontas com Warm-up e 0% SPAM',
          'Proteção Anti-Bloqueio (Playwright Stealth)',
          'Sincronização com Google Calendar / Calendly',
        ],
        cta: 'Começar com 5 Contas',
        popular: false,
      },
      {
        id: 'slots-10',
        name: 'Plano Growth (10 Contas)',
        description:
          'Perfeito para equipes comerciais em expansão e agências de prospecção corporativa multicliente.',
        pricing: {
          monthly: {
            amount: AMOUNTS.growth.monthly,
            formattedPrice: AMOUNTS.growth.formattedMonthly,
            paddlePriceId: 'pri_growth_monthly',
          },
          yearly: {
            amount: AMOUNTS.growth.yearly,
            formattedPrice: AMOUNTS.growth.formattedYearly,
            paddlePriceId: 'pri_growth_yearly',
          },
        },
        features: [
          '10 Contas do LinkedIn Conectadas (10 Slots Dedicados)',
          'Até 200 pedidos de conexão / dia (6.000 por mês)',
          'Até 200 mensagens e follow-ups / dia (6.000 por mês)',
          'Até 200 visitas de perfil / dia (6.000 por mês)',
          'Agente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo (ex: suaempresa-b2b.inhubflow.online)',
          'Extração Inteligente de Leads (Sales Navigator & Apollo)',
          'Cold Email Multicontas com Warm-up e 0% SPAM',
          'Proteção Anti-Bloqueio (Playwright Stealth)',
          'Sincronização com Google Calendar / Calendly',
        ],
        cta: 'Começar com 10 Contas',
        popular: true,
      },
      {
        id: 'slots-20',
        name: 'Plano Scale (20 Contas)',
        description:
          'A potência máxima para grandes agências de Lead Gen e empresas B2B de alto volume de vendas.',
        pricing: {
          monthly: {
            amount: AMOUNTS.scale.monthly,
            formattedPrice: AMOUNTS.scale.formattedMonthly,
            paddlePriceId: 'pri_scale_monthly',
          },
          yearly: {
            amount: AMOUNTS.scale.yearly,
            formattedPrice: AMOUNTS.scale.formattedYearly,
            paddlePriceId: 'pri_scale_yearly',
          },
        },
        features: [
          '20 Contas do LinkedIn Conectadas (20 Slots Dedicados)',
          'Até 400 pedidos de conexão / dia (12.000 por mês)',
          'Até 400 mensagens e follow-ups / dia (12.000 por mês)',
          'Até 400 visitas de perfil / dia (12.000 por mês)',
          'Agente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo (ex: suaempresa-b2b.inhubflow.online)',
          'Extração Inteligente de Leads (Sales Navigator & Apollo)',
          'Cold Email Multicontas com Warm-up e 0% SPAM',
          'Proteção Anti-Bloqueio (Playwright Stealth)',
          'Sincronização com Google Calendar / Calendly',
        ],
        cta: 'Começar com 20 Contas',
        popular: false,
      },
    ];
  }

  if (locale === 'en') {
    return [
      {
        id: 'slots-5',
        name: 'Starter Plan (5 Accounts)',
        description:
          'Ideal for growing sales teams and B2B consultants booking daily calls with qualified buyers.',
        pricing: {
          monthly: {
            amount: AMOUNTS.starter.monthly,
            formattedPrice: AMOUNTS.starter.formattedMonthly,
            paddlePriceId: 'pri_starter_monthly',
          },
          yearly: {
            amount: AMOUNTS.starter.yearly,
            formattedPrice: AMOUNTS.starter.formattedYearly,
            paddlePriceId: 'pri_starter_yearly',
          },
        },
        features: [
          '5 Connected LinkedIn Accounts (5 Dedicated Slots)',
          'Up to 100 connection requests / day (3,000 / month)',
          'Up to 100 follow-up DMs / day (3,000 / month)',
          'Up to 100 profile visits / day (3,000 / month)',
          'Unlimited 24/7 AI SDR Agent (Replies & Booking)',
          'Dedicated Subdomain (e.g., yourcompany-b2b.inhubflow.online)',
          'Smart Lead Extraction (Sales Navigator & Apollo.io)',
          'Multi-Inbox Cold Email with Warm-up & 0% Spam',
          'Anti-Ban Stealth Guard (Playwright Stealth)',
          'Google Calendar & Calendly Sync',
        ],
        cta: 'Start with 5 Accounts',
        popular: false,
      },
      {
        id: 'slots-10',
        name: 'Growth Plan (10 Accounts)',
        description:
          'Engineered for fast-scaling sales organizations and multi-client outbound lead generation agencies.',
        pricing: {
          monthly: {
            amount: AMOUNTS.growth.monthly,
            formattedPrice: AMOUNTS.growth.formattedMonthly,
            paddlePriceId: 'pri_growth_monthly',
          },
          yearly: {
            amount: AMOUNTS.growth.yearly,
            formattedPrice: AMOUNTS.growth.formattedYearly,
            paddlePriceId: 'pri_growth_yearly',
          },
        },
        features: [
          '10 Connected LinkedIn Accounts (10 Dedicated Slots)',
          'Up to 200 connection requests / day (6,000 / month)',
          'Up to 200 follow-up DMs / day (6,000 / month)',
          'Up to 200 profile visits / day (6,000 / month)',
          'Unlimited 24/7 AI SDR Agent (Replies & Booking)',
          'Dedicated Subdomain (e.g., yourcompany-b2b.inhubflow.online)',
          'Smart Lead Extraction (Sales Navigator & Apollo.io)',
          'Multi-Inbox Cold Email with Warm-up & 0% Spam',
          'Anti-Ban Stealth Guard (Playwright Stealth)',
          'Google Calendar & Calendly Sync',
        ],
        cta: 'Start with 10 Accounts',
        popular: true,
      },
      {
        id: 'slots-20',
        name: 'Scale Plan (20 Accounts)',
        description:
          'Maximum outreach capacity for high-volume agencies and enterprise sales teams.',
        pricing: {
          monthly: {
            amount: AMOUNTS.scale.monthly,
            formattedPrice: AMOUNTS.scale.formattedMonthly,
            paddlePriceId: 'pri_scale_monthly',
          },
          yearly: {
            amount: AMOUNTS.scale.yearly,
            formattedPrice: AMOUNTS.scale.formattedYearly,
            paddlePriceId: 'pri_scale_yearly',
          },
        },
        features: [
          '20 Connected LinkedIn Accounts (20 Dedicated Slots)',
          'Up to 400 connection requests / day (12,000 / month)',
          'Up to 400 follow-up DMs / day (12,000 / month)',
          'Up to 400 profile visits / day (12,000 / month)',
          'Unlimited 24/7 AI SDR Agent (Replies & Booking)',
          'Dedicated Subdomain (e.g., yourcompany-b2b.inhubflow.online)',
          'Smart Lead Extraction (Sales Navigator & Apollo.io)',
          'Multi-Inbox Cold Email with Warm-up & 0% Spam',
          'Anti-Ban Stealth Guard (Playwright Stealth)',
          'Google Calendar & Calendly Sync',
        ],
        cta: 'Start with 20 Accounts',
        popular: false,
      },
    ];
  }

  // Default Spanish
  return [
    {
      id: 'slots-5',
      name: 'Plan Starter (5 Cuentas)',
      description:
        'Ideal para equipos comerciales y consultores que buscan agendar reuniones constantes con decisores B2B.',
      pricing: {
        monthly: {
          amount: AMOUNTS.starter.monthly,
          formattedPrice: AMOUNTS.starter.formattedMonthly,
          paddlePriceId: 'pri_starter_monthly',
        },
        yearly: {
          amount: AMOUNTS.starter.yearly,
          formattedPrice: AMOUNTS.starter.formattedYearly,
          paddlePriceId: 'pri_starter_yearly',
        },
      },
      features: [
        '5 Cuentas de LinkedIn Conectadas (5 Slots Dedicados)',
        'Hasta 100 solicitudes de conexión / día (3.000 al mes)',
        'Hasta 100 mensajes y seguimientos / día (3.000 al mes)',
        'Hasta 100 visitas a perfiles / día (3.000 al mes)',
        'Agente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo (ej: tuempresa-b2b.inhubflow.online)',
        'Extracción Inteligente de Leads (Sales Navigator & Apollo)',
        'Cold Email Multicuenta con Warm-up y 0% SPAM',
        'Protección Anti-Ban (Playwright Stealth)',
        'Sincronización con Google Calendar / Calendly',
      ],
      cta: 'Comenzar con 5 Cuentas',
      popular: false,
    },
    {
      id: 'slots-10',
      name: 'Plan Growth (10 Cuentas)',
      description:
        'Perfecto para agencias de prospección y equipos de ventas que necesitan escalar su pipeline rápidamente.',
      pricing: {
        monthly: {
          amount: AMOUNTS.growth.monthly,
          formattedPrice: AMOUNTS.growth.formattedMonthly,
          paddlePriceId: 'pri_growth_monthly',
        },
        yearly: {
          amount: AMOUNTS.growth.yearly,
          formattedPrice: AMOUNTS.growth.formattedYearly,
          paddlePriceId: 'pri_growth_yearly',
        },
      },
      features: [
        '10 Cuentas de LinkedIn Conectadas (10 Slots Dedicados)',
        'Hasta 200 solicitudes de conexión / día (6.000 al mes)',
        'Hasta 200 mensajes y seguimientos / día (6.000 al mes)',
        'Hasta 200 visitas a perfiles / día (6.000 al mes)',
        'Agente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo (ej: tuempresa-b2b.inhubflow.online)',
        'Extracción Inteligente de Leads (Sales Navigator & Apollo)',
        'Cold Email Multicuenta con Warm-up y 0% SPAM',
        'Protección Anti-Ban (Playwright Stealth)',
        'Sincronización con Google Calendar / Calendly',
      ],
      cta: 'Comenzar con 10 Cuentas',
      popular: true,
    },
    {
      id: 'slots-20',
      name: 'Plan Scale (20 Cuentas)',
      description:
        'La máxima capacidad de prospección para grandes agencias de captación y empresas B2B de alto volumen.',
      pricing: {
        monthly: {
          amount: AMOUNTS.scale.monthly,
          formattedPrice: AMOUNTS.scale.formattedMonthly,
          paddlePriceId: 'pri_scale_monthly',
        },
        yearly: {
          amount: AMOUNTS.scale.yearly,
          formattedPrice: AMOUNTS.scale.formattedYearly,
          paddlePriceId: 'pri_scale_yearly',
        },
      },
      features: [
        '20 Cuentas de LinkedIn Conectadas (20 Slots Dedicados)',
        'Hasta 400 solicitudes de conexión / día (12.000 al mes)',
        'Hasta 400 mensajes y seguimientos / día (12.000 al mes)',
        'Hasta 400 visitas a perfiles / día (12.000 al mes)',
        'Agente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo (ej: tuempresa-b2b.inhubflow.online)',
        'Extracción Inteligente de Leads (Sales Navigator & Apollo)',
        'Cold Email Multicuenta con Warm-up y 0% SPAM',
        'Protección Anti-Ban (Playwright Stealth)',
        'Sincronización con Google Calendar / Calendly',
      ],
      cta: 'Comenzar con 20 Cuentas',
      popular: false,
    },
  ];
};

export type TBILLING_PLAN = ReturnType<typeof getBillingPlans>[number];

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
    monthly: 37,
    yearly: 27,
    formattedMonthly: '$37',
    formattedYearly: '$27',
  },
  growth: {
    monthly: 67,
    yearly: 57,
    formattedMonthly: '$67',
    formattedYearly: '$57',
  },
  scale: {
    monthly: 97,
    yearly: 87,
    formattedMonthly: '$97',
    formattedYearly: '$87',
  },
};

export const getBillingPlans = (locale: Locale) => {
  if (locale === 'pt-BR') {
    return [
      {
        id: 'slots-1',
        name: 'Plano Starter (1 Conta)',
        description: 'Ideal para iniciar a prospecção B2B de forma automatizada e constante.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, paddlePriceId: 'pri_starter_monthly' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, paddlePriceId: 'pri_starter_yearly' },
        },
        features: [
          '1 Conta do LinkedIn Conectada (1 Slot Dedicado)',
          'Até 20 pedidos de conexão / dia* (600 por mês)',
          'Até 20 mensagens diretas / dia* (600 por mês)',
          '* Limites do LinkedIn por dia/conta',
          'Agente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo para a Empresa',
          'Extração Inteligente de Leads Nativo',
          'Extração Inteligente de Leads Integrado (Sales Navigator & Apollo)',
          'Cold Email Multicontas com Warm-up e 0% SPAM',
          'Proteção Anti-Bloqueio (Playwright Stealth)',
          'Sincronização com Google Calendar / Calendly',
        ],
        cta: 'Começar com 1 Conta',
        popular: false,
      },
      {
        id: 'slots-5',
        name: 'Plano Growth (5 Contas)',
        description: 'Perfeito para equipes comerciais que precisam escalar seu pipeline de vendas.',
        pricing: {
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, paddlePriceId: 'pri_growth_monthly' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, paddlePriceId: 'pri_growth_yearly' },
        },
        features: [
          '5 Contas do LinkedIn Conectadas (5 Slots Dedicados)',
          'Até 100 pedidos de conexão / dia* (3.000 por mês)',
          'Até 100 mensagens diretas / dia* (3.000 por mês)',
          '* Limites do LinkedIn por dia/conta',
          'Agente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo para a Empresa',
          'Extração Inteligente de Leads Nativo',
          'Extração Inteligente de Leads Integrado (Sales Navigator & Apollo)',
          'Cold Email Multicontas com Warm-up e 0% SPAM',
          'Proteção Anti-Bloqueio (Playwright Stealth)',
          'Sincronização com Google Calendar / Calendly',
        ],
        cta: 'Começar com 5 Contas',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Plano Scale (10 Contas)',
        description: 'A potência máxima para agências de prospecção e empresas B2B de alto volume.',
        pricing: {
          monthly: { amount: AMOUNTS.scale.monthly, formattedPrice: AMOUNTS.scale.formattedMonthly, paddlePriceId: 'pri_scale_monthly' },
          yearly: { amount: AMOUNTS.scale.yearly, formattedPrice: AMOUNTS.scale.formattedYearly, paddlePriceId: 'pri_scale_yearly' },
        },
        features: [
          '10 Contas do LinkedIn Conectadas (10 Slots Dedicados)',
          'Até 200 pedidos de conexão / dia* (6.000 por mês)',
          'Até 200 mensagens e follow-ups / dia* (6.000 por mês)',
          '* Limites do LinkedIn por dia/conta',
          'Agente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo para a Empresa',
          'Extração Inteligente de Leads Nativo',
          'Extração Inteligente de Leads Integrado (Sales Navigator & Apollo)',
          'Cold Email Multicontas com Warm-up e 0% SPAM',
          'Proteção Anti-Bloqueio (Playwright Stealth)',
          'Sincronização com Google Calendar / Calendly',
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
        description: 'Ideal to start automating your B2B outreach consistently.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, paddlePriceId: 'pri_starter_monthly' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, paddlePriceId: 'pri_starter_yearly' },
        },
        features: [
          '1 Connected LinkedIn Account (1 Dedicated Slot)',
          'Up to 20 connection requests / day* (600 / month)',
          'Up to 20 direct messages / day* (600 / month)',
          '* LinkedIn limits per day/account',
          'Unlimited 24/7 AI SDR Agent (Replies & Booking)',
          'Dedicated Subdomain for your Company',
          'Native Smart Lead Extraction',
          'Integrated Smart Lead Extraction (Sales Navigator & Apollo)',
          'Multi-Inbox Cold Email with Warm-up & 0% Spam',
          'Anti-Ban Stealth Guard (Playwright Stealth)',
          'Google Calendar & Calendly Sync',
        ],
        cta: 'Start with 1 Account',
        popular: false,
      },
      {
        id: 'slots-5',
        name: 'Growth Plan (5 Accounts)',
        description: 'Perfect for sales teams that need to scale their sales pipeline.',
        pricing: {
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, paddlePriceId: 'pri_growth_monthly' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, paddlePriceId: 'pri_growth_yearly' },
        },
        features: [
          '5 Connected LinkedIn Accounts (5 Dedicated Slots)',
          'Up to 100 connection requests / day* (3,000 / month)',
          'Up to 100 direct messages / day* (3,000 / month)',
          '* LinkedIn limits per day/account',
          'Unlimited 24/7 AI SDR Agent (Replies & Booking)',
          'Dedicated Subdomain for your Company',
          'Native Smart Lead Extraction',
          'Integrated Smart Lead Extraction (Sales Navigator & Apollo)',
          'Multi-Inbox Cold Email with Warm-up & 0% Spam',
          'Anti-Ban Stealth Guard (Playwright Stealth)',
          'Google Calendar & Calendly Sync',
        ],
        cta: 'Start with 5 Accounts',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Scale Plan (10 Accounts)',
        description: 'Maximum outreach capacity for agencies and high-volume B2B companies.',
        pricing: {
          monthly: { amount: AMOUNTS.scale.monthly, formattedPrice: AMOUNTS.scale.formattedMonthly, paddlePriceId: 'pri_scale_monthly' },
          yearly: { amount: AMOUNTS.scale.yearly, formattedPrice: AMOUNTS.scale.formattedYearly, paddlePriceId: 'pri_scale_yearly' },
        },
        features: [
          '10 Connected LinkedIn Accounts (10 Dedicated Slots)',
          'Up to 200 connection requests / day* (6,000 / month)',
          'Up to 200 follow-up DMs / day* (6,000 / month)',
          '* LinkedIn limits per day/account',
          'Unlimited 24/7 AI SDR Agent (Replies & Booking)',
          'Dedicated Subdomain for your Company',
          'Native Smart Lead Extraction',
          'Integrated Smart Lead Extraction (Sales Navigator & Apollo)',
          'Multi-Inbox Cold Email with Warm-up & 0% Spam',
          'Anti-Ban Stealth Guard (Playwright Stealth)',
          'Google Calendar & Calendly Sync',
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
      description: 'Ideal para comenzar a automatizar tu prospección B2B de forma constante.',
      pricing: {
        monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, paddlePriceId: 'pri_starter_monthly' },
        yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, paddlePriceId: 'pri_starter_yearly' },
      },
      features: [
        '1 Cuenta de LinkedIn Conectada (1 Slot Dedicado)',
        'Hasta 20 solicitudes de conexión / día* (600 al mes)',
        'Hasta 20 mensajes en el direct / día* (600 al mes)',
        '* Limites de Linkedin por dia/cuenta',
        'Agente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo para la Empresa',
        'Extracción Inteligente de Leads Nativo',
        'Extracción Inteligente de Leads Integrado (Sales Navigator & Apollo)',
        'Cold Email Multicuenta con Warm-up y 0% SPAM',
        'Protección Anti-Ban (Playwright Stealth)',
        'Sincronización con Google Calendar/Calendly',
      ],
      cta: 'Comenzar con 1 Cuenta',
      popular: false,
    },
    {
      id: 'slots-5',
      name: 'Plan Growth (5 Cuentas)',
      description: 'Perfecto para equipos de ventas que necesitan escalar su pipeline rápidamente.',
      pricing: {
        monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, paddlePriceId: 'pri_growth_monthly' },
        yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, paddlePriceId: 'pri_growth_yearly' },
      },
      features: [
        '5 Cuentas de LinkedIn Conectadas (5 Slots Dedicados)',
        'Hasta 100 solicitudes de conexión / día* (3.000 al mes)',
        'Hasta 100 mensajes en el direct / día* (3.000 al mes)',
        '* Limites de Linkedin por dia/cuenta',
        'Agente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo para la Empresa',
        'Extracción Inteligente de Leads Nativo',
        'Extracción Inteligente de Leads Integrado (Sales Navigator & Apollo)',
        'Cold Email Multicuenta con Warm-up y 0% SPAM',
        'Protección Anti-Ban (Playwright Stealth)',
        'Sincronización con Google Calendar/Calendly',
      ],
      cta: 'Comenzar con 5 Cuentas',
      popular: true,
    },
    {
      id: 'slots-10',
      name: 'Plan Scale (10 Cuentas)',
      description: 'La máxima capacidad de prospección para agencias y empresas B2B de alto volumen.',
      pricing: {
        monthly: { amount: AMOUNTS.scale.monthly, formattedPrice: AMOUNTS.scale.formattedMonthly, paddlePriceId: 'pri_scale_monthly' },
        yearly: { amount: AMOUNTS.scale.yearly, formattedPrice: AMOUNTS.scale.formattedYearly, paddlePriceId: 'pri_scale_yearly' },
      },
      features: [
        '10 Cuentas de LinkedIn Conectadas (10 Slots Dedicados)',
        'Hasta 200 solicitudes de conexión / día* (6.000 al mes)',
        'Hasta 200 mensajes y seguimientos / día* (6.000 al mes)',
        '* Limites de Linkedin por dia/cuenta',
        'Agente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo para la Empresa',
        'Extracción Inteligente de Leads Nativo',
        'Extracción Inteligente de Leads Integrado (Sales Navigator & Apollo)',
        'Cold Email Multicuenta con Warm-up y 0% SPAM',
        'Protección Anti-Ban (Playwright Stealth)',
        'Sincronización con Google Calendar/Calendly',
      ],
      cta: 'Comenzar con 10 Cuentas',
      popular: false,
    },
  ];
};

export type TBILLING_PLAN = ReturnType<typeof getBillingPlans>[number];

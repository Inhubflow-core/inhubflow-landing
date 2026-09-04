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
      scale: {
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
    scale: {
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
        description: 'Ideal para gerenciar e automatizar o relacionamento comercial B2B.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        },
        features: [
          '1 Conta do LinkedIn Conectada (1 Slot Dedicado)',
          'Até 20 interações comerciais / dia* (600 por mês)',
          'Até 20 acompanhamentos automatizados / dia (600 por mês)',
          'Assistente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo para a Empresa',
          'Gestão Inteligente de Contatos e Clientes',
          'Importação e Sincronização B2B (CSV, CRM e Contatos)',
          'Sequências de E-mail Comercial com Alta Entregabilidade',
          'Segurança Empresarial & Ritmos Humanizados',
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
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        },
        features: [
          '5 Contas do LinkedIn Conectadas (5 Slots Dedicados)',
          'Até 100 interações comerciais / dia* (3.000 por mês)',
          'Até 100 acompanhamentos automatizados / dia (3.000 por mês)',
          'Assistente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo para a Empresa',
          'Gestão Inteligente de Contatos e Clientes',
          'Importação e Sincronização B2B (CSV, CRM e Contatos)',
          'Sequências de E-mail Comercial com Alta Entregabilidade',
          'Segurança Empresarial & Ritmos Humanizados',
          'Sincronização com Google Calendar / Calendly',
        ],
        cta: 'Começar com 5 Contas',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Plano Business (10 Contas)',
        description: 'A potência máxima para equipes comerciais e empresas B2B de alto volume.',
        pricing: {
          monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
          yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        },
        features: [
          '10 Contas do LinkedIn Conectadas (10 Slots Dedicados)',
          'Até 200 interações comerciais / dia* (6.000 por mês)',
          'Até 200 acompanhamentos automatizados / dia (6.000 por mês)',
          'Assistente SDR de IA 24/7 Ilimitado (Respostas e Agendamentos)',
          'Subdomínio Exclusivo para a Empresa',
          'Gestão Inteligente de Contatos e Clientes',
          'Importação e Sincronização B2B (CSV, CRM e Contatos)',
          'Sequências de E-mail Comercial com Alta Entregabilidade',
          'Segurança Empresarial & Ritmos Humanizados',
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
        description: 'Ideal to start managing and automating your B2B sales pipeline.',
        pricing: {
          monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
          yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        },
        features: [
          '1 Connected LinkedIn Account (1 Dedicated Slot)',
          'Up to 20 commercial interactions / day* (600 / month)',
          'Up to 20 automated follow-ups / day (600 / month)',
          'Unlimited 24/7 AI SDR Assistant (Replies & Booking)',
          'Dedicated Subdomain for your Company',
          'Smart B2B Contact Management',
          'B2B Contact Import & Sync (CSV, CRM & Integrations)',
          'Multi-Inbox Sales Email Workflows & High Deliverability',
          'Enterprise Compliance & Natural Pacing Guard',
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
          monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
          yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        },
        features: [
          '5 Connected LinkedIn Accounts (5 Dedicated Slots)',
          'Up to 100 commercial interactions / day* (3,000 / month)',
          'Up to 100 automated follow-ups / day (3,000 / month)',
          'Unlimited 24/7 AI SDR Assistant (Replies & Booking)',
          'Dedicated Subdomain for your Company',
          'Smart B2B Contact Management',
          'B2B Contact Import & Sync (CSV, CRM & Integrations)',
          'Multi-Inbox Sales Email Workflows & High Deliverability',
          'Enterprise Compliance & Natural Pacing Guard',
          'Google Calendar & Calendly Sync',
        ],
        cta: 'Start with 5 Accounts',
        popular: true,
      },
      {
        id: 'slots-10',
        name: 'Business Plan (10 Accounts)',
        description: 'Maximum capacity for enterprise sales teams and high-volume B2B companies.',
        pricing: {
          monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
          yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        },
        features: [
          '10 Connected LinkedIn Accounts (10 Dedicated Slots)',
          'Up to 200 commercial interactions / day* (6,000 / month)',
          'Up to 200 automated follow-ups / day (6,000 / month)',
          'Unlimited 24/7 AI SDR Assistant (Replies & Booking)',
          'Dedicated Subdomain for your Company',
          'Smart B2B Contact Management',
          'B2B Contact Import & Sync (CSV, CRM & Integrations)',
          'Multi-Inbox Sales Email Workflows & High Deliverability',
          'Enterprise Compliance & Natural Pacing Guard',
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
      description: 'Ideal para comenzar a gestionar y automatizar tus relaciones comerciales B2B.',
      pricing: {
        monthly: { amount: AMOUNTS.starter.monthly, formattedPrice: AMOUNTS.starter.formattedMonthly, originalPrice: AMOUNTS.starter.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
        yearly: { amount: AMOUNTS.starter.yearly, formattedPrice: AMOUNTS.starter.formattedYearly, originalPrice: AMOUNTS.starter.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.starter.url, lemonVariantId: LEMON_CHECKOUTS.starter.variantId, paddlePriceId: 'pri_01m1h9gkcyvsdsknad7nyz7pv1' },
      },
      features: [
        '1 Cuenta de LinkedIn Conectada (1 Slot Dedicado)',
        'Hasta 20 interacciones comerciales / día* (600 al mes)',
        'Hasta 20 seguimientos automatizados / día (600 al mes)',
        'Asistente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo para la Empresa',
        'Gestión Inteligente de Contactos y Cuentas',
        'Importación y Sincronización B2B (CSV, CRM & Contactos)',
        'Secuencias de Email Comercial Multicuenta & Alta Entregabilidad',
        'Seguridad Empresarial & Ritmos Humanizados',
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
        monthly: { amount: AMOUNTS.growth.monthly, formattedPrice: AMOUNTS.growth.formattedMonthly, originalPrice: AMOUNTS.growth.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
        yearly: { amount: AMOUNTS.growth.yearly, formattedPrice: AMOUNTS.growth.formattedYearly, originalPrice: AMOUNTS.growth.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.growth.url, lemonVariantId: LEMON_CHECKOUTS.growth.variantId, paddlePriceId: 'pri_01m1h9my3vbqcsp9t2hgqqkkxv' },
      },
      features: [
        '5 Cuentas de LinkedIn Conectadas (5 Slots Dedicados)',
        'Hasta 100 interacciones comerciales / día* (3.000 al mes)',
        'Hasta 100 seguimientos automatizados / día (3.000 al mes)',
        'Asistente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo para la Empresa',
        'Gestión Inteligente de Contactos y Cuentas',
        'Importación y Sincronización B2B (CSV, CRM & Contactos)',
        'Secuencias de Email Comercial Multicuenta & Alta Entregabilidad',
        'Seguridad Empresarial & Ritmos Humanizados',
        'Sincronización con Google Calendar/Calendly',
      ],
      cta: 'Comenzar con 5 Cuentas',
      popular: true,
    },
    {
      id: 'slots-10',
      name: 'Plan Business (10 Cuentas)',
      description: 'La máxima capacidad para equipos comerciales y empresas B2B de alto volumen.',
      pricing: {
        monthly: { amount: AMOUNTS.business.monthly, formattedPrice: AMOUNTS.business.formattedMonthly, originalPrice: AMOUNTS.business.originalMonthly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
        yearly: { amount: AMOUNTS.business.yearly, formattedPrice: AMOUNTS.business.formattedYearly, originalPrice: AMOUNTS.business.originalYearly, lemonCheckoutUrl: LEMON_CHECKOUTS.business.url, lemonVariantId: LEMON_CHECKOUTS.business.variantId, paddlePriceId: 'pri_01m1h9sy759c7p0kg76309we3h' },
      },
      features: [
        '10 Cuentas de LinkedIn Conectadas (10 Slots Dedicados)',
        'Hasta 200 interacciones comerciales / día* (6.000 al mes)',
        'Hasta 200 seguimientos automatizados / día (6.000 al mes)',
        'Asistente SDR de IA 24/7 Ilimitado (Respuestas y Agendamiento)',
        'Subdominio Exclusivo para la Empresa',
        'Gestión Inteligente de Contactos y Cuentas',
        'Importación y Sincronización B2B (CSV, CRM & Contactos)',
        'Secuencias de Email Comercial Multicuenta & Alta Entregabilidad',
        'Seguridad Empresarial & Ritmos Humanizados',
        'Sincronización con Google Calendar/Calendly',
      ],
      cta: 'Comenzar con 10 Cuentas',
      popular: false,
    },
  ];
};

export type TBILLING_PLAN = ReturnType<typeof getBillingPlans>[number];

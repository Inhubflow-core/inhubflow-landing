export const BILLING_PERIODS = [
  {
    label: 'Mensual',
    key: 'monthly',
    saving: null,
  },
  {
    label: 'Anual',
    key: 'yearly',
    saving: '20% OFF',
  },
] as const;

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

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: 'Plan B2C (WhatsApp & Instagram)',
    description:
      'Diseñado para negocios, e-commerce y servicios que captan clientes finales por WhatsApp e Instagram con IA.',
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
      '1 Número WhatsApp Oficial + 1 Cuenta Instagram',
      'Extractor de Leads de Grupos de WhatsApp',
      'Extractor de Seguidores de Perfiles de Instagram',
      'Extractor de Negocios de Google Maps',
      'Disparos masivos con intervalos anti-bloqueo',
      'SDR IA 24/7 (Responde, califica y agenda citas)',
      'Bandeja Unificada Omnicanal (Chatwoot) con 2 Agentes',
      'Soporte por WhatsApp y Email',
    ],
    cta: 'Comenzar Plan B2C',
    popular: false,
  },
  {
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
      '1 Cuenta de LinkedIn + 2 Cuentas Cold Email',
      'Integración con Sales Navigator & Apollo.io',
      'Extractor de Empresas en Google Maps',
      'Secuencias automáticas (Conectar, Visitar, DMs)',
      'Calentamiento de Emails (Warm-up) & 0% SPAM',
      'IA Redactora de Prospección Hiperpersonalizada',
      'Panel de Analíticas y Tasa de Conversión B2B',
      'Soporte Técnico Especializado',
    ],
    cta: 'Comenzar Plan B2B',
    popular: false,
  },
  {
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
      '3 Cuentas LinkedIn + 3 Números WhatsApp + 5 Emails',
      'Extracción Ilimitada (Sales Nav, Apollo, Grupos WA, IG, Maps)',
      'SDRs de IA Ilimitados entrenados con tu negocio',
      'Auto-agendamiento en Google Calendar & Calendly',
      'Bandeja Unificada con Agentes Ilimitados',
      'Webhooks y Conexión con CRMs externos',
      'Soporte VIP Prioritario 1 a 1 y Onboarding guiado',
    ],
    cta: 'Obtener Suite Completa 🔥',
    popular: true,
  },
];

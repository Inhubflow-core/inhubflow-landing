'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export type Locale = 'es' | 'pt-BR' | 'en';

export interface LocaleOption {
  code: Locale;
  label: string;
  badge: string;
  flag: string;
}

export const SUPPORTED_LOCALES: LocaleOption[] = [
  { code: 'pt-BR', label: 'Português', badge: 'BR', flag: '🇧🇷' },
  { code: 'es', label: 'Español', badge: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'English', badge: 'US', flag: '🇺🇸' },
];

const dictionaries = {
  es: {
    nav: {
      platform: 'Plataforma',
      features: 'Funcionalidades',
      benefits: 'Ventajas',
      testimonials: 'Casos de Éxito',
      pricing: 'Precios',
      faq: 'FAQ',
      clientAccess: 'Acceso Clientes',
      startNow: 'Comenzar Ahora ⚡',
    },
    hero: {
      subheading: 'AI-POWERED LINKEDIN & B2B OUTREACH ENGINE',
      title1: 'Atrae Clientes B2B y Llena tu Agenda en Piloto Automático con',
      titleHighlight: 'Agentes SDR de IA para LinkedIn',
      description:
        'Extrae tomadores de decisión de LinkedIn Sales Navigator, automatiza visitas y solicitudes de conexión con notas hiperpersonalizadas con IA, y agenda videollamadas comerciales 24/7 sin riesgo de bloqueo.',
      ctaPrimary: 'Comenzar Prueba Gratis ⚡',
      ctaSecondary: 'Ver Cómo Funciona ➔',
      guarantee: 'Sin tarjeta obligatoria para demo • Compatible con LinkedIn Free, Premium y Sales Nav • Configuración en 2 minutos',
      badge1: 'Visitar Perfil',
      badge2: 'Solicitar Conexión',
      badge3: 'Enviar Mensaje',
      badge4: 'Cold E-mail',
      chatSender: 'Director Comercial (LinkedIn)',
      chatTime: '10:42 AM',
      chatMsg1: 'Hola, vi tu solicitud de conexión. ¿Cómo ayuda su sistema a automatizar la prospección B2B en LinkedIn?',
      chatAgent: 'InHubFlow SDR IA',
      chatMsg2: '¡Hola Marcos! Nuestro sistema extrae decisores en LinkedIn y ejecuta secuencias personalizadas con IA. Cuando un prospecto responde, nuestro SDR califica el interés y agenda la llamada en tu Calendly sin intervención manual.',
      chatMsg3: '¡Excelente! Nos interesa para nuestro equipo comercial. ¿Tienen demo disponible mañana?',
    },
    features: {
      badge: 'Capacidades de Alto Rendimiento',
      title: 'Todo lo que necesitas para dominar la prospección B2B en LinkedIn',
      subtitle:
        'Reemplaza 5 herramientas desconectadas. InHubFlow unifica la extracción de prospectos, secuencias de LinkedIn, Cold Email con warm-up y Agentes SDR de IA en un solo lugar.',
      items: [
        {
          title: 'Extracción Inteligente de Leads B2B',
          description:
            'Encuentra y extrae cientos de tomadores de decisión directamente desde LinkedIn y Sales Navigator, con emails corporativos verificados y enriquecimiento de datos.',
          icon: '🎯',
        },
        {
          title: 'Secuencias Automatizadas en LinkedIn',
          description:
            'Automatiza visitas de perfil, solicitudes de conexión con notas personalizadas con IA y secuencias de DMs inteligentes que multiplican tu tasa de respuesta.',
          icon: '💼',
        },
        {
          title: 'Cold Email Multicuenta & Warm-up',
          description:
            'Secuencias de correo frío multietapa con calentamiento automático de bandejas integrado, máxima entregabilidad y 0% en la carpeta de SPAM.',
          icon: '✉️',
        },
        {
          title: 'Protección Anti-Ban (Playwright Stealth)',
          description:
            'Emulación avanzada de comportamiento humano, pausas aleatorias y límites diarios de seguridad para mantener tus cuentas de LinkedIn 100% protegidas.',
          icon: '🛡️',
        },
        {
          title: 'Agentes SDR de IA 24/7',
          description:
            'Inteligencia Artificial conversacional entrenada con tu base de conocimiento que responde en segundos, resuelve objeciones y agenda citas en Calendly.',
          icon: '🤖',
        },
        {
          title: 'Bandeja Unificada & Sincronización CRM',
          description:
            'Gestiona todas las respuestas y conversaciones en una sola interfaz centralizada, con auditoría completa de IA y sincronización de calendario.',
          icon: '💬',
        },
      ],
    },
    benefits: {
      badge: 'Ventajas Competitivas',
      title: 'Diseñado para generar reuniones y cerrar clientes corporativos',
      subtitle:
        'Multiplica el pipeline de ventas de tu empresa sin contratar un costoso equipo de prospección manual.',
      card1Title: 'Prospección B2B de Alta Precisión',
      card1Desc:
        'Segmenta y contacta a CEOs, Directores y decisores clave según su cargo exacto, industria, tamaño de empresa y ubicación geográfica.',
      card1Tag1: 'Filtros Avanzados B2B',
      card1Tag2: '100% Verificado',
      card2Title: 'Secuencias Multicanal Inteligentes',
      card2Desc:
        'Combina visitas de LinkedIn, notas de conexión y cold emails condicionados que se detienen automáticamente al recibir una respuesta.',
      card2Tag1: 'Protección Anti-Bloqueo',
      card2Tag2: 'Alta Entregabilidad',
      card3Title: 'Agentes SDR de IA para Cierre 24/7',
      card3Desc:
        'Tus prospectos no tienen que esperar. La IA responde en segundos en LinkedIn, resuelve dudas comerciales complejas y agenda la cita en tu calendario.',
      card3Tag1: 'Sincronización Calendly / Google',
      card3Tag2: 'Respuesta en < 3 seg',
    },
    pricing: {
      badge: 'Precios Transparentes & Facturación Global (Paddle)',
      title: 'Elige el plan perfecto para escalar tus ventas B2B',
      subtitle:
        'Sin contratos forzosos. Cancela en cualquier momento. Pagos procesados de forma 100% segura con facturación fiscal internacional vía Paddle.',
      monthly: 'Facturación Mensual',
      annual: 'Facturación Anual',
      save20: 'Ahorra 20%',
      ctaB2B: 'Comenzar con B2B Outreach',
      ctaB2C: 'Comenzar Plan Pro',
      ctaAllInOne: 'Obtener Suite Completa ⚡',
      popularBadge: 'MÁS POPULAR',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de comenzar con InHubFlow.',
      items: [
        {
          question: '¿Qué es InHubFlow y cómo acelera mis ventas B2B?',
          answer:
            'InHubFlow es una plataforma integral de prospección B2B y automatización de LinkedIn con Inteligencia Artificial. Te permite extraer prospectos calificados, ejecutar secuencias multicanal de LinkedIn y Cold Email, y dejar que Agentes SDR de IA califiquen y agenden reuniones de venta 24/7 en tu calendario.',
        },
        {
          question: '¿Es 100% seguro para mis cuentas de LinkedIn?',
          answer:
            'Sí, 100% seguro. InHubFlow cuenta con tecnología avanzada de emulación humana basada en Playwright Stealth, pausas aleatorias y límites diarios inteligentes que respetan las políticas de uso de LinkedIn para garantizar la total seguridad y reputación de tus cuentas.',
        },
        {
          question: '¿Cómo funciona el Agente SDR con Inteligencia Artificial?',
          answer:
            'El Agente SDR se entrena con la información de tu empresa, servicios y preguntas frecuentes. Cuando un prospecto responde a tu mensaje en LinkedIn, la IA analiza la intención, redacta respuestas contextuales con lenguaje natural, supera objeciones y envía tu enlace de Calendly o Google Calendar para agendar la videollamada.',
        },
        {
          question: '¿Necesito contratar Sales Navigator u otras herramientas externas?',
          answer:
            'No es obligatorio. InHubFlow cuenta con su propio buscador de prospectos (Lead Finder) integrado para encontrar decisores por cargo, ciudad y país. Si ya dispones de Sales Navigator o Apollo, puedes importar listas y URLs directamente.',
        },
        {
          question: '¿Cómo se procesan los pagos y suscripciones?',
          answer:
            'Todos los pagos se procesan de forma segura a través de Paddle (Merchant of Record), compatible con tarjetas de crédito/débito internacionales y PayPal. Paddle genera facturas fiscales válidas para empresas en todo el mundo y puedes cancelar o cambiar de plan en cualquier momento.',
        },
        {
          question: '¿Cómo recibo mis accesos tras suscribirme?',
          answer:
            'Inmediatamente después de completar el pago en Paddle, nuestro sistema crea automáticamente tus credenciales de acceso para la plataforma de Outreach B2B (b2b.inhubflow.online) y te envía un correo de bienvenida con tu enlace directo de ingreso.',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow es la plataforma líder de prospección B2B y automatización de LinkedIn con Agentes SDR de Inteligencia Artificial. Escala tu adquisición de clientes y llena tu agenda de ventas.',
      status: 'Sistemas operando al 100% de disponibilidad',
      col1Title: 'Plataforma',
      col1Item1: 'LinkedIn Outreach',
      col1Item2: 'Lead Finder B2B',
      col1Item3: 'Agente SDR de IA',
      col1Item4: 'Planes & Precios',
      col2Title: 'Soluciones',
      col2Item1: 'Cold Email & Warm-up',
      col2Item2: 'Protección Anti-Ban',
      col2Item3: 'Sincronización de Calendario',
      col2Item4: 'Enriquecimiento de Emails',
      col3Title: 'Clientes',
      col3Item1: 'Acceso a la Plataforma ➔',
      col3Item2: 'Casos de Éxito',
      col3Item3: 'Preguntas Frecuentes',
      col4Title: 'Comienza Hoy',
      col4Desc: 'Escala la adquisición de clientes corporativos con prospección inteligente en LinkedIn.',
      col4Cta: 'Ver Planes & Comenzar ⚡',
      copyright: '© 2026 InHubFlow | AI-Powered B2B Outreach Engine - All Rights Reserved.',
    },
  },

  'pt-BR': {
    nav: {
      platform: 'Plataforma',
      features: 'Recursos',
      benefits: 'Vantagens',
      testimonials: 'Casos de Sucesso',
      pricing: 'Preços',
      faq: 'FAQ',
      clientAccess: 'Área do Cliente',
      startNow: 'Começar Agora ⚡',
    },
    hero: {
      subheading: 'AI-POWERED LINKEDIN & B2B OUTREACH ENGINE',
      title1: 'Atraia Clientes B2B e Lote sua Agenda no Piloto Automático com',
      titleHighlight: 'Agentes SDR de IA para LinkedIn',
      description:
        'Extraia tomadores de decisão do LinkedIn Sales Navigator, automatize visitas e pedidos de conexão com notas hiperpersonalizadas por IA, e agende reuniões comerciais 24/7 sem risco de bloqueio.',
      ctaPrimary: 'Começar Teste Grátis ⚡',
      ctaSecondary: 'Ver Como Funciona ➔',
      guarantee: 'Sem cartão obrigatório para demo • Compatível com LinkedIn Free, Premium e Sales Nav • Configuração em 2 minutos',
      badge1: 'Visitar Perfil',
      badge2: 'Solicitar Conexão',
      badge3: 'Enviar Mensagem',
      badge4: 'Cold E-mail',
      chatSender: 'Diretor Comercial (LinkedIn)',
      chatTime: '10:42',
      chatMsg1: 'Olá, vi seu pedido de conexão. Como a plataforma ajuda a automatizar a prospecção B2B no LinkedIn?',
      chatAgent: 'InHubFlow SDR IA',
      chatMsg2: 'Olá Marcos! Nosso sistema extrai decisores no LinkedIn e executa sequências personalizadas por IA. Quando um prospect responde, nosso SDR qualifica o interesse e agenda no seu Calendly sem esforço manual.',
      chatMsg3: 'Excelente! Temos muito interesse para nossa equipe comercial. Vocês têm demo disponível amanhã?',
    },
    features: {
      badge: 'Capacidades de Alto Desempenho',
      title: 'Tudo o que você precisa para dominar a prospecção B2B no LinkedIn',
      subtitle:
        'Substitua 5 ferramentas desconectadas. O InHubFlow unifica extração de leads, sequências no LinkedIn, Cold Email com warm-up e Agentes SDR de IA em um só lugar.',
      items: [
        {
          title: 'Extração Inteligente de Leads B2B',
          description:
            'Encontre e extraia centenas de tomadores de decisão diretamente do LinkedIn e Sales Navigator, com e-mails corporativos verificados e enriquecimento de dados.',
          icon: '🎯',
        },
        {
          title: 'Automação de Sequências no LinkedIn',
          description:
            'Automatize visitas de perfil, solicitações de conexão com notas personalizadas por IA e sequências de DMs inteligentes que multiplicam suas respostas.',
          icon: '💼',
        },
        {
          title: 'Cold Email Multicontas & Warm-up',
          description:
            'Sequências de e-mail frio em várias etapas com aquecimento automático de caixas de entrada integrado, máxima entregabilidade e 0% na caixa de SPAM.',
          icon: '✉️',
        },
        {
          title: 'Proteção Anti-Bloqueio (Playwright Stealth)',
          description:
            'Emulação avançada de comportamento humano, pausas aleatórias e limites diários de segurança para manter suas contas do LinkedIn 100% protegidas.',
          icon: '🛡️',
        },
        {
          title: 'Agentes SDR de IA 24/7',
          description:
            'Inteligência Artificial conversacional treinada com sua base de conhecimento que responde em segundos, resolve objeções e agenda reuniões no Calendly.',
          icon: '🤖',
        },
        {
          title: 'Caixa Unificada & Sincronização CRM',
          description:
            'Gerencie todas as respostas e conversas em uma única interface centralizada, com auditoria completa de IA e sincronização de calendário.',
          icon: '💬',
        },
      ],
    },
    benefits: {
      badge: 'Vantagens Competitivas',
      title: 'Projetado para gerar reuniões e fechar clientes corporativos',
      subtitle:
        'Multiplique o pipeline de vendas da sua empresa sem precisar contratar uma equipe cara de prospecção manual.',
      card1Title: 'Prospecção B2B de Alta Precisão',
      card1Desc:
        'Segmente e contate CEOs, Diretores e decisores estratégicos conforme cargo exato, setor, tamanho da empresa e localização geográfica.',
      card1Tag1: 'Filtros Avançados B2B',
      card1Tag2: '100% Verificado',
      card2Title: 'Sequências Multicanal Inteligentes',
      card2Desc:
        'Combine visitas no LinkedIn, notas de conexão e cold emails condicionados que pausam automaticamente ao receber uma resposta.',
      card2Tag1: 'Proteção Anti-Bloqueio',
      card2Tag2: 'Alta Entregabilidade',
      card3Title: 'Agentes SDR de IA para Fechamento 24/7',
      card3Desc:
        'Seus leads não precisam esperar. A IA responde em segundos no LinkedIn, soluciona dúvidas complexas e agenda a reunião no seu calendário.',
      card3Tag1: 'Sincronização Calendly / Google',
      card3Tag2: 'Resposta em < 3 seg',
    },
    pricing: {
      badge: 'Preços Transparentes & Faturamento Global (Paddle)',
      title: 'Escolha o plano perfeito para escalar suas vendas B2B',
      subtitle:
        'Sem contratos de fidelidade. Cancele a qualquer momento. Pagamentos 100% seguros com nota fiscal internacional via Paddle.',
      monthly: 'Faturamento Mensal',
      annual: 'Faturamento Anual',
      save20: 'Economize 20%',
      ctaB2B: 'Começar com B2B Outreach',
      ctaB2C: 'Começar Plano Pro',
      ctaAllInOne: 'Obter Suíte Completa ⚡',
      popularBadge: 'MAIS POPULAR',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber antes de começar com o InHubFlow.',
      items: [
        {
          question: 'O que é o InHubFlow e como ele acelera minhas vendas B2B?',
          answer:
            'O InHubFlow é uma plataforma completa de prospecção B2B e automação no LinkedIn com Inteligência Artificial. Permite extrair leads qualificados, executar sequências multicanal no LinkedIn e Cold Email, e deixar Agentes SDR de IA qualificando e agendando reuniões 24/7.',
        },
        {
          question: 'É 100% seguro para minhas contas do LinkedIn?',
          answer:
            'Sim, 100% seguro. O InHubFlow conta com tecnologia avançada de emulação humana baseada em Playwright Stealth, pausas aleatórias e limites diários inteligentes que respeitam as regras do LinkedIn.',
        },
        {
          question: 'Como funciona o Agente SDR com Inteligência Artificial?',
          answer:
            'O SDR de IA é treinado com as informações da sua empresa, serviços e perguntas frequentes. Quando um prospect responde no LinkedIn, a IA analisa a intenção, redige respostas naturais, supera objeções e envia seu link do Calendly ou Google Calendar.',
        },
        {
          question: 'Preciso assinar o Sales Navigator ou ferramentas externas?',
          answer:
            'Não é obrigatório. O InHubFlow possui seu próprio buscador de leads (Lead Finder) integrado para encontrar decisores por cargo, cidade e país. Caso já possua o Sales Navigator ou Apollo, você pode importar URLs diretamente.',
        },
        {
          question: 'Como são processados os pagamentos?',
          answer:
            'Todos os pagamentos são processados com segurança pelo Paddle (Merchant of Record), compatível com cartões internacionais e PayPal, emitindo notas fiscais válidas globalmente.',
        },
        {
          question: 'Como recebo meus acessos após a assinatura?',
          answer:
            'Imediatamente após a confirmação no Paddle, nosso sistema cria automaticamente suas credenciais de acesso para a plataforma B2B (b2b.inhubflow.online) e envia um e-mail de boas-vindas com seu link direto.',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow é a plataforma líder de prospecção B2B e automação no LinkedIn com Agentes SDR de Inteligência Artificial. Escale suas vendas corporativas no piloto automático.',
      status: 'Sistemas operando com 100% de disponibilidade',
      col1Title: 'Plataforma',
      col1Item1: 'LinkedIn Outreach',
      col1Item2: 'Lead Finder B2B',
      col1Item3: 'Agente SDR de IA',
      col1Item4: 'Planos & Preços',
      col2Title: 'Soluções',
      col2Item1: 'Cold Email & Warm-up',
      col2Item2: 'Proteção Anti-Bloqueio',
      col2Item3: 'Sincronização de Calendário',
      col2Item4: 'Enriquecimento de E-mails',
      col3Title: 'Clientes',
      col3Item1: 'Acesso à Plataforma ➔',
      col3Item2: 'Casos de Sucesso',
      col3Item3: 'Perguntas Frequentes',
      col4Title: 'Comece Hoje',
      col4Desc: 'Escale a aquisição de clientes corporativos com prospecção inteligente no LinkedIn.',
      col4Cta: 'Ver Planos & Começar ⚡',
      copyright: '© 2026 InHubFlow | AI-Powered B2B Outreach Engine - All Rights Reserved.',
    },
  },

  en: {
    nav: {
      platform: 'Platform',
      features: 'Features',
      benefits: 'Benefits',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      clientAccess: 'Client Login',
      startNow: 'Get Started ⚡',
    },
    hero: {
      subheading: 'AI-POWERED LINKEDIN & B2B OUTREACH ENGINE',
      title1: 'Acquire B2B Clients & Fill Your Pipeline on Autopilot with',
      titleHighlight: 'AI SDR Agents for LinkedIn',
      description:
        'Extract verified decision-makers from LinkedIn Sales Navigator, automate profile visits and connection requests with AI-personalized notes, and book sales calls 24/7 with zero ban risk.',
      ctaPrimary: 'Start Free Trial ⚡',
      ctaSecondary: 'See How It Works ➔',
      guarantee: 'No credit card required for demo • Compatible with Free, Premium & Sales Nav • 2-minute setup',
      badge1: 'Visit Profile',
      badge2: 'Request Connection',
      badge3: 'Send Message',
      badge4: 'Cold E-mail',
      chatSender: 'Sales Director (LinkedIn)',
      chatTime: '10:42 AM',
      chatMsg1: 'Hi! I saw your connection request. How does your platform automate B2B LinkedIn prospecting?',
      chatAgent: 'InHubFlow AI SDR',
      chatMsg2: 'Hi Mark! Our system extracts decision-makers on LinkedIn and runs AI-personalized outreach sequences. When a prospect replies, our AI SDR qualifies buyer intent and schedules the call on your Calendly automatically.',
      chatMsg3: 'Awesome! We are 5 sales reps and need this. Is there a demo available tomorrow?',
    },
    features: {
      badge: 'High-Performance Capabilities',
      title: 'Everything you need to master B2B LinkedIn prospecting',
      subtitle:
        'Replace 5 disconnected tools. InHubFlow unifies lead scraping, LinkedIn sequences, multi-account Cold Email with warm-up, and AI SDR Agents into one high-converting suite.',
      items: [
        {
          title: 'Smart B2B Lead Extraction',
          description:
            'Find and extract hundreds of verified decision-makers directly from LinkedIn and Sales Navigator, with corporate email enrichment and real-time validation.',
          icon: '🎯',
        },
        {
          title: 'Automated LinkedIn Sequences',
          description:
            'Automate profile visits, connection requests with AI-personalized notes, and follow-up DM sequences that significantly increase response rates.',
          icon: '💼',
        },
        {
          title: 'Multi-Inbox Cold Email & Warm-up',
          description:
            'Multi-step cold email campaigns with built-in mailbox warm-up, maximum deliverability, and guaranteed 0% spam placement.',
          icon: '✉️',
        },
        {
          title: 'Anti-Ban Safety (Playwright Stealth)',
          description:
            'Advanced human-like behavioral emulation, randomized delays, and intelligent daily quota limits to keep your LinkedIn accounts 100% secure.',
          icon: '🛡️',
        },
        {
          title: '24/7 AI SDR Agents',
          description:
            'Conversational AI trained on your knowledge base that replies in seconds on LinkedIn, overcomes objections, qualifies buyers, and schedules meetings.',
          icon: '🤖',
        },
        {
          title: 'Unified B2B Inbox & CRM Sync',
          description:
            'Manage all conversations, replies, and follow-ups in a single centralized dashboard with complete AI audit trails and calendar synchronization.',
          icon: '💬',
        },
      ],
    },
    benefits: {
      badge: 'Competitive Advantages',
      title: 'Engineered to generate daily meetings and close enterprise deals',
      subtitle:
        'Scale your sales pipeline without hiring a massive manual SDR outbound team.',
      card1Title: 'High-Precision B2B Prospecting',
      card1Desc:
        'Target verified CEOs, Directors, and key budget-holders filtered by exact job title, industry, company headcount, and location.',
      card1Tag1: 'Advanced B2B Filters',
      card1Tag2: '100% Verified',
      card2Title: 'Smart Multichannel Sequences',
      card2Desc:
        'Combine LinkedIn visits, connection notes, and conditioned cold emails that automatically pause upon receiving a prospect reply.',
      card2Tag1: 'Anti-Ban Safety Guard',
      card2Tag2: 'High Deliverability',
      card3Title: '24/7 Meeting-Booking AI SDRs',
      card3Desc:
        'Your buyers never wait. AI responds in seconds on LinkedIn, resolves complex sales inquiries, and books meetings straight into your calendar.',
      card3Tag1: 'Calendly / Google Sync',
      card3Tag2: 'Response in < 3 sec',
    },
    pricing: {
      badge: 'Transparent Pricing & Global Billing (Paddle)',
      title: 'Choose the perfect plan to scale your B2B revenue',
      subtitle:
        'No lock-in contracts. Cancel anytime. 100% secure payments with compliant worldwide invoicing powered by Paddle.',
      monthly: 'Monthly Billing',
      annual: 'Annual Billing',
      save20: 'Save 20%',
      ctaB2B: 'Get Started with B2B Outreach',
      ctaB2C: 'Get Started with Pro Plan',
      ctaAllInOne: 'Get All-In-One Suite ⚡',
      popularBadge: 'MOST POPULAR',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know before launching with InHubFlow.',
      items: [
        {
          question: 'What is InHubFlow and how does it accelerate B2B sales?',
          answer:
            'InHubFlow is an all-in-one AI-powered B2B prospecting and LinkedIn automation platform. It allows you to extract qualified decision-makers, run automated LinkedIn and Cold Email sequences, and deploy 24/7 AI SDR Agents to qualify leads and book meetings directly into your calendar.',
        },
        {
          question: 'Is it 100% safe for my LinkedIn accounts?',
          answer:
            'Yes, 100% safe. InHubFlow utilizes advanced Playwright Stealth human emulation, randomized delay intervals, and smart daily activity caps that strictly adhere to LinkedIn safety guidelines.',
        },
        {
          question: 'How does the AI SDR Agent work on LinkedIn?',
          answer:
            'The AI SDR is trained on your company knowledge, products, and sales FAQs. When a lead replies on LinkedIn, the AI analyzes intent, crafts contextual natural language responses, handles objections, and shares your Calendly or Google Calendar booking link.',
        },
        {
          question: 'Do I need Sales Navigator or expensive third-party tools?',
          answer:
            'No, it is not required. InHubFlow includes a built-in Lead Finder to search decision-makers by job title, city, and country. If you already have Sales Navigator or Apollo, you can also import lists and search URLs seamlessly.',
        },
        {
          question: 'How are payments and subscriptions handled?',
          answer:
            'All payments are securely handled by Paddle (Merchant of Record), accepting international credit/debit cards and PayPal with tax-compliant global invoices.',
        },
        {
          question: 'How do I receive access after subscribing?',
          answer:
            'Immediately after completing checkout with Paddle, your account credentials for the B2B platform (b2b.inhubflow.online) are automatically generated and emailed to you with direct access.',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow is the leading AI-powered B2B prospecting and LinkedIn automation platform. Scale your customer acquisition and fill your sales calendar on autopilot.',
      status: 'All systems operational (100% uptime)',
      col1Title: 'Platform',
      col1Item1: 'LinkedIn Outreach',
      col1Item2: 'B2B Lead Finder',
      col1Item3: 'AI SDR Agent',
      col1Item4: 'Plans & Pricing',
      col2Title: 'Solutions',
      col2Item1: 'Cold Email & Warm-up',
      col2Item2: 'Anti-Ban Safety',
      col2Item3: 'Calendar Sync',
      col2Item4: 'Email Enrichment',
      col3Title: 'Clients',
      col3Item1: 'Platform Login ➔',
      col3Item2: 'Testimonials',
      col3Item3: 'Frequently Asked Questions',
      col4Title: 'Get Started',
      col4Desc: 'Scale client acquisition with smart B2B AI LinkedIn prospecting.',
      col4Cta: 'View Plans & Start ⚡',
      copyright: '© 2026 InHubFlow | AI-Powered B2B Outreach Engine - All Rights Reserved.',
    },
  },
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof dictionaries)['es'];
  supportedLocales: LocaleOption[];
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'es',
  setLocale: () => {},
  t: dictionaries.es,
  supportedLocales: SUPPORTED_LOCALES,
});

const STORAGE_KEY = 'inhubflow_locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && ['es', 'pt-BR', 'en'].includes(saved)) {
        setLocaleState(saved);
        return;
      }

      // Browser detection
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) {
        setLocaleState('pt-BR');
      } else if (browserLang.startsWith('es')) {
        setLocaleState('es');
      } else if (browserLang.startsWith('en')) {
        setLocaleState('en');
      } else {
        setLocaleState('es');
      }
    } catch {
      setLocaleState('es');
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore in private modes
    }
  };

  const t = useMemo(() => {
    return dictionaries[locale] || dictionaries.es;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, supportedLocales: SUPPORTED_LOCALES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

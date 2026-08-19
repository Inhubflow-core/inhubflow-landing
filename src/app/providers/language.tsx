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
      pricing: 'Precios',
      faq: 'FAQ',
      clientAccess: 'Acceso Clientes',
      startNow: 'Comenzar Ahora ⚡',
    },
    hero: {
      subheading: 'AI - POWERED PROSPECTING SYSTEM',
      title1: 'Genera Leads y Cierra Ventas en Piloto Automático con',
      titleHighlight: 'Agentes SDR de IA',
      description:
        'Atrae tomadores de decisión con Cold Email y LinkedIn B2B. Convierte y agenda reuniones 24/7 en WhatsApp e Instagram B2C con extracción masiva de leads de grupos, perfiles y Google Maps.',
      ctaPrimary: 'Comenzar Prueba ⚡',
      ctaSecondary: 'Ver Cómo Funciona ➔',
      guarantee: 'Sin tarjeta obligatoria para demo • Configuración en 5 minutos • Facturación Paddle',
      badgeWhatsapp: 'WhatsApp',
      badgeInstagram: 'Instagram',
      badgeLinkedin: 'LinkedIn',
      badgeColdEmail: 'Cold E-mail',
      chatSender: 'Prospecto Calificado',
      chatTime: '10:42 AM',
      chatMsg1: '¡Hola! Vi su publicación sobre prospección con IA. ¿Cómo funciona la integración con WhatsApp?',
      chatAgent: 'InHubFlow SDR IA',
      chatMsg2: '¡Hola Marcos! Nuestro SDR de IA se conecta a tu WhatsApp vía Evolution API, califica a cada contacto 24/7 y agenda la llamada en tu Calendly automáticamente.',
      chatMsg3: '¡Genial! Me interesa para mi equipo de 5 comerciales. ¿Tienen demo disponible?',
    },
    features: {
      badge: 'Capacidades de Alto Rendimiento',
      title: 'Todo lo que necesitas para prospectar y vender en una sola suite',
      subtitle:
        'Elimina el uso de 5 herramientas diferentes. InHubFlow unifica la extracción de leads, secuencias de LinkedIn, Cold Email, WhatsApp y Agentes de IA en un solo lugar.',
      items: [
        {
          title: 'Extracción Multicanal de Leads',
          description:
            'Extrae leads cualificados de LinkedIn Sales Navigator, Apollo.io, miembros de grupos de WhatsApp, seguidores de Instagram y Google Maps.',
          icon: '🎯',
        },
        {
          title: 'Automatización B2B en LinkedIn',
          description:
            'Automatiza visitas de perfil, solicitudes de conexión con notas personalizadas con IA y secuencias de DMs que generan reuniones.',
          icon: '💼',
        },
        {
          title: 'Cold Email Multicuenta & Warm-up',
          description:
            'Secuencias de correo frío multietapa con calentamiento automático de bandejas, máxima entregabilidad y 0% en la carpeta de SPAM.',
          icon: '✉️',
        },
        {
          title: 'Disparos Inteligentes en WhatsApp',
          description:
            'Lanza campañas masivas de WhatsApp con personalización dinámica e intervalos anti-bloqueo impulsados por Evolution API.',
          icon: '📱',
        },
        {
          title: 'Agentes SDR de IA 24/7',
          description:
            'Inteligencia Artificial que responde en segundos por WhatsApp e Instagram, califica al prospecto y agenda reuniones automáticamente.',
          icon: '🤖',
        },
        {
          title: 'Bandeja Unificada Omnicanal',
          description:
            'Centraliza WhatsApp, Instagram Direct, Webchat y Email en una sola pantalla colaborativa para todo tu equipo de ventas.',
          icon: '💬',
        },
      ],
    },
    benefits: {
      badge: 'Ventajas Competitivas',
      title: 'Diseñado para generar reuniones y ventas todos los días',
      subtitle:
        'Aumenta tu pipeline de ventas sin contratar un equipo masivo de prospección. InHubFlow multiplica la productividad de tu equipo comercial.',
      card1Title: 'Extracción Precisa de Leads',
      card1Desc:
        'Obtén contactos verificados con correos corporativos y números de teléfono directo desde LinkedIn Sales Navigator, Apollo.io, grupos de WhatsApp y negocios de Google Maps.',
      card1Tag1: 'Filtros avanzados por cargo e industria',
      card1Tag2: '100% Verificado',
      card2Title: 'Secuencias Multicanal con Warm-up',
      card2Desc:
        'Combina LinkedIn, Cold Email con calentamiento de bandejas para 0% SPAM y WhatsApp masivo con algoritmos inteligentes que emulan comportamiento humano.',
      card2Tag1: 'Protección anti-bloqueo activa',
      card2Tag2: 'Alta entregabilidad',
      card3Title: 'Agentes SDR de IA para Cierre 24/7',
      card3Desc:
        'Tus prospectos no tienen que esperar. La IA responde en segundos por WhatsApp, Instagram y LinkedIn, resuelve dudas comerciales complejas y agenda citas en Calendly.',
      card3Tag1: 'Sincronización de Calendario',
      card3Tag2: 'Respuesta en < 3 seg',
    },
    pricing: {
      badge: 'Precios Transparentes & Facturación Global (Paddle)',
      title: 'Elige el plan perfecto para escalar tus ventas',
      subtitle:
        'Sin contratos forzosos. Cancela en cualquier momento. Pagos procesados de forma 100% segura con facturación fiscal internacional vía Paddle.',
      monthly: 'Facturación Mensual',
      annual: 'Facturación Anual',
      save20: 'Ahorra 20%',
      ctaB2B: 'Comenzar con B2B Outreach',
      ctaB2C: 'Comenzar con B2C Omnichannel',
      ctaAllInOne: 'Obtener Suite Completa ⚡',
      popularBadge: 'MÁS POPULAR',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de comenzar con InHubFlow.',
      items: [
        {
          question: '¿Qué es InHubFlow y cómo acelera mis ventas?',
          answer:
            'InHubFlow es una suite todo-en-uno que combina prospección multicanal con Inteligencia Artificial. Te permite extraer leads de LinkedIn Sales Navigator, Apollo.io, grupos de WhatsApp, seguidores de Instagram y Google Maps, para luego ejecutar secuencias automatizadas y dejar que Agentes SDR de IA atiendan, califiquen y agenden reuniones 24/7.',
        },
        {
          question: '¿Es seguro usarlo para mis cuentas de LinkedIn y WhatsApp?',
          answer:
            'Sí, 100% seguro. InHubFlow cuenta con tecnología avanzada de emulación humana e intervalos aleatorios de tiempo (delays inteligentes anti-ban) que respetan los límites de actividad de LinkedIn y las políticas de mensajería de WhatsApp para proteger la reputación de tus cuentas.',
        },
        {
          question: '¿Cómo funciona el Agente SDR con Inteligencia Artificial?',
          answer:
            'El SDR de IA se entrena con la información de tus productos, servicios y preguntas frecuentes. Cuando un prospecto responde a tu campaña en WhatsApp, Instagram o LinkedIn, la IA responde en segundos con lenguaje natural, supera objeciones y le envía tu enlace de Calendly o Google Calendar para agendar la llamada.',
        },
        {
          question: '¿Puedo probar solo el módulo B2B o solo el módulo B2C?',
          answer:
            'Sí. Disponemos de planes independientes si solo necesitas prospección corporativa en LinkedIn y Cold Email (Plan B2B) o si solo necesitas captación y atención por WhatsApp e Instagram (Plan B2C). También puedes elegir el Plan All-In-One para disfrutar de la suite completa con descuento.',
        },
        {
          question: '¿Cómo se procesan los pagos y suscripciones?',
          answer:
            'Todos los pagos se procesan de forma segura a través de Paddle (Merchant of Record), compatible con tarjetas de crédito/débito internacionales y PayPal. Paddle genera facturas fiscales válidas para empresas en todo el mundo y puedes cancelar o cambiar de plan en cualquier momento.',
        },
        {
          question: '¿Cómo recibo mis accesos tras suscribirme?',
          answer:
            'Inmediatamente después de completar el pago en Paddle, nuestro sistema crea automáticamente tus credenciales de acceso para la plataforma de Outreach B2B (b2b.inhubflow.online) y la Bandeja Omnicanal B2C (b2c.inhubflow.online), enviándote un email con tu enlace directo.',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow es la plataforma líder de prospección multicanal y cierre de ventas con Inteligencia Artificial. Automatiza LinkedIn, Cold Email, WhatsApp e Instagram desde una sola suite.',
      status: 'Sistemas operando al 100% de disponibilidad',
      col1Title: 'Plataforma',
      col1Item1: 'Outreach B2B (LinkedIn)',
      col1Item2: 'Omnicanal B2C (WhatsApp)',
      col1Item3: 'Extractor de Leads',
      col1Item4: 'Planes & Precios',
      col2Title: 'Soluciones',
      col2Item1: 'Cold Email con Warm-up',
      col2Item2: 'SDR de IA 24/7',
      col2Item3: 'Integración Evolution API',
      col2Item4: 'Google Maps Scraper',
      col3Title: 'Clientes',
      col3Item1: 'Acceso B2B ➔',
      col3Item2: 'Acceso B2C ➔',
      col3Item3: 'Preguntas Frecuentes',
      col4Title: 'Comienza Hoy',
      col4Desc: 'Escala la adquisición de clientes con prospección inteligente multicanal.',
      col4Cta: 'Ver Planes & Comenzar ⚡',
      copyright: '© 2026 InHubFlow | AI-Powered Prospecting System - All Rights Reserved.',
    },
  },

  'pt-BR': {
    nav: {
      platform: 'Plataforma',
      features: 'Recursos',
      benefits: 'Vantagens',
      pricing: 'Preços',
      faq: 'FAQ',
      clientAccess: 'Área do Cliente',
      startNow: 'Começar Agora ⚡',
    },
    hero: {
      subheading: 'AI - POWERED PROSPECTING SYSTEM',
      title1: 'Gere Leads e Feche Vendas no Piloto Automático com',
      titleHighlight: 'Agentes SDR de IA',
      description:
        'Atraia tomadores de decisão com Cold Email e LinkedIn B2B. Converta e agende reuniões 24/7 no WhatsApp e Instagram B2C com extração massiva de leads de grupos, perfis e Google Maps.',
      ctaPrimary: 'Começar Teste ⚡',
      ctaSecondary: 'Ver Como Funciona ➔',
      guarantee: 'Sem cartão obrigatório para demo • Configuração em 5 minutos • Faturamento Paddle',
      badgeWhatsapp: 'WhatsApp',
      badgeInstagram: 'Instagram',
      badgeLinkedin: 'LinkedIn',
      badgeColdEmail: 'Cold E-mail',
      chatSender: 'Lead Qualificado',
      chatTime: '10:42',
      chatMsg1: 'Olá! Vi sua postagem sobre prospecção com IA. Como funciona a integração com o WhatsApp?',
      chatAgent: 'InHubFlow SDR IA',
      chatMsg2: 'Olá Marcos! Nosso SDR de IA conecta-se ao seu WhatsApp via Evolution API, qualifica cada contato 24/7 e agenda a reunião no seu Calendly automaticamente.',
      chatMsg3: 'Excelente! Tenho muito interesse para minha equipe comercial. Vocês têm demo disponível?',
    },
    features: {
      badge: 'Capacidades de Alto Desempenho',
      title: 'Tudo o que você precisa para prospectar e vender em uma única suíte',
      subtitle:
        'Elimine o uso de 5 ferramentas diferentes. O InHubFlow unifica extração de leads, sequências no LinkedIn, Cold Email, WhatsApp e Agentes de IA em um só lugar.',
      items: [
        {
          title: 'Extração Multicanal de Leads',
          description:
            'Extraia leads qualificados do LinkedIn Sales Navigator, Apollo.io, membros de grupos de WhatsApp, seguidores do Instagram e Google Maps.',
          icon: '🎯',
        },
        {
          title: 'Automação B2B no LinkedIn',
          description:
            'Automatize visitas de perfil, solicitações de conexão com notas personalizadas por IA e sequências de DMs que geram reuniões.',
          icon: '💼',
        },
        {
          title: 'Cold Email Multicontas & Warm-up',
          description:
            'Sequências de e-mail frio em várias etapas com aquecimento automático de caixas de entrada, máxima entregabilidade e 0% na caixa de SPAM.',
          icon: '✉️',
        },
        {
          title: 'Disparos Inteligentes no WhatsApp',
          description:
            'Lance campanhas em massa no WhatsApp com personalização dinâmica e intervalos anti-bloqueio integrados à Evolution API.',
          icon: '📱',
        },
        {
          title: 'Agentes SDR de IA 24/7',
          description:
            'Inteligência Artificial que responde em segundos no WhatsApp e Instagram, qualifica o lead e agenda reuniões automaticamente.',
          icon: '🤖',
        },
        {
          title: 'Caixa de Entrada Unificada Omnichannel',
          description:
            'Centralize WhatsApp, Instagram Direct, Webchat e E-mail em uma única tela colaborativa para toda a sua equipe de vendas.',
          icon: '💬',
        },
      ],
    },
    benefits: {
      badge: 'Vantagens Competitivas',
      title: 'Projetado para gerar reuniões e vendas todos os dias',
      subtitle:
        'Aumente seu pipeline de vendas sem precisar contratar uma equipe enorme de prospecção. O InHubFlow multiplica a produtividade comercial.',
      card1Title: 'Extração Precisa de Leads',
      card1Desc:
        'Obtenha contatos verificados com e-mails corporativos e números de telefone direto do LinkedIn Sales Navigator, Apollo.io, grupos de WhatsApp e Google Maps.',
      card1Tag1: 'Filtros avançados por cargo e setor',
      card1Tag2: '100% Verificado',
      card2Title: 'Sequências Multicanal com Warm-up',
      card2Desc:
        'Combine LinkedIn, Cold Email com aquecimento para 0% SPAM e WhatsApp em massa com algoritmos inteligentes que emulam comportamento humano.',
      card2Tag1: 'Proteção anti-bloqueio ativa',
      card2Tag2: 'Alta entregabilidade',
      card3Title: 'Agentes SDR de IA para Fechamento 24/7',
      card3Desc:
        'Seus leads não precisam esperar. A IA responde em segundos no WhatsApp, Instagram e LinkedIn, resolve dúvidas complexas e agenda no Calendly.',
      card3Tag1: 'Sincronização de Calendário',
      card3Tag2: 'Resposta em < 3 seg',
    },
    pricing: {
      badge: 'Preços Transparentes & Faturamento Global (Paddle)',
      title: 'Escolha o plano perfeito para escalar suas vendas',
      subtitle:
        'Sem contratos de fidelidade. Cancele a qualquer momento. Pagamentos 100% seguros com nota fiscal internacional via Paddle.',
      monthly: 'Faturamento Mensal',
      annual: 'Faturamento Anual',
      save20: 'Economize 20%',
      ctaB2B: 'Começar com B2B Outreach',
      ctaB2C: 'Começar com B2C Omnichannel',
      ctaAllInOne: 'Obter Suíte Completa ⚡',
      popularBadge: 'MAIS POPULAR',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber antes de começar com o InHubFlow.',
      items: [
        {
          question: 'O que é o InHubFlow e como ele acelera minhas vendas?',
          answer:
            'O InHubFlow é uma suíte tudo-em-um que combina prospecção multicanal com Inteligência Artificial. Permite extrair leads do LinkedIn Sales Navigator, Apollo.io, grupos de WhatsApp, Instagram e Google Maps, automatizar sequências e deixar Agentes SDR de IA agendando reuniões 24/7.',
        },
        {
          question: 'É seguro usar nas minhas contas de LinkedIn e WhatsApp?',
          answer:
            'Sim, 100% seguro. O InHubFlow conta com tecnologia de emulação humana e intervalos aleatórios inteligentes anti-bloqueio que respeitam os limites do LinkedIn e do WhatsApp.',
        },
        {
          question: 'Como funciona o Agente SDR com Inteligência Artificial?',
          answer:
            'O SDR de IA é treinado com as informações dos seus produtos, serviços e perguntas frequentes. Quando um prospect responde no WhatsApp, Instagram ou LinkedIn, a IA responde em segundos com linguagem natural, contorna objeções e envia seu link do Calendly.',
        },
        {
          question: 'Posso contratar apenas o módulo B2B ou apenas o B2C?',
          answer:
            'Sim! Temos planos independentes para prospecção corporativa B2B (LinkedIn + Cold Email) e para atendimento/captação B2C (WhatsApp + Instagram), além do plano All-In-One com desconto.',
        },
        {
          question: 'Como são processados os pagamentos?',
          answer:
            'Todos os pagamentos são processados com segurança pelo Paddle (Merchant of Record), compatível com cartões internacionais e PayPal com emissão de notas fiscais válidas globalmente.',
        },
        {
          question: 'Como recebo meus acessos após a assinatura?',
          answer:
            'Imediatamente após a confirmação no Paddle, nosso sistema cria automaticamente seus acessos para o Outreach B2B (b2b.inhubflow.online) e para o Omnichannel B2C (b2c.inhubflow.online).',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow é a plataforma líder de prospecção multicanal e fechamento de vendas com IA. Automatize LinkedIn, Cold Email, WhatsApp e Instagram em uma única suíte.',
      status: 'Sistemas operando com 100% de disponibilidade',
      col1Title: 'Plataforma',
      col1Item1: 'Outreach B2B (LinkedIn)',
      col1Item2: 'Omnichannel B2C (WhatsApp)',
      col1Item3: 'Extrator de Leads',
      col1Item4: 'Planos & Preços',
      col2Title: 'Soluções',
      col2Item1: 'Cold Email com Warm-up',
      col2Item2: 'SDR de IA 24/7',
      col2Item3: 'Integração Evolution API',
      col2Item4: 'Google Maps Scraper',
      col3Title: 'Clientes',
      col3Item1: 'Acesso B2B ➔',
      col3Item2: 'Acesso B2C ➔',
      col3Item3: 'Perguntas Frequentes',
      col4Title: 'Comece Hoje',
      col4Desc: 'Escale a aquisição de clientes com prospecção inteligente multicanal.',
      col4Cta: 'Ver Planos & Começar ⚡',
      copyright: '© 2026 InHubFlow | AI-Powered Prospecting System - All Rights Reserved.',
    },
  },

  en: {
    nav: {
      platform: 'Platform',
      features: 'Features',
      benefits: 'Benefits',
      pricing: 'Pricing',
      faq: 'FAQ',
      clientAccess: 'Client Login',
      startNow: 'Get Started ⚡',
    },
    hero: {
      subheading: 'AI - POWERED PROSPECTING SYSTEM',
      title1: 'Generate Leads & Close Sales on Autopilot with',
      titleHighlight: 'AI SDR Agents',
      description:
        'Engage decision-makers with Cold Email and B2B LinkedIn. Convert and book meetings 24/7 on WhatsApp & Instagram B2C with bulk lead extraction from groups, profiles, and Google Maps.',
      ctaPrimary: 'Start Free Trial ⚡',
      ctaSecondary: 'See How It Works ➔',
      guarantee: 'No credit card required for demo • 5-minute setup • Global Paddle billing',
      badgeWhatsapp: 'WhatsApp',
      badgeInstagram: 'Instagram',
      badgeLinkedin: 'LinkedIn',
      badgeColdEmail: 'Cold E-mail',
      chatSender: 'Qualified Prospect',
      chatTime: '10:42 AM',
      chatMsg1: 'Hi! I saw your post about AI prospecting. How does the WhatsApp integration work?',
      chatAgent: 'InHubFlow AI SDR',
      chatMsg2: 'Hi Mark! Our AI SDR connects to your WhatsApp via Evolution API, qualifies leads 24/7, and automatically schedules meetings on your Calendly.',
      chatMsg3: 'Awesome! We are 5 sales reps and need this. Is there a demo available?',
    },
    features: {
      badge: 'High-Performance Capabilities',
      title: 'Everything you need to prospect and close deals in one single suite',
      subtitle:
        'Replace 5 disconnected tools. InHubFlow unifies lead extraction, LinkedIn sequences, Cold Email, WhatsApp outreach, and AI SDR Agents into one collaborative platform.',
      items: [
        {
          title: 'Multichannel Lead Extraction',
          description:
            'Extract verified leads from LinkedIn Sales Navigator, Apollo.io, WhatsApp group members, Instagram followers, and Google Maps businesses.',
          icon: '🎯',
        },
        {
          title: 'B2B LinkedIn Automation',
          description:
            'Automate profile visits, personalized connection requests with AI notes, and follow-up DM sequences that drive booked meetings.',
          icon: '💼',
        },
        {
          title: 'Multi-Inbox Cold Email & Warm-up',
          description:
            'Multi-step cold email campaigns with automated mailbox warm-up, maximum inbox delivery, and 0% spam placement.',
          icon: '✉️',
        },
        {
          title: 'Smart WhatsApp Campaigns',
          description:
            'Launch high-converting WhatsApp outreach with dynamic personalization and anti-ban delay algorithms powered by Evolution API.',
          icon: '📱',
        },
        {
          title: '24/7 AI SDR Agents',
          description:
            'Conversational AI that replies in seconds across WhatsApp & Instagram, overcomes objections, qualifies buyers, and schedules meetings.',
          icon: '🤖',
        },
        {
          title: 'Unified Omnichannel Inbox',
          description:
            'Centralize WhatsApp, Instagram Direct, Webchat, and Email in a single collaborative dashboard for your entire revenue team.',
          icon: '💬',
        },
      ],
    },
    benefits: {
      badge: 'Competitive Advantages',
      title: 'Engineered to generate daily meetings and revenue',
      subtitle:
        'Scale your sales pipeline without hiring a massive outbound team. InHubFlow supercharges your sales team productivity.',
      card1Title: 'Precision Lead Extraction',
      card1Desc:
        'Get verified B2B contacts with corporate emails and direct phone numbers from LinkedIn Sales Navigator, Apollo, WhatsApp groups, and Google Maps.',
      card1Tag1: 'Advanced job title & industry filters',
      card1Tag2: '100% Verified',
      card2Title: 'Multichannel Sequences with Warm-up',
      card2Desc:
        'Combine LinkedIn, Cold Email with automated warm-up for 0% spam, and WhatsApp outreach with human-like behavioral pacing.',
      card2Tag1: 'Active anti-ban protection',
      card2Tag2: 'High deliverability',
      card3Title: '24/7 Closing AI SDR Agents',
      card3Desc:
        'Your buyers do not have to wait. AI responds in seconds on WhatsApp, Instagram, and LinkedIn, solves inquiries, and books on Calendly.',
      card3Tag1: 'Calendar Synchronization',
      card3Tag2: 'Response in < 3 sec',
    },
    pricing: {
      badge: 'Transparent Pricing & Global Billing (Paddle)',
      title: 'Choose the perfect plan to scale your sales',
      subtitle:
        'No lock-in contracts. Cancel anytime. 100% secure payments with compliant worldwide invoicing powered by Paddle.',
      monthly: 'Monthly Billing',
      annual: 'Annual Billing',
      save20: 'Save 20%',
      ctaB2B: 'Get Started with B2B Outreach',
      ctaB2C: 'Get Started with B2C Omnichannel',
      ctaAllInOne: 'Get All-In-One Suite ⚡',
      popularBadge: 'MOST POPULAR',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know before launching with InHubFlow.',
      items: [
        {
          question: 'What is InHubFlow and how does it accelerate sales?',
          answer:
            'InHubFlow is an all-in-one AI prospecting and sales suite. It allows you to extract leads from LinkedIn Sales Navigator, Apollo.io, WhatsApp groups, Instagram, and Google Maps, run automated outreach sequences, and deploy 24/7 AI SDR Agents to qualify leads and book meetings.',
        },
        {
          question: 'Is it safe for my LinkedIn and WhatsApp accounts?',
          answer:
            'Yes, 100% safe. InHubFlow features human-like behavioral pacing and smart anti-ban delays that strictly adhere to LinkedIn activity limits and WhatsApp messaging guidelines.',
        },
        {
          question: 'How does the AI SDR Agent work?',
          answer:
            'The AI SDR is trained on your company knowledge, products, and FAQs. When a lead replies on WhatsApp, Instagram, or LinkedIn, the AI responds in seconds in natural language, handles objections, and shares your Calendly link.',
        },
        {
          question: 'Can I purchase only the B2B or only the B2C module?',
          answer:
            'Yes! We offer standalone plans for B2B Outreach (LinkedIn & Cold Email) or B2C Omnichannel (WhatsApp & Instagram), as well as the discounted All-In-One Suite.',
        },
        {
          question: 'How are payments and subscriptions handled?',
          answer:
            'All payments are securely handled by Paddle (Merchant of Record), accepting international cards and PayPal with tax-compliant global invoices.',
        },
        {
          question: 'How do I receive access after subscribing?',
          answer:
            'Immediately after completing checkout with Paddle, credentials for B2B Outreach (b2b.inhubflow.online) and B2C Omnichannel (b2c.inhubflow.online) are automatically generated and emailed to you.',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow is the premier AI-powered multichannel prospecting and sales execution platform. Automate LinkedIn, Cold Email, WhatsApp, and Instagram in one suite.',
      status: 'All systems operational (100% uptime)',
      col1Title: 'Platform',
      col1Item1: 'B2B Outreach (LinkedIn)',
      col1Item2: 'B2C Omnichannel (WhatsApp)',
      col1Item3: 'Lead Extractor',
      col1Item4: 'Plans & Pricing',
      col2Title: 'Solutions',
      col2Item1: 'Cold Email with Warm-up',
      col2Item2: '24/7 AI SDR Agents',
      col2Item3: 'Evolution API Integration',
      col2Item4: 'Google Maps Scraper',
      col3Title: 'Clients',
      col3Item1: 'B2B Login ➔',
      col3Item2: 'B2C Login ➔',
      col3Item3: 'Frequently Asked Questions',
      col4Title: 'Get Started',
      col4Desc: 'Scale client acquisition with smart multichannel AI prospecting.',
      col4Cta: 'View Plans & Start ⚡',
      copyright: '© 2026 InHubFlow | AI-Powered Prospecting System - All Rights Reserved.',
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

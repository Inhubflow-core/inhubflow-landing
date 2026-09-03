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
      startNow: 'Comenzar Ahora',
    },
    hero: {
      subheading: 'AI-POWERED B2B SALES CRM & SDR AGENT SUITE',
      title1: 'Atrae Clientes B2B y Llena tu Agenda en Piloto Automático con',
      titleHighlight: 'Agentes SDR de IA y CRM Comercial',
      description:
        'Gestiona y califica contactos comerciales B2B, automatiza mensajes de seguimiento personalizados con IA, y agenda videollamadas comerciales 24/7 con total seguridad empresarial.',
      ctaPrimary: 'Comenzar Prueba Gratis',
      ctaSecondary: 'Ver Cómo Funciona',
      guarantee: 'Sin tarjeta obligatoria para demo • Compatible con LinkedIn Free, Premium y Sales Nav • Configuración en 2 minutos',
      badge1: 'Sincronizar Contactos',
      badge2: 'Calificación con IA',
      badge3: 'Atención Multicanal',
      badge4: 'Agendar Reunión',
      chatSender: 'Director Comercial (LinkedIn)',
      chatTime: '10:42 AM',
      chatMsg1: 'Hola, vi tu mensaje. ¿Cómo ayuda su sistema a optimizar el seguimiento y agendamiento con clientes B2B?',
      chatAgent: 'InHubFlow SDR IA',
      chatMsg2: '¡Hola Marcos! Nuestra plataforma gestiona tus contactos B2B y ejecuta flujos de seguimiento con IA. Cuando un cliente muestra interés, nuestro SDR califica sus necesidades y agenda la videollamada en tu Calendly automáticamente.',
      chatMsg3: '¡Excelente! Nos interesa para nuestro equipo comercial. ¿Tienen demo disponible mañana?',
      showcaseTitle: 'Asistente LinkedIn / Email + Agente SDR de IA & Agenda Reunión',
    },
    features: {
      badge: 'Capacidades de Alto Rendimiento',
      title: 'Todo lo que necesitas para optimizar tus ventas y relaciones B2B',
      subtitle:
        'Reemplaza herramientas desconectadas. InHubFlow unifica la gestión de contactos y cuentas, secuencias de comunicación multicanal, emails de seguimiento y Agentes SDR de IA en un solo lugar.',
      items: [
        {
          title: 'Gestión Inteligente de Contactos B2B',
          description:
            'Organiza y segmenta cuentas y contactos comerciales para tu equipo de ventas, con sincronización CRM y gestión centralizada de clientes.',
          icon: 'target',
        },
        {
          title: 'Flujos Automatizados de Relación Comercial',
          description:
            'Automatiza respuestas comerciales, mensajes personalizados con IA y flujos de seguimiento inteligente que multiplican el agendamiento de reuniones.',
          icon: 'briefcase',
        },
        {
          title: 'Email Comercial Multicuenta & Entregabilidad',
          description:
            'Secuencias de correo comercial multietapa con sincronización de bandejas corporativas, alta entregabilidad y seguimiento de aperturas y respuestas.',
          icon: 'mail',
        },
        {
          title: 'Seguridad Empresarial & Ritmos Humanizados',
          description:
            'Intervalos inteligentes de actividad, pausas de navegación natural y límites de seguridad para mantener una presencia corporativa 100% protegida.',
          icon: 'shield',
        },
        {
          title: 'Agentes SDR de IA 24/7',
          description:
            'Inteligencia Artificial conversacional entrenada con tu base de conocimiento que responde en segundos, resuelve dudas comerciales y agenda citas en Calendly.',
          icon: 'bot',
        },
        {
          title: 'Bandeja Unificada & Sincronización CRM',
          description:
            'Gestiona todas las respuestas y conversaciones en una sola interfaz centralizada, con auditoría completa de IA y sincronización de calendario.',
          icon: 'message',
        },
      ],
    },
    benefits: {
      badge: 'Ventajas Competitivas',
      title: 'Diseñado para generar reuniones y cerrar clientes corporativos',
      subtitle:
        'Multiplica el pipeline de ventas de tu empresa optimizando la productividad de tu equipo comercial.',
      card1Title: 'Organización Inteligente de Cuentas',
      card1Desc:
        'Centraliza y clasifica tus cuentas y clientes comerciales por sector, tamaño de empresa y prioridad de negocio, manteniendo tus datos sincronizados con tu CRM.',
      card1Tag1: 'Organización CRM',
      card1Tag2: 'Sincronización Total',
      card2Title: 'Seguimiento Multicanal Inteligente',
      card2Desc:
        'Automatiza flujos de seguimiento profesional por LinkedIn y correo corporativo que se pausan automáticamente al recibir una respuesta del cliente.',
      card2Tag1: 'Seguridad Empresarial',
      card2Tag2: 'Alta Entregabilidad',
      card3Title: 'Agentes SDR de IA para Cierre 24/7',
      card3Desc:
        'Tus clientes no tienen que esperar. La IA responde en segundos en LinkedIn, resuelve dudas comerciales complejas y agenda la cita en tu calendario.',
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
      ctaB2B: 'Comenzar Plan Starter',
      ctaB2C: 'Comenzar Plan Growth',
      ctaAllInOne: 'Obtener Plan Business',
      popularBadge: 'MÁS POPULAR',
      limitsNote: '* Límites recomendados por cuenta para garantizar la seguridad y reputación comercial.',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de comenzar con InHubFlow.',
      items: [
        {
          question: '¿Qué es InHubFlow y cómo acelera mis ventas B2B?',
          answer:
            'InHubFlow es una suite integral de CRM comercial y productividad de ventas B2B con Inteligencia Artificial. Te permite organizar contactos calificados, ejecutar secuencias de comunicación multicanal y seguimiento por email, y dejar que Agentes SDR de IA califiquen y agenden reuniones de venta 24/7 en tu calendario.',
        },
        {
          question: '¿Es 100% seguro para mis cuentas de LinkedIn?',
          answer:
            'Sí, 100% seguro. InHubFlow cuenta con protocolos de seguridad empresarial, pausas de navegación natural y límites diarios inteligentes que respetan las buenas prácticas de la plataforma para garantizar la total reputación y privacidad de tus cuentas comerciales.',
        },
        {
          question: '¿Cómo funciona el Agente SDR con Inteligencia Artificial?',
          answer:
            'El Agente SDR se entrena con la información de tu empresa, servicios y preguntas frecuentes. Cuando un contacto responde a tu mensaje en LinkedIn, la IA analiza la intención, redacta respuestas contextuales con lenguaje natural, supera objeciones y envía tu enlace de Calendly o Google Calendar para agendar la videollamada.',
        },
        {
          question: '¿Necesito contratar Sales Navigator u otras herramientas externas?',
          answer:
            'No es obligatorio. InHubFlow cuenta con herramientas integradas de gestión y segmentación para organizar contactos por cargo, ciudad y empresa. Si ya cuentas con archivos CSV o bases de contactos previas, puedes importarlas directamente.',
        },
        {
          question: '¿Cómo se procesan los pagos y suscripciones?',
          answer:
            'Todos los pagos se procesan de forma segura a través de Paddle (Merchant of Record), compatible con tarjetas de crédito/débito internacionales y PayPal. Paddle genera facturas fiscales válidas para empresas en todo el mundo y puedes cancelar o cambiar de plan en cualquier momento.',
        },
        {
          question: '¿Cómo recibo mis accesos tras suscribirme?',
          answer:
            'Inmediatamente después de completar el pago en Paddle, nuestro sistema crea automáticamente tus credenciales de acceso para la plataforma de gestión B2B (b2b.inhubflow.online) y te envía un correo de bienvenida con tu enlace directo de ingreso.',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow es la suite empresarial de CRM comercial y productividad B2B con Agentes SDR de Inteligencia Artificial. Escala tu gestión de clientes y optimiza tu agenda de ventas.',
      status: 'Sistemas operando al 100% de disponibilidad',
      col1Title: 'Plataforma',
      col1Item1: 'CRM & Workflows',
      col1Item2: 'Gestión de Contactos',
      col1Item3: 'Agente SDR de IA',
      col1Item4: 'Planes & Precios',
      col2Title: 'Soluciones',
      col2Item1: 'Email de Seguimiento',
      col2Item2: 'Seguridad Empresarial',
      col2Item3: 'Sincronización de Calendario',
      col2Item4: 'Validación de Contactos',
      col3Title: 'Clientes',
      col3Item1: 'Acceso a la Plataforma',
      col3Item2: 'Casos de Éxito',
      col3Item3: 'Preguntas Frecuentes',
      col4Title: 'Comienza Hoy',
      col4Desc: 'Escala la adquisición de clientes corporativos con gestión inteligente de ventas.',
      col4Cta: 'Ver Planes & Comenzar',
      copyright: '© 2026 InHubFlow | AI-Powered B2B Sales Suite - All Rights Reserved.',
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
      startNow: 'Começar Agora',
    },
    hero: {
      subheading: 'AI-POWERED B2B SALES CRM & SDR AGENT SUITE',
      title1: 'Atraia Clientes B2B e Lote sua Agenda no Piloto Automático com',
      titleHighlight: 'Agentes SDR de IA e CRM Comercial',
      description:
        'Gerencie e qualifique contatos comerciais B2B, automatize mensagens de acompanhamento personalizadas por IA, e agende reuniões comerciais 24/7 com total segurança empresarial.',
      ctaPrimary: 'Começar Teste Grátis',
      ctaSecondary: 'Ver Como Funciona',
      guarantee: 'Sem cartão obrigatório para demo • Compatível com LinkedIn Free, Premium e Sales Nav • Configuração em 2 minutos',
      badge1: 'Sincronizar Contatos',
      badge2: 'Qualificação com IA',
      badge3: 'Atendimento Multicanal',
      badge4: 'Agendar Reunião',
      chatSender: 'Diretor Comercial (LinkedIn)',
      chatTime: '10:42',
      chatMsg1: 'Olá, vi sua mensagem. Como a plataforma ajuda a otimizar o acompanhamento e agendamento com clientes B2B?',
      chatAgent: 'InHubFlow SDR IA',
      chatMsg2: 'Olá Marcos! Nossa plataforma gerencia seus contatos B2B e executa fluxos de acompanhamento com IA. Quando um cliente demonstra interesse, nosso SDR qualifica as necessidades e agenda no seu Calendly automaticamente.',
      chatMsg3: 'Excelente! Temos muito interesse para nossa equipe comercial. Vocês têm demo disponível amanhã?',
      showcaseTitle: 'Assistente LinkedIn / E-mail + Agente SDR de IA & Agenda Reunião',
    },
    features: {
      badge: 'Capacidades de Alto Desempenho',
      title: 'Tudo o que você precisa para otimizar suas vendas e relacionamentos B2B',
      subtitle:
        'Substitua ferramentas desconectadas. O InHubFlow unifica a gestão de contatos, sequências de comunicação multicanal, e-mails de acompanhamento e Agentes SDR de IA em um só lugar.',
      items: [
        {
          title: 'Gestão Inteligente de Contatos B2B',
          description:
            'Organize e segmente contas e contatos comerciais para sua equipe de vendas, com sincronização CRM e gestão centralizada de clientes.',
          icon: 'target',
        },
        {
          title: 'Fluxos Automatizados de Relacionamento Comercial',
          description:
            'Automatize respostas comerciais, mensagens personalizadas por IA e fluxos de acompanhamento inteligente que multiplicam os agendamentos.',
          icon: 'briefcase',
        },
        {
          title: 'E-mail Comercial Multicontas & Entregabilidade',
          description:
            'Sequências de e-mail comercial em várias etapas com sincronização de caixas corporativas, máxima entregabilidade e acompanhamento de aberturas.',
          icon: 'mail',
        },
        {
          title: 'Segurança Empresarial & Ritmos Humanizados',
          description:
            'Intervalos inteligentes de atividade, pausas de trabalho natural e limites de segurança para manter uma presença corporativa 100% protegida.',
          icon: 'shield',
        },
        {
          title: 'Agentes SDR de IA 24/7',
          description:
            'Inteligência Artificial conversacional treinada com sua base de conhecimento que responde em segundos, resolve objeções e agenda reuniões no Calendly.',
          icon: 'bot',
        },
        {
          title: 'Caixa Unificada & Sincronização CRM',
          description:
            'Gerencie todas as respostas e conversas em uma única interface centralizada, com auditoria completa de IA e sincronização de calendário.',
          icon: 'message',
        },
      ],
    },
    benefits: {
      badge: 'Vantagens Competitivas',
      title: 'Projetado para gerar reuniões e fechar clientes corporativos',
      subtitle:
        'Multiplique o pipeline de vendas da sua empresa otimizando a produtividade da sua equipe comercial.',
      card1Title: 'Organização Inteligente de Contas',
      card1Desc:
        'Centralize e classifique suas contas e clientes comerciais por setor, tamanho da empresa e prioridade de negócio, mantendo seus dados sincronizados com o CRM.',
      card1Tag1: 'Organização CRM',
      card1Tag2: 'Sincronização Total',
      card2Title: 'Acompanhamento Multicanal Inteligente',
      card2Desc:
        'Automatize fluxos de acompanhamento profissional por LinkedIn e e-mail corporativo que pausam automaticamente ao receber uma resposta do cliente.',
      card2Tag1: 'Segurança Empresarial',
      card2Tag2: 'Alta Entregabilidade',
      card3Title: 'Agentes SDR de IA para Fechamento 24/7',
      card3Desc:
        'Seus clientes não precisam esperar. A IA responde em segundos no LinkedIn, soluciona dúvidas complexas e agenda a reunião no seu calendário.',
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
      ctaB2B: 'Começar Plano Starter',
      ctaB2C: 'Começar Plano Growth',
      ctaAllInOne: 'Obter Plano Business',
      popularBadge: 'MAIS POPULAR',
      limitsNote: '* Limites recomendados por conta para garantir a segurança e reputação comercial.',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber antes de começar com o InHubFlow.',
      items: [
        {
          question: 'O que é o InHubFlow e como ele acelera minhas vendas B2B?',
          answer:
            'O InHubFlow é uma suíte completa de CRM comercial e produtividade de vendas B2B com Inteligência Artificial. Permite organizar contatos qualificados, executar sequências de comunicação multicanal e e-mail de acompanhamento, e deixar Agentes SDR de IA qualificando e agendando reuniões 24/7.',
        },
        {
          question: 'É 100% seguro para minhas contas do LinkedIn?',
          answer:
            'Sim, 100% seguro. O InHubFlow conta com protocolos de segurança empresarial, pausas de navegação natural e limites diários inteligentes que respeitam as boas práticas da plataforma.',
        },
        {
          question: 'Como funciona o Agente SDR com Inteligência Artificial?',
          answer:
            'O SDR de IA é treinado com as informações da sua empresa, serviços e perguntas frequentes. Quando um contato responde no LinkedIn, a IA analisa a intenção, redige respostas naturais, supera objeções e envia seu link do Calendly ou Google Calendar.',
        },
        {
          question: 'Preciso assinar o Sales Navigator ou ferramentas externas?',
          answer:
            'Não é obrigatório. O InHubFlow possui ferramentas integradas de gestão e segmentação para organizar contatos por cargo, cidade e empresa. Caso já possua arquivos CSV ou listas de contatos, você pode importá-los diretamente.',
        },
        {
          question: 'Como são processados os pagamentos?',
          answer:
            'Todos os pagamentos são processados com segurança pelo Paddle (Merchant of Record), compatível com cartões internacionais e PayPal, emitindo notas fiscais válidas globalmente.',
        },
        {
          question: 'Como recebo meus acessos após a assinatura?',
          answer:
            'Imediatamente após a confirmação no Paddle, nosso sistema cria automaticamente suas credenciais de acesso para a plataforma de gestão B2B (b2b.inhubflow.online) e envia um e-mail de boas-vindas com seu link direto.',
        },
      ],
    },
    footer: {
      desc: 'InHubFlow é a suíte empresarial de CRM comercial e produtividade B2B com Agentes SDR de Inteligência Artificial. Escale suas vendas corporativas no piloto automático.',
      status: 'Sistemas operando com 100% de disponibilidade',
      col1Title: 'Plataforma',
      col1Item1: 'CRM & Workflows',
      col1Item2: 'Gestão de Contatos',
      col1Item3: 'Agente SDR de IA',
      col1Item4: 'Planos & Preços',
      col2Title: 'Soluções',
      col2Item1: 'E-mail de Acompanhamento',
      col2Item2: 'Segurança Empresarial',
      col2Item3: 'Sincronização de Calendário',
      col2Item4: 'Validação de Contatos',
      col3Title: 'Clientes',
      col3Item1: 'Acesso à Plataforma',
      col3Item2: 'Casos de Sucesso',
      col3Item3: 'Perguntas Frequentes',
      col4Title: 'Comece Hoje',
      col4Desc: 'Escale a aquisição de clientes corporativos com gestão inteligente de vendas.',
      col4Cta: 'Ver Planos & Começar',
      copyright: '© 2026 InHubFlow | AI-Powered B2B Sales Suite - All Rights Reserved.',
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
      startNow: 'Get Started',
    },
    hero: {
      subheading: 'AI-POWERED B2B SALES CRM & SDR AGENT SUITE',
      title1: 'Acquire B2B Clients & Fill Your Pipeline on Autopilot with',
      titleHighlight: 'AI SDR Agents & Sales CRM',
      description:
        'Manage and qualify B2B business relationships, automate personalized follow-up sequences with AI, and schedule sales meetings 24/7 with complete enterprise security.',
      ctaPrimary: 'Start Free Trial',
      ctaSecondary: 'See How It Works',
      guarantee: 'No credit card required for demo • Compatible with Free, Premium & Sales Nav • 2-minute setup',
      badge1: 'Sync Contacts',
      badge2: 'AI Qualification',
      badge3: 'Multichannel Support',
      badge4: 'Schedule Meeting',
      chatSender: 'Sales Director (LinkedIn)',
      chatTime: '10:42 AM',
      chatMsg1: 'Hi! I saw your message. How does your platform optimize B2B client follow-up and meeting scheduling?',
      chatAgent: 'InHubFlow AI SDR',
      chatMsg2: 'Hi Mark! Our platform manages your B2B contacts and runs AI-personalized follow-up workflows. When a contact replies, our AI SDR qualifies buyer intent and schedules the call on your Calendly automatically.',
      chatMsg3: 'Awesome! We are 5 sales reps and need this. Is there a demo available tomorrow?',
      showcaseTitle: 'LinkedIn / Email Assistant + AI SDR Agent & Meeting Scheduler',
    },
    features: {
      badge: 'High-Performance Capabilities',
      title: 'Everything you need to accelerate B2B sales and client relationships',
      subtitle:
        'Replace disconnected tools. InHubFlow unifies contact management, multichannel communication sequences, follow-up emails, and AI SDR Agents into one high-converting suite.',
      items: [
        {
          title: 'Smart B2B Contact Management',
          description:
            'Organize and segment commercial accounts and business contacts for your sales team, with CRM synchronization and key account management.',
          icon: 'target',
        },
        {
          title: 'Automated Commercial Relationship Workflows',
          description:
            'Automate timely commercial replies, AI-personalized messages, and intelligent follow-up workflows that boost your meeting booking rate.',
          icon: 'briefcase',
        },
        {
          title: 'Multi-Inbox Sales Email & Deliverability',
          description:
            'Multi-step sales email workflows with corporate mailbox sync, maximum deliverability, and real-time open tracking.',
          icon: 'mail',
        },
        {
          title: 'Enterprise Security & Natural Pacing',
          description:
            'Intelligent activity intervals, humanized pacing, and safety limits to keep your corporate presence 100% secure and compliant.',
          icon: 'shield',
        },
        {
          title: '24/7 AI SDR Agents',
          description:
            'Conversational AI trained on your knowledge base that replies in seconds, overcomes objections, qualifies buyers, and schedules meetings in Calendly.',
          icon: 'bot',
        },
        {
          title: 'Unified B2B Inbox & CRM Sync',
          description:
            'Manage all conversations, replies, and follow-ups in a single centralized dashboard with complete AI audit trails and calendar synchronization.',
          icon: 'message',
        },
      ],
    },
    benefits: {
      badge: 'Competitive Advantages',
      title: 'Engineered to generate daily meetings and close enterprise deals',
      subtitle:
        'Scale your sales pipeline by optimizing the productivity of your commercial team.',
      card1Title: 'Smart Account Organization',
      card1Desc:
        'Centralize and categorize your commercial accounts and clients by industry, company size, and priority, keeping all client records synchronized with your CRM.',
      card1Tag1: 'CRM Organization',
      card1Tag2: 'Full Sync',
      card2Title: 'Smart Multichannel Follow-Up',
      card2Desc:
        'Automate professional follow-up workflows across LinkedIn and corporate email that automatically pause upon receiving a client reply.',
      card2Tag1: 'Enterprise Security',
      card2Tag2: 'High Deliverability',
      card3Title: '24/7 Meeting-Booking AI SDRs',
      card3Desc:
        'Your buyers never wait. AI responds in seconds, resolves complex sales inquiries, and books meetings straight into your calendar.',
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
      ctaB2B: 'Get Started with Starter Plan',
      ctaB2C: 'Get Started with Growth Plan',
      ctaAllInOne: 'Get Business Plan',
      popularBadge: 'MOST POPULAR',
      limitsNote: '* Recommended daily limits per account to ensure commercial safety and platform compliance.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know before launching with InHubFlow.',
      items: [
        {
          question: 'What is InHubFlow and how does it accelerate B2B sales?',
          answer:
            'InHubFlow is a comprehensive AI-powered B2B sales CRM and productivity suite. It allows you to organize qualified contacts, run automated multichannel communication and email follow-up sequences, and deploy 24/7 AI SDR Agents to qualify potential clients and book meetings directly into your calendar.',
        },
        {
          question: 'Is it 100% safe for my LinkedIn accounts?',
          answer:
            'Yes, 100% safe. InHubFlow utilizes enterprise security protocols, humanized natural pacing, and smart daily activity limits that strictly adhere to platform best practices.',
        },
        {
          question: 'How does the AI SDR Agent work?',
          answer:
            'The AI SDR is trained on your company knowledge, products, and sales FAQs. When a contact replies, the AI analyzes intent, crafts contextual natural language responses, handles objections, and shares your Calendly or Google Calendar booking link.',
        },
        {
          question: 'Do I need Sales Navigator or expensive third-party tools?',
          answer:
            'No, it is not required. InHubFlow includes built-in contact management and segmentation tools to organize business contacts by job title, city, and company. If you already have CSV lists or existing contact databases, you can import them seamlessly.',
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
      desc: 'InHubFlow is the enterprise B2B sales CRM and productivity suite powered by AI SDR Agents. Scale your customer acquisition and optimize your sales calendar on autopilot.',
      status: 'All systems operational (100% uptime)',
      col1Title: 'Platform',
      col1Item1: 'CRM & Workflows',
      col1Item2: 'Contact Management',
      col1Item3: 'AI SDR Agent',
      col1Item4: 'Plans & Pricing',
      col2Title: 'Solutions',
      col2Item1: 'Follow-up Email',
      col2Item2: 'Enterprise Security',
      col2Item3: 'Calendar Sync',
      col2Item4: 'Contact Validation',
      col3Title: 'Clients',
      col3Item1: 'Platform Login',
      col3Item2: 'Testimonials',
      col3Item3: 'Frequently Asked Questions',
      col4Title: 'Get Started',
      col4Desc: 'Scale client acquisition with intelligent B2B sales management.',
      col4Cta: 'View Plans & Start',
      copyright: '© 2026 InHubFlow | AI-Powered B2B Sales Suite - All Rights Reserved.',
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

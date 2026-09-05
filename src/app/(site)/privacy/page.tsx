'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/providers/language';

export default function PrivacyPage() {
  const { locale } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('intro');

  const content = {
    es: {
      badge: 'Gobernanza y Protección de Datos',
      title: 'Política de Privacidad y Tratamiento de Datos',
      subtitle:
        'Compromiso de seguridad, cumplimiento RGPD/LGPD y política de Inteligencia Artificial en InHubFlow',
      updated: 'Última actualización: 5 de Septiembre de 2026',
      contactPrompt: '¿Deseas ejercer tus derechos de privacidad o contactar a nuestro DPO?',
      contactBtn: 'Escribir a Privacidad',
      summaryTitle: 'Pilares Fundamentales de Privacidad',
      summaryItems: [
        {
          title: 'Cero Entrenamiento con tus Datos',
          desc: 'Tus conversaciones, listas y base de conocimiento jamás se usan para entrenar modelos públicos de Inteligencia Artificial.',
        },
        {
          title: 'Aislamiento Multi-Asiento',
          desc: 'Privacidad absoluta por asiento: cada usuario de tu equipo solo visualiza sus propias cuentas y bandeja asignada.',
        },
        {
          title: 'Seguridad Financiera PCI-DSS',
          desc: 'Los pagos son procesados y tokenizados por Lemon Squeezy by Stripe y PayPal. Nunca almacenamos tarjetas de crédito.',
        },
        {
          title: 'Derechos ARCO, GDPR y LGPD',
          desc: 'Acceso, portabilidad y borrado definitivo de tus datos comerciales en cualquier momento escribiendo a privacy@inhubflow.online.',
        },
      ],
      nav: {
        intro: '1. Compromiso y Alcance',
        roles: '2. Roles de Tratamiento (GDPR/LGPD)',
        collected: '3. Datos que Recopilamos',
        aiPolicy: '4. Gobernanza de IA (Gemini Enterprise)',
        purposes: '5. Finalidad del Tratamiento',
        security: '6. Seguridad y Multi-Seat',
        thirdParties: '7. Subencargados y Proveedores',
        rights: '8. Tus Derechos Legales',
        cookies: '9. Cookies y Atribución',
        retention: '10. Retención y Contacto DPO',
      },
      sections: {
        intro: {
          title: '1. Compromiso de Privacidad y Alcance Global',
          p1: 'En InHubFlow ("InHubFlow", "nosotros" o "la Plataforma"), valoramos y respetamos profundamente la privacidad de nuestros clientes, usuarios y de los contactos comerciales procesados a través de nuestros servicios. La presente Política de Privacidad describe de forma exhaustiva, transparente y accesible cómo recopilamos, utilizamos, almacenamos, protegemos y compartimos la información personal cuando usted interactúa con nuestros sitios web (inhubflow.online, b2b.inhubflow.online), aplicaciones y servicios de software.',
          p2: 'Nuestras operaciones están estructuradas para cumplir estrictamente con los estándares internacionales más exigentes de protección de datos, incluyendo el Reglamento General de Protección de Datos de la Unión Europea (RGPD/GDPR), la Ley General de Protección de Datos de Brasil (LGPD - Lei nº 13.709/2018), y las regulaciones locales sobre protección de datos personales de Iberoamérica.',
        },
        roles: {
          title: '2. Roles en el Tratamiento de Datos: Responsable vs. Encargado',
          p1: 'Para una total claridad jurídica bajo el RGPD y la LGPD, InHubFlow actúa bajo dos modalidades distintas según la naturaleza de la información:',
          role1Title: 'A) InHubFlow como Responsable del Tratamiento (Data Controller):',
          role1Desc: 'Actuamos como Responsable respecto a los datos identificativos y de cuenta de nuestros Clientes directos (nombre, correo corporativo, datos de facturación, registros de acceso a la plataforma e historial de soporte). Estos datos son necesarios para gestionar la relación contractual y el cobro de la membresía.',
          role2Title: 'B) InHubFlow como Encargado del Tratamiento (Data Processor):',
          role2Desc: 'Actuamos exclusivamente como Encargado del Tratamiento respecto a las bases de datos de prospectos, perfiles comerciales B2B y contenidos de mensajes que el Cliente carga, sincroniza o genera mediante la plataforma para sus campañas de ventas. El Cliente es el Responsable (Controller) que determina la base jurídica de legitimación comercial (como el interés legítimo B2B o el consentimiento previo) y las instrucciones operativas de sus campañas.',
        },
        collected: {
          title: '3. Datos que Recopilamos y Métodos de Obtención',
          p1: 'Recopilamos únicamente las categorías de información estrictamente necesarias para el funcionamiento óptimo de la Plataforma:',
          list: [
            'Datos de Identificación y Registro: Nombre y apellido, correo electrónico corporativo, nombre de la empresa, país de residencia y cargo profesional.',
            'Datos de Transacciones y Facturación: Dirección fiscal y registro de transacciones. Todas las operaciones de cobro se efectúan a través de Lemon Squeezy by Stripe y PayPal con cifrado bancario y tokenización PCI-DSS Nivel 1. InHubFlow jamás almacena ni tiene acceso a números completos de tarjetas de crédito o códigos CVV.',
            'Datos de Prospección B2B Gestionados por el Usuario: Nombres, cargos corporativos, enlaces a perfiles públicos profesionales de LinkedIn, empresas y correos electrónicos de contacto profesional recopilados por el usuario mediante búsquedas estructuradas y herramientas de enriquecimiento autorizadas.',
            'Datos Técnicos y Telemetría Operativa: Dirección IP (anonimizada o protegida), tipo de navegador, sistema operativo, registros de hora de inicio de sesión, métricas de entregabilidad y logs de diagnóstico del sistema para garantizar la estabilidad técnica.',
          ],
        },
        aiPolicy: {
          title: '4. Gobernanza y Privacidad de la Inteligencia Artificial (IA SDR)',
          badge: 'POLÍTICA DE CERO ENTRENAMIENTO',
          p1: 'InHubFlow integra capacidades avanzadas de Inteligencia Artificial para su Asistente SDR (Sales Development Representative), impulsado por la API empresarial de Google Gemini (Google Enterprise AI Cloud). Adoptamos una estricta política de gobernanza ética de datos en IA:',
          list: [
            'CERO ENTRENAMIENTO CON TUS DATOS: Los datos de tus prospectos, el contenido de los mensajes de tus campañas, las respuestas recibidas y los documentos que cargues en la base de conocimiento del SDR de IA NO se utilizan para entrenar, ajustar, reentrenar o mejorar los modelos públicos de Google Gemini ni ningún modelo fundacional de terceros.',
            'Procesamiento Efímero y Encriptado: Las consultas enviadas al modelo de lenguaje se transmiten a través de túneles cifrados con TLS 1.3 y se procesan de forma transitoria y segura sin persistencia pública.',
            'Control Humano (Human-in-the-Loop): La plataforma cuenta con controles de supervisión y filtros de seguridad (guardrails) determinísticos que detienen la IA o derivan la conversación a un agente humano ante solicitudes complejas o peticiones expresas de asistencia.',
          ],
        },
        purposes: {
          title: '5. Finalidad y Bases Legales del Tratamiento',
          p1: 'Utilizamos la información recopilada para las siguientes finalidades legítimas:',
          list: [
            'Ejecución del Contrato: Crear cuentas de usuario, autenticar accesos, procesar pagos y proporcionar la infraestructura de automatización multicanal y CRM.',
            'Soporte Técnico y Mantenimiento: Responder incidencias, monitorizar la disponibilidad del sistema (99.9% uptime) y prevenir fallas operativas.',
            'Seguridad y Prevención de Abuso: Detectar accesos no autorizados, prevenir el fraude en suscripciones y velar por el cumplimiento de las normas anti-spam.',
            'Cumplimiento Fiscal y Regulatorio: Mantener registros contables exigidos por las autoridades tributarias internacionales.',
          ],
        },
        security: {
          title: '6. Medidas de Seguridad y Aislamiento Multi-Asiento (Multi-Seat Privacy)',
          p1: 'La seguridad de la información es la máxima prioridad en la arquitectura de InHubFlow:',
          list: [
            'Cifrado Integral: Aplicamos cifrado en tránsito mediante protocolos TLS 1.3 / SSL y cifrado en reposo para credenciales y tokens mediante algoritmos AES-256.',
            'Aislamiento de Espacios de Trabajo (Multi-Seat Privacy): Cada usuario, vendedor o embajador invitado a un espacio de trabajo tiene acceso privado exclusivo a su propia cuenta de LinkedIn/Email y bandeja de entrada. Los mensajes y respuestas permanecen confidenciales dentro de su asiento individual, mientras el Workspace Owner conserva el control organizativo y de licencias.',
            'Políticas de Mínimo Privilegio: El acceso interno a los servidores está restringido exclusivamente al personal técnico autorizado bajo autenticación multifactor (MFA) y acuerdos de estricta confidencialidad.',
          ],
        },
        thirdParties: {
          title: '7. Subencargados del Tratamiento y Proveedores de Confianza',
          p1: 'InHubFlow no comercializa, no arrienda ni transfiere bases de datos a empresas de publicidad o intermediarios de datos. Compartimos datos únicamente con proveedores de infraestructura esenciales bajo acuerdos formales de procesamiento de datos (DPA):',
          list: [
            'Procesamiento de Pagos: Lemon Squeezy by Stripe (Merchant of Record global) y PayPal, bajo estándares de cumplimiento PCI-DSS Nivel 1.',
            'Modelos de IA Empresarial: Google Cloud / Gemini API empresarial (entorno seguro con cláusulas de cero retención para entrenamiento).',
            'Infraestructura de Servidores: Servidores en la nube dedicados de alta disponibilidad con cortafuegos y copias de seguridad continuas.',
            'Comunicaciones Transaccionales: Resend y proveedores de envío de correos transaccionales y notificaciones de sistema.',
          ],
        },
        rights: {
          title: '8. Derechos de los Titulares (ARCO, GDPR y LGPD)',
          p1: 'Usted tiene derecho a ejercer el control total sobre su información personal en cualquier momento:',
          list: [
            'Derecho de Acceso: Conocer con exactitud qué datos personales almacenamos sobre usted y obtener una copia.',
            'Derecho de Rectificación: Solicitar la actualización o corrección de datos inexactos o incompletos.',
            'Derecho de Supresión ("Derecho al Olvido"): Exigir la eliminación completa y definitiva de sus datos de nuestros sistemas cuando ya no sean necesarios para la relación contractual.',
            'Derecho de Limitación y Oposición: Oponerse al tratamiento de sus datos para fines específicos o solicitar la limitación temporal del procesamiento.',
            'Derecho de Portabilidad: Solicitar la exportación estructurada de sus datos en formatos interoperables y legibles por máquina (JSON/CSV).',
          ],
          p2: 'Procedimiento Ágil de Ejercicio de Derechos: Para solicitar el ejercicio de cualquiera de estos derechos, basta con enviar un correo electrónico a nuestro buzón oficial de privacidad: privacy@inhubflow.online, indicando su solicitud y el correo asociado a su cuenta. Responderemos en un plazo máximo de 15 a 30 días según lo dispuesto por la legislación aplicable.',
        },
        cookies: {
          title: '9. Uso de Cookies y Tecnologías de Rastreo',
          p1: 'Utilizamos cookies técnicas y analíticas necesarias para el correcto funcionamiento de nuestra plataforma web:',
          list: [
            'Cookies Esenciales: Permiten mantener la sesión autenticada del usuario, recordar preferencias de tema (modo oscuro) y selección de idioma (ES / PT-BR / EN).',
            'Cookies de Atribución de Partners: Empleadas para registrar de forma justa la referencia de consultores y afiliados oficiales de InHubFlow, con una duración de 60 días.',
          ],
          p2: 'Usted puede configurar o desactivar las cookies en cualquier momento desde los ajustes de su navegador (Chrome, Safari, Firefox, Edge). Tenga en cuenta que deshabilitar cookies esenciales puede afectar el inicio de sesión en la plataforma.',
        },
        retention: {
          title: '10. Conservación de Datos, Eliminación y Contacto del DPO',
          p1: 'Plazos de Conservación: Conservamos sus datos personales únicamente durante el tiempo en que mantenga activa su cuenta en InHubFlow o según sea requerido para cumplir con obligaciones legales, tributarias o contractuales aplicables. Al cancelar la cuenta y solicitar la baja definitiva, los datos comerciales son purgados de manera segura e irrecuperable de nuestras bases de datos activas tras el periodo de gracia reglamentario.',
          p2: 'Oficial de Protección de Datos (DPO): Para cualquier duda, inquietud, auditoría de cumplimiento o ejercicio de derechos de privacidad, ponemos a su disposición nuestro canal directo especializado:',
          dpoEmail: 'privacy@inhubflow.online',
          legalEmail: 'legal@inhubflow.online',
        },
      },
    },
    'pt-BR': {
      badge: 'Governança e Proteção de Dados',
      title: 'Política de Privacidade e Tratamento de Dados',
      subtitle:
        'Compromisso com segurança, conformidade com a LGPD/GDPR e governança de Inteligência Artificial no InHubFlow',
      updated: 'Última atualização: 5 de Setembro de 2026',
      contactPrompt: 'Deseja exercer seus direitos de privacidade ou contatar nosso Encarregado (DPO)?',
      contactBtn: 'Escrever para Privacidade',
      summaryTitle: 'Pilares Fundamentais de Privacidade',
      summaryItems: [
        {
          title: 'Zero Treinamento com Seus Dados',
          desc: 'Suas conversas, listas e base de conhecimento jamais são usadas para treinar modelos públicos de Inteligência Artificial.',
        },
        {
          title: 'Isolamento Multi-Assento',
          desc: 'Privacidade total por assento: cada membro da sua equipe visualiza apenas suas próprias contas e caixa de entrada.',
        },
        {
          title: 'Segurança Financeira PCI-DSS',
          desc: 'Pagamentos processados e tokenizados por Lemon Squeezy by Stripe e PayPal. Nunca armazenamos dados de cartão.',
        },
        {
          title: 'Direitos LGPD e GDPR',
          desc: 'Acesso, portabilidade e exclusão definitiva dos seus dados a qualquer momento pelo e-mail privacy@inhubflow.online.',
        },
      ],
      nav: {
        intro: '1. Compromisso e Escopo',
        roles: '2. Papéis no Tratamento (LGPD/GDPR)',
        collected: '3. Dados Coletados',
        aiPolicy: '4. Governança de IA (Gemini Enterprise)',
        purposes: '5. Finalidades do Tratamento',
        security: '6. Segurança e Multi-Seat',
        thirdParties: '7. Subprocessadores e Terceiros',
        rights: '8. Seus Direitos Legais',
        cookies: '9. Cookies e Atribuição',
        retention: '10. Retenção e Contato DPO',
      },
      sections: {
        intro: {
          title: '1. Compromisso de Privacidade e Escopo',
          p1: 'No InHubFlow ("InHubFlow", "nós" ou "a Plataforma"), levamos a segurança e a privacidade das informações corporativas com máxima seriedade. Esta Política de Privacidade explica detalhadamente como tratamos dados pessoais em nossos sites e aplicativos (inhubflow.online e b2b.inhubflow.online).',
          p2: 'Nossas operações são estruturadas em estrita observância à Lei Geral de Proteção de Dados Pessoais do Brasil (LGPD - Lei nº 13.709/2018) e ao Regulamento Geral de Proteção de Dados da União Europeia (GDPR).',
        },
        roles: {
          title: '2. Papéis no Tratamento: Controlador vs. Operador',
          p1: 'Para fins de conformidade com a LGPD e o GDPR:',
          role1Title: 'A) InHubFlow como Controlador de Dados:',
          role1Desc: 'Somos Controladores em relação aos dados cadastrais e de cobrança dos nossos Clientes diretos (nome, e-mail de faturamento, credenciais e registros de atendimento).',
          role2Title: 'B) InHubFlow como Operador de Dados:',
          role2Desc: 'Atuamos estritamente como Operador em relação às listas de contatos, dados de leads B2B e mensagens que o Cliente insere ou automatiza no sistema. O Cliente é o Controlador responsável por fundamentar a base legal de suas campanhas comerciais (como legítimo interesse ou consentimento).',
        },
        collected: {
          title: '3. Informações Coletadas',
          p1: 'Coletamos somente os dados essenciais para o funcionamento da tecnologia:',
          list: [
            'Dados Cadastrais: Nome, e-mail corporativo, empresa, país e cargo profissional.',
            'Dados de Pagamento: Processados com criptografia bancária por Lemon Squeezy by Stripe e PayPal (PCI-DSS Nível 1). O InHubFlow não tem acesso a números de cartão.',
            'Dados de Prospecção B2B do Cliente: Nomes, cargos, links de perfis públicos do LinkedIn e e-mails profissionais inseridos pelo Cliente para envio de campanhas.',
            'Dados Técnicos: Endereço IP anonimizado, navegador, registros de auditoria e métricas de desempenho para manutenção da segurança operacional.',
          ],
        },
        aiPolicy: {
          title: '4. Governança de Inteligência Artificial (IA SDR e Gemini Enterprise)',
          badge: 'ZERO TREINAMENTO COM DADOS DO CLIENTE',
          p1: 'Nosso Assistente SDR utiliza a API corporativa do Google Gemini sob rígidos padrões de sigilo:',
          list: [
            'ZERO TREINAMENTO: Suas mensagens, respostas de prospects e documentos de apoio NUNCA são utilizados para treinar ou aprimorar modelos públicos de IA.',
            'Trânsito Criptografado: Toda comunicação com os modelos é efetuada em canais cifrados com TLS 1.3 de forma efêmera.',
            'Supervisão Humana: Filtros determinísticos garantem a intervenção de operadores humanos sempre que solicitado ou necessário.',
          ],
        },
        purposes: {
          title: '5. Finalidades do Tratamento',
          p1: 'Utilizamos os dados para:',
          list: [
            'Prestação do serviço SaaS contratado, sincronização multicanal e CRM.',
            'Suporte ao cliente, monitoramento de estabilidade e segurança do sistema.',
            'Prevenção contra fraude, spam e cumprimento de normas fiscais.',
          ],
        },
        security: {
          title: '6. Segurança e Isolamento de Assentos (Multi-Seat Privacy)',
          p1: 'Adotamos padrões modernos de proteção cibernética:',
          list: [
            'Criptografia de ponta a ponta em trânsito (TLS 1.3) e em repouso (AES-256).',
            'Isolamento Multi-Assento: Cada membro da equipe possui seu próprio ambiente restrito e só visualiza as contas e conversas a ele designadas.',
            'Acesso restrito a servidores com autenticação multifator (MFA).',
          ],
        },
        thirdParties: {
          title: '7. Subprocessadores e Parceiros de Infraestrutura',
          p1: 'Não comercializamos nem compartilhamos dados com terceiros para fins de marketing. Trabalhamos apenas com parceiros essenciais:',
          list: [
            'Pagamentos: Lemon Squeezy by Stripe e PayPal.',
            'Processamento de IA: Google Cloud / Gemini Enterprise API.',
            'Infraestrutura em Nuvem: Servidores seguros de alta disponibilidade com backups diários.',
            'Envio de E-mails do Sistema: Provedores transacionais confiáveis (Resend).',
          ],
        },
        rights: {
          title: '8. Direitos dos Titulares de Dados (LGPD e GDPR)',
          p1: 'Você possui direitos plenos sobre suas informações:',
          list: [
            'Confirmação de existência de tratamento e acesso aos dados.',
            'Correção de dados incompletos ou inexatos.',
            'Anonimização, bloqueio ou eliminação de dados desnecessários.',
            'Portabilidade dos dados em formatos padrão (JSON/CSV).',
            'Revogação de consentimento e eliminação definitiva de conta.',
          ],
          p2: 'Para exercer seus direitos, envie um e-mail para: privacy@inhubflow.online.',
        },
        cookies: {
          title: '9. Uso de Cookies e Tecnologias de Rastreamento',
          p1: 'Utilizamos cookies essenciais de sessão e cookies de atribuição de parceiros para o correto funcionamento da plataforma:',
          list: [
            'Cookies Essenciais: Mantêm a sessão autenticada do usuário, tema e preferências de idioma (ES / PT-BR / EN).',
            'Cookies de Atribuição de Parceiros: Utilizados para creditar comissões aos parceiros oficiais (duração de 60 dias).',
          ],
          p2: 'Você pode gerenciar ou bloquear cookies a qualquer momento nas configurações do seu navegador.',
        },
        retention: {
          title: '10. Retenção de Dados e Contato do Encarregado (DPO)',
          p1: 'Os dados permanecem armazenados enquanto a conta estiver ativa. Ao solicitar o cancelamento e exclusão, os registros são expurgados de forma definitiva.',
          p2: 'Canal oficial para dúvidas de privacidade e contato do DPO:',
          dpoEmail: 'privacy@inhubflow.online',
          legalEmail: 'legal@inhubflow.online',
        },
      },
    },
    en: {
      badge: 'Data Governance & Privacy Protection',
      title: 'Privacy Policy & Data Processing Agreement',
      subtitle:
        'Commitment to enterprise security, GDPR/LGPD compliance, and transparent AI data governance at InHubFlow',
      updated: 'Last updated: September 5, 2026',
      contactPrompt: 'Need to exercise your privacy rights or contact our Data Protection Officer?',
      contactBtn: 'Email Privacy Team',
      summaryTitle: 'Key Privacy Commitments',
      summaryItems: [
        {
          title: 'Zero Training on Customer Data',
          desc: 'Your conversations, prospect lists, and knowledge bases are NEVER used to train public Artificial Intelligence models.',
        },
        {
          title: 'Multi-Seat Privacy Isolation',
          desc: 'Complete seat-level privacy: each sales rep only has visibility over their own connected accounts and inbox.',
        },
        {
          title: 'PCI-DSS Bank-Grade Security',
          desc: 'Payments handled and tokenized by Lemon Squeezy by Stripe and PayPal. We never store credit card numbers.',
        },
        {
          title: 'GDPR & LGPD Compliance',
          desc: 'Full access, portability, and permanent erasure rights upon request at privacy@inhubflow.online.',
        },
      ],
      nav: {
        intro: '1. Commitment & Scope',
        roles: '2. Data Roles (GDPR/LGPD)',
        collected: '3. Data Collected',
        aiPolicy: '4. AI Governance (Gemini Enterprise)',
        purposes: '5. Processing Purposes',
        security: '6. Security & Multi-Seat',
        thirdParties: '7. Subprocessors & Partners',
        rights: '8. Your Legal Rights',
        cookies: '9. Cookies & Attribution',
        retention: '10. Retention & DPO Contact',
      },
      sections: {
        intro: {
          title: '1. Privacy Commitment & Global Scope',
          p1: 'At InHubFlow ("InHubFlow", "we", "us", or "the Platform"), we take customer confidentiality and data protection with utmost rigor. This Privacy Policy details how we collect, process, store, and safeguard information across our websites (inhubflow.online, b2b.inhubflow.online) and software suite.',
          p2: 'Our platform operations comply with global data protection frameworks, including the EU General Data Protection Regulation (GDPR), Brazil\'s Lei Geral de Proteção de Dados (LGPD), and regional B2B privacy standards.',
        },
        roles: {
          title: '2. Data Controller vs. Data Processor Roles',
          p1: 'Under GDPR and LGPD provisions, InHubFlow functions under two distinct capacities:',
          role1Title: 'A) InHubFlow as Data Controller:',
          role1Desc: 'We act as Data Controller regarding direct customer account and billing details (name, corporate billing email, subscription logs, and support correspondence).',
          role2Title: 'B) InHubFlow as Data Processor:',
          role2Desc: 'We act strictly as a Data Processor concerning the prospect lists, B2B contact records, and outbound messaging contents processed by our Customers. Customers act as Data Controllers determining legitimate interest or consent for their commercial outreach.',
        },
        collected: {
          title: '3. Categories of Information We Collect',
          p1: 'We collect only what is strictly necessary for software execution:',
          list: [
            'Account Registration Data: Name, corporate email address, organization name, country, and job title.',
            'Billing & Transaction Data: Invoicing addresses and payment transaction records managed via Lemon Squeezy by Stripe and PayPal with Level 1 PCI-DSS tokenization. InHubFlow never stores raw payment card numbers.',
            'B2B Prospecting Data Managed by Users: Names, professional job titles, public LinkedIn profile URLs, company domains, and corporate email addresses imported or queried by customers for business communications.',
            'Technical & Telemetry Data: Anonymized IP addresses, browser types, session timestamps, and system diagnostic logs for infrastructure stability.',
          ],
        },
        aiPolicy: {
          title: '4. Artificial Intelligence Data Governance (AI SDR & Gemini Enterprise)',
          badge: 'ZERO AI MODEL TRAINING GUARANTEE',
          p1: 'Our AI SDR assistant utilizes Google Gemini Enterprise APIs under enterprise-grade data isolation:',
          list: [
            'ZERO MODEL TRAINING: Customer conversations, prospect interactions, and custom knowledge base documents are NEVER used to train, re-train, or fine-tune public foundation AI models.',
            'Ephemeral & Encrypted Queries: Inferences are executed over TLS 1.3 encrypted pipelines and processed ephemerally without persistent public exposure.',
            'Deterministic Human Hand-Off: Built-in safety guardrails automatically transfer conversations to human sales reps upon explicit user requests or sensitive topics.',
          ],
        },
        purposes: {
          title: '5. Processing Purposes & Legal Basis',
          p1: 'Information is processed for legitimate operational purposes:',
          list: [
            'Contractual SaaS delivery: account creation, authentication, multichannel outreach, and CRM synchronization.',
            'Technical support, service uptime monitoring (99.9% target), and security diagnostics.',
            'Anti-spam and fraud prevention compliance.',
            'Statutory tax and financial accounting obligations.',
          ],
        },
        security: {
          title: '6. Enterprise Security & Multi-Seat Isolation',
          p1: 'Robust cybersecurity protections safeguard customer data:',
          list: [
            'End-to-end transport encryption (TLS 1.3) and AES-256 encryption for stored credentials and access tokens.',
            'Multi-Seat Privacy Isolation: Each invited teammate operates in an isolated environment with exclusive visibility over their designated accounts and conversation threads.',
            'Strict least-privilege administrative access controls with mandatory multi-factor authentication (MFA).',
          ],
        },
        thirdParties: {
          title: '7. Authorized Subprocessors & Infrastructure Partners',
          p1: 'InHubFlow does not sell or rent data. We work exclusively with tier-1 enterprise infrastructure providers under rigorous Data Processing Agreements (DPAs):',
          list: [
            'Merchant of Record & Payments: Lemon Squeezy by Stripe and PayPal.',
            'Enterprise AI Processing: Google Cloud / Gemini Enterprise API.',
            'Cloud Infrastructure: Dedicated high-availability secure cloud servers with automated daily backups.',
            'Transactional Email Delivery: Resend and trusted email infrastructure gateways.',
          ],
        },
        rights: {
          title: '8. Data Subject Rights (GDPR & LGPD)',
          p1: 'You retain full statutory rights over your personal data:',
          list: [
            'Right of Access: Obtain confirmation and a complete copy of stored personal records.',
            'Right to Rectification: Correct inaccurate or incomplete profile information.',
            'Right to Erasure ("Right to Be Forgotten"): Permanently delete your data upon account termination.',
            'Right to Restriction & Objection: Object to specific processing activities.',
            'Right to Portability: Export your customer data in structured, machine-readable formats (JSON/CSV).',
          ],
          p2: 'To submit a request, simply email our dedicated privacy desk at: privacy@inhubflow.online. Requests are fulfilled within 15 to 30 calendar days.',
        },
        cookies: {
          title: '9. Cookies & Attribution Tracking',
          p1: 'We utilize essential session cookies and operational partner cookies necessary for platform functionality:',
          list: [
            'Essential Cookies: Maintain authenticated user sessions, dark mode preference, and language settings (ES / PT-BR / EN).',
            'Partner Attribution Cookies: Track verified InHubFlow partner referrals (60-day attribution lifespan).',
          ],
          p2: 'You may adjust cookie permissions anytime within your web browser settings.',
        },
        retention: {
          title: '10. Data Retention & Data Protection Officer (DPO)',
          p1: 'Data is maintained while your account remains active. Upon subscription cancellation and deletion request, customer records are securely purged in accordance with data retention standards.',
          p2: 'Official DPO & Privacy Desk Contact:',
          dpoEmail: 'privacy@inhubflow.online',
          legalEmail: 'legal@inhubflow.online',
        },
      },
    },
  };

  const current = content[locale as keyof typeof content] || content.es;
  const s = current.sections;

  const sectionKeys = [
    { id: 'intro', label: current.nav.intro },
    { id: 'roles', label: current.nav.roles },
    { id: 'collected', label: current.nav.collected },
    { id: 'aiPolicy', label: current.nav.aiPolicy },
    { id: 'purposes', label: current.nav.purposes },
    { id: 'security', label: current.nav.security },
    { id: 'thirdParties', label: current.nav.thirdParties },
    { id: 'rights', label: current.nav.rights },
    { id: 'cookies', label: current.nav.cookies },
    { id: 'retention', label: current.nav.retention },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0F1D] text-gray-200">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none w-full max-w-7xl h-[450px] overflow-hidden opacity-30">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#3B2EFF] via-[#6366F1] to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {current.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {current.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-3">
            {current.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
            <span>🛡️</span>
            <span>{current.updated}</span>
          </div>
        </div>

        {/* Executive Highlights Grid */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#111827]/80 border border-gray-800/80 backdrop-blur-md shadow-xl">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-emerald-400">🔒</span>
            {current.summaryTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {current.summaryItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-emerald-500/40 transition duration-200"
              >
                <div className="text-emerald-400 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item.title}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Layout with Sidebar Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 xl:gap-12 items-start">
          {/* Sticky Navigation Sidebar */}
          <aside className="sticky top-24 hidden lg:block p-4 rounded-xl bg-[#111827]/60 border border-gray-800 backdrop-blur-sm">
            <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
              Índice de Privacidad
            </span>
            <nav className="space-y-1">
              {sectionKeys.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-medium transition ${
                    activeSection === sec.id
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-gray-800/80 px-2">
              <p className="text-xs text-gray-400 mb-3">
                {current.contactPrompt}
              </p>
              <a
                href="mailto:privacy@inhubflow.online"
                className="block text-center text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-sm"
              >
                {current.contactBtn}
              </a>
            </div>
          </aside>

          {/* Privacy Clauses Text Body */}
          <div className="space-y-10 text-gray-300 leading-relaxed">
            {/* 1. Intro */}
            <section
              id="intro"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.intro.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">{s.intro.p1}</p>
              <p className="text-sm text-gray-300">{s.intro.p2}</p>
            </section>

            {/* 2. Roles */}
            <section
              id="roles"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.roles.title}
              </h2>
              <p className="text-sm text-gray-300 mb-5">{s.roles.p1}</p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800">
                  <h3 className="text-sm font-semibold text-emerald-400 mb-1">
                    {s.roles.role1Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {s.roles.role1Desc}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800">
                  <h3 className="text-sm font-semibold text-indigo-400 mb-1">
                    {s.roles.role2Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {s.roles.role2Desc}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Collected Data */}
            <section
              id="collected"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.collected.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">{s.collected.p1}</p>
              <ul className="space-y-3">
                {s.collected.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-emerald-400 shrink-0 mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. AI Policy */}
            <section
              id="aiPolicy"
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-[#111827]/60 border border-indigo-900/50 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {s.aiPolicy.badge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.aiPolicy.title}
              </h2>
              <p className="text-sm text-gray-300 mb-5">{s.aiPolicy.p1}</p>
              <ul className="space-y-3">
                {s.aiPolicy.list.map((rule, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-indigo-400 shrink-0">✦</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Purposes */}
            <section
              id="purposes"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.purposes.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">{s.purposes.p1}</p>
              <ul className="space-y-2.5">
                {s.purposes.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-emerald-400 shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. Security & Multi-Seat */}
            <section
              id="security"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.security.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">{s.security.p1}</p>
              <ul className="space-y-3">
                {s.security.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-emerald-400 shrink-0">🛡️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. Subprocessors */}
            <section
              id="thirdParties"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.thirdParties.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {s.thirdParties.p1}
              </p>
              <ul className="space-y-2.5">
                {s.thirdParties.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-indigo-400 shrink-0">🏢</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 8. Your Rights */}
            <section
              id="rights"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.rights.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">{s.rights.p1}</p>
              <ul className="space-y-2.5 mb-5">
                {s.rights.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-emerald-400 shrink-0">⚖️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs sm:text-sm text-emerald-200">
                <strong className="block font-semibold mb-1 text-emerald-100">
                  Ejercicio Inmediato de Derechos:
                </strong>
                {s.rights.p2}
              </div>
            </section>

            {/* 9. Cookies */}
            <section
              id="cookies"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.cookies.title}
              </h2>
              <p className="text-sm text-gray-300 mb-3">{s.cookies.p1}</p>
              <ul className="space-y-2 mb-4">
                {s.cookies.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-amber-400 shrink-0">🍪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-gray-400">{s.cookies.p2}</p>
            </section>

            {/* 10. Retention & DPO */}
            <section
              id="retention"
              className="p-6 sm:p-8 rounded-2xl bg-[#111827]/50 border border-gray-800/70"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {s.retention.title}
              </h2>
              <div className="space-y-3 text-sm text-gray-300 mb-6">
                <p>{s.retention.p1}</p>
                <p>{s.retention.p2}</p>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-gray-900 border border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Oficina de Privacidad y DPO InHubFlow
                  </h4>
                  <p className="text-xs text-gray-400">
                    Atención a peticiones de derechos RGPD / LGPD
                  </p>
                </div>
                <div className="flex gap-2.5 flex-wrap">
                  <a
                    href={`mailto:${s.retention.dpoEmail}`}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition shadow-sm"
                  >
                    {s.retention.dpoEmail}
                  </a>
                  <Link
                    href="/terms"
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition border border-white/20"
                  >
                    Ver Términos y Condiciones
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

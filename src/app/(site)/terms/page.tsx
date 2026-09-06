'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/providers/language';

export default function TermsPage() {
  const { locale } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('intro');

  const content = {
    es: {
      badge: 'Documento Legal Oficial',
      title: 'Términos y Condiciones de Servicio',
      subtitle: 'Contrato de licencia de software y términos de uso de la plataforma InHubFlow',
      updated: 'Última actualización: 5 de Septiembre de 2026',
      contactPrompt: '¿Tienes dudas sobre nuestros términos legales?',
      contactBtn: 'Contactar a Asuntos Legales',
      summaryTitle: 'Resumen Ejecutivo Clave',
      summaryItems: [
        {
          title: 'Servicio SaaS B2B',
          desc: 'Plataforma para prospección comercial ética, automatización multicanal (LinkedIn/Email) y Asistente SDR con Inteligencia Artificial.',
        },
        {
          title: 'Facturación Segura y Transparente',
          desc: 'Pagos gestionados por Lemon Squeezy by Stripe y PayPal con cifrado bancario. Renovación periódica automática.',
        },
        {
          title: 'Cancelación sin Trabas',
          desc: 'Puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario o desde el portal de facturación.',
        },
        {
          title: 'Propiedad de tus Datos',
          desc: 'Tus listas de contactos, prospectos y bases de conocimiento son 100% de tu propiedad y nunca se comparten.',
        },
      ],
      nav: {
        intro: '1. Aceptación y Alcance',
        services: '2. Descripción del Servicio',
        accounts: '3. Cuentas y Seguridad',
        acceptableUse: '4. Uso Aceptable y Anti-Spam',
        billing: '5. Pagos y Renovación',
        cancellation: '6. Cancelación y Reembolsos',
        partners: '7. Programa de Partners',
        intellectual: '8. Propiedad Intelectual',
        liability: '9. Garantías y Responsabilidad',
        law: '10. Ley Aplicable y Contacto',
      },
      sections: {
        intro: {
          title: '1. Aceptación de los Términos y Alcance',
          p1: 'Bienvenido a InHubFlow ("InHubFlow", "nosotros", "nuestro" o "la Plataforma"). Al registrar una cuenta, acceder o utilizar nuestros sitios web (incluidos inhubflow.online y b2b.inhubflow.online), extensiones, APIs o servicios asociados, usted ("Usuario", "Cliente" o "Suscriptor") celebra un acuerdo legal vinculante y acepta cumplir sin reservas con los presentes Términos y Condiciones de Servicio.',
          p2: 'Si está contratando en nombre de una persona jurídica, empresa u organización comercial, declara y garantiza que posee las facultades legales suficientes para vincular a dicha entidad a estos Términos. Si no está de acuerdo con la totalidad de estas condiciones, no debe acceder ni utilizar la Plataforma.',
        },
        services: {
          title: '2. Descripción de la Plataforma y Servicios',
          p1: 'InHubFlow es una suite tecnológica empresarial de Software as a Service (SaaS) especializada en prospección comercial B2B, productividad comercial y calificación de leads. Los servicios incluyen, entre otros:',
          list: [
            'Búsqueda y prospección B2B mediante técnicas de consulta estructurada (Google X-Ray) y enriquecimiento de perfiles corporativos.',
            'Gestión centralizada de campañas de comunicación multicanal a través de cuentas de LinkedIn y cuentas de correo corporativo autorizadas.',
            'Asistente SDR de Inteligencia Artificial (impulsado por modelos empresariales de Google Gemini) para análisis de intención, respuesta a preguntas frecuentes basadas en fuentes de conocimiento y precalificación de prospectos.',
            'Agendamiento automatizado de citas comerciales sincronizado con calendarios externos (Calendly).',
            'CRM de oportunidades de venta y métricas de desempeño comercial en tiempo real.',
          ],
          p2: 'InHubFlow se reserva el derecho de mejorar, actualizar o incorporar nuevas funcionalidades en la Plataforma en cualquier momento con el fin de optimizar el rendimiento y la seguridad del servicio.',
        },
        accounts: {
          title: '3. Registro de Cuentas, Credenciales y Seguridad Multi-Asiento',
          p1: 'Para utilizar InHubFlow, el Cliente debe registrarse proporcionando datos veraces, actualizados y corporativos. Cada usuario es responsable exclusivo de mantener la confidencialidad de sus credenciales de acceso y de toda la actividad ejecutada bajo su cuenta.',
          p2: 'Privacidad y Aislamiento de Asientos (Multi-Seat Privacy): InHubFlow incorpora una arquitectura de aislamiento estricto de espacios de trabajo. Cada vendedor, representante comercial o embajador invitado a un espacio de trabajo tiene acceso individual e independiente a su cuenta y bandeja de mensajes, garantizando la confidencialidad interna del equipo. El propietario del Workspace conserva las facultades de administración general y gestión de licencias.',
          p3: 'Queda terminantemente prohibido revender, sublicenciar, compartir credenciales con personas ajenas a la organización contratante o permitir el acceso simultáneo no autorizado.',
        },
        acceptableUse: {
          title: '4. Política de Uso Aceptable, Anti-Spam y Límites de Redes de Terceros',
          p1: 'InHubFlow está diseñado exclusivamente para prospección comercial B2B ética, legítima y de alto valor agregado entre profesionales y empresas.',
          rulesTitle: 'Obligaciones del Usuario y Conductas Prohibidas:',
          list: [
            'Cumplimiento de las normativas vigentes contra el correo electrónico no deseado (CAN-SPAM Act, directiva europea ePrivacy y regulaciones locales sobre comunicaciones comerciales B2B con interés legítimo).',
            'Prohibición de emitir mensajes masivos indiscriminados, fraudulentos, engañosos, denigrantes, de odio o que infrinjan derechos de terceros.',
            'Respeto irrestricto de las solicitudes de "Baja" (Opt-Out / Unsubscribe / Do-Not-Contact) emitidas por cualquier prospecto.',
            'No intentar vulnerar, eludir o sobrecargar la infraestructura de la Plataforma ni realizar ingeniería inversa del código fuente.',
          ],
          alertTitle: 'Límites de Seguridad y Algoritmos de Protección Humana:',
          alertDesc: 'InHubFlow implementa algoritmos de cadencia humana con límites diarios recomendados y pausas naturales para salvaguardar las cuentas de LinkedIn del Cliente. No obstante, el Cliente reconoce que LinkedIn y otras plataformas de terceros poseen sus propios términos de servicio independientes. El Cliente es el único responsable de definir los volúmenes de sus campañas y de utilizar la Plataforma dentro de las prácticas comerciales prudentes. InHubFlow no asume responsabilidad por restricciones o sanciones impuestas por terceros derivadas de configuraciones abusivas implementadas por el Usuario.',
        },
        billing: {
          title: '5. Precios, Pagos, Renovación y Facturación',
          p1: 'El acceso a las funciones completas de InHubFlow requiere la contratación de una suscripción de pago (mensual o anual) según los planes vigentes en nuestro sitio web.',
          p2: 'Procesamiento de Pagos Seguro: Todas las transacciones son gestionadas a través de nuestras pasarelas autorizadas: Lemon Squeezy by Stripe (que actúa como Merchant of Record oficial internacional) y PayPal. InHubFlow no almacena en sus servidores números completos de tarjetas ni códigos de seguridad CVV.',
          p3: 'Renovación Automática: Las suscripciones se renuevan de manera automática y periódica al finalizar cada ciclo contratado (mensual o anual) utilizando el método de pago registrado, a menos que el Cliente decida cancelar la suscripción antes de la fecha de renovación.',
          p4: 'Impuestos y Divisas: Los precios indicados no incluyen los impuestos aplicables (como IVA o VAT), los cuales son calculados y recaudados automáticamente por el Merchant of Record conforme a la legislación fiscal del país de residencia del comprador.',
        },
        cancellation: {
          title: '6. Cancelación de Membresía y Política de Reembolsos',
          p1: 'Autonomía Total de Cancelación: El Cliente tiene total libertad para cancelar su suscripción en cualquier momento, sin penalizaciones ni trámites burocráticos. La cancelación puede realizarse directamente desde la configuración de la cuenta en la plataforma o a través del enlace de gestión de suscripción emitido por Lemon Squeezy en cada recibo de pago.',
          p2: 'Efecto de la Cancelación: Al solicitar la cancelación, el servicio permanecerá totalmente activo y accesible hasta el último día del ciclo de facturación pagado en curso. No se realizarán cobros posteriores.',
          p3: 'Política de Reembolsos: InHubFlow es un servicio digital de software y consumo de infraestructura en la nube con asignación inmediata de recursos, créditos de inteligencia artificial y enriquecimiento de datos. Por lo tanto, no se otorgan reembolsos por periodos parciales ya consumidos. Si el Cliente experimenta un fallo técnico crítico imputable a la plataforma que le impida el uso del servicio y que nuestro equipo de soporte no pueda solucionar en un plazo razonable tras ser notificado, se evaluará el reembolso proporcional correspondiente.',
        },
        partners: {
          title: '7. Términos del Programa Oficial de Partners (Afiliados)',
          p1: 'InHubFlow ofrece un Programa Oficial de Partners destinado a consultores, agencias y profesionales B2B que recomiendan nuestra tecnología:',
          list: [
            'Comisión Recurrente del 50%: El Partner recibe una comisión del 50% sobre las mensualidades netas efectivamente cobradas a cada cliente que se suscriba a través de su enlace oficial de recomendación, durante todo el tiempo que la cuenta permanezca activa.',
            'Atribución de Cookie de 60 Días: Las visitas referidas a través del enlace del Partner cuentan con una ventana de atribución de 60 días para registrar la conversión.',
            'Cupones Exclusivos: El Partner puede disponer de códigos de descuento promocionales (ejemplo: cupón 20% OFF) para facilitar la conversión de sus clientes.',
            'Prácticas Desleales Prohibidas: Queda estrictamente prohibido el auto-referido fraudulento (utilizar el enlace propio para obtener descuentos en cuentas personales), el uso de publicidad engañosa, el envío de spam masivo o la puja en motores de búsqueda sobre la marca registrada "InHubFlow" (Brand Bidding). El incumplimiento ocasionará la baja inmediata del programa y la retención de comisiones indebidas.',
          ],
        },
        intellectual: {
          title: '8. Propiedad Intelectual y Titularidad de Datos',
          p1: 'Propiedad de InHubFlow: La Plataforma, sus interfaces visuales, códigos fuente, algoritmos propietarios, Asistentes de IA, logotipos, marcas comerciales y documentación técnica son propiedad exclusiva de InHubFlow y están protegidos por las leyes internacionales de propiedad intelectual y derechos de autor.',
          p2: 'Propiedad de los Datos del Cliente: El Cliente retiene el 100% de la titularidad y derechos sobre sus bases de datos, contactos comerciales cargados, contenidos de campañas, mensajes redactados y documentos incorporados a la base de conocimiento del SDR de IA. InHubFlow no adquiere ningún derecho sobre los datos del Cliente salvo la licencia limitada y no exclusiva necesaria para prestar los servicios contratados.',
        },
        liability: {
          title: '9. Garantías, Disponibilidad y Limitación de Responsabilidad',
          p1: 'Disponibilidad del Servicio: InHubFlow adopta medidas técnicas avanzadas para procurar una disponibilidad de la Plataforma superior al 99.9%. Sin embargo, el servicio se entrega "tal cual" ("as is") y "según disponibilidad", pudiendo estar sujeto a suspensiones temporales por mantenimiento programado o causas de fuerza mayor fuera de nuestro control razonable.',
          p2: 'Interoperabilidad con Terceros: InHubFlow no controla ni asume responsabilidad por modificaciones imprevistas en los protocolos, políticas de uso o disponibilidad de servicios prestados por terceros (incluidos LinkedIn, proveedores de correo electrónico o motores de búsqueda).',
          p3: 'Límite de Responsabilidad Financiera: En la medida máxima permitida por la ley aplicable, la responsabilidad total acumulada de InHubFlow frente al Cliente por cualquier reclamo derivado del uso de la Plataforma estará estrictamente limitada al importe total efectivamente abonado por el Cliente en el mes inmediatamente anterior al hecho causante de la reclamación.',
        },
        law: {
          title: '10. Modificaciones, Ley Aplicable y Canales de Contacto',
          p1: 'Modificaciones: InHubFlow se reserva la facultad de actualizar estos Términos periódicamente para reflejar cambios legislativos, técnicos o comerciales. Las modificaciones sustanciales serán notificadas a través de la plataforma o por correo electrónico. El uso continuado del servicio tras la publicación de los cambios constituye la aceptación de los mismos.',
          p2: 'Resolución de Controversias: Cualquier disputa o controversia será resuelta prioritariamente mediante negociación amistosa y de buena fe entre las partes. De no alcanzarse acuerdo, se someterá a los tribunales competentes conforme a la legislación aplicable del domicilio de InHubFlow.',
          p3: 'Contacto Legal Oficial: Para notificaciones legales, aclaraciones sobre estos términos o consultas contractuales, puede comunicarse a través del correo oficial: legal@inhubflow.online.',
        },
      },
    },
    'pt-BR': {
      badge: 'Documento Legal Oficial',
      title: 'Termos e Condições de Serviço',
      subtitle: 'Contrato de licença de software e termos de uso da plataforma InHubFlow',
      updated: 'Última atualização: 5 de Setembro de 2026',
      contactPrompt: 'Dúvidas sobre nossos termos legais?',
      contactBtn: 'Contatar Assuntos Legais',
      summaryTitle: 'Resumo Executivo Chave',
      summaryItems: [
        {
          title: 'Serviço SaaS B2B',
          desc: 'Plataforma para prospecção comercial ética, automação multicanal (LinkedIn/Email) e Assistente SDR com Inteligência Artificial.',
        },
        {
          title: 'Faturamento Seguro e Transparente',
          desc: 'Pagamentos processados por Lemon Squeezy by Stripe e PayPal com criptografia bancária. Renovação automática periódica.',
        },
        {
          title: 'Cancelamento Sem Burocracia',
          desc: 'Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel de controle ou portal de pagamentos.',
        },
        {
          title: 'Propriedade dos Seus Dados',
          desc: 'Suas listas de contatos, leads e bases de conhecimento são 100% de sua propriedade e nunca são compartilhadas.',
        },
      ],
      nav: {
        intro: '1. Aceitação e Escopo',
        services: '2. Descrição do Serviço',
        accounts: '3. Contas e Segurança',
        acceptableUse: '4. Uso Aceitável e Anti-Spam',
        billing: '5. Pagamentos e Renovação',
        cancellation: '6. Cancelamento e Reembolsos',
        partners: '7. Programa de Parceiros',
        intellectual: '8. Propriedade Intelectual',
        liability: '9. Garantias e Responsabilidade',
        law: '10. Lei Aplicável e Contato',
      },
      sections: {
        intro: {
          title: '1. Aceitação dos Termos e Escopo',
          p1: 'Bem-vindo ao InHubFlow ("InHubFlow", "nós" ou "a Plataforma"). Ao cadastrar uma conta, acessar ou utilizar nossos sites (incluindo inhubflow.online e b2b.inhubflow.online), extensões, APIs ou serviços associados, você ("Usuário", "Cliente" ou "Assinante") celebra um contrato legal vinculativo e concorda em cumprir estes Termos e Condições de Serviço.',
          p2: 'Se estiver contratando em nome de uma empresa ou pessoa jurídica, você declara ter poderes suficientes para vincular tal entidade. Caso discorde de qualquer disposição, não utilize a Plataforma.',
        },
        services: {
          title: '2. Descrição da Plataforma e Serviços',
          p1: 'O InHubFlow é uma suíte tecnológica SaaS B2B para produtividade de vendas e prospecção ativa qualificada:',
          list: [
            'Prospecção corporativa avançada por meio de buscas estruturadas (Google X-Ray) e enriquecimento de perfis profissionais.',
            'Disparo de campanhas multicanal automatizadas em contas autorizadas do LinkedIn e e-mails corporativos.',
            'Assistente SDR de Inteligência Artificial (Google Gemini Enterprise) para qualificação de interesse e respostas automáticas contextualizadas.',
            'Agendamento automático de videoconferências integrado com calendários externos (Calendly).',
            'CRM de vendas integrado com funil de oportunidades e relatórios de desempenho em tempo real.',
          ],
          p2: 'O InHubFlow reserva-se o direito de atualizar e aprimorar continuamente as funcionalidades da plataforma.',
        },
        accounts: {
          title: '3. Contas, Credenciais e Isolamento Multi-Assento (Multi-Seat Privacy)',
          p1: 'O Cliente deve fornecer dados reais e corporativos no cadastro, sendo o único responsável por resguardar suas senhas.',
          p2: 'Isolamento de Assentos: Cada vendedor ou membro da equipe convidado para um Workspace possui acesso privado e isolado à sua própria conta conectada e caixa de mensagens, garantindo sigilo interno. O Administrador mantém o gerenciamento de assinaturas.',
          p3: 'É proibido compartilhar credenciais com terceiros ou sublicenciar a conta.',
        },
        acceptableUse: {
          title: '4. Uso Aceitável, Anti-Spam e Limites de Plataformas Terceiras',
          p1: 'O InHubFlow destina-se estritamente à comunicação comercial ética entre empresas (B2B com legítimo interesse).',
          rulesTitle: 'Práticas Proibidas:',
          list: [
            'Envio de spam massivo, esquemas fraudulentos, assédio ou infração de direitos.',
            'Descumprimento de pedidos de cancelamento ou opt-out de destinatários.',
            'Tentativas de engenharia reversa ou ataques à infraestrutura do sistema.',
          ],
          alertTitle: 'Cadência Humana e Algoritmos de Proteção:',
          alertDesc: 'O InHubFlow possui pausas humanas e limites diários de segurança para preservar as contas de LinkedIn do Cliente. O Cliente é o responsável final pelo volume de envios e pelo cumprimento das regras do LinkedIn.',
        },
        billing: {
          title: '5. Preços, Pagamentos e Renovação Periódica',
          p1: 'O acesso aos recursos exige uma assinatura ativa (mensal ou anual).',
          p2: 'Processamento Seguro: Pagamentos processados por Lemon Squeezy by Stripe (Merchant of Record oficial) e PayPal, com certificação bancária PCI-DSS. O InHubFlow não armazena dados de cartão de crédito.',
          p3: 'Renovação Automática: As assinaturas renovam-se automaticamente a cada período até que o Cliente realize o cancelamento.',
          p4: 'Tributos: Impostos aplicáveis (como IVA/VAT) são apurados automaticamente pelo Merchant of Record conforme a jurisdição do comprador.',
        },
        cancellation: {
          title: '6. Cancelamento Imediato e Política de Reembolsos',
          p1: 'Cancelamento Descomplicado: O Cliente pode cancelar sua assinatura a qualquer instante através do painel de controle ou do e-mail de confirmação da Lemon Squeezy.',
          p2: 'Acesso Garantido: O acesso continuará ativo até o encerramento do ciclo mensal/anual já pago.',
          p3: 'Reembolsos: Por se tratar de software digital com consumo instantâneo de infraestrutura e créditos de IA, não há reembolsos retroativos, exceto em falhas técnicas impeditivas não solucionadas pelo suporte em tempo hábil.',
        },
        partners: {
          title: '7. Programa Oficial de Parceiros e Afiliados',
          p1: 'Condições para parceiros que indicam a InHubFlow para clientes e agências:',
          list: [
            'Comissão Recorrente de 50% sobre os pagamentos líquidos de clientes ativos indicados.',
            'Cookie de 60 dias para rastreamento de indicações.',
            'Cupons exclusivos de 20% OFF para conversão de leads.',
            'Proibição expressa de auto-indicação fraudulenta ou anúncios com lances na marca "InHubFlow" (brand bidding).',
          ],
        },
        intellectual: {
          title: '8. Propriedade Intelectual e Proteção de Dados',
          p1: 'O InHubFlow detém todos os direitos sobre o software, marca e algoritmos.',
          p2: 'O Cliente detém a propriedade total de suas listas de contatos, mensagens e bases de conhecimento carregadas no sistema.',
        },
        liability: {
          title: '9. Garantias e Limitação de Responsabilidade',
          p1: 'Buscamos disponibilidade superior a 99,9%, mas o serviço é fornecido no estado em que se encontra.',
          p2: 'Não nos responsabilizamos por alterações de terceiros (como LinkedIn ou provedores de e-mail).',
          p3: 'A responsabilidade financeira máxima limita-se ao valor pago pelo Cliente no mês anterior ao evento.',
        },
        law: {
          title: '10. Lei Aplicável e Contato Legal',
          p1: 'Modificações: A InHubFlow reserva-se o direito de atualizar estes termos periodicamente para refletir evoluções regulatórias ou operacionais.',
          p2: 'Resolução de Conflitos: Qualquer disputa será resolvida prioritariamente mediante negociação amigável de boa-fé.',
          p3: 'Contato Oficial para Assuntos Legais: legal@inhubflow.online.',
        },
      },
    },
    en: {
      badge: 'Official Legal Agreement',
      title: 'Terms and Conditions of Service',
      subtitle: 'Software license agreement and terms of use for the InHubFlow platform',
      updated: 'Last updated: September 5, 2026',
      contactPrompt: 'Questions regarding our legal terms?',
      contactBtn: 'Contact Legal Department',
      summaryTitle: 'Key Executive Summary',
      summaryItems: [
        {
          title: 'B2B SaaS Platform',
          desc: 'High-performance commercial software for ethical outbound lead generation, multichannel outreach (LinkedIn/Email), and AI SDR assistants.',
        },
        {
          title: 'Secure & Transparent Billing',
          desc: 'Payments handled by Lemon Squeezy by Stripe and PayPal with bank-grade encryption. Recurring automatic renewal.',
        },
        {
          title: 'Instant Cancellation',
          desc: 'Cancel your subscription anytime directly from your dashboard or via the billing receipt without hassle.',
        },
        {
          title: '100% Data Ownership',
          desc: 'Your prospect lists, lead records, and proprietary knowledge bases belong exclusively to you and are never shared.',
        },
      ],
      nav: {
        intro: '1. Acceptance & Scope',
        services: '2. Services Description',
        accounts: '3. Accounts & Multi-Seat',
        acceptableUse: '4. Acceptable Use & Anti-Spam',
        billing: '5. Billing & Renewal',
        cancellation: '6. Cancellation & Refunds',
        partners: '7. Partner Program',
        intellectual: '8. Intellectual Property',
        liability: '9. Warranties & Liability',
        law: '10. Governing Law & Contact',
      },
      sections: {
        intro: {
          title: '1. Acceptance of Terms & Scope',
          p1: 'Welcome to InHubFlow ("InHubFlow", "we", "us", or "the Platform"). By registering an account, accessing, or using our websites (including inhubflow.online and b2b.inhubflow.online), applications, or APIs, you ("User", "Customer", or "Subscriber") enter into a legally binding contract and agree to be bound by these Terms and Conditions of Service.',
          p2: 'If you are subscribing on behalf of a company or legal entity, you represent and warrant that you possess full corporate authority to bind such entity to these Terms. If you do not agree to all terms, do not access or use the Platform.',
        },
        services: {
          title: '2. Platform Description & SaaS Services',
          p1: 'InHubFlow is an enterprise Software as a Service (SaaS) suite engineered for outbound B2B sales development, lead qualification, and productivity:',
          list: [
            'B2B prospective intelligence via structured web queries (Google X-Ray) and professional contact enrichment.',
            'Multichannel campaign automation across authorized LinkedIn accounts and enterprise corporate email accounts.',
            'AI SDR Assistant (powered by Google Gemini Enterprise models) for intent analysis, automated qualification, and contextual responses.',
            'Automated commercial meeting scheduling synchronized with external calendars (Calendly).',
            'Integrated sales pipeline CRM and real-time operational deliverability metrics.',
          ],
          p2: 'InHubFlow reserves the right to enhance or adjust platform features to optimize security and overall performance.',
        },
        accounts: {
          title: '3. Account Registration & Multi-Seat Privacy Isolation',
          p1: 'Users must provide accurate, current, and corporate credentials upon registration and maintain full confidentiality of account credentials.',
          p2: 'Multi-Seat Privacy Isolation: InHubFlow features strict workspace isolation. Each invited sales representative or ambassador has their own private, isolated workspace and visibility over only their connected LinkedIn/email accounts and conversation inboxes. The Workspace Owner retains subscription and team governance.',
          p3: 'Sharing credentials outside authorized seats, sublicensing, or reselling individual accounts is strictly prohibited.',
        },
        acceptableUse: {
          title: '4. Acceptable Use Policy, Anti-Spam & Third-Party Safeguards',
          p1: 'InHubFlow is strictly intended for legitimate, professional, and ethical B2B sales communications.',
          rulesTitle: 'Prohibited Practices:',
          list: [
            'Sending unsolicited spam, deceptive claims, defamatory materials, or violating anti-spam regulations (CAN-SPAM, GDPR legitimate interest, LGPD).',
            'Failing to promptly respect opt-out or "Do Not Contact" requests from prospects.',
            'Attempting to reverse engineer, breach, or compromise the security of the Platform.',
          ],
          alertTitle: 'Human Cadence Algorithms & Platform Limits:',
          alertDesc: 'InHubFlow applies human-like cadence delays and conservative daily safety limits to help safeguard Customer LinkedIn accounts. Customers acknowledge that third-party platforms maintain their own independent terms. Customers remain solely responsible for campaign volume configurations and ethical outreach.',
        },
        billing: {
          title: '5. Pricing, Payments, Renewal & Invoicing',
          p1: 'Full access to InHubFlow requires an active paid subscription (monthly or annual) as advertised on our pricing schedule.',
          p2: 'Secure Payment Processing: All transactions are processed via authorized Merchant of Record Lemon Squeezy by Stripe and PayPal with bank-grade PCI-DSS compliance. InHubFlow never stores full credit card numbers.',
          p3: 'Automatic Renewal: Subscriptions automatically renew at the end of each billing cycle unless cancelled prior to the renewal date.',
          p4: 'Taxes: Any applicable sales tax or VAT is calculated and collected by the Merchant of Record based on customer jurisdiction.',
        },
        cancellation: {
          title: '6. Hassle-Free Cancellation & Refund Policy',
          p1: 'Total Cancellation Freedom: Customers may cancel their subscription anytime with zero penalty directly from the workspace settings or through the Lemon Squeezy billing portal link.',
          p2: 'Access Retention: Service access remains fully active until the end of the pre-paid billing cycle. No further charges will be billed.',
          p3: 'Refund Policy: As a digital SaaS platform with immediate infrastructure allocation and AI token consumption, partial billing cycles are non-refundable, except in cases of persistent critical technical failure attributable to InHubFlow that support cannot resolve within a reasonable timeframe.',
        },
        partners: {
          title: '7. Official Partner (Affiliate) Program Terms',
          p1: 'Terms for certified partners recommending InHubFlow:',
          list: [
            '50% Recurring Commission on all net recurring revenue from active referred customers.',
            '60-day attribution tracking cookie on partner referral links.',
            'Exclusive 20% discount codes provided for prospective customer onboarding.',
            'Strictly prohibited: self-referrals, misleading advertising, spam, or search engine bidding on the trademarked brand "InHubFlow".',
          ],
        },
        intellectual: {
          title: '8. Intellectual Property & Customer Data Ownership',
          p1: 'InHubFlow retains all rights, title, and interest in and to the Platform, code, software architecture, and trademarks.',
          p2: 'Customer Data Ownership: Customers retain 100% ownership over their proprietary contact lists, prospect databases, messaging templates, and custom SDR knowledge bases. InHubFlow claims no ownership over Customer Data.',
        },
        liability: {
          title: '9. Warranties, Availability & Limitation of Liability',
          p1: 'InHubFlow strives for 99.9%+ availability. The service is provided "as is" and "as available".',
          p2: 'We are not liable for third-party platform policy modifications (e.g., LinkedIn API updates).',
          p3: 'Maximum financial liability is strictly limited to the amount paid by the Customer in the single month preceding the claim.',
        },
        law: {
          title: '10. Governing Law, Dispute Resolution & Legal Contact',
          p1: 'Modifications: InHubFlow reserves the right to update these terms periodically to reflect regulatory or technical developments.',
          p2: 'Dispute Resolution: Parties agree to prioritize amicable good-faith resolution of any dispute.',
          p3: 'Official Legal Inquiries: legal@inhubflow.online.',
        },
      },
    },
  };

  const current = content[locale as keyof typeof content] || content.es;
  const s = current.sections;

  const sectionKeys = [
    { id: 'intro', label: current.nav.intro },
    { id: 'services', label: current.nav.services },
    { id: 'accounts', label: current.nav.accounts },
    { id: 'acceptableUse', label: current.nav.acceptableUse },
    { id: 'billing', label: current.nav.billing },
    { id: 'cancellation', label: current.nav.cancellation },
    { id: 'partners', label: current.nav.partners },
    { id: 'intellectual', label: current.nav.intellectual },
    { id: 'liability', label: current.nav.liability },
    { id: 'law', label: current.nav.law },
  ];

  return (
    <div className="relative min-h-screen bg-white text-gray-900 selection:bg-indigo-600 selection:text-white">
      {/* Header & Hero Section with soft light gradient */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            {current.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {current.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-4 font-normal">
            {current.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-gray-600 bg-white/90 border border-gray-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            <span>📅</span>
            <span className="font-medium">{current.updated}</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Executive Highlights Grid */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gray-50/80 border border-gray-200/90 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-indigo-600">⚡</span>
            {current.summaryTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {current.summaryItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-gray-200/80 hover:border-indigo-400 hover:shadow-md transition duration-200"
              >
                <div className="text-indigo-700 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  {item.title}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Layout with Sidebar Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 xl:gap-12 items-start">
          {/* Sticky Navigation Sidebar */}
          <aside className="sticky top-24 hidden lg:block p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 px-2">
              Índice de Cláusulas
            </span>
            <nav className="space-y-1">
              {sectionKeys.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-3 py-2 rounded-xl text-xs font-medium transition ${
                    activeSection === sec.id
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-gray-100 px-2">
              <p className="text-xs text-gray-600 mb-3">
                {current.contactPrompt}
              </p>
              <a
                href="mailto:legal@inhubflow.online"
                className="block text-center text-xs font-bold px-3 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-sm cursor-pointer"
              >
                {current.contactBtn}
              </a>
            </div>
          </aside>

          {/* Legal Clauses Text Body */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 1. Intro */}
            <section
              id="intro"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.intro.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{s.intro.p1}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{s.intro.p2}</p>
            </section>

            {/* 2. Services */}
            <section
              id="services"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.services.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{s.services.p1}</p>
              <ul className="space-y-2.5 mb-5">
                {s.services.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                  >
                    <span className="text-indigo-600 font-bold mt-0.5 shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {s.services.p2}
              </p>
            </section>

            {/* 3. Accounts & Multi-Seat */}
            <section
              id="accounts"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.accounts.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{s.accounts.p1}</p>
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 mb-4 text-xs sm:text-sm text-indigo-950">
                <strong className="block font-bold mb-1 text-indigo-900">
                  🔒 Multi-Seat Privacy Guarantee:
                </strong>
                {s.accounts.p2}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{s.accounts.p3}</p>
            </section>

            {/* 4. Acceptable Use */}
            <section
              id="acceptableUse"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.acceptableUse.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {s.acceptableUse.p1}
              </p>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-3">
                {s.acceptableUse.rulesTitle}
              </h4>
              <ul className="space-y-2 mb-6">
                {s.acceptableUse.list.map((rule, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                  >
                    <span className="text-amber-600 shrink-0 font-bold">✦</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950">
                <strong className="block font-bold mb-1 text-amber-900">
                  ⚠️ {s.acceptableUse.alertTitle}
                </strong>
                {s.acceptableUse.alertDesc}
              </div>
            </section>

            {/* 5. Billing */}
            <section
              id="billing"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.billing.title}
              </h2>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{s.billing.p1}</p>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{s.billing.p2}</p>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{s.billing.p3}</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{s.billing.p4}</p>
            </section>

            {/* 6. Cancellation & Refunds */}
            <section
              id="cancellation"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.cancellation.title}
              </h2>
              <div className="space-y-3.5 text-sm text-gray-700 leading-relaxed">
                <p>{s.cancellation.p1}</p>
                <p>{s.cancellation.p2}</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {s.cancellation.p3}
                </p>
              </div>
            </section>

            {/* 7. Partners */}
            <section
              id="partners"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {s.partners.title}
                </h2>
                <Link
                  href="/partners"
                  className="inline-flex items-center text-xs font-bold px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition cursor-pointer"
                >
                  Ver Programa de Partners ➔
                </Link>
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{s.partners.p1}</p>
              <ul className="space-y-2.5">
                {s.partners.list.map((rule, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                  >
                    <span className="text-emerald-600 shrink-0">💎</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 8. Intellectual Property */}
            <section
              id="intellectual"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.intellectual.title}
              </h2>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                {s.intellectual.p1}
              </p>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <strong className="block font-bold mb-1 text-gray-900">
                  Tu Privacidad y Propiedad:
                </strong>
                {s.intellectual.p2}
              </div>
            </section>

            {/* 9. Liability */}
            <section
              id="liability"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.liability.title}
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>{s.liability.p1}</p>
                <p>{s.liability.p2}</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {s.liability.p3}
                </p>
              </div>
            </section>

            {/* 10. Governing Law */}
            <section
              id="law"
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {s.law.title}
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed mb-6">
                <p>{s.law.p1}</p>
                <p>{s.law.p2}</p>
                <p>{s.law.p3}</p>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/50 to-gray-50 border border-indigo-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Equipo de Cumplimiento Legal InHubFlow
                  </h4>
                  <p className="text-xs text-gray-600">
                    Atención a requerimientos contractuales y normativos
                  </p>
                </div>
                <a
                  href="mailto:legal@inhubflow.online"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm"
                >
                  legal@inhubflow.online
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

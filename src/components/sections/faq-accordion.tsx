"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "¿Qué es InHubFlow y cómo acelera mis ventas?",
      answer:
        "InHubFlow es una suite todo-en-uno que combina prospección multicanal con Inteligencia Artificial. Te permite extraer leads de LinkedIn Sales Navigator, Apollo.io, grupos de WhatsApp, seguidores de Instagram y Google Maps, para luego ejecutar secuencias automatizadas y dejar que Agentes SDR de IA atiendan, califiquen y agenden reuniones 24/7.",
    },
    {
      id: 2,
      question: "¿Es seguro usarlo para mis cuentas de LinkedIn y WhatsApp?",
      answer:
        "Sí, 100% seguro. InHubFlow cuenta con tecnología avanzada de emulación humana e intervalos aleatorios de tiempo (delays inteligentes anti-ban) que respetan los límites de actividad de LinkedIn y las políticas de mensajería de WhatsApp para proteger la reputación de tus cuentas.",
    },
    {
      id: 3,
      question: "¿Cómo funciona el Agente SDR con Inteligencia Artificial?",
      answer:
        "El SDR de IA se entrena con la información de tus productos, servicios y preguntas frecuentes. Cuando un prospecto responde a tu campaña en WhatsApp, Instagram o LinkedIn, la IA responde en segundos con lenguaje natural, supera objeciones y le envía tu enlace de Calendly o Google Calendar para agendar la llamada.",
    },
    {
      id: 4,
      question: "¿Puedo probar solo el módulo B2B o solo el módulo B2C?",
      answer:
        "Sí. Disponemos de planes independientes si solo necesitas prospección corporativa en LinkedIn y Cold Email (Plan B2B) o si solo necesitas captación y atención por WhatsApp e Instagram (Plan B2C). También puedes elegir el Plan All-In-One para disfrutar de la suite completa con descuento.",
    },
    {
      id: 5,
      question: "¿Cómo se procesan los pagos y suscripciones?",
      answer:
        "Todos los pagos se procesan de forma segura a través de Paddle (Merchant of Record), compatible con tarjetas de crédito/débito internacionales y PayPal. Paddle genera facturas fiscales válidas para empresas en todo el mundo y puedes cancelar o cambiar de plan en cualquier momento sin penalizaciones.",
    },
    {
      id: 6,
      question: "¿Cómo recibo mis accesos tras suscribirme?",
      answer:
        "Inmediatamente después de completar el pago en Paddle, nuestro sistema crea automáticamente tus credenciales de acceso para la plataforma de Outreach B2B (b2b.inhubflow.online) y la Bandeja Omnicanal B2C (b2c.inhubflow.online), enviándote un email con tu enlace directo de inicio de sesión.",
    },
  ];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-20 md:py-32 dark:bg-[#0c111d] px-4">
      <div className="wrapper max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            Resolvemos tus dudas
          </span>
          <h2 className="mb-4 font-extrabold text-center text-gray-900 text-3xl sm:text-4xl dark:text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
            Todo lo que necesitas saber sobre cómo InHubFlow automatiza tu captación de clientes.
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

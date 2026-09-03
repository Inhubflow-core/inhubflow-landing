'use client';

import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Define the tab type
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  lightImage: string;
  darkImage: string;
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState('b2b');

  // Tab data
  const tabs: Tab[] = [
    {
      id: 'b2b',
      label: 'Automatización Comercial B2B',
      icon: <span className="text-xl">🚀</span>,
      lightImage: '/images/tab-image/tab-image-1.jpg',
      darkImage: '/images/tab-image/tab-image-1-dark.jpg',
      title: 'Workflows Comerciales y Seguimiento Multicanal',
      description:
        'Conecta con decisores clave mediante secuencias inteligentes: visitas profesionales, notas personalizadas por IA y correos comerciales de seguimiento con alta entregabilidad.',
    },
    {
      id: 'contacts',
      label: 'Gestión y Segmentación B2B',
      icon: <span className="text-xl">🎯</span>,
      lightImage: '/images/tab-image/tab-image-3.jpg',
      darkImage: '/images/tab-image/tab-image-3-dark.jpg',
      title: 'Segmentación Inteligente y Organización de Contactos',
      description:
        'Organiza y califica cuentas y contactos empresariales filtrando por cargo, industria, empresa y ubicación geográfica, manteniendo sincronizada tu base de datos.',
    },
    {
      id: 'sdr',
      label: 'Agentes SDR de IA 24/7',
      icon: <span className="text-xl">🤖</span>,
      lightImage: '/images/tab-image/tab-image-4.jpg',
      darkImage: '/images/tab-image/tab-image-4-dark.jpg',
      title: 'Calificación Automática y Agendamiento en Google Calendar',
      description:
        'Tu SDR de Inteligencia Artificial mantiene conversaciones naturales, responde objeciones comerciales, valida el interés del cliente y agenda la cita directamente en tu calendario.',
    },
  ];

  // Find the active tab
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section id="b2b-solutions" className="py-16 md:py-28 dark:bg-[#0c111d]">
      <div className="wrapper max-w-[76rem] mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-3 inline-block">
            Ecosistema Integrado
          </span>
          <h2 className="mb-3 font-extrabold text-center text-gray-900 dark:text-white text-3xl md:text-4xl tracking-tight">
            Cada herramienta diseñada para acelerar tu embudo de ventas
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-400">
            Descubre cómo InHubFlow combina la gestión comercial inteligente con el agendamiento y cierre conversacional automatizado.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div>
            {/* Tab Navigation */}
            <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative">
              <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full ${
                      activeTab === tab.id
                        ? 'bg-white dark:text-white/90 dark:bg-white/10 text-gray-800'
                        : 'text-gray-500 dark:text-gray-400 bg-transparent'
                    }`}
                  >
                    {tab.icon}
                    <span className="truncate">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}

            <div className="p-6 tab-img-bg overflow-hidden rounded-4xl mt-8">
              <div className="p-3 tab-img-overlay">
                {tabs.map((tab) => (
                  <Fragment key={tab.id}>
                    <Image
                      src={tab.lightImage || '/placeholder.svg'}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn(
                        'w-full rounded-2xl block dark:hidden',
                        currentTab.id !== tab.id && 'hidden!'
                      )}
                      quality={90}
                      priority
                    />

                    <Image
                      src={tab.darkImage || '/placeholder.svg'}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn(
                        'w-full rounded-2xl hidden dark:block',
                        currentTab.id !== tab.id && 'hidden!'
                      )}
                      quality={90}
                      priority
                    />
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 text-center">
              <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">
                {currentTab.title}
              </h2>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
                {currentTab.description}
              </p>
              <button className="px-6 py-3 text-sm font-medium text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600">
                Try it now for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

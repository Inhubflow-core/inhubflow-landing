'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/providers/language';
import { toast } from 'sonner';

export default function PartnersPage() {
  const { t, locale } = useLanguage();
  const p = t.partnersPage;

  // The exact same brand logos as the landing page
  const brandLogos = [
    { src: '/images/brands/br-1.svg', alt: 'Brand 1', width: 80, height: 32 },
    { src: '/images/brands/br-2.svg', alt: 'Brand 2', width: 80, height: 32 },
    { src: '/images/brands/br-3.svg', alt: 'Brand 3', width: 80, height: 32 },
    { src: '/images/brands/br-4.svg', alt: 'Brand 4', width: 80, height: 32 },
    { src: '/images/brands/br-5.svg', alt: 'Brand 5', width: 80, height: 32 },
    { src: '/images/brands/br-6.svg', alt: 'Brand 6', width: 80, height: 32 },
    { src: '/images/brands/br-7.svg', alt: 'Brand 7', width: 80, height: 32 },
  ];

  // Calculator state: Real InHubFlow plans with 20% Partner Discount applied:
  // Starter: $40.00 -> $32.00
  // Growth: $160.00 -> $128.00
  // Business: $240.00 -> $192.00
  const [clientCount, setClientCount] = useState<number>(5);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number>(128.00); // Default: Growth plan with 20% OFF ($128.00)

  // Calculation: 50% recurring commission on net discounted price
  const monthlyCommission = useMemo(() => {
    return (clientCount * selectedPlanPrice * 0.50).toFixed(2);
  }, [clientCount, selectedPlanPrice]);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Application Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formChannel, setFormChannel] = useState('agency');
  const [formNotes, setFormNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || (!formEmail.trim() && !formPhone.trim())) {
      toast.error(locale === 'pt-BR' ? 'Preencha seu nome e contato.' : locale === 'en' ? 'Please provide your name and contact.' : 'Por favor ingresa tu nombre y al menos un método de contacto.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/partners/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          channel: formChannel,
          notes: formNotes,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        toast.success(p.successTitle);
      } else {
        toast.error('Error al enviar la solicitud. Por favor intenta de nuevo.');
      }
    } catch {
      toast.error('Error de conexión. Puedes contactarnos directamente por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsAppHref = `https://wa.me/34600000000?text=${encodeURIComponent(
    `Hola equipo de InHubFlow! Me gustaría postularme como Partner Oficial (50% comisión recurrente). Mi nombre es ${formName || 'un nuevo embajador'}.`
  )}`;

  return (
    <div className="relative min-h-screen bg-white text-gray-900 selection:bg-indigo-600 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (100% Full-Width Background Gradient - exactly like Landing Page) */}
      {/* ========================================================================= */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#ECE7FE] pt-12 sm:pt-20 lg:pt-28 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Rating Stars Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs sm:text-sm font-semibold text-amber-900 mb-6 shadow-xs">
              <span>{p.rating}</span>
            </div>

            {/* Big Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.15] mb-6 text-gray-900">
              {p.heroTitlePrefix}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {p.heroTitleHighlight1}
              </span>{' '}
              {p.heroTitleMiddle}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {p.heroTitleHighlight2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              {p.heroSubtitle}
            </p>

            {/* CTA Button with Ambient Glow */}
            <div className="relative inline-flex flex-col items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/30 transition-all duration-300 active:scale-98 cursor-pointer hover:shadow-indigo-500/40"
              >
                <span>{p.heroCta}</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              {/* Sub Guarantee Note */}
              <span className="mt-3 text-xs sm:text-sm text-gray-500">
                {p.heroSubNote}
              </span>

              {/* Playful Hand-drawn style note (Waalaxy signature) */}
              <div className="hidden md:flex items-center gap-2 mt-4 text-xs font-handwriting text-indigo-600 italic font-medium">
                <svg className="w-6 h-6 text-indigo-600 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                <span>{p.arrowNote}</span>
              </div>
            </div>
          </div>

          {/* Logos / Social Proof Bar (Exact same image logos as the landing page) */}
          <div className="w-full mt-16 sm:mt-24 pt-12 sm:pt-14 border-t border-gray-200/70">
            <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-8 sm:mb-10">
              {p.socialProofTitle}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
              {brandLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="brightness-0 opacity-60 hover:opacity-100 dark:brightness-100 dark:opacity-40 transition-all duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REVENUE CALCULATOR SECTION (Full max-w-7xl width) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              {p.calcTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {p.calcSubtitle}
            </p>
          </div>

          {/* Interactive Calculator Box */}
          <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-gray-50/70 border border-gray-200/90 shadow-xl shadow-indigo-100/30 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Controls */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {p.calcHello}
                  </label>
                  <div className="flex items-center gap-3">
                    <select
                      value={clientCount}
                      onChange={(e) => setClientCount(Number(e.target.value))}
                      className="bg-white border border-gray-300 text-gray-900 font-bold text-lg rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 cursor-pointer w-28 shadow-xs"
                    >
                      {[1, 2, 3, 5, 10, 15, 20, 30, 50, 100].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <span className="text-base sm:text-lg font-bold text-gray-800">
                      {p.calcClientsSuffix}
                    </span>
                  </div>
                </div>

                {/* Subscription Plan Selector with 20% Partner Discount applied */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {p.calcPlanLabel}
                    </label>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      -20% Descuento Aplicado
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { name: 'Starter', originalPrice: 40.00, price: 32.00 },
                      { name: 'Growth', originalPrice: 160.00, price: 128.00, popular: true },
                      { name: 'Business', originalPrice: 240.00, price: 192.00 },
                    ].map((plan) => (
                      <button
                        key={plan.name}
                        type="button"
                        onClick={() => setSelectedPlanPrice(plan.price)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                          selectedPlanPrice === plan.price
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/25'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-bold">{plan.name}</div>
                        <div className="text-[12px] font-extrabold mt-0.5">${plan.price.toFixed(2)}</div>
                        <div className={`text-[10px] line-through ${selectedPlanPrice === plan.price ? 'text-indigo-200' : 'text-gray-400'}`}>
                          ${plan.originalPrice.toFixed(2)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Big Highlighted Output Box (Matching Waalaxy Blue Highlight Pill) */}
              <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                <div className="w-full p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-xl shadow-indigo-600/25 flex flex-col items-center justify-center text-white">
                  <span className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider mb-1">
                    {p.calcResultPrefix}
                  </span>
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight my-1">
                    ${monthlyCommission} <span className="text-sm sm:text-lg font-bold">USD</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-blue-200 uppercase tracking-wider">
                    {p.calcResultSuffix}
                  </span>
                </div>

                <p className="mt-4 text-xs text-gray-500 max-w-sm text-center leading-relaxed">
                  {p.calcPassiveNote}
                </p>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
                >
                  <span>{p.calcCta}</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THREE PILLARS (Full max-w-7xl width) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {p.pillarsSuperTitle}
            </h2>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {/* Pillar 1: All-in-one Platform */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold text-xl shadow-lg shadow-blue-600/30">
                    {p.pillar1Number}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {p.pillar1Title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {p.pillar1Desc}
                </p>

                <div className="space-y-3 pt-2">
                  {[p.pillar1Check1, p.pillar1Check2, p.pillar1Check3].map((check, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200/90 text-xs sm:text-sm font-semibold text-gray-800 shadow-xs">
                      <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-100 text-blue-600 shrink-0 font-bold">
                        ✓
                      </span>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mockup Graphic 1: Affiliate Dashboard */}
              <div className="lg:col-span-6">
                <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/60">
                  {/* Header of Mockup */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="text-[11px] text-gray-400 font-mono ml-2">partner.inhubflow.online</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      50% Active
                    </span>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/60">
                      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Clics</div>
                      <div className="text-base sm:text-lg font-bold text-gray-900 mt-1">1,248</div>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60">
                      <div className="text-[10px] uppercase tracking-wider text-blue-600 font-medium">Clientes</div>
                      <div className="text-base sm:text-lg font-bold text-blue-700 mt-1">18</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                      <div className="text-[10px] uppercase tracking-wider text-emerald-600 font-medium">Comisión</div>
                      <div className="text-base sm:text-lg font-bold text-emerald-700 mt-1">$1,152 USD</div>
                    </div>
                  </div>

                  {/* Link Box */}
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                    <span className="font-mono text-xs text-indigo-700 font-medium truncate">
                      inhubflow.online/?20-OFF=TUCODIGO
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-600 text-white shrink-0 ml-2 shadow-xs cursor-pointer">
                      Copiar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Lifetime Commissions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Mockup Graphic 2: Referral List */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/60 space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Historial de Clientes Referidos</span>
                    <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">100% Recurrente</span>
                  </div>

                  {[
                    { name: 'Agencia Nexus B2B', plan: 'Plan Business ($192.00 con 20% OFF)', comm: '+$96.00 / mes', date: 'Activo' },
                    { name: 'SaaS Growth Latam', plan: 'Plan Growth ($128.00 con 20% OFF)', comm: '+$64.00 / mes', date: 'Activo' },
                    { name: 'Consultora Ventas 360', plan: 'Plan Growth ($128.00 con 20% OFF)', comm: '+$64.00 / mes', date: 'Activo' },
                    { name: 'Outbound Digital SL', plan: 'Plan Starter ($32.00 con 20% OFF)', comm: '+$16.00 / mes', date: 'Activo' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50/70 border border-gray-200/60">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center font-bold text-xs text-white shadow-xs">
                          {item.name[0]}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">{item.name}</div>
                          <div className="text-[11px] text-gray-500">{item.plan}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-emerald-600">{item.comm}</div>
                        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-100 text-emerald-800">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-600 text-white font-extrabold text-xl shadow-lg shadow-indigo-600/30">
                    {p.pillar2Number}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {p.pillar2Title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {p.pillar2Desc}
                </p>

                <div className="space-y-3 pt-2">
                  {[p.pillar2Check1, p.pillar2Check2, p.pillar2Check3].map((check, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200/90 text-xs sm:text-sm font-semibold text-gray-800 shadow-xs">
                      <span className="flex items-center justify-center w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 shrink-0 font-bold">
                        ✓
                      </span>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 3: Support & Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-600 text-white font-extrabold text-xl shadow-lg shadow-violet-600/30">
                    {p.pillar3Number}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {p.pillar3Title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {p.pillar3Desc}
                </p>

                <div className="space-y-3 pt-2">
                  {[p.pillar3Check1, p.pillar3Check2, p.pillar3Check3].map((check, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200/90 text-xs sm:text-sm font-semibold text-gray-800 shadow-xs">
                      <span className="flex items-center justify-center w-5 h-5 rounded-md bg-violet-100 text-violet-600 shrink-0 font-bold">
                        ✓
                      </span>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mockup Graphic 3: Partner Support Chat */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/60 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-sm text-white shadow-xs">
                      IH
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Customer Success InHubFlow</div>
                      <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Tiempo de respuesta: &lt; 15 min
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-gray-100 text-gray-800 max-w-[85%] leading-relaxed">
                      ¡Hola! Acabo de enviarte los copys de prospección B2B y las grabaciones demo de InHubFlow para tus clientes. ¿Tienes alguna duda técnica?
                    </div>
                    <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-950 font-medium ml-auto max-w-[85%] text-right leading-relaxed">
                      ¡Genial! Con este material acabo de agendar 3 demos para mi agencia. ¡Gracias por el soporte tan rápido!
                    </div>
                  </div>

                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <span>Hablar con Soporte de Partners</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FAQ ACCORDION SECTION (Full max-w-7xl width) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                {p.faqTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {p.faqSubtitle}
              </p>
            </div>

            <a
              href={whatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all self-start sm:self-auto shrink-0 cursor-pointer"
            >
              <span>{p.faqChatBtn}</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* 2-Column Accordion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {p.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-gray-200/90 hover:border-gray-300 shadow-sm transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-gray-900 focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-indigo-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM HERO CALL-TO-ACTION (Full max-w-7xl width) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-gray-50/60 border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-2xl shadow-indigo-600/25 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              ¿Listo para generar ingresos recurrentes con InHubFlow?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto mb-8">
              Únete hoy como Partner Oficial. Te entregamos tu link con 20% de descuento y empiezas a cobrar el 50% de cada mensualidad.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-indigo-700 bg-white hover:bg-gray-50 shadow-xl transition-all cursor-pointer active:scale-98"
            >
              <span>{p.heroCta}</span>
              <svg className="w-4 h-4 text-indigo-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* APPLICATION MODAL */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 shadow-2xl text-left z-10">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200 mb-2">
                    50% Comisión Recurrente
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    {p.modalTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {p.modalSubtitle}
                  </p>
                </div>

                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {p.fieldName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Roberto Silva"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {p.fieldEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="tu@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {p.fieldPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+34 600..."
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {p.fieldChannel}
                    </label>
                    <select
                      value={formChannel}
                      onChange={(e) => setFormChannel(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 cursor-pointer"
                    >
                      <option value="agency">{p.channel1}</option>
                      <option value="consultant">{p.channel2}</option>
                      <option value="creator">{p.channel3}</option>
                      <option value="network">{p.channel4}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {p.fieldNotes}
                    </label>
                    <textarea
                      rows={2}
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                      placeholder="Ej. Gestiono una agencia B2B con 15 clientes de prospección..."
                      className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-xs focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? p.submitting : p.submitBtn}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{p.successTitle}</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  {p.successDesc}
                </p>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <p className="text-xs text-gray-500 font-semibold">{p.instantActionTitle}</p>
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-md shadow-emerald-600/20"
                  >
                    <span>{p.instantWhatsApp}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="text-xs text-gray-500 hover:text-gray-800 cursor-pointer"
                  >
                    {p.closeBtn}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

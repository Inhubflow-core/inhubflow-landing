'use client';

import React, { useState } from 'react';
import type { TBILLING_PLAN } from './data';
import { useLanguage } from '@/app/providers/language';
function RiCheckLine({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function RiExternalLinkLine({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function RiSendPlaneLine({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function RiMessage3Line({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function RiShieldCheckLine({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: TBILLING_PLAN;
  billingPeriod: 'monthly' | 'yearly';
}

export function CheckoutModal({ isOpen, onClose, plan, billingPeriod }: CheckoutModalProps) {
  const { locale } = useLanguage();
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [error, setError] = useState('');
  const [provisionSuccess, setProvisionSuccess] = useState(false);

  if (!isOpen) return null;

  const rawSlug = companyName.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  const previewSlug = rawSlug || 'tu-empresa';
  const priceInfo = plan.pricing[billingPeriod];

  const handleSimulateOrCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!companyName.trim()) {
      setError(locale === 'pt-BR' ? 'Digite o nome da sua empresa.' : locale === 'en' ? 'Enter your company name.' : 'Por favor escribe el nombre de tu empresa.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setError(locale === 'pt-BR' ? 'Digite um e-mail válido.' : locale === 'en' ? 'Enter a valid email address.' : 'Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (!password || password.length < 6) {
      setError(locale === 'pt-BR' ? 'A senha deve ter no mínimo 6 caracteres.' : locale === 'en' ? 'Password must be at least 6 characters.' : 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const customData = {
      company_name: companyName.trim(),
      company_slug: rawSlug,
      admin_email: email.trim().toLowerCase(),
      admin_password: password,
      plan_id: plan.id,
      billing_period: billingPeriod,
    };

    const paddleWindow = window as unknown as {
      Paddle?: {
        Checkout: {
          open: (options: {
            settings?: { displayModeComponent?: string };
            items: Array<{ priceId: string; quantity: number }>;
            customer?: { email: string };
            customData?: Record<string, unknown>;
          }) => void;
        };
      };
    };

    // If live Paddle is present and configured with credentials
    if (paddleWindow.Paddle && process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN) {
      paddleWindow.Paddle.Checkout.open({
        settings: { displayModeComponent: 'overlay' },
        items: [{ priceId: priceInfo.paddlePriceId, quantity: 1 }],
        customer: { email: email.trim().toLowerCase() },
        customData,
      });
      onClose();
      return;
    }

    // Interactive Test Experience / Simulation Mode
    setLoading(true);
    setProgressStep(1);

    try {
      // Step 1: Simulating payment
      await new Promise((r) => setTimeout(r, 900));
      setProgressStep(2);

      // Step 2: Triggering automated webhook provisioning
      const res = await fetch('/api/webhooks/paddle', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-simulation': 'true',
        },
        body: JSON.stringify({
          event_type: 'subscription.activated',
          data: {
            id: `sub_sim_${Date.now()}`,
            customer: { email: email.trim().toLowerCase() },
            custom_data: customData,
          },
        }),
      });

      const resData = await res.json();
      console.log('[Paddle Webhook Simulation Response]:', resData);

      if (resData.provisioned?.b2b_linki && !resData.provisioned.b2b_linki.success) {
        setLoading(false);
        setError(`Error del servidor Coolify: ${resData.provisioned.b2b_linki.error || 'Error desconocido'}`);
        return;
      }

      await new Promise((r) => setTimeout(r, 1200));
      setProgressStep(3);
      await new Promise((r) => setTimeout(r, 800));

      setLoading(false);
      setProvisionSuccess(true);
    } catch (err: any) {
      setLoading(false);
      setError('Error al procesar la simulación: ' + (err.message || 'Error desconocido'));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg p-6 bg-white dark:bg-[#101828] rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                {provisionSuccess ? 'Espacio Activado' : 'Activación de Suscripción'}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                4 Slots B2B + 4 Agentes
              </span>
            </div>
            <h3 className="text-xl font-bold mt-0.5">{plan.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Loading / Provisioning state */}
        {loading ? (
          <div className="py-12 px-4 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-full border-4 border-indigo-600/20 border-t-indigo-600 animate-spin flex items-center justify-center">
              <RiShieldCheckLine size={24} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {progressStep === 1 && 'Procesando pago y suscripción...'}
                {progressStep === 2 && 'Aprovisionando subdominio dedicado y slots...'}
                {progressStep === 3 && 'Configurando cuentas y accesos...'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Esto toma unos segundos en tus servidores...
              </p>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden max-w-xs mx-auto">
              <div
                className="bg-indigo-600 h-full transition-all duration-700 rounded-full"
                style={{ width: `${(progressStep / 3) * 100}%` }}
              />
            </div>
          </div>
        ) : provisionSuccess ? (
          /* Success Screen */
          <div className="py-6 space-y-5 animate-fade-in">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-2xl">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                <RiCheckLine size={20} />
                <span>¡Tu suscripción InHubFlow está activa!</span>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                Se ha generado tu espacio dedicado para <strong>{companyName}</strong> con 4 slots de prospección y central omnicanal.
              </p>
            </div>

            {/* Cards container */}
            <div className="space-y-3">
              {/* B2B Access Card (Only if plan includes B2B) */}
              {(plan.id === 'b2b' || plan.id === 'allinone') && (
                <div className="p-4 bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#465fff] text-white flex items-center justify-center shadow-md shrink-0">
                      <RiSendPlaneLine size={20} />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 dark:text-white">
                        B2B Outreach Suite (4 Slots)
                      </h5>
                      <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold truncate max-w-[200px]">
                        https://{previewSlug}-b2b.inhubflow.online
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://${previewSlug}-b2b.inhubflow.online`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#465fff] hover:bg-[#3641f5] text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0"
                  >
                    <span>Entrar</span>
                    <RiExternalLinkLine size={13} />
                  </a>
                </div>
              )}

              {/* B2C Access Card (Only if plan includes B2C) */}
              {(plan.id === 'b2c' || plan.id === 'allinone') && (
                <div className="p-4 bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                      <RiMessage3Line size={20} />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 dark:text-white">
                        B2C Omnicanal Chatwoot (4 Agentes)
                      </h5>
                      <p className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                        https://b2c.inhubflow.online
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://b2c.inhubflow.online"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shrink-0"
                  >
                    <span>Entrar</span>
                    <RiExternalLinkLine size={13} />
                  </a>
                </div>
              )}
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-xs text-gray-500 dark:text-gray-400 space-y-1">
              <p>📧 <strong>Tus credenciales:</strong> Email: <code>{email}</code> | Contraseña: <code>••••••••</code></p>
              <p className="text-[11px] text-indigo-600 dark:text-indigo-400">
                ⏳ <em>Al crearse por primera vez, el servidor tarda de 30 a 60 segundos en compilar el contenedor y emitir el certificado SSL.</em>
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-full transition-colors"
            >
              Cerrar y Comenzar a Trabajar
            </button>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSimulateOrCheckout} className="mt-5 space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-900">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                {locale === 'pt-BR' ? 'Nome da Empresa' : locale === 'en' ? 'Company Name' : 'Nombre de tu Empresa'}
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={locale === 'pt-BR' ? 'Ex: Acme Logística' : locale === 'en' ? 'e.g. Acme Logistics' : 'Ej: Acme Logística'}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {/* Live Subdomain Preview */}
              <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                🌐 {locale === 'pt-BR' ? 'Seu subdomínio será:' : locale === 'en' ? 'Your workspace URL:' : 'Tu subdominio será:'}{' '}
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  https://{previewSlug}-b2b.inhubflow.online
                </span>
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                {locale === 'pt-BR' ? 'E-mail do Administrador' : locale === 'en' ? 'Admin Email Address' : 'Correo del Administrador'}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="carlos@tuempresa.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                {locale === 'pt-BR' ? 'Defina sua Senha de Acesso' : locale === 'en' ? 'Create Account Password' : 'Crea tu Contraseña de Acceso'}
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Pricing summary */}
            <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl flex items-center justify-between border border-indigo-100 dark:border-indigo-900/50">
              <div>
                <span className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">
                  {locale === 'pt-BR' ? 'Total a pagar hoje' : locale === 'en' ? 'Total due today' : 'Total a pagar hoy'}:
                </span>
                <p className="text-xl font-black text-indigo-950 dark:text-white">
                  {priceInfo.formattedPrice}{' '}
                  <span className="text-xs font-normal text-gray-500">
                    /{billingPeriod === 'yearly' ? (locale === 'pt-BR' ? 'ano' : locale === 'en' ? 'year' : 'año') : (locale === 'pt-BR' ? 'mês' : locale === 'en' ? 'month' : 'mes')}
                  </span>
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-indigo-600 text-white font-bold rounded-lg shadow-sm flex items-center gap-1">
                <RiShieldCheckLine size={14} />
                <span>Paddle MoR Seguro</span>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-full shadow-lg shadow-indigo-500/25 transition-all duration-200 cursor-pointer disabled:opacity-50"
            >
              {locale === 'pt-BR'
                ? 'Confirmar Ativação e Pagamento'
                : locale === 'en'
                ? 'Confirm Activation & Checkout'
                : 'Confirmar Activación y Acceso Inmediato'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

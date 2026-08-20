'use client';

import React, { useState } from 'react';
import type { TBILLING_PLAN } from './data';
import { useLanguage } from '@/app/providers/language';

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
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const rawSlug = companyName.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  const previewSlug = rawSlug || 'tu-empresa';
  const priceInfo = plan.pricing[billingPeriod];

  const handleLaunchPaddle = (e: React.FormEvent) => {
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

    setLoading(true);

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

    if (paddleWindow.Paddle) {
      paddleWindow.Paddle.Checkout.open({
        settings: { displayModeComponent: 'overlay' },
        items: [{ priceId: priceInfo.paddlePriceId, quantity: 1 }],
        customer: { email: email.trim().toLowerCase() },
        customData,
      });
      setLoading(false);
      onClose();
    } else {
      console.warn('[Paddle Checkout] Paddle.js not loaded or in mock mode. Redirecting...');
      // Fallback in local/demo environment
      setTimeout(() => {
        setLoading(false);
        alert(
          locale === 'pt-BR'
            ? `Pronto! Seus dados foram salvos. Redirecionando para https://${previewSlug}.b2b.inhubflow.online`
            : locale === 'en'
            ? `Ready! Your setup is configured. Redirecting to https://${previewSlug}.b2b.inhubflow.online`
            : `¡Listo! Configuración lista para tu empresa. Redirigiendo a https://${previewSlug}.b2b.inhubflow.online`
        );
        onClose();
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg p-6 bg-white dark:bg-[#101828] rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              {locale === 'pt-BR' ? 'Ativação Instantânea' : locale === 'en' ? 'Instant Activation' : 'Activación Instantánea'}
            </span>
            <h3 className="text-xl font-bold mt-0.5">{plan.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLaunchPaddle} className="mt-5 space-y-4">
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
                https://{previewSlug}.b2b.inhubflow.online
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
            <span className="text-xs px-2.5 py-1 bg-indigo-600 text-white font-bold rounded-lg shadow-sm">
              🔒 Paddle MoR Seguro
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-full shadow-lg shadow-indigo-500/25 transition-all duration-200 cursor-pointer disabled:opacity-50"
          >
            {loading
              ? '...'
              : locale === 'pt-BR'
              ? 'Continuar para Pagamento Seguro 💳'
              : locale === 'en'
              ? 'Proceed to Secure Checkout 💳'
              : 'Continuar al Pago Seguro 💳'}
          </button>
        </form>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './providers/language';
import { ToasterProvider } from './providers/toaster';

import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'InHubFlow | AI-Powered B2B Sales CRM & Intelligent Meeting Scheduler',
    template: '%s | InHubFlow Sales CRM',
  },
  description:
    'Manage B2B relationships, automate personalized follow-up sequences, and empower your sales team with 24/7 AI SDR agents to qualify clients and schedule meetings on autopilot.',
  keywords: [
    'b2b crm',
    'sales productivity',
    'ai sdr assistant',
    'meeting scheduling',
    'client communication',
    'contact management',
    'crm automation',
    'sales intelligence'
  ],
  icons: {
    icon: '/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col antialiased ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <ToasterProvider />

            <div className="isolate flex flex-col flex-1">{children}</div>
          </LanguageProvider>
        </ThemeProvider>
        <Script id="lemon-affiliate-config" strategy="afterInteractive">
          {`window.lemonSqueezyAffiliateConfig = { store: "inhubflow" };`}
        </Script>
        <Script src="https://lmsqueezy.com/affiliate.js" strategy="afterInteractive" />
        <Script src="https://assets.lemonsqueezy.com/lemon.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

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
    default: 'InHubFlow | AI-Powered LinkedIn Lead Generation & B2B Outreach Suite',
    template: '%s | InHubFlow B2B Outreach',
  },
  description:
    'Extract decision-makers from LinkedIn Sales Navigator, automate high-converting connection sequences with AI, warm up cold emails, and let 24/7 AI SDR agents book qualified sales meetings on autopilot.',
  keywords: [
    'linkedin automation',
    'prospección b2b',
    'outreach linkedin',
    'sales navigator scraper',
    'cold email warmup',
    'sdr inteligencia artificial',
    'waalaxy alternative',
    'expandi alternative',
    'lead generation b2b',
    'b2b email enrichment'
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
        <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

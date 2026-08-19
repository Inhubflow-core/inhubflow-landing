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
    default: 'InHubFlow | AI-Powered Multichannel Prospecting & Sales Suite',
    template: '%s | InHubFlow AI Suite',
  },
  description:
    'Automate B2B LinkedIn & Cold Email outreach and 24/7 B2C WhatsApp & Instagram AI SDR sales execution.',
  keywords: [
    'prospección b2b',
    'outreach linkedin',
    'cold email warmup',
    'whatsapp marketing automation',
    'sdr inteligencia artificial',
    'chatwoot evolution api',
    'extractor google maps'
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

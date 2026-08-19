import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Onest } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

import Script from 'next/script';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'InHubFlow | Plataforma de Prospección Multicanal & Ventas con IA',
    template: '%s | InHubFlow AI Suite',
  },
  description:
    'Automatiza tu prospección en LinkedIn, Cold Email, WhatsApp e Instagram. Extrae leads de grupos, perfiles y Google Maps, y agenda reuniones con Agentes SDR de IA 24/7.',
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
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ToasterProvider />

          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
        <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

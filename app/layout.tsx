// app/layout.tsx - Server Component
import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import BackgroundWrapper from '@/components/BackgroundWrapper';
import ClientLoadingWrapper from '@/components/ClientLoadingWrapper';

// Import your custom font - Aktiv Grotesk Regular
const customFont = localFont({
  src: [
    {
      path: '../public/fonts/AktivGroteskVFTrial-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-custom', // This creates a CSS variable you can use
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${customFont.variable}`}>
        <ClientLoadingWrapper>
          <BackgroundWrapper>
            <Header />
            <main>
              {children}
            </main>
          </BackgroundWrapper>
        </ClientLoadingWrapper>
      </body>
    </html>
  );
}
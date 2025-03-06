// app/layout.tsx - Server Component
import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeaderSpacer from '@/components/HeaderSpacer';
import BackgroundWrapper from '@/components/BackgroundWrapper';

// Import your custom font - Aktiv Grotesk Regular
const customFont = localFont({
  src: [
    {
      path: '../public/fonts/AktivGroteskVFTrial-Regular.ttf', // Make sure this matches your exact filename
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-custom', // This creates a CSS variable you can use
});

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${customFont.variable}`}>
        <BackgroundWrapper>
          <Header />
          <main>
            {children}
          </main>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
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

// Keep Inter as a fallback or for specific elements if needed
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Al Adham Productions',
  description: 'Artfully telling stories that are deeply rooted',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} ${inter.variable}`}>
        <BackgroundWrapper>
          <Header />
          <HeaderSpacer />
          <main>
            {children}
          </main>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
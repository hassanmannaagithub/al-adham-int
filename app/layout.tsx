// app/layout.tsx - Server Component
import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeaderSpacer from '@/components/HeaderSpacer';
import BackgroundWrapper from '@/components/BackgroundWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
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
      <body className={inter.className}>
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
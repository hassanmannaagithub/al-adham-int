import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header'; // Adjust path as needed

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

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
        <Header />
        <main className="pt-[var(--header-height)]">
          {children}
        </main>
      </body>
    </html>
  );
}
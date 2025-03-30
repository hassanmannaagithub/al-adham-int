// app/layout.tsx - Server Component
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

// Dynamic imports for loading wrappers
const BackgroundWrapper = dynamic(
  () => import("@/components/BackgroundWrapper")
);
const ClientLoadingWrapper = dynamic(
  () => import("@/components/ClientLoadingWrapper"),
  {
    loading: () => <div className="min-h-screen bg-[#5f1e1d]" />,
  }
);

// Import your custom font - Aktiv Grotesk Regular
const customFont = localFont({
  src: [
    {
      path: "../public/fonts/AktivGroteskVFTrial-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-custom",
});

export const metadata: Metadata = {
  title: "Al-Adham International",
  description: "Al-Adham International",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

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
            <main>{children}</main>
          </BackgroundWrapper>
        </ClientLoadingWrapper>
      </body>
    </html>
  );
}

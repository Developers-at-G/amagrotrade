import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: 'images/favicon.ico',
  },
  title: "Am Agrotradeservices",
  description: "Am Agrotradeservices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

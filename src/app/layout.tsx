import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nivesh OS - Smart Investment Platform',
  description: 'Comprehensive fintech platform for portfolio management, trading, and financial planning',
  keywords: 'investment, portfolio, trading, fintech, stocks, mutual funds, SIP',
  authors: [{ name: 'Nivesh OS Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
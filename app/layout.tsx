import type {Metadata} from 'next';
import {Cinzel, Inter} from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-cinzel',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stark-dungeons.vercel.app'),
  title: 'STARK DUNGEONS',
  description: 'Premium Dungeon Master portfolio and booking website.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${cinzel.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

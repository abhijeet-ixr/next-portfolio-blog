import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import Header from '../components/sections/header';
import Footer from '../components/sections/footer';

import './globals.css';

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
      <body>
        <Header />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

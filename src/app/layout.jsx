import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Autrisa-info',
  description: 'Pagina informativa sobre los procemientos Autrisa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-[url('/plus.svg')] bg-no-repeat bg-cover bg-center">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

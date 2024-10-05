import './globals.css';

import { Lato } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lato = Lato({
  weight: "400",
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="container flex-grow px-4 py-8 mx-auto">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

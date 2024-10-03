import 'tailwindcss/tailwind.css';

import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container flex-grow px-4 py-8 mx-auto">
            {children}
          </main>
          <footer className="bg-gray-100">
            <div className="container px-4 py-6 mx-auto text-center text-gray-600">
              © 2023 HealthCare Center. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

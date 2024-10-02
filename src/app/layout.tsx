import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                HealthCare Center
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-primary"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-6 text-center text-gray-600">
              © 2023 HealthCare Center. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

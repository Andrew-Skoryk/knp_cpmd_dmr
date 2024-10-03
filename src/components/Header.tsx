import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto ">
        <Link href="/" className="max-w-2xl text-2xl font-bold text-primary">
          КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО «ЦЕНТР ПЕРВИННОЇ МЕДИЧНОЇ
          ДОПОМОГИ» ДОЛИНСЬКОЇ МІСЬКОЇ РАДИ
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-primary">
                Про нас
              </Link>
            </li>

            <li>
              <Link href="/about" className="text-gray-600 hover:text-primary">
                Про нас
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="text-gray-600 hover:text-primary"
              >
                Послуги
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-primary"
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

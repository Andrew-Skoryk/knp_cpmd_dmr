import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto ">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/knp_logo.jpg"
              alt="Лого центру"
              width={110}
              height={110}
              className="object-contain"
            />
          </Link>

          <span className="text-xl font-bold leading-tight text-primary">
            КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">
              «ЦЕНТР ПЕРВИННОЇ МЕДИЧНОЇ ДОПОМОГИ»
            </span>
            <br />
            ДОЛИНСЬКОЇ МІСЬКОЇ РАДИ
          </span>
        </div>

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

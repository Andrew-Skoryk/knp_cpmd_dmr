import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="container flex items-center justify-between py-2 mx-auto px-28">
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

        <NavigationMenu className="flex pr-20 space-x-8 list-none">
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">Про нас</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/doctors">Лікарі</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/">Пацієнтам</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/services">Послуги</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">Контакти</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;

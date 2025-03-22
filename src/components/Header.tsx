import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Header = () => {
  return (
    <header className="border-b shadow-md border-border">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto md:px-8 lg:px-28">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/images/knp_logo.jpg"
              alt="Лого центру"
              width={110}
              height={110}
              className="object-contain rounded-md"
            />
          </Link>

          <div className="flex flex-col">
            <span className="text-sm font-medium md:text-base text-muted-foreground">
              КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО
            </span>

            <span className="text-lg font-bold logo-gradient md:text-xl">
              «ЦЕНТР ПЕРВИННОЇ МЕДИЧНОЇ ДОПОМОГИ»
            </span>

            <span className="text-sm font-medium md:text-base text-muted-foreground">
              ДОЛИНСЬКОЇ МІСЬКОЇ РАДИ
            </span>
          </div>
        </div>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-primary`}
                >
                  Про нас
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-primary">
                Наша команда
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 p-4 bg-card rounded-md shadow-lg">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/team/administration"
                        className="block p-2 transition-colors rounded-md hover:bg-muted hover:text-primary"
                      >
                        Адміністрація
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/team/doctors"
                        className="block p-2 transition-colors rounded-md hover:bg-muted hover:text-primary"
                      >
                        Лікарі
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-primary`}
                >
                  Пацієнтам
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-primary`}
                >
                  Послуги
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-primary`}
                >
                  Контакти
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Мобільна кнопка меню */}
        <button className="md:hidden text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

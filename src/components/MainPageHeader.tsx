import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const MainPageHeader = () => {
  return (
    <div className="flex items-center justify-center pb-5 bg-cyan-50 px-28">
      <div className="mx-auto space-y-6 ">
        <h1 className="text-4xl font-bold text-primary">
          ЦЕНТР ПЕРВИННОЇ МЕДИЧНОЇ ДОПОМОГИ
        </h1>

        <p className="text-xl w-[450px] text-primary">
          Місце, де ви можете отримати кваліфіковану допомогу, вчасну
          консультацію та щиру турботу.
          <br />
          Ми тут, щоб підтримати ваше здоров’я на кожному кроці.
        </p>

        <div className="flex space-x-4">
          <Button asChild>
            <Link href="/services">Послуги</Link>
          </Button>

          <Button asChild>
            <Link href="/contact">Записатись на прийом</Link>
          </Button>

          <Button asChild>
            <Link href="/">Дізнатись більше</Link>
          </Button>
        </div>
      </div>

      <Image
        src="/images/Doctor-visiting-Patient.svg"
        alt="background image"
        height={550}
        width={550}
        className=""
      />
    </div>
  );
};

export default MainPageHeader;

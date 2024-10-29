import Link from "next/link";

import { Button } from "@/components/ui/button";

const MainPageHeader = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-primary">
        ЦЕНТР ПЕРВИННОЇ МЕДИЧНОЇ ДОПОМОГИ
      </h1>

      <p className="text-xl text-gray-600">
        We provide comprehensive primary healthcare services to our community,
        ensuring your well-being is our top priority.
      </p>

      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/services">Our Services</Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/">Дізнатись більше</Link>
        </Button>
      </div>
    </div>
  );
};

export default MainPageHeader;

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to HealthCare Center</h1>

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
      </div>
    </div>
  );
}

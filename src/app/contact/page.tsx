import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Health Street, Medical City, MC 12345
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@healthcarecenter.com
          </p>
          <p className="mb-2">
            <strong>Hours:</strong> Monday - Friday: 8am - 8pm
          </p>
        </div>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
}

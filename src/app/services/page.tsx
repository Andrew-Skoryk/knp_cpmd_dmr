import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      name: "General Check-ups",
      description: "Comprehensive health assessments",
    },
    { name: "Vaccinations", description: "Preventive care for all ages" },
    {
      name: "Chronic Disease Management",
      description: "Ongoing care for long-term conditions",
    },
    { name: "Pediatric Care", description: "Specialized care for children" },
    { name: "Laboratory Services", description: "On-site testing facilities" },
    {
      name: "Mental Health Support",
      description: "Counseling and therapy services",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p className="text-xl text-gray-600">
        We offer a wide range of medical services to meet your healthcare needs.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const team = [
    { name: "Dr. Jane Smith", specialization: "General Practitioner" },
    { name: "Dr. John Doe", specialization: "Pediatrician" },
    { name: "Dr. Emily Brown", specialization: "Cardiologist" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-xl text-gray-600">
        Our team of experienced healthcare professionals is dedicated to
        providing high-quality, patient-centered care.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{member.specialization}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

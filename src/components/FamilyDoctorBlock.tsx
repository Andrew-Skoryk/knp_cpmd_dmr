import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, HeartHandshake, MapPin, CreditCard } from "lucide-react";

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, description }) => {
  return (
    <Card className="flex-1 min-w-[250px]">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="mt-1 text-primary">{icon}</div>
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FamilyDoctorBlock: React.FC = () => {
  const advantages = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Досвідчені лікарі 🩺",
      description: "Кваліфіковані фахівці, які піклуються про ваше здоров'я.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Сімейна медицина ❤️",
      description:
        "Ваш лікар веде спостереження за всією родиною, знаючи історію кожного пацієнта.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Медична допомога поруч 📍",
      description:
        "8 амбулаторій у межах ОТГ – зручний доступ до медичних послуг.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Безкоштовні послуги 💳",
      description:
        "Декларація забезпечує безоплатне обстеження, консультації та лікування.",
    },
  ];

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Обирайте свого сімейного лікаря – це важливий крок для вашого
          здоров'я!
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Декларація з лікарем відкриває доступ до якісної та безкоштовної
          медицини. Наш центр об'єднує 8 амбулаторій, щоб ви могли отримати
          допомогу якомога ближче до дому.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage, index) => (
          <Advantage
            key={index}
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FamilyDoctorBlock;

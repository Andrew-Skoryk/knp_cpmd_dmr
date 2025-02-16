import Image from "next/image";

import { Employee } from "@/app/types/Employee";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const doctrorsList: Employee[] = [
  {
    name: "Віолета",
    secondName: "Цап",
    thirdName: "Іванівна",
    position: "Лікар загальної практики - сімейна медицина",
    workPlace: "Амбулаторія №1",
    photo:
      "https://scontent-iev1-1.xx.fbcdn.net/v/t39.30808-6/272771883_3101645976758406_5227393411383591510_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6fKVTPd0mAQQ7kNvgHFM8Uh&_nc_zt=23&_nc_ht=scontent-iev1-1.xx&_nc_gid=AHbKwge-LVLKWFqy9qnrhqs&oh=00_AYCEtcnPHo77NCznqWPiAaop9e22dW6rNFJNM1BF-FEYUg&oe=6726B749",
  },
  {
    name: "Вікторія",
    secondName: "Костів",
    thirdName: "Русланівна",
    position: "Лікар загальної практики - сімейна медицина",
    workPlace: "Амбулаторія №1",
    photo:
      "https://scontent-iev1-1.xx.fbcdn.net/v/t39.30808-6/306952040_1157882414795578_2071248442574337629_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=n3lreYcO-XsQ7kNvgFLLi6u&_nc_zt=23&_nc_ht=scontent-iev1-1.xx&_nc_gid=A0BNvVXGKuUxtvD9xQc0eY-&oh=00_AYBcPZZADMjRdfFXikawurxyob40SGEZCrof5ByvFrX1bw&oe=6726E45B",
  },
];

export default function DoctorsTeamPage() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center text-primary">
        Наші лікарі
      </h1>

      <div className="grid grid-cols-5 gap-3">
        {doctrorsList.map(
          ({ name, secondName, thirdName, position, workPlace, photo }) => (
            <Card key={name + secondName} className="text-center">
              <CardHeader>{`${secondName} ${name} ${thirdName}`}</CardHeader>

              <CardContent className="flex flex-col items-center gap-1">
                <Image
                  src={photo}
                  alt="Фото працівника"
                  width={200}
                  height={200}
                  className="object-contain"
                />

                <CardDescription>{position}</CardDescription>

                <span>{workPlace}</span>
              </CardContent>

              <CardFooter className="block mx-auto">
                <Button>Записатись через Askep</Button>
              </CardFooter>
            </Card>
          ),
        )}
      </div>
    </div>
  );
}

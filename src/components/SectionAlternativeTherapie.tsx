"use client";
import CarouselMain from "@/components/Carousel";
import { CarouselWithContent } from "@/components/CarouselWithContent";
import { useSectionContext } from "@/hooks/useSectionContext";
import Terapia1 from "../../public/terapia1.svg";
import Terapia2 from "../../public/terapia2.svg";
import Tailandes from "../../public/tailandes.svg";
import reflexologia from "../../public/reflexologia1.svg";
const data = [
  {
    title: "Tuina",
    description:
      "Masaje de origen chino que usa amasar, presionar, hacer rodar, sacudir y extender el cuerpo.",
    imageUrl: Terapia1,
    price: 120000,
  },
  {
    title: "Tailandés",
    description:
      "El masaje Tradicional Tailandés o Masaje Thai es un técnica milenaria que se realiza en un futón en el suelo, aplicándose a todo el cuerpo, de pies a cabeza.",
    imageUrl: Tailandes,
    price: 150000,
  },
  {
    title: "Tantra (chakras y limpieza energética)",
    description:
      "El masaje Tantra utiliza suaves caricias y masajes en el cuerpo, que canalizan su energía y estimulan su sensibilidad llevándolo a un mundo diferente.",
    imageUrl: Terapia2,
    price: 170000,
  },
  {
    title: "Reflexología.",
    description:
      "La reflexología es la aplicación de presión en las áreas de los pies (o las manos).",
    imageUrl: Terapia2,
    price: 110000,
  },
];

export default function SectionAlternativeTherapie() {
  const { alternativeTherapieRef } = useSectionContext();
  return (
    <div className="h-screen w-screen" ref={alternativeTherapieRef}>
      <CarouselMain transition={{ duration: 2 }} classNameProps="rounded-xl">
        {data.map(({ title, description, imageUrl }, key) => {
          return (
            <CarouselWithContent
              title={title}
              description={description}
              index={key.toString()}
              key={key}
              imgUrl={imageUrl}
            />
          );
        })}
      </CarouselMain>
    </div>
  );
}

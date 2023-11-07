"use client";
import { useSectionContext } from "@/app/hooks/useSectionContext";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { aosAnimation } from "@/app/types";
import { CardDefault, CardDefaultProps } from "./CardDefault";

const listTherapeuticMassage: CardDefaultProps[] = [
  {
    title: "Descontracturacion",
    description:
      "Este tipo de masaje se enfoca en liberar la tensión acumulada en áreas específicas del cuerpo y es especialmente útil para personas que experimentan molestias musculares o rigidez.",
    bottonName: "Contactanos",
    imageSrc: "",
  },
  {
    title: "Deportivo: pre y pos descarga",
    description:
      "Masaje deportivo antes: Preparación muscular y calentamiento." +
      " Masaje deportivo después: Recuperación y alivio muscular." +
      "Ambos tipos de masaje deportivo son esenciales para mantener el bienestar de los atletas y garantizar un rendimiento óptimo en el deporte.",
    bottonName: "Contactanos",
    imageSrc: "",
  },
  {
    title: "Quiromasaje",
    description:
      "Quiromasaje es una técnica de masaje manual " +
      "utilizada para aliviar la tensión muscular, " +
      "reducir el estrés y mejorar la circulación sanguínea.",
    bottonName: "Contactanos",
    imageSrc: "",
  },
  {
    title: "Ventosas",
    description:
      "El masaje con ventosas es una técnica terapéutica que implica la aplicación de ventosas en la piel para crear un efecto de succión. " +
      "Este procedimiento ayuda a aliviar la tensión muscular, mejorar la circulación sanguínea y reducir el estrés, contribuyendo a una sensación de bienestar.",
    bottonName: "Contactanos",
    imageSrc: "",
  },
  {
    title: "Piedras volcánicas",
    description:
      "Masaje con piedras volcánicas: Utiliza piedras calientes para aliviar tensión, mejorar circulación y relajar músculos.",
    bottonName: "Contactanos",
    imageSrc: "",
  },
  {
    title: "Bambú",
    description:
      "Emplea cañas de bambú para relajar músculos y mejorar la circulación.",
    bottonName: "Contactanos",
    imageSrc: "",
  },
  {
    title: "Drenaje linfático",
    description:
      "Drenaje linfático: Técnica que estimula el sistema linfático para reducir la retención de líquidos y mejorar la circulación.",
    bottonName: "Contactanos",
    imageSrc: "",
  },
];

function SectionTherapeuticMassage() {
  const { therapeuticMassageRef } = useSectionContext();
  return (
    <>
      <div
        className="h-screen w-screen items-center flex justify-center text-center"
        ref={therapeuticMassageRef}
      >
        <div className="col-span-12" data-aos={aosAnimation.zoomInUp}>
          <Typography variant="h1" className=" p-4 text-center" color="brown">
            MASAJE TERAPEUTICO
          </Typography>
          <Typography
            variant="h5"
            color="brown"
            className="mb-6 font-medium leading-[1]"
          >
            Es una serie de técnicas de masaje que se utilizan en el tratamiento
            de trastornos neuromusculares y músculoesqueléticos facilitando la
            eliminación de toxinas activando la circulación sanguínea y
            linfática y mejorando el aporte de oxígeno a los tejidos también se
            utilizan para aliviar el estrés y estados de ánimo negativos pues
            estimulan la producción orgánica de endorfinas.
          </Typography>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 "
        data-aos={aosAnimation.fadeDown}
      >
        {listTherapeuticMassage.map(
          ({ title, description, bottonName, imageSrc }, key) => {
            return (
              <div
                key={key}
                className="p-3 w-100 h-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                data-aos={aosAnimation.fadeDown}
              >
                <CardDefault
                  title={title}
                  description={description}
                  bottonName={bottonName}
                  imageSrc={imageSrc}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default SectionTherapeuticMassage;

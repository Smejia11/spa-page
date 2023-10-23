"use client";
import { useSectionContext } from "@/app/hooks/useSectionContext";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { aosAnimation } from "@/app/types";

function SectionTherapeuticMassage() {
  const { therapeuticMassageRef } = useSectionContext();
  return (
    <div
      className="h-screen w-screen items-center flex justify-center text-center"
      ref={therapeuticMassageRef}
    >
      <div className="col-span-12" data-aos={aosAnimation.zoomInUp}>
        <Typography variant="h1" className=" p-3 text-center" color="brown">
          MASAJE TERAPEUTICO
        </Typography>
        <Typography
          variant="h5"
          color="brown"
          className="mb-6 font-medium leading-[1]"
        >
          Es una serie de técnicas de masaje que se utilizan en el tratamiento
          de trastornos neuromusculares y músculoesqueléticos facilitando la
          eliminación de toxinas activando la circulación sanguínea y linfática
          y mejorando el aporte de oxígeno a los tejidos también se utilizan
          para aliviar el estrés y estados de ánimo negativos pues estimulan la
          producción orgánica de endorfinas.
        </Typography>
      </div>
    </div>
  );
}

export default SectionTherapeuticMassage;

"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function CardHome() {
  return (
    <Card
      shadow={false}
      className="  grid min-h-[40rem] w-full max-w-[34rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('../../public/card.home.svg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
      </CardHeader>
      <CardBody className="relative py-5 px-6 md:px-12">
        <Typography
          variant="h6"
          color="brown"
          className="mb-6 font-medium leading-[1]"
        >
          ¡Hola! Soy Sandra Milena Loaiza, una profesional con más de 20 años de
          experiencia en la aplicación de fisioterapia, estética y masajes.
          Quiero ser tu aliada en el camino hacia el bienestar, proporcionandote
          servicios profesionales que se ajusten a tu estilo de vida.
        </Typography>
        <div className="hidden lg:block md-block">
          <Typography variant="h4" className="mb-4 text-brown-700">
            ˗ˏˋ Sandra Milena Loaiza ´ˎ˗
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

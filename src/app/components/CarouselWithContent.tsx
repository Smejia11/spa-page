"use client";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import useScroll from "../hooks/useScroll";

interface CarouselProps {
  title: string;
  description: string;
  imgUrl: string;
  price?: number;
  index: string;
}

export function CarouselWithContent({
  title,
  description,
  imgUrl,
  index,
  price,
}: CarouselProps) {
  const { redirectionContactUs } = useScroll();
  return (
    <div className="relative h-full w-full">
      <Image
        src={imgUrl}
        alt={index}
        width="50"
        height="50"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            <Button onClick={redirectionContactUs} size="lg" color="white">
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

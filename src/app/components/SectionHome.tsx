"use client";
import { CardHome } from "@/app/components/CardHome";
import { useSectionContext } from "@/app/hooks/useSectionContext";
import { aosAnimation } from "@/app/types";

export default function SectionHome() {
  const { homeRef } = useSectionContext();
  return (
    <div
      className="h-screen w-screen "
      ref={homeRef}
      data-aos={aosAnimation.zoomOut}
    >
      <div className="container mx-auto h-screen p-5">
        <div className="flex flex-col md:flex-row justify-center items-center">
          
          <CardHome />
          <div className="my-2" />
        </div>
      </div>
    </div>
  );
}

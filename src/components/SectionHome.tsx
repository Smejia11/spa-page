"use client";
import { CardHome } from "@/components/card/CardHome";
import { useSectionContext } from "@/hooks/useSectionContext";

export default function SectionHome() {
  const { homeRef } = useSectionContext();
  return (
    <div className="h-screen w-screen " ref={homeRef}>
      <div className="container mx-auto h-screen p-7">
        <div
          className="flex flex-col md:flex-row justify-center items-center"
          data-aos="fade-down"
        >
          <CardHome />
        </div>
      </div>
    </div>
  );
}

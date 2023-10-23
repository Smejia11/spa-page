"use client";
import { useEffect } from "react";
import { NavbarSimple } from "@/app/components/NavBar";
import Header from "@/app/components/Header";
import { SectionProvider } from "@/app/context/sectionContext";
import SectionHome from "./components/SectionHome";
import SectionAlternativeTherapie from "./components/SectionAlternativeTherapie";
import { FooterWithLogo } from "@/app/components/Footer";
import SectionTherapeuticMassage from "@/app/components/SectionTherapeuticMassage";
import SectionContactUs from "@/app/components/SectionContactUs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <SectionProvider>
        <Header fade="fade-down" classProps="w-full">
          <NavbarSimple />
        </Header>
        <SectionHome />
        <SectionAlternativeTherapie />
        <SectionTherapeuticMassage />
        <SectionContactUs />
        <FooterWithLogo />
      </SectionProvider>
    </main>
  );
}

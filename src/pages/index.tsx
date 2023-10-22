import { NavbarSimple } from "@/components/NavBar";
import Header from "@/components/Header";
import { SectionProvider } from "@/context/sectionContext";
import SectionHome from "../components/SectionHome";
import SectionAlternativeTherapie from "../components/SectionAlternativeTherapie";
import { FooterWithLogo } from "@/components/Footer";
import SectionTherapeuticMassage from "@/components/SectionTherapeuticMassage";
import SectionContactUs from "@/components/SectionContactUs";
export default function Home() {
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

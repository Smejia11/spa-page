import { NavbarSimple } from "@/components/NavBar";
import Header from "@/components/Header";
import { SectionProvider } from "@/context/sectionContext";
import SectionHome from "../components/SectionHome";
import SectionAlternativeTherapie from "../components/SectionAlternativeTherapie";
import { FooterWithLogo } from "@/components/Footer";
import SectionTherapeuticMassage from "@/components/SectionTherapeuticMassage";
import { SimpleForm } from "@/components/ContactUs";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "@/utils/snackbarManager";
import Grow from "@/utils/Grow";
import { aosAnimation } from "@/types";
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
        <SnackbarProvider
          TransitionComponent={Grow}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <SnackbarUtilitiesConfigurator />
          <div  data-aos={aosAnimation.fadeDown}>
            <SimpleForm />
          </div>
        </SnackbarProvider>
        <FooterWithLogo />
      </SectionProvider>
    </main>
  );
}

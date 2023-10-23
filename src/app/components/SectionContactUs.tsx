import { aosAnimation } from "@/app/types";
import Grow from "@/app/utils/Grow";
import { SnackbarUtilitiesConfigurator } from "@/app/utils/snackbarManager";
import { SnackbarProvider } from "notistack";
import React from "react";
import { SimpleForm } from "./ContactUs";
import { useSectionContext } from "@/app/hooks/useSectionContext";

function SectionContactUs() {
  const { contactUsRef } = useSectionContext();
  return (
    <SnackbarProvider
      TransitionComponent={Grow}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <SnackbarUtilitiesConfigurator />
      <div data-aos={aosAnimation.fadeDown} ref={contactUsRef}>
        <SimpleForm />
      </div>
    </SnackbarProvider>
  );
}

export default SectionContactUs;

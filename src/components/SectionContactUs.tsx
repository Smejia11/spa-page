import { aosAnimation } from "@/types";
import Grow from "@/utils/Grow";
import { SnackbarUtilitiesConfigurator } from "@/utils/snackbarManager";
import { SnackbarProvider } from "notistack";
import React from "react";
import { SimpleForm } from "./ContactUs";
import { useSectionContext } from "@/hooks/useSectionContext";

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

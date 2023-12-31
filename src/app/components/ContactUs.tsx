"use client";
import { sendEmail } from "@/app/services/sendEmail";
import { SnackbarUtilities } from "@/app/utils/snackbarManager";
import {
  Card,
  Button,
  Typography,
  CardHeader,
  Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSimpleForm } from "../hooks/useSimpleForm";
type DataEmailSend = {
  name: string;
  email: string;
  description: string;
};
export function SimpleForm() {
  const { handleSubmit, isLoading } = useSimpleForm();
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        variant="gradient"
        color="white"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h4" color="brown">
          Realice su consulta!
        </Typography>
      </CardHeader>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="brown" className="-mb-3">
            Tu nombre
          </Typography>
          <input
            className="shadow appearance-none border rounded focus:outline w-full py-2 px-3 text-brown-800 leading-tight  focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Nombre"
          />
          <Typography variant="h6" color="brown" className="-mb-3">
            Email
          </Typography>
          <input
            className="shadow appearance-none border rounded focus:outline w-full py-2 px-3 text-brown-800 leading-tight  focus:shadow-outline"
            name="email"
            type="email"
            placeholder="email"
          />
          <Typography variant="h6" color="brown" className="-mb-3">
            Motivo del contacto
          </Typography>
          <div className="lg:w-96 lg:h-60">
            <textarea
              name="description"
              placeholder="Motivo del contacto"
              className="!resize-y w-full  rounded-md  focus:outline h-full "
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner color="brown" className="h-8 w-8" />
          </div>
        ) : (
          <Button type="submit" color="brown" className="mt-6" fullWidth>
            Enviar
          </Button>
        )}
      </form>
    </Card>
  );
}

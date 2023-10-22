"use client";
import { sendEmail } from "@/services/sendEmail";
import { SnackbarUtilities } from "@/utils/snackbarManager";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  CardHeader,
  Spinner,
} from "@material-tailwind/react";
import { useState } from "react";
type DataEmailSend = {
  name: string;
  email: string;
  description: string;
};
export function SimpleForm() {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    try {
      setLoading(true);
      e.preventDefault();
      // @ts-ignore
      const dataEmail: DataEmailSend = Object.fromEntries(
        new window.FormData(event.target)
      );
      if (
        dataEmail.email.trim() === "" ||
        dataEmail.name.trim() === "" ||
        dataEmail.description.trim() === ""
      ) {
        SnackbarUtilities.warning("Los campos no pueden estar vacíos.");
        return;
      }
      const regex = /^[a-zA-Z0-9\s\.,'"!?]+$/i;

      if (!regex.test(dataEmail.name) || !regex.test(dataEmail.description)) {
        SnackbarUtilities.error(
          "El texto contiene caracteres no permitidos. Por favor, corrígelos."
        );
        return;
      }
      await sendEmail(dataEmail);
    } catch (error) {
      SnackbarUtilities.error(
        "Lo sentimos, se ha producido un error inesperado."
      );
    } finally {
      setLoading(false);
    }
  };
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
          <Input
            size="lg"
            color="brown"
            type="text"
            name="name"
            placeholder="nombre"
            className="!border !border-gray-600 bg-white"
          />
          <Typography variant="h6" color="brown" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            color="brown"
            type="email"
            name="email"
            placeholder="name@mail.com"
            className="!border !border-gray-600 bg-white"
          />
          <Typography variant="h6" color="brown" className="-mb-3">
            Motivo del contacto
          </Typography>
          <div className="lg:w-96">
            <Textarea
              name="description"
              color="brown"
              placeholder="Motivo del contacto"
              className="!border !border-gray-600 bg-white"
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

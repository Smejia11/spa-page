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
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const dataEmail: DataEmailSend = Object.fromEntries(
      new window.FormData(event.target)
    );

    if (
      dataEmail.email.trim() === "" ||
      dataEmail.name.trim() === "" ||
      dataEmail.description.trim() === ""
    ) {
      SnackbarUtilities.warning("Los campos no pueden estar vacíos.");
      setLoading(false);
      return;
    }

    await sendEmail(dataEmail);
    setLoading(false);
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
          <Input size="lg" type="text" name="name" label="nombre" />
          <Typography variant="h6" color="brown" className="-mb-3">
            Email
          </Typography>
          <Input size="lg" type="email" name="email" label="name@mail.com" />
          <Typography variant="h6" color="brown" className="-mb-3">
            Motivo del contacto
          </Typography>
          <div className="w-96">
            <Textarea name="description" label="Motivo del contacto" />
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

"use client";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  description: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  description,
  email,
}) => (
  <div>
    <h1>Hola soy, {name}!</h1>
    <p>{description}</p>
    <span>Correo para contacto {email}</span>
  </div>
);

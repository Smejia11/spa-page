"use client";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  description,
}) => (
  <div>
    <h1>Hola soy, {name}!</h1>
    <p>{description}</p>
  </div>
);

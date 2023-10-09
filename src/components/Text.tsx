import React from "react";
import { Typography } from "@material-tailwind/react";
import type { TypographyProps } from "@material-tailwind/react";

interface TypographyPropsExt extends TypographyProps {
  msn: string;
}

export const Text: React.FC<TypographyPropsExt> = ({
  variant,
  color,
  textGradient,
  msn,
}) => (
  <Typography variant={variant} color={color} textGradient={textGradient}>
    {msn}
  </Typography>
);

"use client";
import React, { ReactNode } from "react";

type fadeAnimation = "fade-up" | "fade-down";

interface fadeStyle {
  fade: fadeAnimation;
  children: ReactNode;
  classProps: string;
}

function Header({ fade, children, classProps }: fadeStyle) {
  return (
    <div data-aos={fade} className={classProps}>
      {children}
    </div>
  );
}

export default Header;

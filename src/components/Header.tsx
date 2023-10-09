"use client";
import React from "react";

type fadeAnimation = "fade-up" | "fade-down";

interface fadeStyle {
  fade: fadeAnimation;
  children: JSX.Element[] | JSX.Element;
  classProps: string;
}

function Header({ fade, children, classProps }: fadeStyle) {
  console.log(classProps);
  return (
    <div className={classProps} data-aos={fade}>
      {children}
    </div>
  );
}

export default Header;

import React from "react";
import { useSectionContext } from "../hooks/useSectionContext";

export const SectionRelajation: React.FC = () => {
  const { relaxing } = useSectionContext();
  return (
    <div
      className="h-screen w-screen items-center flex justify-center text-center"
      ref={relaxing}
    ></div>
  );
};

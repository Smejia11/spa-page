import { createContext, useRef, RefObject, FC, ReactNode } from "react";

interface SectionContextProps {
  homeRef: RefObject<any>;
  alternativeTherapieRef: RefObject<any>;
  therapeuticMassageRef: RefObject<any>;
  formRef: RefObject<any>;
  contactUsRef: RefObject<any>;
}

export const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

export const SectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const homeRef = useRef<any>(null);
  const alternativeTherapieRef = useRef<any>(null);
  const therapeuticMassageRef = useRef<any>(null);
  const formRef = useRef<any>(null);
  const contactUsRef = useRef<any>(null);

  const contextValue: SectionContextProps = {
    homeRef,
    alternativeTherapieRef,
    therapeuticMassageRef,
    formRef,
    contactUsRef,
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
};

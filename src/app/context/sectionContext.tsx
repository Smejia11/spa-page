import { createContext, useRef, RefObject, FC, ReactNode } from "react";

interface SectionContextProps {
  homeRef: RefObject<any>;
  alternativeTherapieRef: RefObject<any>;
  therapeuticMassageRef: RefObject<any>;
  formRef: RefObject<any>;
  contactUsRef: RefObject<any>;
  relaxing: RefObject<any>;
  physiotherapy: RefObject<any>;
}

export const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

export const SectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const homeRef = useRef<any>(null);
  const alternativeTherapieRef = useRef<any>(null);
  const therapeuticMassageRef = useRef<any>(null);
  const relaxing = useRef<any>(null);
  const physiotherapy = useRef<any>(null);
  const formRef = useRef<any>(null);
  const contactUsRef = useRef<any>(null);

  const contextValue: SectionContextProps = {
    homeRef,
    alternativeTherapieRef,
    therapeuticMassageRef,
    formRef,
    contactUsRef,
    physiotherapy,
    relaxing,
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
};

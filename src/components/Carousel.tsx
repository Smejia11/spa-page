import React, { ReactNode } from "react";
import { Carousel } from "@material-tailwind/react";

interface CarouselMainProps {
  children: ReactNode;
  classNameProps: string;
  transition?: object;
}

const CarouselMain: React.FC<CarouselMainProps> = ({
  children,
  classNameProps,
  transition,
}) => {
  return (
    <Carousel transition={transition} className={classNameProps}>
      {children}
    </Carousel>
  );
};

export default CarouselMain;

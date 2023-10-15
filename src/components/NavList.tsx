"use client";
import { Typography } from "../components/ExportAppDir";
import useScroll from "@/hooks/useScroll";

interface NavListProps {
  listNav: Array<string>;
}

function NavList({ listNav }: NavListProps) {
  const { scrollToRef } = useScroll();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {listNav.map((value, key) => (
        <Typography
          as="li"
          variant="small"
          color="brown"
          className="p-1 font-medium"
          key={key}
        >
          <a
            onClick={(e) => scrollToRef(key)}
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {value}
          </a>
        </Typography>
      ))}
    </ul>
  );
}
export default NavList;

"use client";
import { NavItem } from "@/app/hooks/useNavbar";
import { Typography } from "./ExportAppDir";
import useScroll from "@/app/hooks/useScroll";

interface NavListProps {
  listNav: Array<NavItem>;
}

function NavList({ listNav }: NavListProps) {
  const { scrollToRef } = useScroll();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {listNav.map(({ value, ref }) => (
        <Typography
          as="li"
          variant="small"
          color="brown"
          className="p-1 font-medium"
          key={ref}
        >
          <a
            onClick={() => scrollToRef(ref)}
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

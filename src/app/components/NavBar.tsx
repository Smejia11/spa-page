"use client";
import React, { ReactNode } from "react";
import { Navbar, Collapse, Typography, IconButton } from "./ExportAppDir";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./NavList";
import { useNavbar } from "@/app/hooks/useNavbar";

export function NavbarSimple(): ReactNode {
  const { openNav, setOpenNav, listNav } = useNavbar();
  return (
    <Navbar className="mx-auto max-w-screen-xl sm:w-screen">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          color="brown"
          className="mr-4 cursor-pointer py-1.5"
        >
          Fisioterapia, estética y masajes
        </Typography>
        <div className="hidden lg:block">
          <NavList listNav={listNav} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden block"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList listNav={listNav} />
      </Collapse>
    </Navbar>
  );
}

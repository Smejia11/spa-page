
import { useEffect, useState } from "react";

export type NavItem = {
    ref: string;
    value: string;
};


export const useNavbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    const listNav: Array<NavItem> = [{ ref: 'home', value: 'Home' },
    { ref: 'terapiasAlternativas', value: 'Terapias Alternativas' },
    { ref: 'masajeTerapeutico', value: 'Masaje Terapeutico' }]

    return { openNav, setOpenNav, listNav }
}

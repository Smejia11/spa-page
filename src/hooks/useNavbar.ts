
import { useEffect, useState } from "react";

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
    const listNav: Array<string> = ['Home', 'Terapias Alternativas', 'Masaje Terapeutico']

    return { openNav, setOpenNav, listNav }
}

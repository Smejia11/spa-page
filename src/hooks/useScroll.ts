import { useCallback } from 'react'
import { useSectionContext } from './useSectionContext';
interface EnumIndex {
    [key: number]: React.RefObject<any>;
}
const useScroll = () => {
    const { homeRef, alternativeTherapieRef, therapeuticMassageRef, formRef } =
        useSectionContext();
    const scrollToSection = useCallback((elementRef: { current: { offsetTop: any; }; }) => {
        try {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            });
        } catch (ex) {
            console.log(ex);
        }
    }, []);
    const enumIndex: EnumIndex = {
        0: homeRef,
        1: alternativeTherapieRef,
        2: therapeuticMassageRef,
    };
    const scrollToRef = useCallback((index: number) => scrollToSection(enumIndex[index]), [])
    return { scrollToRef }

}

export default useScroll
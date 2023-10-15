import { useCallback } from 'react'
import { useSectionContext } from './useSectionContext';
import { match, P } from 'ts-pattern';

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

    const scrollToRef = useCallback((index: number) => match(index)
        .with(0, () => scrollToSection(homeRef))
        .with(1, () => scrollToSection(alternativeTherapieRef))
        .with(2, () => scrollToSection(therapeuticMassageRef))
        , [])
    return { scrollToRef }

}

export default useScroll
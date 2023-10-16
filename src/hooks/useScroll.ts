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

    const scrollToRef = useCallback((ref: string) => match(ref)
        .with('home', () => scrollToSection(homeRef))
        .with('terapiasAlternativas', () => scrollToSection(alternativeTherapieRef))
        .with('masajeTerapeutico', () => scrollToSection(therapeuticMassageRef))
        , [])
    const redirectionHome = useCallback(() => scrollToSection(homeRef), [])
    return { scrollToRef, redirectionHome }

}

export default useScroll
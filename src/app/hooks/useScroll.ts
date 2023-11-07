import { useCallback } from 'react'
import { useSectionContext } from './useSectionContext';
import { match, P } from 'ts-pattern';

const useScroll = () => {
    const {
        homeRef,
        alternativeTherapieRef,
        therapeuticMassageRef,
        contactUsRef,
        physiotherapy,
        relaxing, } =
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
        .with('masajeRelajante', () => scrollToSection(relaxing))
        .with('fisioterapia', () => scrollToSection(physiotherapy))
        .with('contactUs', () => scrollToSection(contactUsRef))
        , [])
    const redirectionHome = useCallback(() => scrollToSection(homeRef), [])
    const redirectionContactUs = useCallback(() => scrollToSection(contactUsRef), [])

    return { scrollToRef, redirectionHome, redirectionContactUs }

}

export default useScroll
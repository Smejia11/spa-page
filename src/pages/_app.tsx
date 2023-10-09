import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css"; // You can also use <link> for styles

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

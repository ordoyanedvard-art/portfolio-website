import type { Locale } from "@/data/i18n";
import Nav from "./Nav";
import ScrollProgress from "./ScrollProgress";
import CustomCursor from "./CustomCursor";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Stats from "./Stats";
import WorkGrid from "./WorkGrid";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

interface PageShellProps {
  /** Язык страницы */
  locale?: Locale;

  /** Открытая работа, если адрес содержит /work/<slug> */
  initialSlug?: string;
}

export default function PageShell({
  locale = "ru",
  initialSlug,
}: PageShellProps) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <Nav locale={locale} />

      <main id="top">
        <Hero locale={locale} />
        <Marquee />
        <Stats locale={locale} />
        <WorkGrid
          locale={locale}
          initialSlug={initialSlug}
        />
        <Services locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} />
    </>
  );
}

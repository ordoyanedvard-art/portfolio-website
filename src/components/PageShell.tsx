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
  /** Задан, когда страница открыта по адресу /work/<slug> */
  initialSlug?: string;
}

/**
 * Единственный макет сайта.
 * И главная, и /work/<slug> рендерят одно и то же —
 * различие только в том, открыт ли просмотрщик сразу.
 */
export default function PageShell({ initialSlug }: PageShellProps) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Stats />
        <WorkGrid initialSlug={initialSlug} />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { HeroHeader } from "../components/organisms/HeroHeader";
import { About } from "../components/organisms/About";
import { Objective } from "../components/organisms/Objective";
import { Skills } from "../components/organisms/Skills";
import { Projects } from "../components/organisms/Projects";
import { Navigation } from "../components/organisms/Navigation";
import { Certifications } from "../components/organisms/Certifications";
import { Contact } from "../components/organisms/Contact";
import { Footer } from "../components/organisms/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />

      <div
        className="
          w-screen min-h-screen bg-linear-to-b from-white via-gray-100 to-gray-200 
          dark:from-black dark:via-gray-950 dark:to-gray-900 
          transition-all duration-500 px-15 md:px-30 lg:px-40 xl:px-40
        "
      >
        <HeroHeader />
        <About />
        <Objective />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
        <Footer />
    </>
  );
}
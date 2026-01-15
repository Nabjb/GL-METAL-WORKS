import Hero from "@/components/sections/Hero";
import ProcessStrip from "@/components/sections/ProcessStrip";
import ThreeDGallery from "@/components/sections/ThreeDGallery";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import ProjectsCTA from "@/components/sections/ProjectsCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ThreeDGallery />
        <ProcessStrip />
        <Services />
        <ProjectsCTA />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

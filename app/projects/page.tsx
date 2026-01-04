import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | GL Metal Works",
  description:
    "Browse our portfolio of completed metalwork projects including warehouses, structural steel, staircases, and custom fabrication.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </>
  );
}


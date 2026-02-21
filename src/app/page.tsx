import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <div className="border-t border-border-dark" />
      <About />
      <div className="border-t border-border-dark" />
      <TechStack />
      <div className="border-t border-border-dark" />
      <Experience />
      <div className="border-t border-border-dark" />
      <Projects />
      <div className="border-t border-border-dark" />
      <Education />
      <div className="border-t border-border-dark" />
      <Courses />
      <Footer />
    </main>
  );
}

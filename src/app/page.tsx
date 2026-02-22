import About from "@/components/About";
import Courses from "@/components/Courses";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

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
      <div className="border-t border-border-dark" />
      <Testimonials />
      <Footer />
    </main>
  );
}

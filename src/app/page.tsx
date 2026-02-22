import dynamic from "next/dynamic";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Education = dynamic(() => import("@/components/Education"));
const Courses = dynamic(() => import("@/components/Courses"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

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

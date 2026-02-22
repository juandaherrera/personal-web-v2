"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/content";

const navItems = {
  es: [
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Recomendaciones", href: "#testimonials" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
  ],
};

export default function Header() {
  const { setLang, isEn } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = isEn ? navItems.en : navItems.es;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-[background-color,border-color] duration-300 pt-[env(safe-area-inset-top)] border-b ${
        scrolled ? "bg-bg/90 border-border-dark" : "bg-transparent border-transparent"
      }`}
    >
      <div className="section-container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <LogoMark size="text-xl" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-figtree text-sm text-muted hover:text-text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Lang toggle */}
          <button
            type="button"
            onClick={() => setLang(isEn ? "es" : "en")}
            className="flex items-center gap-1.5 font-mono text-xs border border-border-dark rounded-full px-3 py-1.5 text-muted hover:border-accent hover:text-accent transition-all"
            aria-label="Toggle language"
          >
            <span className={isEn ? "text-text-primary" : "text-muted"}>EN</span>
            <span className="text-border-2">/</span>
            <span className={!isEn ? "text-text-primary" : "text-muted"}>ES</span>
          </button>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-border-dark text-muted hover:border-accent hover:text-accent transition-all"
            aria-label="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-border-dark px-6 py-4 flex flex-col gap-4"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-figtree text-sm text-muted hover:text-text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}

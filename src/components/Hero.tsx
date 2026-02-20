"use client";

import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, typewriterTitles } from "@/data/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span className="font-mono text-[#FF6B6B]">
      {words[index].substring(0, subIndex)}
      <span
        className={`inline-block w-0.5 h-5 bg-[#FF6B6B] ml-0.5 align-middle transition-opacity ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { isEn } = useLanguage();
  const words = isEn ? typewriterTitles.en : typewriterTitles.es;

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF6B6B] opacity-[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#FFB3B3] opacity-[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={item}
              className="font-mono text-sm text-[#71717a] mb-6 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-[#FF6B6B]" />
              {isEn ? "Hello 👋🏻, I'm" : "Hola 👋🏻, soy"}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-syne font-extrabold text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-[#fafaf9] mb-4"
            >
              Juan David
              <br />
              <span className="text-gradient">Herrera</span>
            </motion.h1>

            <motion.div variants={item} className="h-8 mb-6">
              <Typewriter words={words} />
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-2 mb-8"
            >
              <span className="font-figtree text-[#71717a] text-sm">
                {isEn ? "Currently at" : "Actualmente en"}
              </span>
              <a
                href={personalInfo.currentCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-syne font-semibold text-sm text-[#fafaf9] hover:text-[#FF6B6B] transition-colors"
              >
                <Image
                  src={personalInfo.currentCompanyLogo}
                  alt={personalInfo.currentCompany}
                  width={80}
                  height={20}
                  className="h-5 w-auto brightness-0 invert transition-transform duration-200 hover:scale-110"
                />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-3 mb-10">
              <SocialLink href={personalInfo.github} label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </SocialLink>
              <SocialLink href={personalInfo.linkedin} label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
              <SocialLink href={personalInfo.instagram} label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>
            </motion.div>

            {/* CTA */}
            <motion.div variants={item} className="flex items-center gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 bg-[#FF6B6B] text-white font-figtree font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#FF5252] transition-colors"
              >
                {isEn ? "Learn more about me" : "Conoce más de mí"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[#FF6B6B]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#FF6B6B]/10 scale-125" />
              {/* Accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF6B6B]/10 rounded-2xl blur-xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#1f1f28]" style={{ position: "relative" }}>
                <Image
                  src={personalInfo.photo}
                  alt="Juan David Herrera"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-2 -right-4 bg-[#111117] border border-[#1f1f28] rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-[#71717a]">
                  {isEn ? "Available" : "Disponible"}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-[#71717a]">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#FF6B6B] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1f1f28] text-[#71717a] hover:border-[#FF6B6B] hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/5 transition-all"
    >
      {children}
    </a>
  );
}

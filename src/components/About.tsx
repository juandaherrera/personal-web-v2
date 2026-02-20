"use client";

import { useLanguage } from "@/context/LanguageContext";
import { aboutMe } from "@/data/content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = {
  es: [
    { value: "5+", label: "Años de experiencia" },
    { value: "3", label: "Empresas tech" },
    { value: "ML", label: "Backend & Data" },
  ],
  en: [
    { value: "5+", label: "Years of experience" },
    { value: "3", label: "Tech companies" },
    { value: "ML", label: "Backend & Data" },
  ],
};

export default function About() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statList = isEn ? stats.en : stats.es;

  return (
    <section id="about" className="relative section-py-lg overflow-hidden">
      {/* Ghost section number */}
      <div className="section-number absolute -top-4 left-0 select-none pointer-events-none">
        01
      </div>

      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs text-[#FF6B6B] uppercase tracking-widest mb-4">
              {isEn ? "About me" : "Sobre mí"}
            </p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#fafaf9] leading-tight mb-12">
              {isEn ? (
                <>
                  Engineer who loves
                  <br />
                  <span className="text-gradient">building systems</span>
                </>
              ) : (
                <>
                  Ingeniero que ama
                  <br />
                  <span className="text-gradient">construir sistemas</span>
                </>
              )}
            </h2>

            {/* Stats */}
            <div className="flex gap-8">
              {statList.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-syne font-extrabold text-3xl text-[#FF6B6B]">
                    {stat.value}
                  </span>
                  <span className="font-figtree text-sm text-[#71717a]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-figtree text-[#71717a] leading-relaxed text-base md:text-lg border-l-2 border-[#FF6B6B]/30 pl-6">
              {isEn ? aboutMe.en : aboutMe.es}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { technologies } from "@/data/content";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TechItem({ name, icon, url }: { name: string; icon: string; url: string }) {
  return (
    <a
      href={url === "/" ? "#" : url}
      target={url !== "/" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-[#1f1f28] bg-[#111117] hover:border-[#FF6B6B]/50 hover:bg-[#FF6B6B]/5 transition-all group cursor-pointer"
    >
      <img
        src={`https://cdn.simpleicons.org/${icon}/ff4d2e`}
        alt={name}
        width={20}
        height={20}
        className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="font-mono text-sm text-[#71717a] group-hover:text-[#fafaf9] transition-colors whitespace-nowrap">
        {name}
      </span>
    </a>
  );
}

export default function TechStack() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const half = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, half);
  const row2 = technologies.slice(half);

  return (
    <section className="relative section-py overflow-hidden" ref={ref}>
      <div className="section-number absolute -top-4 right-0 select-none pointer-events-none">
        02
      </div>

      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-[#FF6B6B] uppercase tracking-widest mb-4">
            {isEn ? "Tech stack" : "Tecnologías"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#fafaf9] leading-tight">
            {isEn ? "Tools I work with" : "Herramientas con las que trabajo"}
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="relative space-y-4">
        {/* Fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            {[...row1, ...row1].map((tech, i) => (
              <TechItem key={`r1-${i}`} {...tech} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-reverse">
            {[...row2, ...row2].map((tech, i) => (
              <TechItem key={`r2-${i}`} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

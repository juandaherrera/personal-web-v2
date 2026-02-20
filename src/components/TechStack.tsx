"use client";

import { useLanguage } from "@/context/LanguageContext";
import { technologies } from "@/data/content";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useRef } from "react";

function TechItem({ name, icon, iconUrl, url }: { name: string; icon: string; iconUrl?: string; url: string }) {
  return (
    <a
      href={url === "/" ? "#" : url}
      target={url !== "/" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl border border-[#1f1f28] bg-[#111117] hover:border-[#FF6B6B]/50 hover:bg-[#FF6B6B]/5 transition-all group cursor-pointer"
    >
      <img
        src={iconUrl ?? `https://cdn.simpleicons.org/${icon}/ff4d2e`}
        alt={name}
        width={20}
        height={20}
        className={`w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity ${
          iconUrl ? "brightness-0 invert sepia saturate-[3] hue-rotate-[320deg]" : ""
        }`}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="font-mono text-base text-[#71717a] group-hover:text-[#fafaf9] transition-colors whitespace-nowrap">
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
      <div className="space-y-4">
        {/* Row 1 — left */}
        <Marquee speed={40} gradient gradientColor="#09090b" gradientWidth={96} pauseOnHover>
          {row1.map((tech, i) => (
            <div key={i} className="px-2">
              <TechItem {...tech} />
            </div>
          ))}
        </Marquee>

        {/* Row 2 — right */}
        <Marquee speed={40} direction="right" gradient gradientColor="#09090b" gradientWidth={96} pauseOnHover>
          {row2.map((tech, i) => (
            <div key={i} className="px-2">
              <TechItem {...tech} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

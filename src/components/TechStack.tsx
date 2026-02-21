"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { useLanguage } from "@/context/LanguageContext";
import { technologies } from "@/data/content";

function TechItem({
  name,
  icon,
  iconUrl,
  url,
}: {
  name: string;
  icon: string;
  iconUrl?: string;
  url: string;
}) {
  return (
    <a
      href={url === "/" ? "#" : url}
      target={url !== "/" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl border border-border-dark bg-surface hover:border-accent/50 hover:bg-accent/5 transition-all group cursor-pointer"
    >
      {/* biome-ignore lint/performance/noImgElement: uses data URIs and onError handler, incompatible with next/image */}
      <img
        src={iconUrl ?? `https://cdn.simpleicons.org/${icon}/ff4d2e`}
        alt={name}
        width={20}
        height={20}
        className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="font-mono text-base text-muted group-hover:text-text-primary transition-colors whitespace-nowrap">
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
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            {isEn ? "Tech stack" : "Tecnologías"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
            {isEn ? "Tools I work with" : "Herramientas con las que trabajo"}
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        {/* Row 1 — left */}
        <Marquee
          autoFill
          speed={40}
          gradient
          gradientColor="#09090b"
          gradientWidth={96}
          pauseOnHover
        >
          {row1.map((tech) => (
            <div key={tech.name} className="px-2">
              <TechItem {...tech} />
            </div>
          ))}
        </Marquee>

        {/* Row 2 — right */}
        <Marquee
          autoFill
          speed={40}
          direction="right"
          gradient
          gradientColor="#09090b"
          gradientWidth={96}
          pauseOnHover
        >
          {row2.map((tech) => (
            <div key={tech.name} className="px-2">
              <TechItem {...tech} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

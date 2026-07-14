"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { TechBadge } from "@/components/TechBadge";
import { useLanguage } from "@/context/LanguageContext";
import { type PressMention, pressMentions } from "@/data/content";

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

function PressCard({
  mention,
  isEn,
  delay,
  inView,
}: {
  mention: PressMention;
  isEn: boolean;
  delay: number;
  inView: boolean;
}) {
  const [coverFailed, setCoverFailed] = useState(false);
  const showCover = Boolean(mention.coverImage) && !coverFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="max-w-xl rounded-2xl border border-border-dark bg-surface/50 overflow-hidden hover:border-border-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300"
    >
      {showCover && (
        <div className="relative w-full aspect-1200/630 bg-surface-2">
          <Image
            src={mention.coverImage as string}
            alt={mention.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
            onError={() => setCoverFailed(true)}
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-4 mb-5">
          <div className="shrink-0 w-14 h-14 rounded-xl bg-surface-2 border border-border-dark flex items-center justify-center overflow-hidden">
            <Image
              src={mention.outletLogo}
              alt={mention.outlet}
              width={32}
              height={32}
              className="w-8 h-8 object-contain brightness-0 invert"
            />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-xs text-muted">
              {mention.outlet} · {mention.year}
            </p>
            <p className="font-mono text-[10px] text-accent uppercase tracking-widest mt-0.5">
              {isEn ? "Case study" : "Caso de estudio"}
            </p>
          </div>
        </div>

        <h3 className="font-syne font-bold text-xl text-text-primary leading-snug">
          {mention.title}
        </h3>

        <p className="font-figtree text-base text-muted mt-3 leading-relaxed">
          {isEn ? mention.descriptionEn : mention.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {(isEn ? mention.statsEn : mention.stats).map((stat) => (
            <TechBadge key={stat} label={stat} />
          ))}
        </div>

        <a
          href={mention.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 font-figtree font-semibold text-sm px-5 py-2.5 rounded-full border border-border-2 text-text-primary hover:border-accent hover:text-accent transition-all duration-300 whitespace-nowrap cursor-pointer"
        >
          {isEn ? "Read the case study" : "Leer el caso de estudio"}
          <ExternalLinkIcon />
        </a>
      </div>
    </motion.div>
  );
}

export default function Press() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative section-py-lg overflow-hidden" ref={ref}>
      <div className="section-number absolute -top-4 right-0 select-none pointer-events-none">
        04
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            {isEn ? "Press" : "En los medios"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
            {isEn ? "Featured in" : "Reconocimiento externo"}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {pressMentions.map((mention, i) => (
            <PressCard
              key={mention.url}
              mention={mention}
              isEn={isEn}
              delay={0.15 + i * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

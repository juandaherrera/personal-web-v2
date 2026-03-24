"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { TechBadge } from "@/components/TechBadge";
import { useLanguage } from "@/context/LanguageContext";
import { experience } from "@/data/content";
import { formatMonthYear } from "@/utils/date";

function getDuration(startStr: string, endStr: string | null, isEn: boolean): string {
  const start = new Date(`${startStr}T00:00:00`);
  const end = endStr ? new Date(`${endStr}T00:00:00`) : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1; // count start and end month inclusive (LinkedIn style)
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (isEn) {
    if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (rem > 0) parts.push(`${rem} mo${rem > 1 ? "s" : ""}`);
  } else {
    if (years > 0) parts.push(`${years} año${years > 1 ? "s" : ""}`);
    if (rem > 0) parts.push(`${rem} mes${rem > 1 ? "es" : ""}`);
  }
  return parts.join(isEn ? " " : " y ");
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Experience() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(`${experience[0].name}-0`);

  return (
    <section id="experience" className="relative section-py-lg overflow-hidden" ref={ref}>
      <div className="section-number absolute -top-4 left-0 select-none pointer-events-none">
        03
      </div>

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            {isEn ? "Work history" : "Trayectoria"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
            {isEn ? "Where I've worked" : "Dónde he trabajado"}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Spine — draws from top to bottom on view enter */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 to-border-dark origin-top"
          />

          <div className="space-y-12">
            {experience.map((company, ci) => {
              const companyStart = company.jobs[company.jobs.length - 1].startDate;
              const companyEnd = company.jobs[0].endDate;
              const isCurrent = !companyEnd;

              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + ci * 0.15, ease: EASE }}
                  className="relative pl-14 md:pl-20 group"
                >
                  {/* Pulse ring — current company only */}
                  {isCurrent && (
                    <div className="absolute left-0 md:left-1.5 top-6 z-[5] w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent/15 animate-pulse" />
                  )}

                  {/* Timeline node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.25 + ci * 0.15, ease: EASE }}
                    className={`absolute left-0 md:left-1.5 top-6 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-surface-2 border-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-border-2 ${
                      isCurrent
                        ? "border-accent/40 shadow-[0_0_16px_rgba(255,107,107,0.15)]"
                        : "border-border-dark"
                    }`}
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain brightness-0 invert"
                    />
                  </motion.div>

                  {/* Horizontal connector: node → card */}
                  <div className="absolute left-10 md:left-[50px] top-11 h-px w-4 md:w-[30px] bg-border-dark" />

                  {/* Company card */}
                  <div className="border border-border-dark rounded-2xl overflow-hidden bg-surface/50 hover:border-border-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300">
                    {/* Company header */}
                    <div className="flex items-center justify-between gap-3 px-6 py-5 border-b border-border-dark">
                      <div className="min-w-0">
                        <a
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-syne font-bold text-xl text-text-primary hover:text-accent transition-colors"
                        >
                          {company.name}
                        </a>
                        <p className="font-mono text-sm text-muted mt-1">
                          {formatMonthYear(companyStart, isEn)} →{" "}
                          {formatMonthYear(companyEnd, isEn)}{" "}
                          <span className="text-border-2">·</span>{" "}
                          {getDuration(companyStart, companyEnd, isEn)}
                        </p>
                      </div>
                      {isCurrent && (
                        <span className="shrink-0 font-mono text-[10px] px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400">
                          {isEn ? "Current" : "Actual"}
                        </span>
                      )}
                    </div>

                    {/* Jobs accordion */}
                    <div className="divide-y divide-border-dark">
                      {company.jobs.map((job, ji) => {
                        const key = `${company.name}-${ji}`;
                        const isOpen = expanded === key;
                        return (
                          <div key={key}>
                            <button
                              type="button"
                              onClick={() => setExpanded(isOpen ? null : key)}
                              className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors border-l-2 ${
                                isOpen
                                  ? "bg-surface-2 border-l-accent/50"
                                  : "hover:bg-surface-2 border-l-transparent"
                              }`}
                            >
                              <div>
                                <p className="font-figtree font-semibold text-text-primary text-base">
                                  {isEn ? job.titleEn : job.title}
                                </p>
                                <p className="font-mono text-sm text-muted mt-0.5">
                                  {formatMonthYear(job.startDate, isEn)} →{" "}
                                  {formatMonthYear(job.endDate, isEn)}{" "}
                                  <span className="text-border-2">·</span>{" "}
                                  {getDuration(job.startDate, job.endDate, isEn)}
                                </p>
                              </div>
                              <svg
                                aria-hidden="true"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: EASE }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pt-4 pb-6 space-y-6">
                                    <p className="font-figtree text-muted text-base leading-relaxed">
                                      {isEn ? job.descriptionEn : job.description}
                                    </p>

                                    {(isEn ? job.achievementsEn : job.achievements) && (
                                      <div className="bg-accent/5 border border-accent/15 rounded-xl p-4">
                                        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
                                          {isEn ? "Highlights" : "Logros"}
                                        </p>
                                        <p className="font-figtree text-base text-text-primary/80 leading-relaxed">
                                          {isEn ? job.achievementsEn : job.achievements}
                                        </p>
                                      </div>
                                    )}

                                    {job.technologies.length > 0 && (
                                      <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech) => (
                                          <TechBadge key={tech} label={tech} />
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

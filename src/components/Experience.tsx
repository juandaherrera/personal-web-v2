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

        <div className="space-y-8">
          {experience.map((company, ci) => {
            const companyStart = company.jobs[company.jobs.length - 1].startDate;
            const companyEnd = company.jobs[0].endDate;
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="border border-border-dark rounded-2xl overflow-hidden bg-surface/50 hover:border-border-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300"
              >
                {/* Company header */}
                <div className="flex items-center gap-4 p-6 border-b border-border-dark">
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-12 h-12 rounded-xl bg-surface-2 border border-border-dark flex items-center justify-center overflow-hidden hover:border-accent/30 transition-colors"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain brightness-0 invert"
                    />
                  </a>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-syne font-bold text-xl text-text-primary">
                      {company.name}
                    </h3>
                    <p className="font-mono text-sm text-muted">
                      {formatMonthYear(companyStart, isEn)} → {formatMonthYear(companyEnd, isEn)}{" "}
                      <span className="text-border-2">·</span>{" "}
                      {getDuration(companyStart, companyEnd, isEn)}
                    </p>
                  </div>
                  {!companyEnd && (
                    <span className="ml-auto font-mono text-[10px] px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 whitespace-nowrap">
                      {isEn ? "Current" : "Actual"}
                    </span>
                  )}
                </div>

                {/* Jobs */}
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
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

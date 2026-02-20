"use client";

import { useLanguage } from "@/context/LanguageContext";
import { experience } from "@/data/content";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

function formatDate(dateStr: string | null, isEn: boolean): string {
  if (!dateStr) return isEn ? "Present" : "Actualidad";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(isEn ? "en-US" : "es-CO", {
    month: "short",
    year: "numeric",
  });
}

function getDuration(startStr: string, endStr: string | null, isEn: boolean): string {
  const start = new Date(startStr + "T00:00:00");
  const end = endStr ? new Date(endStr + "T00:00:00") : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1; // count start and end month inclusive (LinkedIn style)
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
          <p className="font-mono text-xs text-[#FF6B6B] uppercase tracking-widest mb-4">
            {isEn ? "Work history" : "Trayectoria"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#fafaf9] leading-tight">
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
                className="border border-[#1f1f28] rounded-2xl overflow-hidden bg-[#111117]/50 hover:border-[#FF6B6B]/25 hover:shadow-[0_0_40px_-10px_rgba(255,107,107,0.12)] transition-all duration-300"
              >
                {/* Company header */}
                <div className="flex items-center gap-4 p-6 border-b border-[#1f1f28] bg-gradient-to-r from-[#FF6B6B]/[0.04] to-transparent">
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#18181f] border border-[#1f1f28] flex items-center justify-center overflow-hidden hover:border-[#FF6B6B]/30 transition-colors"
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
                    <h3 className="font-syne font-bold text-lg text-[#fafaf9]">
                      {company.name}
                    </h3>
                    <p className="font-mono text-xs text-[#71717a]">
                      {formatDate(companyStart, isEn)} →{" "}
                      {formatDate(companyEnd, isEn)}{" "}
                      <span className="text-[#2a2a36]">·</span>{" "}
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
                <div className="divide-y divide-[#1f1f28]">
                  {company.jobs.map((job, ji) => {
                    const key = `${company.name}-${ji}`;
                    const isOpen = expanded === key;
                    return (
                      <div key={key}>
                        <button
                          onClick={() => setExpanded(isOpen ? null : key)}
                          className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors border-l-2 ${
                            isOpen
                              ? "bg-[#18181f] border-l-[#FF6B6B]/50"
                              : "hover:bg-[#18181f] border-l-transparent"
                          }`}
                        >
                          <div>
                            <p className="font-figtree font-semibold text-[#fafaf9] text-sm">
                              {isEn ? job.titleEn : job.title}
                            </p>
                            <p className="font-mono text-xs text-[#71717a] mt-0.5">
                              {formatDate(job.startDate, isEn)} →{" "}
                              {formatDate(job.endDate, isEn)}{" "}
                              <span className="text-[#2a2a36]">·</span>{" "}
                              {getDuration(job.startDate, job.endDate, isEn)}
                            </p>
                          </div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`flex-shrink-0 text-[#71717a] transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                              <div className="px-6 pb-6 space-y-4">
                                <p className="font-figtree text-[#71717a] text-sm leading-relaxed">
                                  {isEn ? job.descriptionEn : job.description}
                                </p>

                                {(isEn ? job.achievementsEn : job.achievements) && (
                                  <div className="bg-[#FF6B6B]/5 border border-[#FF6B6B]/15 rounded-xl p-4">
                                    <p className="font-mono text-xs text-[#FF6B6B] uppercase tracking-widest mb-2">
                                      {isEn ? "Highlights" : "Logros"}
                                    </p>
                                    <p className="font-figtree text-sm text-[#fafaf9]/80 leading-relaxed">
                                      {isEn ? job.achievementsEn : job.achievements}
                                    </p>
                                  </div>
                                )}

                                {job.technologies.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech) => (
                                      <span
                                        key={tech}
                                        className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#FF6B6B]/8 border border-[#FF6B6B]/20 text-[#FF6B6B]/70 hover:bg-[#FF6B6B]/15 hover:border-[#FF6B6B]/50 hover:text-[#FF6B6B] transition-all duration-200 cursor-default select-none"
                                      >
                                        {tech}
                                      </span>
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

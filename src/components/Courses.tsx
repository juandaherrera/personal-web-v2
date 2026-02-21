"use client";

import { useLanguage } from "@/context/LanguageContext";
import { courseSchools, totalCourses } from "@/data/content";
import { TechBadge } from "@/components/TechBadge";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const INITIAL_VISIBLE = 5;

const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function formatCourseDate(dateStr: string, isEn: boolean): string {
  const d = new Date(dateStr + "T00:00:00");
  const month = isEn ? MONTHS_EN[d.getMonth()] : MONTHS_ES[d.getMonth()];
  return `${month} ${d.getFullYear()}`;
}

export default function Courses() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<Set<string>>(new Set());

  function toggleShowAll(name: string) {
    setShowAll((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  return (
    <section className="relative section-py-lg overflow-hidden" ref={ref}>
      <div className="section-number absolute -top-4 right-0 select-none pointer-events-none">
        06
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-[#FF6B6B] uppercase tracking-widest mb-4">
            {isEn ? "Lifelong learning" : "Aprendizaje continuo"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
            {isEn ? "Courses" : "Cursos"}
          </h2>
          <div className="flex items-baseline gap-3 mt-3">
            <span className="font-mono text-[#FF6B6B] text-3xl font-bold leading-none">
              {totalCourses}
            </span>
            <p className="font-figtree text-muted text-base">
              {isEn
                ? "completed courses across all platforms"
                : "cursos finalizados en todas las plataformas"}
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {courseSchools.map((school, i) => {
            const isOpen = expanded === school.name;
            const isShowingAll = showAll.has(school.name);
            const hasMore = school.courses.length > INITIAL_VISIBLE;
            const visibleCourses = isShowingAll
              ? school.courses
              : school.courses.slice(0, INITIAL_VISIBLE);
            const hiddenCount = school.courses.length - INITIAL_VISIBLE;

            return (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border-dark rounded-2xl overflow-hidden bg-surface/50 hover:border-[#2a2a36] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300"
              >
                {/* Platform header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : school.name)}
                  className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors ${
                    isOpen ? "bg-[#18181f]" : "hover:bg-[#18181f]"
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#18181f] border border-border-dark flex items-center justify-center overflow-hidden">
                    <Image
                      src={school.logo}
                      alt={school.name}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain brightness-0 invert"
                    />
                  </div>
                  <p className="flex-1 font-syne font-bold text-xl text-text-primary">
                    {school.name}
                  </p>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-[#1f1f28] text-muted">
                    {school.courses.length}{" "}
                    {isEn
                      ? school.courses.length === 1 ? "course" : "courses"
                      : school.courses.length === 1 ? "curso" : "cursos"}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Course list */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border-dark">
                        {visibleCourses.map((course, ci) => (
                          <div
                            key={ci}
                            className="px-6 py-4 border-b border-border-dark last:border-b-0"
                          >
                            {/* Row 1: name + date */}
                            <div className="flex items-baseline justify-between gap-4">
                              <p className="font-figtree text-base text-text-primary flex-1 min-w-0">
                                {isEn ? course.nameEn : course.nameEs}
                              </p>
                              <span className="font-mono text-sm text-muted flex-shrink-0">
                                {formatCourseDate(course.issueDate, isEn)}
                              </span>
                            </div>
                            {/* Row 2: badges (left) + credential (right) */}
                            <div className="flex items-center justify-between gap-4 mt-2">
                              <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                                {course.technologies.map((tech) => (
                                  <TechBadge key={tech} label={tech} />
                                ))}
                              </div>
                              <a
                                href={course.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full border border-[#FF6B6B]/25 text-[#FF6B6B]/70 bg-[#FF6B6B]/5 hover:bg-[#FF6B6B]/15 hover:border-[#FF6B6B]/50 hover:text-accent transition-all duration-200 whitespace-nowrap flex-shrink-0"
                              >
                                {isEn ? "Credential" : "Credencial"}
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                >
                                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        ))}

                        {/* Show more / show less */}
                        {hasMore && (
                          <button
                            onClick={() => toggleShowAll(school.name)}
                            className="w-full flex items-center justify-center gap-2 py-3.5 font-mono text-sm text-muted hover:text-text-primary hover:bg-[#18181f] transition-all duration-200 border-t border-border-dark"
                          >
                            {isShowingAll ? (
                              <>
                                {isEn ? "Show less" : "Ver menos"}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 15l-6-6-6 6" />
                                </svg>
                              </>
                            ) : (
                              <>
                                {isEn ? `Show ${hiddenCount} more` : `Ver ${hiddenCount} más`}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M6 9l6 6 6-6" />
                                </svg>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

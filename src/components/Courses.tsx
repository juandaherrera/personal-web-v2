"use client";

import { useLanguage } from "@/context/LanguageContext";
import { courseSchools, totalCourses } from "@/data/content";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Courses() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);

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
          <div className="flex items-end gap-6">
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-[#fafaf9] leading-tight">
              {isEn ? "Courses" : "Cursos"}
            </h2>
            <span className="font-mono text-[#FF6B6B] text-2xl font-bold mb-1">
              {totalCourses}
            </span>
          </div>
          <p className="font-figtree text-[#71717a] text-base mt-2">
            {isEn
              ? `${totalCourses} completed courses across all platforms`
              : `${totalCourses} cursos finalizados en todas las plataformas`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {courseSchools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-[#1f1f28] rounded-2xl bg-[#111117] overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === school.name ? null : school.name)}
                className="w-full flex items-center gap-4 px-6 py-5 hover:bg-[#18181f] transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#18181f] border border-[#1f1f28] flex items-center justify-center overflow-hidden">
                  <Image
                    src={school.logo}
                    alt={school.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-syne font-bold text-[#fafaf9] text-base">
                    {school.name}
                  </p>
                  <p className="font-mono text-sm text-[#71717a]">
                    {school.count} {isEn ? (school.count === 1 ? "course" : "courses") : (school.count === 1 ? "curso" : "cursos")}
                  </p>
                </div>
                {/* Progress-like bar */}
                <div className="flex-shrink-0 w-24 h-1.5 bg-[#1f1f28] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FFB3B3] rounded-full"
                    style={{
                      width: `${Math.min((school.count / totalCourses) * 100 * 2, 100)}%`,
                    }}
                  />
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 text-[#71717a] transition-transform ${
                    expanded === school.name ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {expanded === school.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-[#1f1f28] pt-4">
                      <a
                        href={school.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-[#FF6B6B] hover:underline"
                      >
                        {isEn ? "View profile" : "Ver perfil"}
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

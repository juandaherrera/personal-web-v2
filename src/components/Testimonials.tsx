"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/content";
import { formatMonthYear } from "@/utils/date";

const sortedTestimonials = [...testimonials].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Precomputed per testimonial — true when either version exceeds 6 visible lines (~500 chars)
const isLongMap = sortedTestimonials.map(
  (t) => Math.max(t.feedback.length, t.feedbackTranslation.length) > 500
);

const AUTOPLAY_MS = 10000;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Testimonials() {
  const { isEn } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const total = sortedTestimonials.length;

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
      setExpanded(false);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
    setExpanded(false);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
    setExpanded(false);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (hovered || expanded) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovered, expanded, next]);

  const t = sortedTestimonials[current];
  const isLong = isLongMap[current];
  const isTranslated = isEn ? t.originalLang === "es" : t.originalLang === "en";
  const displayedFeedback = isTranslated ? t.feedbackTranslation : t.feedback;

  return (
    <section id="testimonials" className="relative section-py-lg overflow-hidden" ref={sectionRef}>
      <div className="section-number absolute -top-4 right-0 select-none pointer-events-none">
        07
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            {isEn ? "What people say" : "Lo que dicen de mí"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
            {isEn ? "Testimonials" : "Recomendaciones"}
          </h2>
          <div className="flex items-baseline gap-3 mt-3">
            <span className="font-mono text-accent text-3xl font-bold leading-none">
              {sortedTestimonials.length}
            </span>
            <p className="font-figtree text-muted text-base">
              {isEn ? "shared experiences*" : "experiencias compartidas*"}
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          layout="size"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.15,
            layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
          }}
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Arrow buttons */}
          <button
            type="button"
            onClick={prev}
            aria-label={isEn ? "Previous testimonial" : "Anterior"}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full border border-border-dark bg-surface/80 backdrop-blur-sm flex items-center justify-center text-muted hover:text-text-primary hover:border-border-2 transition-colors cursor-pointer"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={isEn ? "Next testimonial" : "Siguiente"}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full border border-border-dark bg-surface/80 backdrop-blur-sm flex items-center justify-center text-muted hover:text-text-primary hover:border-border-2 transition-colors cursor-pointer"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Card */}
          <motion.div
            layout="size"
            transition={{ layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            className="overflow-hidden border border-border-dark rounded-2xl bg-surface/50 min-h-110"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col min-h-110 px-6 py-8 md:px-10 md:py-10"
              >
                {/* Decorative quote */}
                <span
                  className="block font-syne text-accent/15 text-7xl md:text-8xl font-extrabold leading-none select-none -mb-6 md:-mb-8"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Feedback text — grows to fill available space */}
                <div className="flex-1 relative">
                  <p
                    className={`font-figtree text-base md:text-lg text-text-primary/90 whitespace-pre-line leading-relaxed ${
                      !expanded && isLong ? "line-clamp-6" : ""
                    }`}
                  >
                    {displayedFeedback}
                  </p>

                  {isLong && (
                    <button
                      type="button"
                      onClick={() => setExpanded(!expanded)}
                      className="mt-2 font-mono text-xs text-accent hover:text-accent-2 transition-colors cursor-pointer"
                    >
                      {expanded
                        ? isEn
                          ? "Show less"
                          : "Ver menos"
                        : isEn
                          ? "Read more"
                          : "Leer más"}
                    </button>
                  )}

                  {isTranslated && (
                    <p className="flex items-center gap-1.5 mt-3 font-mono text-[10px] text-muted/60 italic">
                      <svg
                        aria-hidden="true"
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
                      </svg>
                      {isEn
                        ? `Translated from ${t.originalLang === "es" ? "Spanish" : "English"}`
                        : `Traducido del ${t.originalLang === "en" ? "inglés" : "español"}`}
                    </p>
                  )}
                </div>

                {/* Author info — anchored to bottom */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-syne font-bold text-text-primary truncate">{t.name}</p>
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.name} LinkedIn`}
                        className="shrink-0 text-muted hover:text-accent transition-colors cursor-pointer"
                      >
                        <span className="sr-only">{t.name} LinkedIn</span>
                        <svg
                          aria-hidden="true"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                    <p className="font-figtree text-sm text-muted mt-0.5">
                      {isEn ? t.relationEn : t.relation}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted shrink-0">
                    {formatMonthYear(t.date, isEn)}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {sortedTestimonials.map((_, i) => (
              <button
                key={sortedTestimonials[i].name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "bg-accent w-6" : "bg-border-2 hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Disclaimer — outside carousel wrapper so it doesn't affect layout animation */}
        <p className="mt-10 text-right font-mono text-[10px] text-muted/50 leading-relaxed">
          {isEn ? (
            <>
              *Some of these were collected from internal performance reviews. Others can be
              verified directly on my{" "}
              <a
                href="https://www.linkedin.com/in/juan-david-herrera/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-muted transition-colors"
              >
                LinkedIn
              </a>
              .
            </>
          ) : (
            <>
              *Algunas fueron recopiladas de performance reviews internas. Otros pueden consultarse
              directamente en mi{" "}
              <a
                href="https://www.linkedin.com/in/juan-david-herrera/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-muted transition-colors"
              >
                LinkedIn
              </a>
              .
            </>
          )}
        </p>
      </div>
    </section>
  );
}

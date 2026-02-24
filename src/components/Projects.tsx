"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { TechBadge } from "@/components/TechBadge";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/content";

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

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

function FeaturedProjectCard({ project, isEn }: { project: (typeof projects)[0]; isEn: boolean }) {
  const COUNTDOWN = 10;
  const [joked, setJoked] = useState(false);
  const [countdown, setCountdown] = useState(COUNTDOWN);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  function handleVisitClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (joked) return;
    e.preventDefault();
    setJoked(true);
    setCountdown(COUNTDOWN);
    intervalRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearTimer();
          window.open(project.websiteUrl, "_blank", "noopener,noreferrer");
          setJoked(false);
          return COUNTDOWN;
        }
        return c - 1;
      });
    }, 1000);
  }

  function handleCancel() {
    clearTimer();
    setJoked(false);
    setCountdown(COUNTDOWN);
  }

  useEffect(() => clearTimer, [clearTimer]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col md:flex-row bg-surface rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(255,107,107,0.07)] transition-all duration-300"
      style={{ borderWidth: 1, borderStyle: "solid", borderColor: `${project.gradientFrom}40` }}
    >
      {/* Gradient panel */}
      <div
        className="w-full md:w-72 lg:w-80 min-h-48 md:min-h-0 shrink-0 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      >
        <span className="text-7xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8">
        <div className="flex items-center justify-between gap-3 mb-3 md:flex-col md:items-start md:mb-5">
          <h3 className="font-syne font-bold text-xl leading-none md:text-3xl md:leading-tight text-text-primary md:order-2">
            {isEn ? project.nameEn : project.name}
          </h3>
          <div className="flex items-center gap-2 shrink-0 md:order-1">
            <p
              className="font-mono text-xs leading-none"
              style={{ color: `${project.gradientFrom}99` }}
            >
              01
            </p>
            {project.vibecoded && (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-full border border-accent/25 text-accent/70 bg-accent/5">
                {/* biome-ignore lint/performance/noImgElement: Next.js Image wrapper breaks inline-flex layout at small sizes */}
                <img
                  src="https://cdn.simpleicons.org/anthropic/FF6B6B"
                  alt="Claude"
                  aria-hidden="true"
                  className="w-2.5 h-2.5"
                />
                vibecoded
              </span>
            )}
          </div>
        </div>

        <p className="font-figtree text-base text-muted leading-relaxed mb-6 max-w-lg">
          {isEn ? project.descriptionEn : project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 px-8 py-6 md:py-8 border-t md:border-t-0 md:border-l border-border-dark md:min-w-52">
        {project.websiteUrl && (
          <div className="flex flex-col items-end gap-1.5">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVisitClick}
              className={`inline-flex items-center gap-2 font-figtree font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                joked
                  ? "bg-surface-2 border border-border-2 text-muted cursor-default"
                  : "bg-accent text-white hover:bg-accent/85"
              }`}
            >
              {joked
                ? isEn
                  ? `you're already here 👀 · ${countdown}s`
                  : `ya estás aquí 👀 · ${countdown}s`
                : isEn
                  ? "Visit site"
                  : "Ver sitio"}
              {!joked && <ExternalLinkIcon />}
            </a>
            {joked && (
              <button
                type="button"
                onClick={handleCancel}
                className="font-mono text-xs text-muted/50 hover:text-muted transition-colors cursor-pointer"
              >
                {isEn ? "cancel redirect" : "cancelar redirección"}
              </button>
            )}
          </div>
        )}
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-figtree font-semibold text-sm px-5 py-2.5 rounded-full border border-border-dark text-muted hover:border-accent hover:text-accent transition-all whitespace-nowrap"
        >
          <GithubIcon />
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  isEn,
}: {
  project: (typeof projects)[0];
  index: number;
  isEn: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-surface border border-border-dark rounded-2xl overflow-hidden hover:border-border-2 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300"
    >
      {/* Gradient banner */}
      <div
        className="h-32 md:h-48 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      >
        <span className="text-5xl md:text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>
      </div>

      <div className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between gap-2 mb-3 md:flex-col md:items-start">
          <h3 className="font-syne font-bold text-lg leading-none md:text-xl md:leading-tight text-text-primary md:order-2">
            {isEn ? project.nameEn : project.name}
          </h3>
          <p className="font-mono text-xs leading-none text-accent/60 shrink-0 md:order-1">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>

        <p className="font-figtree text-sm md:text-base text-muted leading-relaxed mb-4 md:mb-6">
          {isEn ? project.descriptionEn : project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {(project.note || project.noteEn) && (
          <p className="hidden md:block font-mono text-xs text-muted/50 mt-4 italic">
            {isEn ? project.noteEn : project.note}
          </p>
        )}
      </div>

      <div className="px-4 md:px-6 py-3 md:py-4 border-t border-border-dark flex items-center gap-3">
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
          aria-label="Repository"
        >
          <GithubIcon />
          GitHub
        </a>
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            <ExternalLinkIcon />
            {isEn ? "Live" : "Ver"}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { isEn } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative section-py-lg overflow-hidden">
      <div className="section-number absolute -top-4 right-0 select-none pointer-events-none">
        04
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-accent opacity-[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            {isEn ? "My work" : "Mis proyectos"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
            {isEn ? "Things I've built" : "Cosas que he construido"}
          </h2>
        </motion.div>

        {/* Featured project */}
        <div className="mb-6">
          <FeaturedProjectCard project={featured} isEn={isEn} />
        </div>

        {/* Rest of projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i + 1} isEn={isEn} />
          ))}
        </div>
      </div>
    </section>
  );
}

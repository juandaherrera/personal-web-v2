"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { type ReactNode, useRef, useState } from "react";
import { TechBadge } from "@/components/TechBadge";
import { ZoomableImage } from "@/components/ZoomableImage";
import { useLanguage } from "@/context/LanguageContext";
import { type PressEvent, type PressMention, pressEvents, pressMentions } from "@/data/content";

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

interface PressCardShellProps {
  delay: number;
  inView: boolean;
  media: ReactNode;
  logoSrc: string;
  source: string;
  meta: string;
  kind: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  href: string;
  ctaLabel: string;
}

/**
 * Shared card chrome for press items, split into six stacked rows (media, source, title,
 * description, tags, action). On `lg` screens the card is a subgrid spanning six rows of the
 * parent grid, so sibling cards line up row-by-row regardless of how long each text wraps.
 */
function PressCardShell({
  delay,
  inView,
  media,
  logoSrc,
  source,
  meta,
  kind,
  title,
  subtitle,
  description,
  tags,
  href,
  ctaLabel,
}: PressCardShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col overflow-hidden rounded-2xl border border-border-dark bg-surface/50 transition-[border-color,box-shadow] duration-300 hover:border-border-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:gap-y-0"
    >
      {media}

      <div className="flex items-center gap-4 px-6 pt-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border-dark bg-surface-2">
          <Image
            src={logoSrc}
            alt={source}
            width={32}
            height={32}
            className="h-8 w-8 object-contain brightness-0 invert"
          />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-xs text-muted">{meta}</p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
            {kind}
          </p>
        </div>
      </div>

      <div className="px-6 pt-5">
        <h3 className="font-syne text-xl font-bold leading-snug text-text-primary">{title}</h3>
        {subtitle && <p className="mt-1 font-figtree text-base text-text-primary/80">{subtitle}</p>}
      </div>

      <p className="px-6 pt-3 font-figtree text-base leading-relaxed text-muted">{description}</p>

      <div className="flex flex-wrap content-start gap-2 px-6 pt-5">
        {tags.map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>

      <div className="px-6 pb-6 pt-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-border-2 px-5 py-2.5 font-figtree text-sm font-semibold text-text-primary transition-all duration-300 hover:border-accent hover:text-accent"
        >
          {ctaLabel}
          <ExternalLinkIcon />
        </a>
      </div>
    </motion.div>
  );
}

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
    <PressCardShell
      delay={delay}
      inView={inView}
      media={
        <div className="relative aspect-video w-full bg-surface-2">
          {showCover && (
            <Image
              src={mention.coverImage as string}
              alt={mention.title}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              onError={() => setCoverFailed(true)}
            />
          )}
        </div>
      }
      logoSrc={mention.outletLogo}
      source={mention.outlet}
      meta={`${mention.outlet} · ${mention.year}`}
      kind={isEn ? "Case study" : "Caso de estudio"}
      title={mention.title}
      description={isEn ? mention.descriptionEn : mention.description}
      tags={isEn ? mention.statsEn : mention.stats}
      href={mention.url}
      ctaLabel={isEn ? "Read the case study" : "Leer el caso de estudio"}
    />
  );
}

function PressEventCard({
  event,
  isEn,
  delay,
  inView,
}: {
  event: PressEvent;
  isEn: boolean;
  delay: number;
  inView: boolean;
}) {
  return (
    <PressCardShell
      delay={delay}
      inView={inView}
      media={
        <div className="relative aspect-video w-full bg-surface-2">
          {event.coverImage && (
            <ZoomableImage
              src={event.coverImage}
              alt={`${event.organizer} · ${event.title}`}
              width={1080}
              height={1080}
              previewPosition="object-[center_22%]"
              openLabel={isEn ? "View full image" : "Ver imagen completa"}
              closeLabel={isEn ? "Close" : "Cerrar"}
            />
          )}
        </div>
      }
      logoSrc={event.organizerLogo}
      source={event.organizer}
      meta={`${event.organizer} · ${isEn ? event.dateEn : event.date}`}
      kind={isEn ? "Event" : "Evento"}
      title={event.title}
      subtitle={event.topic}
      description={isEn ? event.descriptionEn : event.description}
      tags={[event.location]}
      href={event.url}
      ctaLabel={isEn ? "See the LinkedIn post" : "Ver la publicación en LinkedIn"}
    />
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

        <div className="grid gap-6 max-w-xl lg:max-w-none lg:grid-cols-2">
          {pressMentions.map((mention, i) => (
            <PressCard
              key={mention.url}
              mention={mention}
              isEn={isEn}
              delay={0.15 + i * 0.1}
              inView={inView}
            />
          ))}
          {pressEvents.map((event, i) => (
            <PressEventCard
              key={event.title}
              event={event}
              isEn={isEn}
              delay={0.15 + (pressMentions.length + i) * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

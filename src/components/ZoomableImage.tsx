"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Exit duration in ms. Keep in sync with the `duration-150` classes on the dialog and its backdrop. */
const CLOSE_MS = 150;

interface ZoomableImageProps {
  src: string;
  alt: string;
  /** Intrinsic pixel width of `src`, used for the full-size view in the dialog. */
  width: number;
  /** Intrinsic pixel height of `src`, used for the full-size view in the dialog. */
  height: number;
  /** Tailwind `object-position` utility (e.g. `object-[center_22%]`) that picks the crop shown in the card preview. */
  previewPosition?: string;
  /** Accessible name for the preview button, also shown in the hover pill. */
  openLabel: string;
  /** Accessible name for the dialog's close button. */
  closeLabel: string;
}

const ExpandIcon = () => (
  <svg
    aria-hidden="true"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/**
 * Card-sized 16:9 preview of an image that opens the full, uncropped image in a modal dialog.
 *
 * Uses the native `<dialog>` element, so Esc, focus trapping and focus restore come for free.
 * Clicking the backdrop or the close button also dismisses it, and page scroll is locked while open.
 *
 * Opening fades and scales the dialog in (200ms, ease-out); closing is a quicker fade-out
 * (150ms, ease-in). The animation is driven by a `data-open` attribute rather than
 * `@starting-style`, so it also works in Firefox, and every dismissal path (Esc, backdrop,
 * close button) goes through the same animated `close`. Under `prefers-reduced-motion` the
 * transitions are disabled and the dialog closes immediately.
 */
export function ZoomableImage({
  src,
  alt,
  width,
  height,
  previewPosition = "object-center",
  openLabel,
  closeLabel,
}: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeTimer = useRef<number>(0);

  useEffect(
    () => () => {
      window.clearTimeout(closeTimer.current);
      document.body.style.overflow = "";
    },
    []
  );

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    window.clearTimeout(closeTimer.current);
    document.body.style.overflow = "hidden";
    dialog.showModal();
    // Flush the closed styles so setting `data-open` below transitions instead of snapping.
    dialog.getBoundingClientRect();
    dialog.dataset.open = "true";
  };

  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || dialog.dataset.open !== "true") return;
    dialog.dataset.open = "false";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimer.current = window.setTimeout(() => dialog.close(), reduceMotion ? 0 : CLOSE_MS);
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={openLabel}
        aria-haspopup="dialog"
        className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-surface-2 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className={`object-cover ${previewPosition} transition-transform duration-500 motion-safe:group-hover:scale-[1.03]`}
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border-2 bg-bg/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-text-primary backdrop-blur transition-colors duration-200 group-hover:border-accent group-hover:text-accent"
        >
          <ExpandIcon />
          {openLabel}
        </span>
      </button>

      {/** biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click is a mouse shortcut; Esc and the close button cover keyboard dismissal. */}
      <dialog
        ref={dialogRef}
        aria-label={alt}
        onCancel={(e) => {
          // Esc: swallow the native instant close and run the animated one instead.
          e.preventDefault();
          close();
        }}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto translate-y-2 scale-95 overflow-visible bg-transparent p-0 opacity-0 transition-[opacity,scale,translate] duration-150 ease-in backdrop:bg-black/85 backdrop:opacity-0 backdrop:backdrop-blur-sm backdrop:transition-opacity backdrop:duration-150 backdrop:ease-in data-[open=true]:translate-y-0 data-[open=true]:scale-100 data-[open=true]:opacity-100 data-[open=true]:duration-200 data-[open=true]:ease-out data-[open=true]:backdrop:opacity-100 data-[open=true]:backdrop:duration-200 data-[open=true]:backdrop:ease-out motion-reduce:transition-none motion-reduce:backdrop:transition-none"
      >
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 92vw, 720px"
            className="block h-auto max-h-[90vh] w-auto max-w-[min(92vw,720px)] rounded-2xl border border-border-2"
          />
          <button
            type="button"
            onClick={close}
            aria-label={closeLabel}
            className="absolute right-3 top-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-2 bg-bg/70 text-text-primary backdrop-blur transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <CloseIcon />
          </button>
        </div>
      </dialog>
    </>
  );
}

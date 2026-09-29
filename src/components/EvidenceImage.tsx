"use client";

import { useId, useRef } from "react";
import { Maximize2, X } from "lucide-react";

/** Opt-in inspection of genuine artifacts; native dialog owns focus and Escape. */
export function EvidenceImage({
  src,
  alt,
  label,
  zoom,
  aspect,
  priority = false,
}: {
  src: string;
  alt: string;
  /** Stage of the work this capture belongs to: Legacy, Iteration, Reference, Prototype or Final. */
  label?: string;
  /** Magnifies a detail in the thumbnail only; the enlarged view always shows the whole capture. */
  zoom?: { scale: number; origin: string };
  /** Crops the thumbnail to a ratio (e.g. "2 / 1") so side-by-side captures align; the enlarged view is uncropped. */
  aspect?: string;
  priority?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const described = label ? `${label} capture. ${alt}` : alt;
  return (
    <>
      <button type="button" className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface text-left" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge image: ${described}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          style={{
            ...(aspect ? { aspectRatio: aspect, objectFit: "cover" as const } : null),
            ...(zoom ? { transform: `scale(${zoom.scale})`, transformOrigin: zoom.origin } : null),
          }}
          className="block h-auto w-full"
        />
        {label && <span aria-hidden className="absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white">{label}</span>}
        <span aria-hidden className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-2.5 py-1.5 text-[11px] text-white"><Maximize2 size={12} /><span className="hidden sm:inline">Inspect</span></span>
      </button>
      <dialog ref={dialog} aria-labelledby={titleId} className="evidence-dialog" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background p-4">
          <p id={titleId} className="text-sm text-foreground">{described}</p>
          <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close enlarged image" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border"><X size={20} /></button>
        </div>
        <div className="overflow-auto p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full min-w-[900px]" />
        </div>
        <p className="p-4 text-xs text-muted">Scroll horizontally on small screens to inspect details. Press Escape to close.</p>
      </dialog>
    </>
  );
}

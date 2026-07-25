"use client";

import { useEffect, useRef, useState } from "react";

// Disciplined palette — one blue + gold (for meaning) + a neutral. No rainbow.
const barTint: Record<string, string> = {
  blue: "bg-[var(--accent)]",
  gold: "bg-[var(--gold)]",
  slate: "bg-[var(--muted)]",
};

type Variant = "product" | "portrait";

/**
 * Shows the real screenshot at `src` as soon as it loads. Until then, renders a
 * *designed* placeholder — a product-UI mock (window chrome + dashboard skeleton)
 * or a portrait monogram — so the layout looks finished and intentional, not empty.
 */
export function CoverFrame({
  src,
  label,
  index,
  accent = "blue",
  variant = "product",
  tone = "after",
  className = "",
}: {
  src: string;
  label: string;
  index?: number;
  accent?: string;
  variant?: Variant;
  tone?: "before" | "after";
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  // "before" = flat, un-styled, no colour (reads as an old / undesigned UI)
  const tint = tone === "before" ? "bg-foreground/20" : barTint[accent] ?? barTint.blue;

  // A warm-cache image can finish loading in the gap between React committing
  // the <img> and hydration attaching onLoad — so the JSX onLoad is missed and
  // the image stays stuck at opacity 0. Attaching a native listener inside the
  // effect closes that gap: either it's already complete (caught here) or the
  // listener catches the load. JS is single-threaded, so nothing slips through.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      if (img.naturalWidth > 0) setLoaded(true);
      else setFailed(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    const onError = () => setFailed(true);
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src]);

  return (
    <div
      className={`group/cf relative overflow-hidden rounded-xl border border-border bg-surface ${className}`}
    >
      {/* placeholder */}
      {variant === "portrait" ? (
        <PortraitSkeleton label={label} tint={tint} />
      ) : (
        <ProductSkeleton label={label} index={index} tint={tint} tone={tone} />
      )}

      {/* real image (fades in only once it has actually loaded — no broken flash) */}
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={label}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`relative z-10 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      )}
    </div>
  );
}

function ProductSkeleton({
  label,
  index,
  tint,
  tone = "after",
}: {
  label: string;
  index?: number;
  tint: string;
  tone?: "before" | "after";
}) {
  // "before" gets a flatter, more uneven chart to read as a dated UI
  const bars =
    tone === "before"
      ? [30, 62, 38, 71, 44, 33, 58, 40, 52]
      : [45, 70, 55, 90, 62, 78, 50, 84, 66];
  const accentEvery = tone === "before" ? 99 : 3; // no accent bars in "before"
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border/70 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/[0.07]" />
        <div className="mx-auto h-5 w-1/2 rounded-full bg-foreground/[0.05]" />
        <div className={`h-5 w-12 rounded-full opacity-25 ${tint}`} />
      </div>

      {/* body */}
      <div className="flex min-h-0 flex-1 gap-3 p-4">
        {/* sidebar */}
        <div className="hidden w-[15%] flex-col gap-2 sm:flex">
          <div className={`h-6 rounded-md opacity-30 ${tint}`} />
          <div className="h-4 rounded bg-foreground/[0.06]" />
          <div className="h-4 rounded bg-foreground/[0.06]" />
          <div className="h-4 w-3/4 rounded bg-foreground/[0.06]" />
          <div className="mt-auto h-4 rounded bg-foreground/[0.04]" />
        </div>

        {/* main */}
        <div className="flex min-h-0 flex-1 flex-col gap-3">
          {/* stat cards */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-border/60 bg-foreground/[0.03] p-2"
              >
                <div className={`h-1.5 w-6 rounded-full opacity-40 ${tint}`} />
                <div className="mt-2 h-3 w-10 rounded bg-foreground/10" />
              </div>
            ))}
          </div>
          {/* chart */}
          <div className="flex min-h-0 flex-1 items-end gap-1.5 rounded-lg border border-border/60 bg-foreground/[0.02] p-3">
            {bars.map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t-sm ${
                  i % accentEvery === 0 ? `${tint} opacity-45` : "bg-foreground/[0.09]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* label */}
      <div className="flex items-center justify-between border-t border-border/70 px-4 py-2.5">
        <span className="truncate font-mono text-[10px] uppercase tracking-widest text-muted">
          {label}
        </span>
        {typeof index === "number" && (
          <span className="font-mono text-xs text-muted/70">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
    </div>
  );
}

function PortraitSkeleton({ label, tint }: { label: string; tint: string }) {
  const initials = label
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <div className="grid-lines absolute inset-0 opacity-20" />
      <div
        className={`relative grid h-24 w-24 place-items-center rounded-full opacity-90 ${tint}`}
      >
        <span className="font-display text-3xl text-white">{initials}</span>
      </div>
      <span className="relative font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
        {label}
      </span>
    </div>
  );
}

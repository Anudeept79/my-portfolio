"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { RefreshCw } from "lucide-react";
import { CoverFrame } from "./CoverFrame";

/**
 * Book-style before/after flip. The "page" auto-turns between the old UI and
 * the redesign every few seconds (paused on hover); clicking takes manual
 * control. Falls back to a static side-by-side under prefers-reduced-motion.
 */
export function FlipCompare({
  before,
  after,
  label,
  accent = "blue",
}: {
  before: string;
  after: string;
  label: string;
  accent?: string;
}) {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [manual, setManual] = useState(false);
  const hovering = useRef(false);

  useEffect(() => {
    if (reduce || manual) return;
    const id = setInterval(() => {
      if (!hovering.current) setFlipped((f) => !f);
    }, 4200);
    return () => clearInterval(id);
  }, [reduce, manual]);

  if (reduce) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <figure>
          <figcaption className="mb-2 font-display text-sm italic text-muted">
            Before
          </figcaption>
          <CoverFrame
            src={before}
            label={`${label} — before`}
            tone="before"
            accent={accent}
            className="aspect-[16/10] w-full"
          />
        </figure>
        <figure>
          <figcaption className="mb-2 font-display text-sm italic text-accent">
            After
          </figcaption>
          <CoverFrame
            src={after}
            label={`${label} — after`}
            tone="after"
            accent={accent}
            className="aspect-[16/10] w-full ring-1 ring-accent/20"
          />
        </figure>
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={flipped ? "Showing the redesign — flip to the old UI" : "Showing the old UI — flip to the redesign"}
      onClick={() => {
        setManual(true);
        setFlipped((f) => !f);
      }}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      className="group relative block w-full cursor-pointer text-left [perspective:1800px]"
    >
      <div
        className="relative aspect-[16/10] w-full transition-transform duration-[950ms] [transform-style:preserve-3d]"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transitionTimingFunction: "cubic-bezier(0.45, 0, 0.2, 1)",
        }}
      >
        {/* front — the old UI */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <CoverFrame
            src={before}
            label={`${label} — before`}
            tone="before"
            accent={accent}
            className="h-full w-full"
          />
          <span className="absolute left-4 top-4 z-20 rounded-full border border-border bg-background/80 px-3 py-1 font-display text-sm italic text-muted backdrop-blur">
            Before
          </span>
        </div>

        {/* back — the redesign */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <CoverFrame
            src={after}
            label={`${label} — after`}
            tone="after"
            accent={accent}
            className="h-full w-full ring-1 ring-accent/25"
          />
          <span className="absolute left-4 top-4 z-20 rounded-full border border-accent/40 bg-background/80 px-3 py-1 font-display text-sm italic text-accent backdrop-blur">
            After
          </span>
        </div>
      </div>

      <span className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted/70 transition-colors group-hover:text-muted">
        <RefreshCw className="h-3.5 w-3.5" />
        {manual ? "Click to flip" : "Auto-flipping — click to take over"}
      </span>
    </button>
  );
}

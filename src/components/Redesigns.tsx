"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { redesigns } from "@/data/site";
import { cn } from "@/lib/utils";
import { CoverFrame } from "./CoverFrame";

/**
 * Scroll-pinned "before → after" band (YC-style). Tall track; inner content
 * sticks to the viewport and auto-advances through each redesign as you scroll.
 * The project names sit VERTICALLY between the two screens (like YC's list).
 * Desktop only — hidden on mobile.
 */
export function Redesigns() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const n = redesigns.length;
    const i = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
    setActive((prev) => (prev === i ? prev : i));
  });

  const item = redesigns[active];

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    const top = el.offsetTop + (i / redesigns.length) * scrollable + 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="redesigns"
      data-active={active}
      className="relative hidden lg:block"
    >
      {/* tall scroll track */}
      <div ref={trackRef} style={{ height: `${redesigns.length * 90}vh` }}>
        {/* pinned viewport */}
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20">
          <div className="container-x w-full">
            {/* header */}
            <div className="mb-10">
              <p className="mb-2 font-mono text-sm text-accent">Redesigns</p>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                Before → after. Real products I rebuilt.
              </h2>
            </div>

            {/* before | vertical names | after */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 xl:gap-12">
              {/* BEFORE */}
              <figure>
                <figcaption className="mb-3 text-center font-display text-lg italic text-muted">
                  Before
                </figcaption>
                <div key={item.name + "-b"} className="animate-[fadeIn_0.35s_ease]">
                  <CoverFrame
                    src={item.before}
                    label={`${item.name} — before`}
                    tone="before"
                    accent={item.accent}
                    className="aspect-[16/10] w-full"
                  />
                </div>
                <p className="mt-3 text-center text-sm leading-relaxed text-muted">
                  {item.beforeCaption}
                </p>
              </figure>

              {/* CENTER — vertical name list */}
              <ul className="flex flex-col items-center gap-3 px-2 xl:px-6">
                {redesigns.map((r, i) => (
                  <li key={r.name}>
                    <button
                      onClick={() => goTo(i)}
                      className={cn(
                        "whitespace-nowrap font-display tracking-tight transition-all duration-300",
                        i === active
                          ? "text-2xl text-foreground xl:text-3xl"
                          : "text-base text-foreground/20 hover:text-foreground/50",
                      )}
                    >
                      {r.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* AFTER */}
              <figure>
                <figcaption className="mb-3 text-center font-display text-lg italic text-accent">
                  After
                </figcaption>
                <div key={item.name + "-a"} className="animate-[fadeIn_0.35s_ease]">
                  <CoverFrame
                    src={item.after}
                    label={`${item.name} — after`}
                    tone="after"
                    accent={item.accent}
                    className="aspect-[16/10] w-full ring-1 ring-accent/20"
                  />
                </div>
                <p className="mt-3 text-center text-sm leading-relaxed text-foreground/80">
                  {item.afterCaption}
                </p>
              </figure>
            </div>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-widest text-muted/60">
              Scroll to compare ↓
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

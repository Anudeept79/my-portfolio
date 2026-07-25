"use client";

import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { motion } from "motion/react";

function Tile({
  src,
  className,
  rotate = 0,
}: {
  src: string;
  className: string;
  rotate?: number;
}) {
  const [ok, setOk] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Cached images can finish before onLoad attaches — catch that on mount.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) setLoaded(true);
      else setOk(false);
    }
  }, []);

  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_16px_36px_-12px_rgba(0,0,0,0.7)]">
        {/* placeholder */}
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-accent/12 via-transparent to-transparent">
          <div className="grid-lines absolute inset-0 opacity-20" />
          <Camera className="relative h-6 w-6 text-muted/45" strokeWidth={1.4} />
        </div>
        {ok && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={ref}
            src={src}
            alt=""
            onLoad={() => setLoaded(true)}
            onError={() => setOk(false)}
            className={`relative z-10 h-full w-full object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}

/**
 * Hero photo wall: the AI Excellence Award (tall) beside the event crew and a
 * certificate handover.
 */
export function HeroPhotos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4"
    >
      <Tile src="/hero/4.jpg" className="row-span-2 h-full" />
      <Tile src="/hero/1.jpg" className="aspect-square" />
      <Tile src="/hero/3.jpg" className="aspect-square" />
    </motion.div>
  );
}

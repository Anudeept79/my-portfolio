"use client";

import { useEffect, useRef, useState } from "react";

const widthMap: Record<string, string> = {
  portrait: "w-52 sm:w-56",
  landscape: "w-80 sm:w-[26rem]",
  square: "w-64 sm:w-72",
};

/**
 * One tile in the life band. Shows a labelled placeholder until the real
 * photo/video at `src` loads, then fades it in. Videos autoplay muted on loop.
 */
export function MediaCard({
  type,
  src,
  label,
  aspect,
}: {
  type: "image" | "video";
  src: string;
  label: string;
  aspect: string;
}) {
  const [ok, setOk] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const w = widthMap[aspect] ?? widthMap.landscape;

  // Cached images can finish before onLoad attaches — catch that on mount.
  useEffect(() => {
    if (type !== "image") return;
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) setLoaded(true);
      else setOk(false);
    }
  }, [type]);

  return (
    <div
      className={`relative h-64 sm:h-72 ${w} shrink-0 overflow-hidden rounded-2xl border border-border bg-surface`}
    >
      {/* placeholder */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-accent/10 via-transparent to-gold/5">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <span className="relative font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          {label}
        </span>
      </div>

      {ok && type === "image" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={label}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setOk(false)}
          className={`relative z-10 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {ok && type === "video" && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setLoaded(true)}
          onError={() => setOk(false)}
          className={`relative z-10 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

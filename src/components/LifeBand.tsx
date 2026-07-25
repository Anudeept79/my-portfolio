import { life } from "@/data/site";
import { Reveal } from "./Reveal";
import { MediaCard } from "./MediaCard";

/** Full-bleed horizontal media band that loops forever; pauses on hover. */
export function LifeBand() {
  const row = [...life, ...life]; // duplicate for a seamless -50% loop
  return (
    <section id="life" className="scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="container-x mb-10">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent">Beyond the screen</p>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Life outside the pixels.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Competitive dance, travel, teams and design events — the stuff that
            keeps the work human. Hover to pause.
          </p>
        </Reveal>
      </div>

      {/* marquee */}
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max animate-[marquee-x_45s_linear_infinite] gap-4 px-2 group-hover:[animation-play-state:paused]">
          {row.map((m, i) => (
            <MediaCard
              key={i}
              type={m.type}
              src={m.src}
              label={m.label}
              aspect={m.aspect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

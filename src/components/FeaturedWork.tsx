import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { caseStudies } from "@/data/site";
import { Reveal } from "./Reveal";
import { CoverFrame } from "./CoverFrame";

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-20 py-14 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-sm text-accent">Selected work</p>
              <h2 className="font-display max-w-2xl text-3xl sm:text-5xl">
                Work that shows how I think, build, and deliver.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Each one: a real problem, real constraints, and work owned
              end-to-end — across fintech, logistics, and US-government systems.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/work/${cs.slug}`}
                className="group card lift flex h-full flex-col overflow-hidden hover:border-foreground/25"
              >
                <div className="relative">
                  <CoverFrame
                    src={cs.cover}
                    label={cs.client}
                    index={i + 1}
                    accent={cs.accent}
                    className={`aspect-[16/10] w-full transition-transform duration-500 ease-out group-hover:scale-[1.015] ${
                      cs.locked ? "blur-[6px]" : ""
                    }`}
                  />
                  {cs.locked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/40">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                        <Lock className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-foreground/80">
                        Locked · enter code
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full border border-border px-2.5 py-1">
                      {cs.domain}
                    </span>
                    <span>{cs.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {cs.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {cs.impact}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {cs.locked ? (
                      <>
                        Unlock case study <Lock className="h-3.5 w-3.5" />
                      </>
                    ) : (
                      <>
                        Read case study
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

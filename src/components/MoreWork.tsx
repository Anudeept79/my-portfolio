import { moreWork } from "@/data/site";
import { Reveal } from "./Reveal";

export function MoreWork() {
  return (
    <section className="py-8">
      <div className="container-x">
        <Reveal>
          <p className="mb-8 font-mono text-sm text-muted">
            + more shipped work
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.06}>
              <div className="group h-full bg-background p-6 transition-colors hover:bg-surface/50">
                <div className="mb-2 font-mono text-xs text-accent">
                  {w.domain}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {w.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

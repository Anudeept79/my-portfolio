import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "./Reveal";

const dot: Record<string, string> = {
  blue: "text-accent",
  gold: "text-gold",
};

export function Testimonials() {
  return (
    <section id="proof" className="scroll-mt-20 py-14 sm:py-20">
      <div className="container-x">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-accent">What people say</p>
          <h2 className="mb-12 max-w-2xl font-display text-3xl sm:text-4xl">
            Sign-off from the people I&apos;ve shipped for.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 2) * 0.08}>
              <figure className="card lift h-full p-7">
                <Quote
                  className={`mb-4 h-6 w-6 ${dot[t.accent] ?? "text-accent"}`}
                  strokeWidth={1.5}
                />
                <blockquote className="text-lg leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full ${dot[t.accent] ?? "text-accent"}`}
                    style={{ backgroundColor: "currentColor" }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="text-sm text-muted">· {t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

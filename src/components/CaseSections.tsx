import type { CaseSection } from "@/data/site";
import { Reveal } from "./Reveal";
import { FlipCompare } from "./FlipCompare";

/**
 * Renders a case study told as composable narrative blocks. Unlike the fixed
 * Overview→Process→Outcome layout, the order, rhythm and emphasis here come
 * from the case study's own data — so each story can be shaped by the product
 * it's describing rather than poured into one mould.
 */
export function CaseSections({
  sections,
  accent = "blue",
}: {
  sections: CaseSection[];
  accent?: string;
}) {
  return (
    <div className="mt-16 space-y-16 sm:space-y-20">
      {sections.map((s, i) => (
        <Block key={i} section={s} accent={accent} />
      ))}
    </div>
  );
}

/**
 * Portrait handset captures are ~384px wide natively. Left to fill a prose
 * column they upscale ~2x — blurry, and taller than the viewport. These cap
 * them near native width and centre them so they read as a phone, not a poster.
 */
const PHONE_FRAME = "mx-auto w-full max-w-[300px] sm:max-w-[340px]";
const PHONE_CAPTION = "mx-auto max-w-[340px] text-center";

/** Narrow measure for reading; figures break wider. */
function Prose({ children }: { children: React.ReactNode }) {
  return <div className="container-x max-w-3xl">{children}</div>;
}

function Eyebrow({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="eyebrow mb-3">{children}</p>;
}

function Heading({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <h2 className="font-display mb-5 text-2xl leading-tight tracking-tight sm:text-3xl">
      {children}
    </h2>
  );
}

function Body({ body }: { body: string | string[] }) {
  const paras = Array.isArray(body) ? body : [body];
  return (
    <>
      {paras.map((p, i) => (
        <p
          key={i}
          className="mt-4 text-[1.0625rem] leading-relaxed text-foreground/85 first:mt-0"
        >
          {p}
        </p>
      ))}
    </>
  );
}

function Block({ section: s, accent }: { section: CaseSection; accent: string }) {
  switch (s.kind) {
    // ------------------------------------------------ the 6-second skim
    case "snapshot": {
      const meta = [
        ["Role", s.role],
        ["Timeline", s.timeline],
        ["Team", s.team],
        ["Platform", s.platform],
        ["Status", s.status],
      ].filter(([, v]) => v) as [string, string][];
      return (
        <Reveal>
          <div className="container-x max-w-5xl">
            <div className="card overflow-hidden">
              <dl className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
                {meta.map(([k, v]) => (
                  <div key={k} className="bg-surface px-5 py-4">
                    <dt className="eyebrow mb-1.5">{k}</dt>
                    <dd className="text-sm font-medium leading-snug text-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="grid gap-px bg-border sm:grid-cols-2">
                <div className="bg-surface px-5 py-5">
                  <p className="eyebrow mb-2">The problem</p>
                  <p className="text-sm leading-relaxed text-foreground/85">
                    {s.problem}
                  </p>
                </div>
                <div className="bg-surface px-5 py-5">
                  <p className="eyebrow mb-2">The outcome</p>
                  <p className="text-sm leading-relaxed text-foreground/85">
                    {s.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      );
    }

    case "takeaways":
      return (
        <Reveal>
          <div className="container-x max-w-5xl">
            <p className="eyebrow mb-4">{s.title ?? "If you read nothing else"}</p>
            {/* 3-up only from lg — at sm these squeeze to ~20 chars per line */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.items.map((it, i) => (
                <div key={i} className="card p-5">
                  <div className="tnum mb-2.5 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/85">{it}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      );

    case "principles":
      return (
        <div className="container-x max-w-4xl">
          <Reveal>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
          </Reveal>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-xl border border-border bg-surface/50 p-5">
                  <h3 className="font-display text-base leading-snug tracking-tight text-accent">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "research":
      return (
        <div className="container-x max-w-4xl">
          <Reveal>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
            <div className="overflow-hidden rounded-xl border border-border">
              {s.methods.map((m) => (
                <div
                  key={m.method}
                  className="flex flex-col gap-1 border-b border-border/60 bg-surface/40 px-5 py-4 last:border-b-0 sm:flex-row sm:gap-5"
                >
                  <span className="w-48 shrink-0 font-mono text-xs uppercase tracking-widest text-accent">
                    {m.method}
                  </span>
                  <span className="flex-1 text-sm leading-relaxed text-muted">
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          {s.findings && s.findings.length > 0 && (
            <Reveal>
              <p className="eyebrow mb-3 mt-8">What it told me</p>
              <ul className="space-y-3.5">
                {s.findings.map((f, i) => (
                  <li key={i} className="flex gap-4 text-foreground/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      );

    // ------------------------------------------------ the hook
    case "lead":
      return (
        <Reveal>
          <Prose>
            <p className="font-display text-xl leading-relaxed text-foreground sm:text-[1.6rem] sm:leading-[1.5]">
              {s.body}
            </p>
          </Prose>
        </Reveal>
      );

    case "prose":
      return (
        <Reveal>
          <Prose>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
            <Body body={s.body} />
          </Prose>
        </Reveal>
      );

    // ------------------------------------------------ the line worth stopping on
    case "quote":
      return (
        <Reveal>
          <Prose>
            <blockquote className="border-l-2 border-accent pl-6 sm:pl-8">
              <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                “{s.text}”
              </p>
              {s.attribution && (
                <footer className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                  {s.attribution}
                </footer>
              )}
            </blockquote>
          </Prose>
        </Reveal>
      );

    // ------------------------------------------------ the turn in the story
    case "insight":
      return (
        <Reveal>
          <Prose>
            <div className="card p-7 sm:p-9">
              <Eyebrow>{s.eyebrow ?? "The insight"}</Eyebrow>
              <h2 className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
                {s.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{s.body}</p>
            </div>
          </Prose>
        </Reveal>
      );

    case "bullets":
      return (
        <Reveal>
          <Prose>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
            <ul className="space-y-4">
              {s.items.map((it, i) => (
                <li key={i} className="flex gap-4 text-foreground/85">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </Prose>
        </Reveal>
      );

    // ------------------------------------------------ evidence
    case "figure":
      return (
        <Reveal>
          <figure
            className={`container-x ${s.wide ? "max-w-6xl" : "max-w-4xl"}`}
          >
            <div
              className={`overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)] ${
                s.phone ? PHONE_FRAME : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.caption ?? ""}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            {s.caption && (
              <figcaption
                className={`mt-3 text-sm leading-relaxed text-muted ${
                  s.phone ? PHONE_CAPTION : ""
                }`}
              >
                {s.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );

    case "video":
      return (
        <Reveal>
          <figure className={`container-x ${s.wide ? "max-w-6xl" : "max-w-4xl"}`}>
            <div
              className={`relative overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)] ${
                s.phone ? PHONE_FRAME : ""
              }`}
            >
              <video
                src={s.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-auto w-full"
              />
              {s.badge && (
                <span className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  {s.badge}
                </span>
              )}
            </div>
            {s.caption && (
              <figcaption
                className={`mt-3 text-sm leading-relaxed text-muted ${
                  s.phone ? PHONE_CAPTION : ""
                }`}
              >
                {s.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );

    case "figures":
      return (
        <div className="container-x max-w-6xl">
          {/* phone sets go 2-up on mobile and 4-up on desktop, so handset
              captures stay near native size instead of stretching */}
          <div
            className={`grid gap-5 ${
              s.phone
                ? "grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
                : "sm:grid-cols-2"
            }`}
          >
            {s.items.map((f, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <figure>
                  <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.src}
                      alt={f.caption ?? ""}
                      loading="lazy"
                      className="h-auto w-full"
                    />
                  </div>
                  {f.caption && (
                    <figcaption className="mt-2.5 text-xs leading-relaxed text-muted">
                      {f.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      );

    // ------------------------------------------------ process
    case "steps":
      return (
        <div className="container-x max-w-4xl">
          <Reveal>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
          </Reveal>
          <div className="mt-8 space-y-10">
            {s.items.map((step, i) => (
              <Reveal key={i}>
                <div className="border-l border-border pl-6">
                  <div className="tnum mb-1 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{step.body}</p>
                  {step.image && (
                    <figure className="mt-5">
                      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={step.image}
                          alt={step.imageCaption ?? step.title}
                          loading="lazy"
                          className="h-auto w-full"
                        />
                      </div>
                      {step.imageCaption && (
                        <figcaption className="mt-2 text-xs leading-relaxed text-muted">
                          {step.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "decisions":
      return (
        <div className="container-x max-w-4xl">
          <Reveal>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
          </Reveal>
          <div className="mt-8 space-y-5">
            {s.items.map((d, i) => (
              <Reveal key={i}>
                <div className="card p-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {d.decision}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">
                    <span className="eyebrow mr-2.5">Why</span>
                    {d.logic}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "metrics":
      return (
        <Reveal>
          <div className="container-x max-w-5xl">
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {s.items.map((m) => (
                <div key={m.label} className="bg-background p-6">
                  <div className="tnum text-2xl font-semibold tracking-tight text-accent">
                    {m.metric}
                  </div>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      );

    // ------------------------------------------------ the artifact (e.g. a prompt spec)
    case "spec":
      return (
        <Reveal>
          <Prose>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
            <div className="overflow-hidden rounded-xl border border-border bg-surface-2/60">
              <ul className="divide-y divide-border/70">
                {s.lines.map((line, i) => (
                  <li
                    key={i}
                    className="flex gap-3 px-5 py-3 font-mono text-[13px] leading-relaxed text-foreground/80"
                  >
                    <span className="select-none text-accent">→</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            {s.caption && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.caption}</p>
            )}
          </Prose>
        </Reveal>
      );

    // ------------------------------------------------ honest self-assessment
    case "scorecard":
      return (
        <Reveal>
          <Prose>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
            <div className="overflow-hidden rounded-xl border border-border">
              {s.items.map((it) => (
                <div
                  key={it.label}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border/60 bg-surface/40 px-5 py-4 last:border-b-0"
                >
                  <span
                    className={`tnum w-14 shrink-0 font-mono text-sm ${
                      it.tone === "bad"
                        ? "text-red-400"
                        : it.tone === "good"
                          ? "text-[#4ade80]"
                          : "text-muted"
                    }`}
                  >
                    {it.score}
                  </span>
                  <span className="font-medium text-foreground sm:min-w-[8rem]">
                    {it.label}
                  </span>
                  {/* note drops to its own line on mobile rather than squeezing */}
                  <span className="w-full text-sm leading-relaxed text-muted sm:w-auto sm:flex-1">
                    {it.note}
                  </span>
                </div>
              ))}
            </div>
            {s.caption && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.caption}</p>
            )}
          </Prose>
        </Reveal>
      );

    case "compare":
      return (
        <div className="container-x max-w-5xl">
          <Reveal>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
            <FlipCompare
              before={s.before}
              after={s.after}
              label={s.title ?? "Before and after"}
              accent={accent}
            />
          </Reveal>
        </div>
      );

    case "swatches":
      return (
        <Reveal>
          <Prose>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading>{s.title}</Heading>
            {s.note && (
              <p className="mb-6 leading-relaxed text-muted">{s.note}</p>
            )}
            <div className="overflow-hidden rounded-xl border border-border">
              {s.items.map((row) => (
                // wraps on mobile so the description gets full width instead of
                // being crushed into a ~90px column beside the chip and label
                <div
                  key={row.hex}
                  className="flex flex-wrap items-center gap-x-5 gap-y-2.5 border-b border-border/60 bg-surface/40 px-5 py-4 last:border-b-0"
                >
                  <span
                    className="h-9 w-14 shrink-0 rounded-md shadow-[inset_0_-3px_6px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.35)]"
                    style={{ backgroundColor: row.hex }}
                  />
                  <span className="shrink-0 font-mono text-sm text-foreground sm:w-24">
                    {row.range}
                  </span>
                  <span className="w-full text-sm leading-relaxed text-muted sm:w-auto sm:flex-1">
                    {row.meaning}
                  </span>
                </div>
              ))}
            </div>
          </Prose>
        </Reveal>
      );

    default:
      return null;
  }
}

import { CheckCircle2, ChevronDown, CircleDashed } from "lucide-react";
import type { CaseSection, DetailItem, EvidenceItem } from "@/data/site";
import { EvidenceImage } from "./EvidenceImage";

/**
 * Editorial-only blocks. Each is opted into by a case study's own data, so the
 * rhythm of the page comes from the story rather than one repeating template:
 * a turning-point statement, a system model, reasoning rows, an ownership map
 * and a status pair — with secondary detail collapsed rather than removed.
 */
type Of<K extends CaseSection["kind"]> = Extract<CaseSection, { kind: K }>;

const LABEL = "font-mono text-[11px] uppercase tracking-widest";

function Eyebrow({ children }: { children?: string }) {
  return children ? <p className="eyebrow mb-3">{children}</p> : null;
}

function Paragraphs({ body }: { body: string | string[] }) {
  return (
    <>
      {(Array.isArray(body) ? body : [body]).map((p, i) => (
        <p key={i} className="mt-3 text-base leading-relaxed text-foreground/85 first:mt-0 sm:mt-4 sm:text-[1.0625rem]">{p}</p>
      ))}
    </>
  );
}

/** A capture with its caption; `compact` keeps small thumbnails from crowding. Phone captures stay near native width. */
function Capture({ item, compact = false, aspect }: { item: EvidenceItem; compact?: boolean; aspect?: string }) {
  return (
    <figure className={item.phone ? "mx-auto w-full max-w-[240px]" : undefined}>
      <EvidenceImage src={item.src} alt={item.alt} label={item.label} zoom={item.zoom} aspect={item.phone ? undefined : aspect} phone={item.phone} />
      {item.caption && <figcaption className={`mt-2 leading-snug text-muted ${compact ? "text-[11px]" : "text-xs"}`}>{item.caption}</figcaption>}
    </figure>
  );
}

/** Supporting material that stays out of the way until someone wants it. */
export function DetailList({ items }: { items: DetailItem[] }) {
  return (
    <div className="mt-8 divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.title} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
            <span>
              <span className="mr-3 font-mono text-[10px] uppercase tracking-widest text-muted">Optional</span>
              {item.title}
            </span>
            <ChevronDown aria-hidden className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180 motion-reduce:transition-none" />
          </summary>
          <div className="space-y-5 pb-6">
            <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
              {(Array.isArray(item.body) ? item.body : [item.body]).map((p) => <p key={p}>{p}</p>)}
            </div>
            {item.images && (
              <div className={`grid gap-5 ${item.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {item.images.map((image) => <Capture key={image.src} item={image} />)}
              </div>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

/** Heading beside copy — a different beat from heading-above-paragraph. */
export function SplitProse({ s }: { s: Of<"prose"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          {s.title && <h2 className="font-display text-xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>}
        </div>
        <div className="md:col-span-7"><Paragraphs body={s.body} /></div>
      </div>
      {s.more && <DetailList items={s.more} />}
    </div>
  );
}

/** The one sentence a reader should stop on — typography and space, no chrome. */
export function TurningBlock({ s }: { s: Of<"turning"> }) {
  return (
    <div className="container-x max-w-6xl py-3 sm:py-6">
      <Eyebrow>{s.eyebrow}</Eyebrow>
      <h2 className="font-display mt-5 max-w-5xl text-[clamp(2.25rem,6.2vw,5.75rem)] leading-[1.04] tracking-[-0.03em]">{s.title}</h2>
      <div className="mt-6 grid gap-6 sm:mt-10 md:grid-cols-12 md:gap-10">
        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg md:col-span-5">{s.body}</p>
        {s.shift && (
          <dl className="md:col-span-6 md:col-start-7">
            <div className="border-t border-border pt-4">
              <dt className={`${LABEL} text-muted`}>The question I started with</dt>
              <dd className="mt-2 text-base leading-snug text-muted sm:text-lg">{s.shift.from}</dd>
            </div>
            <div className="mt-5 border-t border-accent pt-4">
              <dt className={`${LABEL} text-accent`}>The question it became</dt>
              <dd className="font-display mt-2 text-xl leading-snug tracking-tight sm:text-2xl">{s.shift.to}</dd>
            </div>
          </dl>
        )}
      </div>
    </div>
  );
}

/** Legacy and iteration side by side, each named for what it is. */
export function ComparisonBlock({ s }: { s: Of<"comparison"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="max-w-3xl">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-display mb-3 text-2xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
        <p className="text-base leading-relaxed text-foreground/85 sm:text-[1.0625rem]">{s.body}</p>
      </div>
      <div className={`mt-5 grid gap-3 sm:mt-6 sm:gap-5 ${s.items.some((item) => item.phone) ? (s.items.length === 2 ? "grid-cols-2 sm:max-w-xl" : "grid-cols-2 sm:grid-cols-3") : "grid-cols-2"}`}>
        {s.items.map((item) => <Capture key={item.src} item={item} aspect={s.uncropped ? undefined : "2 / 1"} compact />)}
      </div>
    </div>
  );
}

/** Field research: photos from the visit, then each observation beside what the product does about it. */
export function FieldBlock({ s }: { s: Of<"field"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="max-w-3xl">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-display mb-3 text-2xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
        {s.intro && <p className="text-base leading-relaxed text-foreground/85 sm:text-[1.0625rem]">{s.intro}</p>}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {s.photos.map((photo) => <Capture key={photo.src} item={photo} compact />)}
      </div>
      {s.note && <p className="mt-3 text-xs leading-relaxed text-muted">{s.note}</p>}
      <div className="mt-8 overflow-hidden rounded-xl border border-border">
        <div aria-hidden className={`${LABEL} hidden grid-cols-[2rem_1fr_1fr] gap-6 border-b border-border bg-surface px-5 py-3 text-muted sm:grid`}>
          <span />
          <span>On the floor</span>
          <span className="text-accent">In the product</span>
        </div>
        <ol>
          {s.findings.map((f, i) => (
            <li key={f.saw} className="grid gap-2 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[2rem_1fr_1fr] sm:gap-6">
              <span className="font-mono text-xs text-accent sm:pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-relaxed text-foreground/90">
                <span className={`${LABEL} mr-2 text-muted sm:hidden`}>On the floor</span>
                {f.saw}
              </p>
              <p className="text-sm leading-relaxed text-foreground/90">
                <span className={`${LABEL} mr-2 text-accent sm:hidden`}>In the product</span>
                {f.did}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** Interface copy before and after, by where it appears. Stacks on phones, three columns from sm. */
export function RewritesBlock({ s }: { s: Of<"rewrites"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="max-w-3xl">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-display mb-3 text-2xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
        {s.intro && <p className="text-base leading-relaxed text-foreground/85 sm:text-[1.0625rem]">{s.intro}</p>}
      </div>
      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <div aria-hidden className={`${LABEL} hidden grid-cols-[11rem_1fr_1fr] gap-6 border-b border-border bg-surface px-5 py-3 text-muted sm:grid`}>
          <span>Where</span>
          <span>Before</span>
          <span className="text-accent">After</span>
        </div>
        <dl>
          {s.items.map((item) => (
            <div key={item.where} className="grid gap-2 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[11rem_1fr_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-foreground">{item.where}</dt>
              <dd className="text-sm leading-relaxed text-muted">
                <span className={`${LABEL} mr-2 text-muted sm:hidden`}>Before</span>
                {item.before}
              </dd>
              <dd className="text-sm leading-relaxed text-foreground/90">
                <span className={`${LABEL} mr-2 text-accent sm:hidden`}>After</span>
                {item.after}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/** The 30-second version for someone skimming: problem, what I did, result. */
export function GlanceBlock({ s }: { s: Of<"glance"> }) {
  return (
    <div className="container-x max-w-6xl">
      <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
        {s.items.map((item, i) => (
          <div key={item.label} className={`p-5 sm:p-6 ${i === s.items.length - 1 ? "bg-surface" : "bg-background"}`}>
            <dt className={`${LABEL} mb-2.5 ${i === s.items.length - 1 ? "text-accent" : "text-muted"}`}>{item.label}</dt>
            <dd className="text-[0.9375rem] leading-relaxed text-foreground/90">{item.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Before → after numbers. The old value is muted, so the change reads first. */
export function StatsBlock({ s }: { s: Of<"stats"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="max-w-3xl">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-display mb-3 text-2xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
        {s.intro && <p className="text-base leading-relaxed text-foreground/85 sm:text-[1.0625rem]">{s.intro}</p>}
      </div>
      <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item) => (
          <div key={item.label} className="bg-background p-5 sm:p-6">
            <dt className="sr-only">{item.label}</dt>
            <dd className="font-display text-3xl leading-none tracking-tight tabular-nums sm:text-4xl">
              {item.from && <span className="text-muted">{item.from} <span aria-label="to">→</span> </span>}
              {item.value}
            </dd>
            <dd aria-hidden className="mt-2.5 text-sm leading-snug text-muted">{item.label}</dd>
          </div>
        ))}
      </dl>
      {s.note && <p className="mt-3 max-w-3xl text-xs leading-relaxed text-muted">{s.note}</p>}
    </div>
  );
}

/** A flow told as numbered phone captures. Scrolls sideways, so each screen stays readable. */
export function SequenceBlock({ s }: { s: Of<"sequence"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="max-w-3xl">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-display mb-3 text-2xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
        {s.intro && <p className="text-base leading-relaxed text-foreground/85 sm:text-[1.0625rem]">{s.intro}</p>}
      </div>
      <div role="region" aria-label={`${s.title} ${s.items.length} steps, scroll sideways`} tabIndex={0} className="mt-6 overflow-x-auto pb-3 [scroll-snap-type:x_mandatory]">
        <ol className="flex w-max gap-4 sm:gap-5">
          {s.items.map((item, i) => (
            <li key={item.src} className="w-[200px] shrink-0 [scroll-snap-align:start] sm:w-[220px]">
              <p className="mb-2 font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <EvidenceImage src={item.src} alt={item.alt} label={item.label} phone />
              {item.caption && <p className="mt-2 text-xs leading-snug text-muted">{item.caption}</p>}
            </li>
          ))}
        </ol>
      </div>
      <p aria-hidden className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">Scroll sideways · {s.items.length} steps</p>
    </div>
  );
}

/** Conceptual only — dashed frame, explicit label, and a caption that limits the claim. */
export function ModelBlock({ s }: { s: Of<"model"> }) {
  const last = s.items.length - 1;
  return (
    <div className="container-x max-w-6xl">
      <div className="rounded-2xl border border-dashed border-foreground/30 bg-surface/40 p-5 sm:p-8">
        <div className="flex flex-col-reverse items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <h2 className="font-display text-lg tracking-tight sm:text-2xl">{s.title}</h2>
          <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">{s.label}</span>
        </div>
        <ol className="mt-4 divide-y divide-border sm:mt-7 sm:grid sm:grid-cols-4 sm:gap-6 sm:divide-y-0">
          {s.stages.map((stage, i) => (
            <li key={stage.name} className="relative grid grid-cols-[1.75rem_1fr] py-2.5 sm:block sm:rounded-lg sm:border sm:border-border sm:bg-background sm:p-4">
              <span className="pt-0.5 font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-medium leading-snug sm:mt-1.5 sm:text-base">{stage.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-muted sm:mt-1 sm:leading-relaxed">{stage.note}</p>
              </div>
              {i < s.stages.length - 1 && <span aria-hidden className="absolute -right-[1.05rem] top-1/2 hidden -translate-y-1/2 text-accent sm:block">→</span>}
            </li>
          ))}
        </ol>
        <p className={`${LABEL} mb-3 mt-5 text-muted sm:mt-7`}>Conceptual hierarchy<span className="hidden sm:inline"> · broad to specific</span></p>
        <ol className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-4 sm:gap-y-5 lg:grid-cols-8">
          {s.items.map((item, i) => (
            <li key={item} className="flex items-baseline gap-2 border-t-2 pt-2 sm:pt-2.5" style={{ borderTopColor: `color-mix(in srgb, var(--accent) ${Math.round((i / last) * 100)}%, var(--border))` }}>
              <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 max-w-3xl text-sm leading-snug text-muted sm:mt-6 sm:leading-relaxed">{s.caption}</p>
      </div>
    </div>
  );
}

/** Product reasoning: Evidence → Decision → Trade-off → Implemented result, beside the capture that shows it. */
export function DecisionRows({ s }: { s: Of<"decisions"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="max-w-3xl">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        {s.title && <h2 className="font-display mb-3 text-2xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>}
        {s.intro && <p className="text-sm leading-relaxed text-muted sm:text-[1.0625rem] sm:text-foreground/85">{s.intro}</p>}
      </div>
      <ol className="mt-6 space-y-7 sm:mt-7 sm:space-y-9">
        {s.items.map((d, i) => {
          const images = d.images ?? [];
          const pair = images.length > 1 && !d.stack;
          const imageRight = i % 2 === 0;
          // full class names, so Tailwind can see them
          const figureCols = pair
            ? imageRight ? "md:col-span-7 md:col-start-6" : "md:col-span-7 md:col-start-1"
            : imageRight ? "md:col-span-5 md:col-start-8" : "md:col-span-5 md:col-start-1";
          const textCols = images.length === 0
            ? "md:col-span-8 md:col-start-1"
            : pair
              ? imageRight ? "md:col-span-5 md:col-start-1" : "md:col-span-5 md:col-start-8"
              : imageRight ? "md:col-span-7 md:col-start-1" : "md:col-span-7 md:col-start-6";
          const rows: [string, string | undefined][] = [
            ["Evidence", d.evidence],
            ["Decision", d.logic],
            ["Trade-off", d.tradeoff],
            ["Implemented result", d.result],
          ];
          return (
            <li key={d.decision} className="grid gap-x-10 gap-y-3 border-t border-border pt-4 sm:gap-y-4 sm:pt-5 md:grid-cols-12 md:grid-rows-[auto_1fr]">
              <h3 className={`font-display text-xl leading-snug tracking-tight sm:text-2xl md:row-start-1 ${textCols}`}>
                <span className="mr-3 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                {d.decision}
              </h3>
              {images.length > 0 && (
                <div className={`md:row-span-2 md:row-start-1 ${figureCols} ${pair ? "grid grid-cols-2 gap-3 self-start" : d.stack ? "grid gap-4 self-start" : "self-start"}`}>
                  {images.map((image) => <Capture key={image.src} item={image} compact={pair} />)}
                </div>
              )}
              <dl className={`space-y-2 md:row-start-2 md:space-y-3.5 ${textCols}`}>
                {rows.map(([label, value]) => value && (
                  <div key={label} className="md:grid md:grid-cols-[6.75rem_1fr] md:gap-4">
                    <dt className="mr-2 inline font-mono text-[10px] uppercase tracking-widest text-accent md:block md:pt-1">{label}</dt>
                    <dd className="inline text-sm leading-snug text-foreground/80 sm:leading-normal md:block">{value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Working prototype beside its copy; the recording is controlled and never autoplays. */
export function VideoSplit({ s }: { s: Of<"video"> }) {
  return (
    <div className="container-x max-w-6xl">
      <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-10">
        <div className="md:col-span-5">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          {s.title && <h2 className="font-display mb-4 text-2xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>}
          {s.body && <Paragraphs body={s.body} />}
        </div>
        <figure className="md:col-span-7">
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
            <video
              src={s.src}
              poster={s.poster}
              controls
              muted
              playsInline
              preload="none"
              aria-label={s.caption}
              className="block h-auto w-full"
            />
            {s.badge && <span aria-hidden className="pointer-events-none absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white">{s.badge}</span>}
          </div>
          {s.caption && <figcaption className="mt-2.5 text-xs leading-relaxed text-muted">{s.caption}</figcaption>}
        </figure>
      </div>
      {s.more && <DetailList items={s.more} />}
    </div>
  );
}

/** Who owned what — the first column is mine, weighted by a rule, not by color alone. */
export function OwnershipBlock({ s }: { s: Of<"ownership"> }) {
  // two groups split the row evenly instead of leaving a third column empty
  const pair = s.groups.length === 2;
  return (
    <div className="container-x max-w-6xl">
      <div>
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="font-display text-xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
      </div>
      <div className={`mt-5 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-6 ${pair ? "sm:grid-cols-2" : "grid-cols-2 md:grid-cols-3"}`}>
        {s.groups.map((group, i) => (
          <section key={group.name} className={`p-4 sm:p-6 ${i === 0 ? `border-t-2 border-t-accent bg-surface ${pair ? "" : "col-span-2 md:col-span-1"}` : "bg-background"}`}>
            <h3 className={`${LABEL} mb-3 ${i === 0 ? "text-accent" : "text-muted"}`}>{group.name}</h3>
            <ul className="space-y-1 text-sm leading-snug text-foreground/85 sm:space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2 sm:gap-2.5"><span aria-hidden className="mt-[0.45rem] h-1 w-1 shrink-0 bg-current opacity-50" /><span className="min-w-0 break-words">{item}</span></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

/** Deliberately slight — the experiment is a footnote to the story, not a feature. */
export function NoteBlock({ s }: { s: Of<"note"> }) {
  return (
    <div className="container-x max-w-6xl">
      <aside className="grid gap-1.5 border-y border-border py-4 md:grid-cols-12 md:gap-10">
        <p className={`${LABEL} text-muted md:col-span-3`}>{s.label ?? "Note"}</p>
        <div className="md:col-span-9">
          <h2 className="text-base font-medium">{s.title}</h2>
          <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">{s.body}</p>
        </div>
      </aside>
    </div>
  );
}

/** Two deployment states, told apart by border, icon and words — never by color alone. */
export function StatusBlock({ s }: { s: Of<"status"> }) {
  return (
    <div className="container-x max-w-6xl">
      <Eyebrow>{s.eyebrow}</Eyebrow>
      <h2 className="font-display text-xl leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
      <dl className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
        {s.states.map((state) => {
          const live = state.state === "production";
          return (
            <div key={state.name} className={`rounded-xl p-5 ${live ? "border border-border bg-surface" : "border border-dashed border-foreground/40"}`}>
              <dt className="text-sm text-muted">{state.name}</dt>
              <dd className="mt-2.5 flex items-start gap-3 text-lg font-medium leading-snug sm:text-xl">
                {live ? <CheckCircle2 aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-accent" /> : <CircleDashed aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-muted" />}
                <span>{state.status}</span>
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{s.qualification}</p>
    </div>
  );
}

/** One statement carrying the whole arc, then what is honestly still open. */
export function ClosingBlock({ s }: { s: Of<"closing"> }) {
  return (
    <div className="container-x max-w-6xl">
      <h2 className="eyebrow mb-4">{s.eyebrow}</h2>
      <p className="font-display max-w-4xl text-xl leading-snug tracking-tight sm:text-[2rem] sm:leading-[1.25]">{s.statement}</p>
      {s.reflection && (
        <div className="mt-6 grid gap-1.5 border-t border-border pt-4 sm:mt-8 md:grid-cols-12 md:gap-10">
          <p className={`${LABEL} text-accent md:col-span-3`}>What I&apos;d do differently</p>
          <p className="text-[0.9375rem] leading-relaxed text-foreground/85 md:col-span-9">{s.reflection}</p>
        </div>
      )}
      <div className="mt-6 grid gap-1.5 border-t border-border pt-4 sm:mt-8 md:grid-cols-12 md:gap-10">
        <p className={`${LABEL} text-muted md:col-span-3`}>{s.open.label}</p>
        <p className="text-sm leading-relaxed text-muted md:col-span-9">{s.open.text}</p>
      </div>
    </div>
  );
}

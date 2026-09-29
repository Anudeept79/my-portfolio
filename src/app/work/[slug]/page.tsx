import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, profile } from "@/data/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CoverFrame } from "@/components/CoverFrame";
import { FlipCompare } from "@/components/FlipCompare";
import { LockOverlay } from "@/components/LockOverlay";
import { CaseSections } from "@/components/CaseSections";
import { EvidenceImage } from "@/components/EvidenceImage";
import editorialStyles from "@/components/CaseEditorial.module.css";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — ${profile.name}`,
    description: cs.impact,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const others = caseStudies.filter((c) => c.slug !== slug && !c.lab);

  return (
    <>
      {cs.locked && <LockOverlay slug={cs.slug} code="9191" />}
      <Nav />
      <main className={`pt-28 ${cs.editorial ? editorialStyles.page : ""}`}>
        {/* header */}
        {cs.editorial ? (
          <header className="container-x">
            <Link href="/#work" className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"><ArrowLeft size={16} /> All work</Link>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted">{cs.title} <span className="mx-3 text-border">/</span> Product design case study</p>
            <h1 className={`font-display ${editorialStyles.heroTitle}`}>{cs.editorial.headline}</h1>
            <p className={`mt-6 text-muted ${editorialStyles.heroDescription}`}>{cs.editorial.subheadline}</p>
            <dl className="my-7 grid gap-x-8 gap-y-5 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-4">
              {cs.editorial.summary.map(({ label, value }) => <div key={label}><dt className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">{label}</dt><dd className="text-sm leading-relaxed">{value}</dd></div>)}
            </dl>
            <figure>
              <EvidenceImage src={cs.cover} alt="WarePro complex warehouse layout with labeled storage, occupancy visualization and mezzanine structure" label="Final" priority />
              <figcaption className="mt-3 max-w-3xl text-xs leading-relaxed text-muted">{cs.editorial.caption}</figcaption>
            </figure>
            <nav aria-label="Case study sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-b border-border pb-4">
              {cs.editorial.navigation.map((item, index) => <a key={item.id} href={`#${item.id}`} className="py-2 text-sm text-muted hover:text-foreground"><span className="mr-2 font-mono text-[10px] text-accent">{String(index + 1).padStart(2, "0")}</span>{item.label}</a>)}
            </nav>
          </header>
        ) : (
        <header className="container-x">
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="rounded-full border border-border px-3 py-1">
              {cs.domain}
            </span>
            <span>{cs.year}</span>
            <span>·</span>
            <span>{cs.role}</span>
          </div>

          <h1 className="font-display mt-5 max-w-4xl text-4xl leading-tight sm:text-5xl">
            {cs.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-accent">
            {cs.impact}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {cs.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </header>
        )}

        {/* cover — live demo video when available, image otherwise */}
        {!cs.editorial && <div className="container-x mt-12">
          {cs.video ? (
            // `max-h` keeps portrait captures (phone demos) from being blown up
            // to full column width — they stay near native size and centred,
            // while landscape demos are unaffected.
            <div className="relative mx-auto w-fit max-w-full overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
              <video
                src={cs.video}
                poster={cs.cover}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="block h-auto max-h-[78vh] w-auto max-w-full"
              />
              <span className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Live demo
              </span>
            </div>
          ) : (
            <CoverFrame
              src={cs.cover}
              label={cs.client}
              accent={cs.accent}
              className="aspect-[16/9] w-full"
            />
          )}
        </div>}

        {/* Studies that define `sections` are told in their own shape — the
            fixed Overview→Process→Outcome body below is skipped entirely. */}
        {cs.sections ? (
          <CaseSections sections={cs.sections} accent={cs.accent} editorial={!!cs.editorial} />
        ) : (
          <>
        {/* results strip */}
        <section className="container-x mt-16">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label} className="bg-background p-6">
                <div className="tnum text-3xl font-semibold tracking-tight text-accent">
                  {r.metric}
                </div>
                <div className="mt-1 text-sm text-muted">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* body */}
        <article className="container-x mt-20 grid gap-16 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-mono text-sm text-accent">Overview</h2>
          </div>
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90">
              {cs.overview}
            </p>
          </Reveal>
        </article>

        {/* narrative chapters */}
        {cs.story?.map((chapter) => (
          <Section key={chapter.title} title={chapter.title}>
            <p className="text-lg leading-relaxed text-foreground/90">
              {chapter.body}
            </p>
          </Section>
        ))}

        <Section title={cs.story ? "The insights" : "The problem"}>
          <ul className="space-y-4">
            {cs.problem.map((p, i) => (
              <li key={i} className="flex gap-4 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Process">
          <div className="space-y-8">
            {cs.process.map((step, i) => (
              <div key={i} className="border-l border-border pl-6">
                <div className="mb-1 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
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
            ))}
          </div>
        </Section>

        {/* key decisions + reasoning */}
        {cs.decisions && (
          <Section title="Key decisions — and the logic">
            <div className="space-y-5">
              {cs.decisions.map((d, i) => (
                <div key={i} className="card p-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {d.decision}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">
                    <span className="eyebrow mr-2.5">Why</span>
                    {d.logic}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* colour system legend */}
        {cs.colorLogic && (
          <Section title="The colour logic">
            <p className="leading-relaxed text-muted">{cs.colorLogic.note}</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              {cs.colorLogic.scale.map((row) => (
                <div
                  key={row.hex}
                  className="flex items-center gap-5 border-b border-border/60 bg-surface/40 px-5 py-4 last:border-b-0"
                >
                  <span
                    className="h-9 w-14 shrink-0 rounded-md shadow-[inset_0_-3px_6px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.35)]"
                    style={{ backgroundColor: row.hex }}
                  />
                  <span className="tnum w-16 shrink-0 font-mono text-sm text-foreground">
                    {row.range}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {row.meaning}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* book-flip before/after */}
        {cs.compare && (
          <Section title="The transformation">
            <FlipCompare
              before={cs.compare.before}
              after={cs.compare.after}
              label={cs.title}
              accent={cs.accent}
            />
          </Section>
        )}

        {/* gallery */}
        {cs.gallery.length > 0 && (
          <section className="container-x mt-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cs.gallery.map((g, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08}>
                  <figure>
                    <CoverFrame
                      src={g.src}
                      label={g.caption}
                      accent={cs.accent}
                      className="aspect-[4/3] w-full"
                    />
                    <figcaption className="mt-2 text-xs text-muted">
                      {g.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <Section title="Solution & outcome">
          {cs.proof && (
            <figure className="mb-8">
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
                <video
                  src={cs.proof.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="h-auto w-full"
                />
                <span className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
                  {cs.proof.badge ?? "Shipped — in production"}
                </span>
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                {cs.proof.caption}
              </figcaption>
            </figure>
          )}
          <ul className="space-y-4">
            {cs.solution.map((s, i) => (
              <li key={i} className="flex gap-4 text-foreground/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </Section>
          </>
        )}

        {/* more case studies */}
        <section className="mt-24 border-t border-border">
          <div className="container-x py-16">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow mb-2">More case studies</p>
                <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                  Keep exploring the work.
                </h2>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="btn-gradient inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-medium"
              >
                Work with me <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={(i % 3) * 0.07}>
                  <Link
                    href={`/work/${other.slug}`}
                    className="card lift group flex h-full flex-col overflow-hidden"
                  >
                    <CoverFrame
                      src={other.cover}
                      label={other.client}
                      accent={other.accent}
                      className="aspect-[16/10] w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="mb-2 text-xs text-muted">{other.domain}</p>
                      <h3 className="text-base font-semibold leading-snug tracking-tight">
                        {other.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                        Read case study
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-x mt-20 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 className="font-mono text-sm text-accent">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

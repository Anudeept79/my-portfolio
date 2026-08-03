import type { Metadata } from "next";
import { ArrowUpRight, Award, Mail } from "lucide-react";
import { profile, toolkit, awards, personal, process } from "@/data/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { LifeBand } from "@/components/LifeBand";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description:
    "The story behind Anudeep Thota — an AI Product Designer who designs and ships production code.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        {/* intro */}
        <section className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/anudeep.jpg"
                  alt="Anudeep Thota"
                  className="h-full w-full object-cover object-[center_22%]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-3 font-mono text-sm text-accent">About</p>
              <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Hi, I&apos;m Anudeep. I design products — then ship them.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                I&apos;m an AI Product Designer in {profile.location}. I
                love the moment a messy, frustrating flow turns into something
                that just feels obvious — and I don&apos;t stop at the Figma
                handoff. I build and ship the working code too.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
                >
                  Résumé <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* my story */}
        <Block label="My story">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              I didn&apos;t start in design. I&apos;m an Electronics &amp;
              Communication engineer by degree — but somewhere along the way I
              realised I cared far more about how things
              <em>feel to use</em>{" "}than how they&apos;re wired.
            </p>
            <p>
              So I went deep. An apprenticeship at GrowthSchool put me under the
              mentorship of{" "}
              <span className="text-foreground">Anudeep Ayyagaari</span>, a UX
              Designer at Amazon, where I learned the full craft — research,
              systems, prototyping, handoff — and earned the Dependable Award.
            </p>
            <p>
              Then AI changed everything. At{" "}
              <span className="text-foreground">PIPRA Solutions</span>{" "}I
              pioneered an AI-led design-and-build workflow that let me go from
              a problem to a shipped, working product — solo. Over 1 year 11
              months I&apos;ve delivered 10+ production apps across fintech,
              government, logistics, SaaS and EdTech, earning the company its{" "}
              <span className="text-gold">AI Excellence Award</span> — with zero
              engineering dependency.
            </p>
            <p>
              That work started finding me. A senior US designer discovered my
              portfolio and contracted me to build government platforms; my
              freelance income now exceeds my salary — all from portfolio
              discovery, never cold outreach. Next up: my own AI-native EdTech
              platform, prototype complete and CEO-backed.
            </p>
          </div>
        </Block>

        {/* philosophy */}
        <Block label="How I think">
          <h2 className="mb-8 font-display text-2xl tracking-tight sm:text-3xl">
            Frame the problem. Design the system. Ship the code.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {process.map((p) => (
              <div key={p.step} className="card p-6">
                <div className="mb-3 font-mono text-sm text-accent">
                  {p.step}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Block>

        {/* toolkit */}
        <Block label="Toolkit">
          <div className="grid gap-6 sm:grid-cols-2">
            {toolkit.map((t) => (
              <div key={t.group}>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  {t.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* awards + beyond */}
        <Block label="Recognition">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gold">
            <Award className="h-4 w-4" /> Awards &amp; recognition
          </h3>
          <ul className="mb-10 space-y-2">
            {awards.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Beyond work
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {personal.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Block>
      </main>

      <LifeBand />
      <Footer />
    </>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-x mt-20 grid gap-8 lg:grid-cols-[1fr_2.4fr] lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="font-mono text-sm text-accent">{label}</p>
      </div>
      <div>{children}</div>
    </section>
  );
}

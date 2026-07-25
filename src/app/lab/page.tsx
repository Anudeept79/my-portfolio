import type { Metadata } from "next";
import { profile, lab } from "@/data/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CoverFrame } from "@/components/CoverFrame";

export const metadata: Metadata = {
  title: `Lab — ${profile.name}`,
  description:
    "Experiments, prototypes, side builds and archived work by Anudeep Thota.",
};

export default function LabPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <section className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">The Lab</p>
            <h1 className="font-display max-w-3xl text-4xl leading-tight sm:text-6xl">
              Experiments, prototypes &amp; things I built to find out.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Not every build is a polished case study. This is the workshop —
              side projects, 4-hour prototypes, AI experiments and archived work.
            </p>
          </Reveal>
        </section>

        <section className="container-x mt-14 pb-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lab.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07}>
                <article className="card lift group flex h-full flex-col overflow-hidden">
                  <CoverFrame
                    src={`/lab/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.jpg`}
                    label={item.title}
                    accent={item.accent}
                    index={i + 1}
                    className="aspect-[16/10] w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 font-mono text-xs text-accent">
                      {item.tag}
                    </p>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {item.blurb}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

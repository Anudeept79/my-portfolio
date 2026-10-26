import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, featuredSlugs } from "@/data/site";
import { Reveal } from "./Reveal";

/** The rest of the case studies, listed rather than featured, then the Lab. */
export function MoreWork() {
  const more = caseStudies.filter((c) => !c.lab && !featuredSlugs.includes(c.slug));
  return (
    <section className="py-8">
      <div className="container-x">
        <Reveal>
          <p className="mb-6 font-mono text-sm text-muted">More case studies</p>
        </Reveal>
        <ul className="divide-y divide-border border-y border-border">
          {more.map((cs) => (
            <li key={cs.slug}>
              <Link
                href={`/work/${cs.slug}`}
                className="group grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-xs text-accent sm:col-span-3">{cs.domain}</span>
                <span className="sm:col-span-8">
                  <span className="block font-semibold tracking-tight group-hover:text-accent">
                    {cs.editorial?.headline ?? cs.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {cs.editorial ? cs.teaser : cs.impact}
                  </span>
                </span>
                <span className="hidden justify-self-end text-muted transition-colors group-hover:text-accent sm:col-span-1 sm:block">
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/lab"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          Experiments and side builds in the Lab <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

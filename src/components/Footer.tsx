import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

const explore = [
  { href: "/#work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "mailto:" + profile.email, label: "Contact" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer
      id="contact"
      className="relative mt-auto scroll-mt-20 overflow-hidden border-t border-border"
    >
      {/* closing CTA + quick nav */}
      <div className="container-x grid gap-10 py-20 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr]">
        <div>
          <p className="font-mono text-sm text-accent">{profile.availability}</p>
          <p className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Let&apos;s build something worth shipping.
          </p>
          <p className="mt-4 max-w-md text-muted">
            Hiring for an AI or product design role, or need a designer who can
            also deliver the code? I reply to every genuine message.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn-gradient mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
          >
            {profile.email} <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> {profile.phone}
            </span>
          </div>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm">
          <span className="eyebrow mb-2">Explore</span>
          {explore.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="w-fit text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-2.5 text-sm">
          <span className="eyebrow mb-2">Elsewhere</span>
          <Link
            href={profile.resumeUrl}
            className="w-fit text-muted transition-colors hover:text-foreground"
          >
            Résumé (PDF)
          </Link>
          <SocialLinks className="mt-3" />
        </nav>
      </div>

      {/* giant wordmark — brand statement with room to breathe */}
      <div aria-hidden className="px-4 pt-4">
        <span
          className="block text-center font-display font-medium leading-none tracking-tight text-foreground"
          style={{ fontSize: "clamp(3.25rem, 19vw, 15rem)" }}
        >
          Anudeep
        </span>
      </div>

      {/* baseline */}
      <div className="mt-10 border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {year} {profile.name}. Designed &amp; built by me — in code.
          </p>
          <p className="font-mono">Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}

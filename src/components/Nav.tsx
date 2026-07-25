"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-accent-ink text-sm font-bold">
            AT
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2.5 text-sm text-muted transition-colors hover:bg-surface/60 hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="btn-gradient rounded-full px-5 py-2.5 text-sm font-medium"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

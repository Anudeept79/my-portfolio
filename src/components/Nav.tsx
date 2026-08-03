"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/site";

// "Contact" is deliberately absent — the "Get in touch" CTA covers it, and two
// controls for the same intent just split attention.
const links = [
  { href: "/#work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock the page behind the open menu, and let Escape close it
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 font-semibold"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-accent-ink text-sm font-bold">
            AT
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        {/* desktop links */}
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

        {/* desktop CTA — on mobile this lives inside the menu instead */}
        <a
          href={`mailto:${profile.email}`}
          className="btn-gradient hidden rounded-full px-5 py-2.5 text-sm font-medium md:inline-block"
        >
          Get in touch
        </a>

        {/* mobile toggle — 44px target meets the minimum touch size */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-surface/60 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0",
        )}
      >
        <div className="container-x flex flex-col py-2 pb-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-4 text-base text-foreground/90 transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="btn-gradient mt-5 rounded-full px-5 py-3.5 text-center text-base font-medium"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

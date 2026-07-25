"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, LockOpen } from "lucide-react";

const KEY = "wp_unlock_";

/**
 * Access-code gate for a case study. Renders a full-screen prompt over the page
 * until the correct code is entered (remembered per browser). Note: this is an
 * exclusivity gate, not real security — the content still ships to the client.
 */
export function LockOverlay({ slug, code }: { slug: string; code: string }) {
  const [locked, setLocked] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY + slug) === "1") setLocked(false);
    } catch {}
  }, [slug]);

  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);

  if (!locked) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === code) {
      try {
        localStorage.setItem(KEY + slug, "1");
      } catch {}
      setLeaving(true);
      window.setTimeout(() => setLocked(false), 450);
    } else {
      setError(true);
      setValue("");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-background/85 px-4 backdrop-blur-2xl transition-opacity duration-[450ms] ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="card w-full max-w-md p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          {leaving ? (
            <LockOpen className="h-6 w-6" />
          ) : (
            <Lock className="h-6 w-6" />
          )}
        </div>
        <p className="eyebrow mb-3">Protected case study</p>
        <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
          This one&apos;s under wraps.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Government client work — shared by access code only. Enter the code I
          gave you to view the full case study.
        </p>

        <form onSubmit={submit} className="mt-7">
          <input
            autoFocus
            inputMode="numeric"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Enter access code"
            aria-label="Access code"
            aria-invalid={error}
            className={`w-full rounded-full border bg-surface px-5 py-3 text-center tracking-[0.3em] text-foreground outline-none transition-colors placeholder:tracking-normal placeholder:text-muted focus:border-accent ${
              error
                ? "border-red-500/70 animate-[shake_0.4s_ease]"
                : "border-border"
            }`}
          />
          <button
            type="submit"
            className="btn-gradient mt-4 w-full rounded-full px-6 py-3 font-medium"
          >
            Unlock
          </button>
        </form>

        {error && (
          <p className="mt-3 text-sm text-red-400">
            That code isn&apos;t right — try again.
          </p>
        )}

        <Link
          href="/#work"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </div>
    </div>
  );
}

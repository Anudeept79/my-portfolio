"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Award } from "lucide-react";
import { profile, stats } from "@/data/site";
import { HeroPhotos } from "./HeroPhotos";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      {/* living aurora — still under prefers-reduced-motion */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-[38rem] w-[38rem] rounded-full opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--accent), transparent 62%)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-[26rem] w-[26rem] rounded-full opacity-[0.12] blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--gold), transparent 60%)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* LEFT — copy */}
          <div>
            {/* availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </motion.div>

            {/* headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-gradient">AI Product Designer</span>
              <br />
              who <span className="accent-underline">builds</span>
              {" & ships."}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {profile.subtitle}
            </motion.p>

            {/* award badge — gold, attention-getting */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease }}
              className="mt-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold shadow-[0_0_30px_-10px_rgba(201,168,76,0.5)]">
                <Award className="h-4 w-4" strokeWidth={2} />
                AI Excellence Award — PIPRA Solutions, 2025
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"
              >
                See the work <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-muted transition-colors duration-150 hover:text-foreground"
              >
                Résumé <span className="text-xs text-muted/70">PDF</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — photo wall */}
          <div className="lg:pl-4">
            <HeroPhotos />
          </div>
        </div>

        {/* stat strip — full width */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-[var(--shadow-card)] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-background p-5 transition-colors hover:bg-surface"
            >
              <span className="absolute inset-x-5 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              <dt className="tnum text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{s.label}</dd>
              <dd className="text-xs text-muted">{s.sub}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const FALL_MS = 1500; // when gravity takes over
const CONTENT_MS = 2350; // when the overlay clears

const enterEase = [0.16, 1, 0.3, 1] as const; // decelerate — thrown up, settles
const fallEase = [0.42, 0, 0.85, 0.4] as const; // accelerate — gravity

/**
 * First-load brand animation: the name is thrown up ("Anu" then blue "deep"
 * spell Anudeep), then gravity pulls the whole name down — "deep" leads the
 * fall, "Anu" follows. Smooth, not bouncy. Plays once per session; skipped
 * under prefers-reduced-motion.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);
  const [falling, setFalling] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("preloaded") === "1";
    } catch {}
    if (reduce || seen) {
      setShow(false);
      return;
    }
    const t1 = setTimeout(() => setFalling(true), FALL_MS);
    const t2 = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem("preloaded", "1");
      } catch {}
    }, CONTENT_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduce]);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex font-display text-6xl font-medium tracking-tight sm:text-8xl">
            {/* Anu — thrown up, follows the fall */}
            <motion.span
              className="text-foreground"
              initial={{ y: 120, opacity: 0 }}
              animate={falling ? { y: 560, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={
                falling
                  ? { duration: 0.72, ease: fallEase, delay: 0.14 }
                  : { duration: 0.7, ease: enterEase, delay: 0.15 }
              }
            >
              Anu
            </motion.span>
            {/* deep — blue, leads the fall */}
            <motion.span
              className="text-accent-gradient"
              initial={{ y: 120, opacity: 0 }}
              animate={falling ? { y: 560, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={
                falling
                  ? { duration: 0.72, ease: fallEase, delay: 0 }
                  : { duration: 0.7, ease: enterEase, delay: 0.35 }
              }
            >
              deep
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

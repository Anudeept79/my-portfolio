import { Award } from "lucide-react";
import { trust } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Static credibility row — confidence reads as stillness. The award is the
 * gold-weighted anchor; the rest are quiet neutral pills.
 */
export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/30 py-4">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2">
        {trust.map((t) => {
          const isAward = t.toLowerCase().includes("award");
          return (
            <span
              key={t}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs",
                isAward
                  ? "border-gold/40 bg-gold/10 font-medium text-gold"
                  : "border-border bg-surface/40 text-muted",
              )}
            >
              {isAward ? (
                <Award className="h-3.5 w-3.5" strokeWidth={2} />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              )}
              {t}
            </span>
          );
        })}
      </div>
    </section>
  );
}

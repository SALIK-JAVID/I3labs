"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { audiences } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, cn } from "@/lib/utils";

/** Hover/tap a row to swap the image and expand its benefits. */
export function Audiences() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section className="section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Ecosystem Benefits"
          title={"Built for every stakeholder\nin education."}
          className="mb-14"
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="divide-y divide-line border-y border-line">
            {audiences.map((a, i) => (
              <button
                key={a.key}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                className="block w-full py-6 text-left"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-5">
                    <span className="num text-ink-4">0{i + 1}</span>
                    <span className={cn("font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold transition-colors duration-300", active === i ? "text-ink" : "text-ink-4")}>
                      For {a.title}
                    </span>
                  </div>
                  <span className={cn("text-[14px] italic transition-colors", active === i ? "text-or-ink" : "text-transparent")}>{a.tagline}</span>
                </div>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE.out }}
                      className="grid overflow-hidden pl-10 sm:grid-cols-2"
                    >
                      {a.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 pt-4 text-[14px] text-ink-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-or" /> {p}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl bg-fill lg:block">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current.key}
                initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.1 }}
                animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE.out }}
                className="absolute inset-0"
              >
                <Image src={current.image} alt={`For ${current.title}`} fill sizes="50vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-5 left-5 rounded-full bg-sheet/90 px-4 py-2 tag backdrop-blur">
              For {current.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

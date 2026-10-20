"use client";

import { motion } from "framer-motion";
import { EASE, cn } from "@/lib/utils";

type SplitTextProps = {
  /** Use "\n" to force a line break. */
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of on scroll-into-view (for above-the-fold headlines). */
  immediate?: boolean;
};

/**
 * Masked word-by-word reveal: each word slides up from behind an overflow-hidden line.
 * Screen readers get the plain sentence via aria-label.
 */
export function SplitText({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: SplitTextProps) {
  const Tag = motion[as];
  const lines = text.split("\n");
  let wordIndex = 0;

  const trigger = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Tag className={cn(className)} aria-label={text.replace(/\n/g, " ")} {...trigger}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").map((word, wi) => {
            const i = wordIndex++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "110%", rotate: 4 },
                    show: {
                      y: "0%",
                      rotate: 0,
                      transition: { duration: 1, ease: EASE.out, delay: delay + i * stagger },
                    },
                  }}
                >
                  {word}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

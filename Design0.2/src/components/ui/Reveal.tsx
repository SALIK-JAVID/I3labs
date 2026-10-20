"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  /** Animate once (default) or every time it enters the viewport. */
  once?: boolean;
};

/** Fade + rise into view. The workhorse entrance animation of the site. */
export function Reveal({ delay = 0, y = 28, once = true, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE.out, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <StaggerItem> children as they enter the viewport. */
export function Stagger({
  children,
  stagger = 0.08,
  delay = 0,
  ...rest
}: HTMLMotionProps<"div"> & { stagger?: number; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, y = 24, ...rest }: HTMLMotionProps<"div"> & { y?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE.out } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

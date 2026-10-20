"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { ippSteps } from "@/lib/data";

const images = [
  "/images/robot-gripper.jpg",
  "/images/robotic-actuator.jpg",
  "/images/robot-gripper.jpg",
  "/images/robotic-actuator.jpg",
  "/images/robot-gripper.jpg",
];

function Card({ i, progress, total }: { i: number; progress: MotionValue<number>; total: number }) {
  const step = ippSteps[i];
  const Icon = step.icon;
  // Each card shrinks slightly as the ones after it slide over the top.
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.04]);
  const dim = useTransform(progress, [start, Math.min(start + 0.25, 1)], [0, i === total - 1 ? 0 : 0.12]);

  return (
    <div className="sticky h-[78vh] min-h-[520px] pt-6" style={{ top: `calc(6rem + ${i * 18}px)` }}>
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className="relative grid h-full overflow-hidden rounded-[28px] border border-line bg-sheet shadow-[var(--shadow-win)] md:grid-cols-2"
      >
        <div className="flex flex-col p-8 sm:p-12">
          <div className="flex items-center justify-between">
            <span className="grid size-14 place-items-center rounded-2xl bg-or text-white">
              <Icon className="size-7" strokeWidth={1.5} />
            </span>
            <span className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none text-fill">{step.num}</span>
          </div>
          <p className="mt-10 eyebrow sm:mt-16">STAGE {step.num} / 05</p>
          <h3 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em]">{step.title}</h3>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-2">{step.desc}</p>
        </div>
        <div className="relative hidden md:block">
          <Image src={images[i]} alt={step.title} fill sizes="50vw" className="object-cover" />
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-night" />
      </motion.article>
    </div>
  );
}

/** Sticky stacking cards — each 3IPP stage pins and the next one slides over it. */
export function StackCards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="relative">
      {ippSteps.map((s, i) => (
        <Card key={s.num} i={i} progress={scrollYProgress} total={ippSteps.length} />
      ))}
    </div>
  );
}

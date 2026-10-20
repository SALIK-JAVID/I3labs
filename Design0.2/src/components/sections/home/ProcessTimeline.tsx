"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ippSteps } from "@/lib/data";
import { ArrowLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, cn } from "@/lib/utils";

function Step({ step, last }: { step: (typeof ippSteps)[number]; last: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const Icon = step.icon;
  return (
    <div ref={ref} className={cn("relative pl-20 sm:pl-24", !last && "pb-16")}>
      <motion.span
        animate={{
          backgroundColor: inView ? "#F47820" : "#FFFFFF",
          color: inView ? "#FFFFFF" : "#1A1613",
          scale: inView ? 1.06 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 top-0 z-10 grid size-14 place-items-center rounded-full border border-line shadow-[var(--shadow-rest)] sm:size-16"
      >
        <Icon className="size-6" strokeWidth={1.6} />
      </motion.span>
      <motion.div animate={{ opacity: inView ? 1 : 0.45, x: inView ? 0 : 6 }} transition={{ duration: 0.5, ease: EASE.out }}>
        <p className="eyebrow">STEP {step.num}</p>
        <h3 className="mt-2 text-[clamp(1.6rem,3vw,2.3rem)] font-semibold">{step.title}</h3>
        <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-2">{step.desc}</p>
      </motion.div>
    </div>
  );
}

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 50%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="section">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="The 3IPP Framework"
              title={"From classroom idea\nto filed patent."}
              lead="Our proprietary 5-stage innovation pipeline (Ideation, Innovation, Incubation, Prototyping and Patenting) transforms every student into an inventor."
            />
            <div className="mt-8">
              <ArrowLink href="/innovation">Inside 3IPP</ArrowLink>
            </div>
          </div>
        </div>
        <div ref={ref} className="relative lg:col-span-7">
          <div className="absolute bottom-0 left-7 top-0 w-px bg-line sm:left-8" />
          <motion.div style={{ scaleY }} className="absolute bottom-0 left-7 top-0 w-px origin-top bg-or sm:left-8" />
          {ippSteps.map((s, i) => (
            <Step key={s.num} step={s} last={i === ippSteps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/ui/SplitText";
import { EASE, cn } from "@/lib/utils";

const specs = [
  { k: "Est. 2010", v: "An End-to-End STEM Enterprise" },
  { k: "6 Lab Tracks", v: "Robotics · AI · Coding · IoT" },
  { k: "NEP 2020 aligned", v: "CBSE · ICSE · IB · Cambridge" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % specs.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative flex flex-col overflow-hidden pt-28 lg:block lg:min-h-[100dvh] lg:pt-20">
      {/* Backdrop */}
      <div className="hairline-grid pointer-events-none absolute inset-0 mask-fade-b" />
      <div className="pointer-events-none absolute right-[-10%] top-[10%] size-[720px] rounded-full bg-gradient-to-br from-or/15 via-or-100/10 to-transparent blur-[100px]" />

      {/*
        Hero video. Its studio backdrop is graded to pure white, and mix-blend-multiply makes
        white transparent, so the paper and grid squares show straight through and only the
        hand remains. Keep this wrapper free of transform/opacity/filter: those would isolate
        the blend and bring the white box back.
      */}
      <div className="relative order-2 h-[420px] sm:h-[520px] lg:absolute lg:inset-y-0 lg:right-[5%] lg:h-auto lg:w-[52%]">
        <motion.video
          src="/video/robotic-hand.mp4"
          poster="/video/robotic-hand-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Robotic hand opening and closing its fingers"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE.out, delay: 0.2 }}
          style={{ y: videoY }}
          className="absolute inset-0 size-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="container-site relative order-1 lg:flex lg:min-h-[calc(100dvh-5rem)] lg:items-center">
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 max-w-[620px] pb-6 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE.out }}
            className="eyebrow mb-7 inline-flex items-center gap-2.5"
          >
            <span className="size-1.5 animate-pulse-dot rounded-full bg-or" />
            Ideation · Innovation · Incubation
          </motion.p>

          <SplitText
            as="h1"
            immediate
            delay={0.15}
            stagger={0.09}
            text={"Engineered\nto Inspire"}
            className="text-[clamp(3rem,7vw,6rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE.out, delay: 0.55 }}
            className="mt-7 max-w-[480px] text-[18px] leading-relaxed text-ink-2"
          >
            An End-to-End STEM Solution Enterprise — empowering institutions with AI, Robotics, Coding, IoT,
            Innovation &amp; Patents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE.out, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact">Book a Lab Demo</Button>
            <Button href="/programs" variant="outline">Explore Programs</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {["DPS", "AIS", "RIS", "PWS"].map((s) => (
                <span key={s} className="grid size-9 place-items-center rounded-full border-2 border-paper bg-ink font-mono text-[10px] text-white">
                  {s}
                </span>
              ))}
            </div>
            <p className="text-[14px] leading-snug text-ink-2">
              Trusted by <strong className="font-semibold text-ink">150+ institutions</strong>
              <br />
              and <strong className="font-semibold text-ink">50K+ students</strong> across India
            </p>
          </motion.div>
        </motion.div>

        {/* Spec rail (desktop) */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE.out, delay: 1.1 }}
          className="absolute right-10 top-1/2 z-10 hidden w-[220px] -translate-y-1/2 xl:block"
        >
          {specs.map((s, i) => (
            <li key={s.k} className="relative border-b border-line py-4 pl-6 last:border-0">
              <button type="button" onClick={() => setActive(i)} className="text-left">
                <span
                  className={cn(
                    "absolute left-0 top-[22px] size-2 rounded-full transition-all duration-500",
                    active === i ? "bg-or shadow-[0_0_0_4px_rgba(244,120,32,0.18)]" : "bg-line-2",
                  )}
                />
                <span className={cn("block text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors", active === i ? "text-ink" : "text-ink-4")}>
                  {s.k}
                </span>
                <span className={cn("block text-[13px] transition-colors", active === i ? "text-ink-2" : "text-ink-4")}>{s.v}</span>
              </button>
            </li>
          ))}
        </motion.ul>

        {/* Floating status chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE.out, delay: 1.3 }}
          className="absolute bottom-28 right-10 z-10 hidden items-center gap-3 rounded-2xl border border-line bg-sheet/80 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur lg:flex"
        >
          <span className="size-2 animate-pulse-dot rounded-full bg-or" />
          <div>
            <p className="label">Lab setup</p>
            <p className="text-[14px] font-semibold">Live in 30 days</p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}

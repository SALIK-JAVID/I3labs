"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowLink } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, cn } from "@/lib/utils";

const tabs = [
  {
    key: "lab",
    label: "Lab Highlights",
    image: "/images/robot-gripper.jpg",
    callouts: [
      { t: "Modular Workstations", d: "Reconfigurable benches for 30–40 students" },
      { t: "Industry-Grade Kits", d: "Robotics, IoT, AI and 3D printing" },
      { t: "Safe by Design", d: "ESD-safe surfaces and certified electricals" },
      { t: "Smart Displays", d: "Interactive panels synced with the LMS" },
    ],
  },
  {
    key: "curriculum",
    label: "Curriculum",
    image: "/images/robotic-actuator.jpg",
    callouts: [
      { t: "Grade-wise Pathway", d: "Grades 1–12, building year on year" },
      { t: "Board Aligned", d: "NEP 2020, CBSE, ICSE, IB, Cambridge" },
      { t: "Project-First", d: "Every unit ends in something students build" },
      { t: "Assessments", d: "Skill rubrics and digital portfolios" },
    ],
  },
  {
    key: "classroom",
    label: "In the Classroom",
    image: "/images/robot-gripper.jpg",
    callouts: [
      { t: "Trained Faculty", d: "Certification for your existing teachers" },
      { t: "Live Analytics", d: "See progress per student and per class" },
      { t: "Competition Ready", d: "WRO, FIRST and national fairs" },
      { t: "Year-Round Support", d: "On-call trainers and maintenance" },
    ],
  },
];

const numbers = [
  { value: 16, suffix: "+", label: "Years" },
  { value: 150, suffix: "+", label: "Institutions" },
  { value: 50, suffix: "K+", label: "Students" },
  { value: 30, suffix: "", label: "Days to launch" },
  { value: 6, suffix: "", label: "Programs" },
  { value: 35, suffix: "+", label: "Competitions" },
];

export function Highlights() {
  const [tab, setTab] = useState(0);
  const current = tabs[tab];

  return (
    <section className="section">
      <div className="container-site">
        <div className="card grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
          <div className="flex min-w-0 flex-col lg:col-span-5">
            <SectionHeading
              title={"The complete STEM ecosystem,\nnot just equipment."}
              lead="i3 Labs goes beyond hardware. We integrate curriculum, technology, training, certifications, and ongoing support into a single seamless partner relationship."
            />
            <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-y-8 border-t border-line pt-8">
              {numbers.map((n, i) => (
                <div key={n.label} className={cn("pr-4", i % 3 !== 0 && "border-l border-line pl-4")}>
                  <p className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-none text-or">
                    <Counter value={n.value} suffix={n.suffix} />
                  </p>
                  <p className="label mt-2">{n.label}</p>
                </div>
              ))}
            </Reveal>
            <div className="mt-auto pt-10">
              <ArrowLink href="/labs">View lab specifications</ArrowLink>
            </div>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl bg-night p-5 text-night-ink sm:p-8">
              <div className="hairline-grid-dark pointer-events-none absolute inset-0 opacity-70" />
              <div role="tablist" aria-label="Highlights" className="relative -mx-2 flex gap-1 overflow-x-auto px-2 sm:justify-center sm:gap-4">
                {tabs.map((t, i) => (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={tab === i}
                    onClick={() => setTab(i)}
                    className={cn(
                      "relative whitespace-nowrap px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors",
                      tab === i ? "text-or" : "text-night-mute hover:text-night-ink",
                    )}
                  >
                    {t.label}
                    {tab === i && <motion.span layoutId="hl-tab" className="absolute inset-x-3 -bottom-0.5 h-px bg-or" />}
                  </button>
                ))}
              </div>

              <div className="relative mt-8 min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="grid min-h-[420px] items-center gap-6 md:grid-cols-[1fr_1.6fr_1fr]"
                  >
                    {[0, 2].map((offset, col) => (
                      <div key={col} className={cn("space-y-10", col === 0 ? "md:order-1 md:text-right" : "md:order-3")}>
                        {current.callouts.slice(offset, offset + 2).map((c, i) => (
                          <motion.div
                            key={c.t}
                            initial={{ opacity: 0, x: col === 0 ? -16 : 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: EASE.out, delay: 0.15 + i * 0.1 }}
                          >
                            <p className="font-display text-[15px] font-semibold">{c.t}</p>
                            <p className="mt-1 text-[13px] leading-relaxed text-night-mute">{c.d}</p>
                            <span className={cn("mt-3 block h-px w-16 bg-gradient-to-r from-or to-transparent", col === 0 && "md:ml-auto md:rotate-180")} />
                          </motion.div>
                        ))}
                      </div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, ease: EASE.out }}
                      className="relative order-first aspect-square overflow-hidden rounded-full border border-white/10 md:order-2"
                    >
                      <Image src={current.image} alt={current.label} fill sizes="(min-width: 768px) 30vw, 80vw" className="object-cover" />
                      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-or/40" />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

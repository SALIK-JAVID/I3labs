"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE } from "@/lib/utils";

const steps = [
  { day: "Day 1–3", title: "Site Survey", desc: "We audit space, power, budget and learning goals." },
  { day: "Day 4–10", title: "Lab Design", desc: "3D layout, furniture, branding and equipment plan." },
  { day: "Day 11–22", title: "Install", desc: "Interiors, kits, displays and LMS go in." },
  { day: "Day 23–28", title: "Train", desc: "Hands-on certification for your faculty." },
  { day: "Day 30", title: "Launch", desc: "First classes, with our trainers on site." },
];

/** Horizontal 30-day timeline; the connecting line draws itself on scroll-in. */
export function SetupSteps() {
  return (
    <section className="section bg-night text-night-ink">
      <div className="container-site">
        <SectionHeading dark eyebrow="How it works" title={"From empty room\nto first class in 30 days."} className="mb-16" />
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.6, ease: EASE.out }}
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-gradient-to-r from-or via-or/60 to-white/10 lg:block"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: EASE.out, delay: 0.2 + i * 0.12 }}
              >
                <span className="relative block size-[15px] rounded-full border-2 border-or bg-night">
                  {i === steps.length - 1 && <span className="absolute inset-0.5 animate-pulse rounded-full bg-or" />}
                </span>
                <p className="eyebrow mt-6 !text-or-300">{s.day.toUpperCase()}</p>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-night-mute">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

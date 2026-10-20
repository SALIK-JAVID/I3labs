"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, Bell, Check, LayoutGrid, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE } from "@/lib/utils";

const features = [
  "Real-time student progress tracking",
  "Lesson plans & lab scheduling",
  "Skill analytics & digital portfolios",
  "Certificates and competition entries",
];

const bars = [42, 58, 51, 72, 66, 84, 78, 92];
const classes = [
  { name: "Grade 8 · Robotics", pct: 86 },
  { name: "Grade 10 · AI & ML", pct: 72 },
  { name: "Grade 6 · Coding", pct: 94 },
];

/** "Intelligence at your fingertips" — an animated LMS dashboard built in markup, not a screenshot. */
export function Platform() {
  return (
    <section className="section bg-sheet/40">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Control. Connect. Optimise."
            title={"Intelligence at\nyour fingertips."}
            lead="The i3 Labs LMS gives teachers and administrators live visibility into learning, lab utilisation and outcomes — from any device."
          />
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[15px] text-ink-2">
                  <span className="grid size-5 place-items-center rounded-full bg-or/15 text-or"><Check className="size-3" strokeWidth={3} /></span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={50} className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-line bg-sheet shadow-[var(--shadow-win)]">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-line-2" />
                <span className="size-2.5 rounded-full bg-line-2" />
                <span className="size-2.5 rounded-full bg-or" />
              </div>
              <span className="font-mono text-[10.5px] text-ink-3">lms.i3labs.in / dashboard</span>
              <Bell className="size-4 text-ink-3" />
            </div>
            <div className="grid sm:grid-cols-[56px_1fr]">
              <div className="hidden flex-col items-center gap-5 border-r border-line py-6 text-ink-4 sm:flex">
                <LayoutGrid className="size-4 text-or" />
                <Users className="size-4" />
                <BarChart3 className="size-4" />
                <Activity className="size-4" />
              </div>
              <div className="p-5 sm:p-7">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["Active students", "1,284"],
                    ["Lab utilisation", "87%"],
                    ["Projects shipped", "312"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-line bg-paper p-3 sm:p-4">
                      <p className="label !text-[9px]">{k}</p>
                      <p className="mt-1.5 font-display text-[clamp(1.1rem,2.4vw,1.6rem)] font-semibold">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-[1.4fr_1fr]">
                  <div className="rounded-xl border border-line p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] font-semibold">Skill growth</p>
                      <span className="font-mono text-[10px] text-or">+24% term</span>
                    </div>
                    <div className="mt-4 flex h-32 items-end gap-2">
                      {bars.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: EASE.out, delay: 0.3 + i * 0.07 }}
                          className={i === bars.length - 1 ? "flex-1 rounded-t-md bg-or" : "flex-1 rounded-t-md bg-ink/10"}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 rounded-xl border border-line p-4">
                    <p className="text-[13px] font-semibold">Course completion</p>
                    {classes.map((c, i) => (
                      <div key={c.name}>
                        <div className="flex justify-between text-[11.5px] text-ink-2">
                          <span>{c.name}</span>
                          <span className="font-mono">{c.pct}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-fill">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${c.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: EASE.out, delay: 0.5 + i * 0.15 }}
                            className="h-full rounded-full bg-ink"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

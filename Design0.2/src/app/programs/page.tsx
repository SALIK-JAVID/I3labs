import type { Metadata } from "next";
import Image from "next/image";
import { tracks } from "@/lib/data";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABand } from "@/components/sections/shared/CTABand";
import { ProgramsGrid } from "@/components/sections/home/ProgramsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Programs",
  description: "Robotics, AI, Coding, IoT, Applied Science and Competitions — hands-on STEM programs for Grades 1–12.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Curriculum"
        title={"Learn by\nbuilding."}
        lead="Six hands-on programs across three connected stages — every unit ends with something students design, build and present."
        crumbs={[{ label: "Programs" }]}
      >
        <Reveal delay={0.4}>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {[["6", "Programs"], ["12", "Grades"], ["3", "Stages"]].map(([v, k]) => (
              <div key={k} className="bg-sheet p-5 text-center">
                <p className="font-display text-4xl font-semibold text-or">{v}</p>
                <p className="label mt-1">{k}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </PageHero>

      <ProgramsGrid showHeading={false} />

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Curriculum stages" title={"A pathway that\ngrows with them."} className="mb-14" />
          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.12}>
            {tracks.map((t, i) => (
              <StaggerItem key={t.label} className="card overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image src={t.image} alt={t.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <p className="eyebrow">0{i + 1} · {t.label.toUpperCase()}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{t.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.topics.map((topic) => (
                      <span key={topic} className="rounded-full border border-line bg-paper px-3 py-1 text-[12px] text-ink-2">{topic}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand eyebrow="Not sure where to start?" title={"Let's map the right\nprogram for your school."} />
    </>
  );
}

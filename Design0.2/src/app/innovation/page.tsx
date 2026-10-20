import type { Metadata } from "next";
import { Award, Briefcase, Globe2, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABand } from "@/components/sections/shared/CTABand";
import { StackCards } from "@/components/sections/shared/StackCards";
import { Scene } from "@/components/three/Scene";
import { Counter } from "@/components/ui/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "3IPP Innovation Framework",
  description: "Ideation, Innovation, Incubation, Prototyping and Patenting — i3 Labs' framework that turns student ideas into patents.",
};

const outcomes = [
  { icon: Lightbulb, title: "Real problem solving", desc: "Students tackle challenges from their own communities." },
  { icon: Briefcase, title: "Startup exposure", desc: "Pitch days, mentors and incubator connections." },
  { icon: Award, title: "Recognised IP", desc: "Guided patent and trademark filings, with students named as inventors." },
  { icon: Globe2, title: "Global stages", desc: "Entries to national and international innovation fairs." },
];

export default function InnovationPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="The 3IPP Framework"
        title={"Ideas deserve\nto exist."}
        lead="Ideation → Innovation → Incubation → Prototyping → Patenting. A mentored journey that takes student ideas from the whiteboard to the patent office."
        crumbs={[{ label: "3IPP" }]}
      >
        <Scene className="-my-10 h-[360px] sm:h-[440px]" />
      </PageHero>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Five stages" title={"One structured\njourney."} className="mb-6" />
          <StackCards />
        </div>
      </section>

      <section className="section bg-sheet/40">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Outcomes" title={"What 3IPP\nunlocks."} lead="Beyond grades: confidence, ownership and a portfolio of real-world work." />
            <Reveal delay={0.2} className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <p className="font-display text-5xl font-semibold text-or"><Counter value={35} suffix="+" /></p>
                <p className="label mt-2">Hackathons & fairs</p>
              </div>
              <div>
                <p className="font-display text-5xl font-semibold text-or"><Counter value={5} /></p>
                <p className="label mt-2">Mentored stages</p>
              </div>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {outcomes.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title} className="card group p-7 transition-colors hover:border-or/50">
                <span className="grid size-12 place-items-center rounded-xl border border-line text-or transition-all duration-500 group-hover:bg-or group-hover:text-white">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand eyebrow="Bring 3IPP to your school" title={"Every student\nis an inventor."} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getProgram, programs } from "@/lib/data";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABand } from "@/components/sections/shared/CTABand";
import { ProgramCard } from "@/components/sections/shared/ProgramCard";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return { title: program.title, description: program.summary };
}

export default async function ProgramPage({ params }: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const Icon = program.icon;
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3);
  const meta = [
    ["Grades", program.grades],
    ["Duration", program.duration],
    ["Level", program.level],
  ];

  return (
    <>
      <PageHero
        eyebrow={`${program.level} program`}
        title={program.title}
        lead={program.summary}
        crumbs={[{ label: "Programs", href: "/programs" }, { label: program.title }]}
      >
        <Reveal delay={0.35}>
          <div className="card p-6">
            <span className="grid size-12 place-items-center rounded-xl bg-or text-white">
              <Icon className="size-6" strokeWidth={1.6} />
            </span>
            <dl className="mt-6 divide-y divide-line">
              {meta.map(([k, v]) => (
                <div key={k} className="flex justify-between py-3 text-[15px]">
                  <dt className="label self-center">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <Button href="/contact" magnetic={false} className="w-full justify-between">Enquire about this program</Button>
            </div>
          </div>
        </Reveal>
      </PageHero>

      <section className="section pt-0">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <ImageReveal src={program.image} alt={program.title} className="aspect-[4/3]" priority />
          <div>
            <SectionHeading eyebrow="Learning outcomes" title={"What students\nwalk away with."} />
            <Stagger className="mt-8 space-y-4">
              {program.outcomes.map((o) => (
                <StaggerItem key={o} className="flex items-start gap-3 border-b border-line pb-4 text-[16px]">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-or/15 text-or">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {o}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section bg-night text-night-ink">
        <div className="container-site">
          <SectionHeading dark eyebrow="Modules" title={"How the year\nunfolds."} className="mb-14" />
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {program.modules.map((m, i) => (
              <StaggerItem key={m.title} className="group bg-night p-7 transition-colors hover:bg-night-2">
                <p className="eyebrow !text-or-300">MODULE 0{i + 1}</p>
                <h3 className="mt-6 text-xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-night-mute">{m.detail}</p>
                <span className="mt-8 block h-px w-10 bg-or transition-all duration-500 group-hover:w-full" />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center gap-3">
            <span className="label mr-2 !text-night-mute">Tools & kits</span>
            {program.tools.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-4 py-1.5 text-[13px]">{t}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Keep exploring" title="Other programs" className="mb-12" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProgramCard key={p.slug} program={p} index={programs.indexOf(p)} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

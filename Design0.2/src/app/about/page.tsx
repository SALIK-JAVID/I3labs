import type { Metadata } from "next";
import { clients, leadership, stats, team, values } from "@/lib/data";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABand } from "@/components/sections/shared/CTABand";
import { Counter } from "@/components/ui/Counter";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "About",
  description: "16+ years building STEM ecosystems for 150+ institutions. Meet the team behind i3 Labs.",
};

const initials = (name: string) =>
  name
    .replace(/^(Dr|Er)\.\s*/, "")
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Person({ name, role, large = false }: { name: string; role: string; large?: boolean }) {
  return (
    <TiltCard max={5} className="h-full rounded-2xl">
      <div className="card flex h-full items-center gap-4 p-5">
        <span
          className={`grid shrink-0 place-items-center rounded-full bg-night font-display font-semibold text-night-ink ring-4 ring-or/15 ${large ? "size-16 text-lg" : "size-12 text-sm"}`}
        >
          {initials(name)}
        </span>
        <div>
          <p className={`font-display font-semibold ${large ? "text-xl" : "text-[16px]"}`}>{name}</p>
          <p className="mt-0.5 text-[14px] text-ink-3">{role}</p>
        </div>
      </div>
    </TiltCard>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About i3 Labs"
        title={"Innovations\nunleashed."}
        lead="Est. 2010: an end-to-end STEM enterprise nurturing the innovators of tomorrow."
        crumbs={[{ label: "About" }]}
      />

      <section className="pb-24">
        <div className="container-site">
          <ImageReveal src="/images/robot-gripper.jpg" alt="Students collaborating in an i3 Labs STEM lab" className="aspect-[21/9]" sizes="100vw" priority />
          <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-sheet p-6 sm:p-8">
                <p className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-none">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="label mt-3">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-night text-night-ink">
        <div className="container-site">
          <SectionHeading dark eyebrow="What drives us" title={"Purpose, built\ninto every lab."} className="mb-14" />
          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.12}>
            {values.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <span className="grid size-12 place-items-center rounded-full border border-or/40 text-or">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-night-mute">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Our people" title={"Engineers, educators\nand mentors."} className="mb-12" />
          <p className="label mb-5">Core leadership</p>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {leadership.map((p) => (
              <StaggerItem key={p.name} className="h-full"><Person {...p} large /></StaggerItem>
            ))}
          </Stagger>
          <p className="label mb-5 mt-14">Engineering, operations & training</p>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {team.map((p) => (
              <StaggerItem key={p.name} className="h-full"><Person {...p} /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-sheet/40 pt-16">
        <div className="container-site">
          <Reveal>
            <p className="label mb-8 text-center">Partner institutions</p>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4" stagger={0.04}>
            {clients.map((c) => (
              <StaggerItem key={c} className="grid min-h-24 place-items-center bg-sheet px-4 text-center font-display text-[14px] font-semibold uppercase tracking-[0.08em] text-ink-3 transition-colors hover:bg-paper hover:text-ink">
                {c}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand />
    </>
  );
}

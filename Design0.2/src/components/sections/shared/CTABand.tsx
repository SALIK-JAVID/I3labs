import { Globe2, HeartHandshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";

const points = [
  { icon: Globe2, title: "Pan-India Support", desc: "Technical help and trainers wherever your campus is." },
  { icon: ShieldCheck, title: "Proven Outcomes", desc: "150+ institutions and 50K+ students mentored." },
  { icon: HeartHandshake, title: "Built for Impact", desc: "Programs designed around real-world problems." },
];

export function CTABand({
  eyebrow = "Ready to transform your classrooms?",
  title = "Let's build the future,\ntogether.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="section pt-0">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-night px-6 py-14 text-night-ink sm:px-12 lg:px-16 lg:py-20">
            <div className="hairline-grid-dark pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 size-[480px] rounded-full bg-or/25 blur-[120px]" />
            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="label mb-5 !text-night-mute">{eyebrow}</p>
                <SplitText text={title} className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.02em]" />
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="/contact">Request a Demo</Button>
                  <Button href="/labs" variant="ghost-light">See lab packages</Button>
                </div>
              </div>
              <Stagger className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {points.map(({ icon: Icon, title, desc }) => (
                  <StaggerItem key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:flex lg:items-center lg:gap-5">
                    <span className="mb-4 grid size-11 shrink-0 place-items-center rounded-full border border-or/40 text-or lg:mb-0">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <div>
                    <p className="font-display text-[16px] font-semibold">{title}</p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-night-mute">{desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

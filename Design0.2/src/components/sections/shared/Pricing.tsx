import { Check } from "lucide-react";
import { tiers } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="packages" className="section scroll-mt-24">
      <div className="container-site">
        <SectionHeading
          align="center"
          eyebrow="Engagement models"
          title={"Choose the right\npartnership level."}
          lead="Every institution is different. Our models flex to your size, goals, and budget."
          className="mb-16"
        />
        <Stagger className="grid items-stretch gap-6 lg:grid-cols-3" stagger={0.12}>
          {tiers.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <TiltCard max={4} className="h-full rounded-3xl">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-3xl border p-8",
                    t.highlight ? "border-night bg-night text-night-ink shadow-[var(--shadow-win)]" : "border-line bg-sheet",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{t.name}</h3>
                    <span className={cn("rounded-full px-3 py-1 tag", t.highlight ? "bg-or text-white" : "bg-fill text-ink-2")}>
                      {t.tag}
                    </span>
                  </div>
                  <p className={cn("mt-3 text-[15px]", t.highlight ? "text-night-mute" : "text-ink-2")}>{t.desc}</p>
                  <ul className={cn("mt-8 flex-1 space-y-3 border-t pt-8", t.highlight ? "border-white/10" : "border-line")}>
                    {t.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[15px]">
                        <Check className="mt-0.5 size-4 shrink-0 text-or" strokeWidth={2.5} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button href="/contact" variant={t.highlight ? "primary" : "outline"} magnetic={false} className="w-full justify-between">
                      Get a proposal
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

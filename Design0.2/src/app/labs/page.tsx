import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABand } from "@/components/sections/shared/CTABand";
import { Pricing } from "@/components/sections/shared/Pricing";
import { SetupSteps } from "@/components/sections/shared/SetupSteps";
import { FAQ } from "@/components/sections/home/FAQ";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "STEM Labs",
  description: "Turnkey STEM, Robotics and AI lab setup, innovation programs and lab augmentation for schools.",
};

export default function LabsPage() {
  return (
    <>
      <PageHero
        eyebrow="STEM Lab Solutions"
        title={"Labs that\nwork as hard\nas students."}
        lead="Design, equipment, curriculum, training and support — one partner, one timeline, live in about 30 days."
        crumbs={[{ label: "STEM Labs" }]}
      >
        <Reveal delay={0.4} className="flex flex-wrap gap-3 lg:justify-end">
          <Button href="/contact">Plan my lab</Button>
          <Button href="#packages" variant="outline">View packages</Button>
        </Reveal>
      </PageHero>

      <section className="section pt-4">
        <div className="container-site space-y-24 lg:space-y-32">
          {services.map((s, i) => (
            <div key={s.num} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <ImageReveal src={s.image} alt={s.title} className={cn("aspect-[5/4]", i % 2 === 1 && "lg:order-2")} />
              <div>
                <Reveal y={12}>
                  <p className="eyebrow">SERVICE {s.num}</p>
                </Reveal>
                <SplitText text={s.title} className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.08]" />
                <Reveal delay={0.1}>
                  <p className="mt-5 max-w-[56ch] text-[18px] leading-relaxed text-ink-2">{s.desc}</p>
                </Reveal>
                <Stagger className="mt-8 grid gap-3 sm:grid-cols-2" delay={0.15}>
                  {s.items.map((it) => (
                    <StaggerItem key={it} className="flex items-start gap-3 rounded-xl border border-line bg-sheet p-4 text-[15px]">
                      <Check className="mt-0.5 size-4 shrink-0 text-or" strokeWidth={2.5} />
                      {it}
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SetupSteps />
      <Pricing />
      <FAQ />
      <CTABand />
    </>
  );
}

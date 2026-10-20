import { programs } from "@/lib/data";
import { ArrowLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/sections/shared/ProgramCard";

export function ProgramsGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section bg-sheet/40">
      <div className="container-site">
        {showHeading && (
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Lab Activities"
              title={"Learning that happens\nin every dimension."}
              lead="Six specialized tracks spanning the full spectrum of modern STEM."
            />
            <ArrowLink href="/programs">All programs</ArrowLink>
          </div>
        )}
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {programs.map((p, i) => (
            <StaggerItem key={p.slug} className="h-full">
              <ProgramCard program={p} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

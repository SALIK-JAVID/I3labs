import { faqs } from "@/lib/data";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="FAQ" title={"Questions,\nanswered."} lead="Everything schools usually ask before launching a lab with us." />
          <Reveal delay={0.2} className="mt-8">
            <Button href="/contact" variant="dark">Ask us anything</Button>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

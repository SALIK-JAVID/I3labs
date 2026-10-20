import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import { cn } from "@/lib/utils";
import { BrandText } from "@/components/ui/BrandText";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  children,
  dark = false,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28",
        dark ? "bg-night text-night-ink" : "bg-paper",
        className,
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0 mask-fade-b", dark ? "hairline-grid-dark" : "hairline-grid")} />
      <div className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-or/10 blur-[120px]" />
      <div className="container-site relative grid items-end gap-12 lg:grid-cols-12">
        <div className={cn(children ? "lg:col-span-7" : "lg:col-span-10")}>
          <Reveal y={10}>
            <nav aria-label="Breadcrumb" className={cn("mb-8 flex items-center gap-1.5 text-[13px]", dark ? "text-night-mute" : "text-ink-3")}>
              <Link href="/" className="hover:text-or">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" />
                  {c.href ? <Link href={c.href} className="hover:text-or">{c.label}</Link> : <span className={dark ? "text-night-ink" : "text-ink"}>{c.label}</span>}
                </span>
              ))}
            </nav>
            <p className={cn("eyebrow mb-6 inline-flex items-center gap-2", dark && "!text-or-300")}>
              <span className="size-1.5 animate-pulse-dot rounded-full bg-or" />
              <BrandText>{eyebrow}</BrandText>
            </p>
          </Reveal>
          <SplitText
            as="h1"
            immediate
            delay={0.1}
            text={title}
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]"
          />
          {lead && (
            <Reveal delay={0.35}>
              <p className={cn("mt-7 max-w-[56ch] text-[18px] leading-relaxed", dark ? "text-night-mute" : "text-ink-2")}>{lead}</p>
            </Reveal>
          )}
        </div>
        {children && <div className="lg:col-span-5">{children}</div>}
      </div>
    </section>
  );
}

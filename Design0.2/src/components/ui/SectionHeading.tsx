import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { BrandText } from "./BrandText";

/** Eyebrow + split-reveal headline + optional lead paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal y={12}>
          <p className={cn("eyebrow mb-5 inline-flex items-center gap-2", dark && "!text-or-300", align === "center" && "justify-center")}>
            <span className="size-1.5 rounded-full bg-or" />
            <BrandText>{eyebrow}</BrandText>
          </p>
        </Reveal>
      )}
      <SplitText
        text={title}
        className={cn(
          "text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.02em]",
          dark ? "text-night-ink" : "text-ink",
        )}
      />
      {lead && (
        <Reveal delay={0.15}>
          <p className={cn("mt-5 max-w-[60ch] text-[18px] leading-relaxed", align === "center" && "mx-auto", dark ? "text-night-mute" : "text-ink-2")}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

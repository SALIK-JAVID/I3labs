import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";

/** i3 Labs lockup: the official ring mark beside the "i3 LABS / Innovations Unleashed" wordmark. */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark className={cn("size-10 shrink-0", light ? "text-night-ink" : "text-ink")} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[19px] font-bold tracking-[0.04em]", light ? "text-night-ink" : "text-ink")}>
          i3 LABS
        </span>
        <span className={cn("mt-1 text-[8.5px] font-semibold uppercase tracking-[0.26em]", light ? "text-night-mute" : "text-ink-3")}>
          Innovations Unleashed
        </span>
      </span>
    </span>
  );
}

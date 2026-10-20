import { cn } from "@/lib/utils";

/** Infinite CSS marquee (GPU-friendly; pauses on hover). Items are duplicated for a seamless loop. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("group relative overflow-hidden mask-fade-x", className)}>
      <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap font-display text-[18px] font-semibold uppercase tracking-[0.12em] text-ink-4 transition-colors hover:text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

type Variant = "primary" | "dark" | "outline" | "ghost-light";

const styles: Record<Variant, string> = {
  primary: "bg-or text-white hover:bg-[#e46a14] shadow-[var(--shadow-glow)]",
  dark: "bg-ink text-white hover:bg-night-2",
  outline: "border border-line-2 bg-sheet/60 text-ink hover:border-ink backdrop-blur",
  "ghost-light": "border border-white/15 bg-white/5 text-night-ink hover:bg-white/10",
};

const iconStyles: Record<Variant, string> = {
  primary: "bg-white/20 text-white",
  dark: "bg-or text-white",
  outline: "bg-ink text-white",
  "ghost-light": "bg-or text-white",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
  icon?: boolean;
};

/** Pill CTA with the circular arrow badge from the design references. */
export function Button({ href, children, variant = "primary", className, magnetic = true, icon = true }: ButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = cn(
    "group relative inline-flex h-12 items-center gap-3 rounded-full pl-6 text-[15px] font-medium transition-colors duration-300",
    icon ? "pr-1.5" : "pr-6",
    styles[variant],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          className={cn(
            "grid size-9 place-items-center overflow-hidden rounded-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45",
            iconStyles[variant],
          )}
        >
          <ArrowUpRight className="size-4" strokeWidth={2.2} />
        </span>
      )}
    </>
  );

  const el = external ? (
    <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );

  return magnetic ? <Magnetic>{el}</Magnetic> : el;
}

/** Text link with animated underline + arrow, e.g. "Learn more ↗". */
export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[14px] font-medium text-or-ink transition-colors hover:text-or",
        className,
      )}
    >
      <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

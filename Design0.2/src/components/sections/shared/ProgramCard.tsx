import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/lib/data";
import { TiltCard } from "@/components/ui/TiltCard";

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  const Icon = program.icon;
  return (
    <TiltCard className="h-full rounded-2xl">
      <Link
        href={`/programs/${program.slug}`}
        className="card flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[var(--shadow-win)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-fill">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent opacity-70" />
          <span className="absolute left-4 top-4 rounded-full bg-sheet/90 px-3 py-1 tag text-ink backdrop-blur">
            {program.level}
          </span>
          <span className="absolute right-4 top-4 num text-white/80">0{index + 1}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-line bg-or-50 text-or">
              <Icon className="size-5" strokeWidth={1.7} />
            </span>
            <span className="label">{program.grades}</span>
          </div>
          <h3 className="text-[20px] font-semibold leading-tight">{program.title}</h3>
          <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-2">{program.short}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-or-ink">
            Explore program
            <span className="grid size-7 place-items-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-45 group-hover:border-or group-hover:bg-or group-hover:text-white">
              <ArrowUpRight className="size-3.5" />
            </span>
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}

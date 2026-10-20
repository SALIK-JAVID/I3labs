"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { tracks } from "@/lib/data";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function TrackCard({ track, i }: { track: (typeof tracks)[number]; i: number }) {
  return (
    <article className="group relative flex h-full w-full shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-night-2 md:w-[min(560px,70vw)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={track.image} alt={track.title} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-night-2/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-night/60 px-3 py-1 tag text-night-ink backdrop-blur">
          {track.tools.join(" · ")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow !text-or-300">0{i + 1} · {track.label.toUpperCase()}</p>
        <h3 className="mt-3 text-2xl font-semibold text-night-ink">{track.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-night-mute">{track.desc}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {track.topics.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-night-ink/80">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Intro({ className }: { className?: string }) {
  return (
    <div className={cn("flex shrink-0 flex-col justify-center md:w-[420px]", className)}>
      <p className="eyebrow mb-5 inline-flex items-center gap-2 !text-or-300"><span className="size-1.5 rounded-full bg-or" />Curriculum</p>
      <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] text-night-ink">
        A structured path from
        <br /> curiosity to expertise.
      </h2>
      <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-night-mute">
        Three connected stages, aligned with CBSE, ICSE, NEP 2020, IB, and Cambridge frameworks.
      </p>
      <div className="mt-8">
        <Button href="/programs" variant="ghost-light">See the full curriculum</Button>
      </div>
    </div>
  );
}

/** Pinned section whose cards scroll horizontally as the user scrolls vertically (desktop). */
export function CurriculumScroll() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!isDesktop || !track.current) return;
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -distance]), { stiffness: 140, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!isDesktop) {
    return (
      <section className="section bg-night">
        <div className="container-site space-y-10">
          <Intro />
          {tracks.map((t, i) => (
            <Reveal key={t.label}><TrackCard track={t} i={i} /></Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={container} className="relative bg-night" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="hairline-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <motion.div ref={track} style={{ x }} className="relative flex items-stretch gap-8 pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] pr-16">
          <Intro />
          {tracks.map((t, i) => (
            <TrackCard key={t.label} track={t} i={i} />
          ))}
        </motion.div>
        <div className="container-site relative mt-12">
          <div className="h-px w-full bg-white/10">
            <motion.div style={{ width: bar }} className="h-px bg-or" />
          </div>
        </div>
      </div>
    </section>
  );
}

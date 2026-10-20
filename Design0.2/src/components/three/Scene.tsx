"use client";

import dynamic from "next/dynamic";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/* three.js is client-only and heavy: code-split it and skip SSR. */
const AtomScene = dynamic(() => import("./AtomScene"), { ssr: false, loading: () => <SceneFallback dark /> });

function SceneFallback({ dark = false }: { dark?: boolean }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className={cn("size-40 animate-pulse rounded-full blur-2xl", dark ? "bg-or/20" : "bg-or/10")} />
    </div>
  );
}

/**
 * Mounts a 3D scene and pauses its render loop whenever it is scrolled off-screen,
 * so the GPU idles while the user reads the rest of the page.
 */
export function Scene({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <div ref={ref} className={cn("relative", className)} aria-hidden>
      <AtomScene active={inView} reduced={reduced} />
    </div>
  );
}

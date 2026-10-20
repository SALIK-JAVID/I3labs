"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/lib/utils";

/** Dark promo strip above the navbar; collapses once the user starts scrolling. */
export function AnnouncementBar({ collapsed }: { collapsed: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: collapsed ? 0 : 40 }}
      transition={{ duration: 0.45, ease: EASE.out }}
      className="overflow-hidden bg-night text-night-ink"
    >
      <div className="container-site flex h-10 items-center justify-center gap-3 text-[13px] sm:text-[14px]">
        <p className="truncate">
          <span className="sm:hidden">Electronics store now open.</span>
          <span className="hidden sm:inline">
            New: i3 Labs now supplies Arduino boards, sensors, motors & robotics kits for students and schools.
          </span>
        </p>
        <Link
          href="/shop"
          className="group inline-flex shrink-0 items-center gap-1 font-medium text-or transition-colors hover:text-or-300"
        >
          <span className="sm:hidden">Shop now</span>
          <span className="hidden sm:inline">Shop components</span>
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";

/** Re-mounts on every navigation, giving each page a soft enter transition. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE.out }}>
      {children}
    </motion.div>
  );
}

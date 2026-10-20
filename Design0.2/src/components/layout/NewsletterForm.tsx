"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "done" : "error");
  };

  return (
    <form onSubmit={submit} noValidate className="relative">
      <AnimatePresence mode="wait">
        {state === "done" ? (
          <motion.p
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex h-12 items-center gap-2 rounded-full border border-or/40 bg-or/10 px-5 text-[14px] text-or-300"
          >
            <Check className="size-4" /> You&apos;re subscribed. Welcome aboard!
          </motion.p>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, y: -8 }} className="flex h-12 items-center rounded-full border border-white/15 bg-white/5 pl-5 pr-1.5 focus-within:border-or">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input
              id="newsletter"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (state === "error") setState("idle");
              }}
              placeholder="you@school.edu"
              className="min-w-0 flex-1 bg-transparent text-[14px] text-night-ink placeholder:text-night-mute/60 focus:outline-none"
            />
            <button type="submit" aria-label="Subscribe" className="grid size-9 place-items-center rounded-full bg-or text-white transition-transform hover:scale-105">
              <ArrowRight className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {state === "error" && <p className="mt-2 pl-5 text-[13px] text-or-300">Please enter a valid email address.</p>}
    </form>
  );
}

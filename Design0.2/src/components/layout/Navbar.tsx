"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { EASE, cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { AnnouncementBar } from "./AnnouncementBar";

const DARK_HERO_ROUTES = ["/innovation"];
/* Pages with their own sticky toolbar keep the navbar pinned so the two never overlap. */
const PINNED_NAV_ROUTES = ["/shop"];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 160 && y > prev && !open && !PINNED_NAV_ROUTES.includes(pathname));
  });

  // Close the mobile menu whenever the route changes (state adjusted during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Routes whose hero is dark: render the bar in its light variant until the user scrolls.
  const onDark = DARK_HERO_ROUTES.includes(pathname) && !scrolled && !open;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE.out }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <AnnouncementBar collapsed={scrolled} />
        <div
          className={cn(
            "transition-[background-color,border-color,backdrop-filter] duration-500",
            scrolled || open ? "border-b border-line bg-paper/80 backdrop-blur-xl" : "border-b border-transparent",
          )}
        >
          <nav className="container-site flex h-[72px] items-center justify-between lg:h-20" aria-label="Primary">
            <Link href="/" aria-label={`${site.name} home`} className="relative z-10">
              <Logo light={onDark} />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
              {nav.map((item) => (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    className={cn(
                      "relative z-10 block px-4 py-2 text-[14px] font-medium transition-colors",
                      isActive(item.href)
                        ? onDark ? "text-night-ink" : "text-ink"
                        : onDark ? "text-night-mute hover:text-night-ink" : "text-ink-2 hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                  {hovered === item.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className={cn("absolute inset-0 rounded-full", onDark ? "bg-white/10" : "bg-ink/[0.05]")}
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-or"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  "group hidden h-11 items-center gap-3 rounded-full pl-5 pr-1.5 text-[14px] font-medium transition-colors sm:inline-flex",
                  onDark ? "bg-night-ink text-ink hover:bg-white" : "bg-ink text-white hover:bg-night-2",
                )}
              >
                Contact Us
                <span className="grid size-8 place-items-center rounded-full bg-or transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className={cn("relative z-10 grid size-11 place-items-center rounded-full border lg:hidden", onDark ? "border-white/15 bg-white/5" : "border-line-2 bg-sheet")}
              >
                <span className="relative block h-3 w-5">
                  <motion.span
                    animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    className={cn("absolute left-0 top-0 h-[1.5px] w-5", onDark ? "bg-night-ink" : "bg-ink")}
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    className={cn("absolute bottom-0 left-0 h-[1.5px] w-5", onDark ? "bg-night-ink" : "bg-ink")}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE.out }}
            className="fixed inset-0 z-40 flex flex-col bg-paper pt-32 lg:hidden"
          >
            <div className="container-site flex flex-1 flex-col justify-between pb-10">
              <ul className="space-y-1">
                {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: EASE.out }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-line py-4 font-display text-[34px] font-semibold"
                    >
                      <span className={cn(isActive(item.href) && "text-or")}>{item.label}</span>
                      <span className="font-mono text-xs text-ink-4">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-2 text-sm text-ink-2"
              >
                <a href={`mailto:${site.email}`} className="block">{site.email}</a>
                <a href={`tel:${site.phone}`} className="block">{site.phone}</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

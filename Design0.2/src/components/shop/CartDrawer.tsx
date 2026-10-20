"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingBag, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { chatMessage, formatPrice, orderMessage, whatsappLink } from "@/lib/shop";
import { EASE } from "@/lib/utils";
import { ProductImage } from "./ProductImage";
import { useShop } from "./ShopProvider";
import { Stepper } from "./Stepper";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BrandText } from "@/components/ui/BrandText";

/** Slide-in cart. Ordering happens entirely on WhatsApp — no backend. */
export function CartDrawer() {
  const { cartOpen, closeCart, lines, units, clear } = useShop();
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  // Lock page scroll, close on Escape, and move focus in/out of the dialog.
  useEffect(() => {
    if (!cartOpen) return;
    lastFocus.current = document.activeElement as HTMLElement;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus?.();
    };
  }, [cartOpen, closeCart]);

  // Close when the route changes (e.g. "Browse the store"), not on cart updates.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      closeCart();
    }
  }, [pathname, closeCart]);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            key="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeCart}
            className="fixed inset-0 z-[90] bg-night/45 backdrop-blur-[3px]"
            aria-hidden
          />
          <motion.aside
            key="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            initial={{ x: "104%" }}
            animate={{ x: 0 }}
            exit={{ x: "104%" }}
            transition={{ type: "spring", stiffness: 260, damping: 32, mass: 0.9 }}
            className="fixed inset-y-0 right-0 z-[95] flex w-full flex-col bg-paper shadow-[var(--shadow-win)] sm:inset-y-3 sm:right-3 sm:w-[440px] sm:overflow-hidden sm:rounded-3xl sm:border sm:border-line"
          >
            <div className="relative flex items-start justify-between gap-4 border-b border-line px-5 py-5 sm:px-6">
              <div className="hairline-grid pointer-events-none absolute inset-0 opacity-60 mask-fade-b" />
              <div className="relative">
                <p className="eyebrow inline-flex items-center gap-2">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-or" />
                  <BrandText>i3 Labs Store</BrandText>
                </p>
                <h2 id="cart-title" className="mt-2 text-[26px] font-semibold leading-tight">Your cart</h2>
                <p className="mt-1 text-[14px] text-ink-3">
                  {units ? `${lines.length} product${lines.length === 1 ? "" : "s"} · ${units} unit${units === 1 ? "" : "s"}` : "Nothing added yet."}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="relative grid size-10 shrink-0 place-items-center rounded-full border border-line-2 bg-sheet transition-transform duration-300 hover:rotate-90"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6">
              {lines.length === 0 ? (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-or-50 text-or">
                    <ShoppingBag className="size-7" strokeWidth={1.6} />
                  </span>
                  <p className="mt-5 text-lg font-semibold">Your cart is empty</p>
                  <p className="mt-1 max-w-xs text-[14px] text-ink-3">Browse boards, sensors, motors and robotics kits, then order in one WhatsApp message.</p>
                  {pathname !== "/shop" && (
                    <Link href="/shop" className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-[14px] font-medium text-white hover:bg-night-2">
                      Browse the store <ArrowRight className="size-4" />
                    </Link>
                  )}
                </motion.div>
              ) : (
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {lines.map(({ product }) => (
                      <motion.li
                        key={product.id}
                        layout
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 24, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4, ease: EASE.out }}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-sheet p-3"
                      >
                        <ProductImage product={product} sizes="72px" zoom={false} className="size-[72px] shrink-0 rounded-xl" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[15px] font-semibold">{product.name}</p>
                          <p className="text-[13px] text-ink-3">{product.category} · {formatPrice(product.price)}</p>
                          <div className="mt-2">
                            <Stepper product={product} />
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            <div className="border-t border-line bg-sheet/90 px-5 py-4 backdrop-blur sm:px-6">
              {lines.length > 0 && (
                <div className="mb-3 flex items-center justify-between text-[13px]">
                  {pathname !== "/shop" ? (
                    <Link href="/shop" className="font-medium text-or-ink underline-offset-4 hover:underline">Continue shopping</Link>
                  ) : (
                    <button type="button" onClick={closeCart} className="font-medium text-or-ink underline-offset-4 hover:underline">Continue shopping</button>
                  )}
                  <button type="button" onClick={clear} className="text-ink-3 underline-offset-4 hover:text-or-ink hover:underline">Clear cart</button>
                </div>
              )}
              <a
                href={whatsappLink(lines.length ? orderMessage(lines) : chatMessage)}
                target="_blank"
                rel="noreferrer"
                className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-or text-[15px] font-semibold text-white shadow-[var(--shadow-glow)] transition-colors hover:bg-[#e46a14]"
              >
                <WhatsAppIcon className="size-5" />
                {lines.length ? "Order on WhatsApp" : "Ask us on WhatsApp"}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="mt-2 text-center text-[12px] text-ink-4">We confirm stock & price on WhatsApp · Bulk & school orders welcome</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

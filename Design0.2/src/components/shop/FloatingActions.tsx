"use client";

import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { chatMessage, whatsappLink } from "@/lib/shop";
import { EASE } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import { useShop } from "./ShopProvider";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Shop (bottom-left, ink) and WhatsApp chat (bottom-right, brand orange).
 * Shop opens the store; on the store page itself it opens the cart.
 */
export function FloatingActions() {
  const { cartOpen, openCart, units } = useShop();
  const pathname = usePathname();
  const router = useRouter();
  const onShop = pathname === "/shop";

  return (
    <AnimatePresence>
      {!cartOpen && (
        <>
          <motion.div
            key="shop-fab"
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE.out, delay: 1.2 } }}
            exit={{ opacity: 0, y: 24, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-5 left-5 z-[70] sm:bottom-6 sm:left-6"
          >
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={() => (onShop ? openCart() : router.push("/shop"))}
                aria-label={onShop ? `Open cart${units ? `, ${units} items` : ""}` : `Open shop${units ? `, ${units} items in your cart` : ""}`}
                className="group relative flex h-14 items-center gap-2.5 rounded-full bg-ink pl-2 pr-5 text-white shadow-[0_14px_34px_-12px_rgba(26,22,19,0.6)] transition-colors hover:bg-night-2"
              >
                <span className="grid size-10 place-items-center rounded-full bg-or transition-transform duration-500 group-hover:-rotate-12">
                  <ShoppingBag className="size-5" strokeWidth={1.9} />
                </span>
                <span className="text-[15px] font-medium">{onShop ? "Cart" : "Shop"}</span>
                <AnimatePresence>
                  {units > 0 && (
                    <motion.span
                      key={units}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="absolute -right-1 -top-1 grid min-w-6 place-items-center rounded-full border-2 border-paper bg-or px-1.5 text-[11px] font-bold leading-5 text-white"
                    >
                      {units}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>
          </motion.div>

          <motion.div
            key="wa-fab"
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE.out, delay: 1.35 } }}
            exit={{ opacity: 0, y: 24, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6"
          >
            <Magnetic strength={0.25}>
              <a
                href={whatsappLink(chatMessage)}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with i3 Labs on WhatsApp"
                className="group relative flex h-14 items-center gap-2.5 rounded-full bg-or pl-2 pr-2 text-white shadow-[var(--shadow-glow)] transition-colors hover:bg-[#e46a14] sm:pr-5"
              >
                <span className="pointer-events-none absolute inset-0 animate-wa-pulse rounded-full bg-or" />
                <span className="relative grid size-10 place-items-center rounded-full bg-white/20 transition-transform duration-500 group-hover:rotate-12">
                  <WhatsAppIcon className="size-6" />
                </span>
                <span className="relative hidden text-[15px] font-semibold sm:inline">Chat now</span>
              </a>
            </Magnetic>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

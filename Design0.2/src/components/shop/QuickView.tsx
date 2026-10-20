"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { formatPrice, whatsappLink, type Product } from "@/lib/shop";
import { ProductImage } from "./ProductImage";
import { Stepper } from "./Stepper";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Product "window": large photo, details, add to cart or ask on WhatsApp. */
export function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key="qv"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[96] grid place-items-end bg-night/50 backdrop-blur-[3px] sm:place-items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="qv-title"
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-paper shadow-[var(--shadow-win)] sm:grid-cols-2 sm:rounded-3xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-line-2 bg-sheet/90 backdrop-blur transition-transform duration-300 hover:rotate-90"
            >
              <X className="size-4" />
            </button>
            <div className="relative aspect-square sm:aspect-auto sm:min-h-[420px]">
              <ProductImage product={product} sizes="(min-width: 640px) 384px, 100vw" zoom={false} className="absolute inset-0" />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="eyebrow">{product.category}</p>
              <h2 id="qv-title" className="mt-3 pr-10 text-[26px] font-semibold leading-tight">{product.name}</h2>
              {product.tag && <span className="mt-3 w-fit rounded-full bg-or/10 px-2.5 py-1 tag text-or-ink">{product.tag}</span>}
              <p className="mt-4 text-[16px] leading-relaxed text-ink-2">{product.desc}</p>
              <p className="mt-6 text-xl font-semibold">{formatPrice(product.price)}</p>
              <div className="mt-auto space-y-3 pt-8">
                <Stepper product={product} size="lg" />
                <a
                  href={whatsappLink(`Hi i3 Labs! I'm interested in the ${product.name}. Is it in stock, and what's the price?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line-2 bg-sheet text-[15px] font-medium transition-colors hover:border-or hover:text-or-ink"
                >
                  <WhatsAppIcon className="size-4 text-or" /> Ask about this item
                </a>
              </div>
              {product.credit && (
                <p className="mt-5 text-[11px] leading-snug text-ink-4">
                  Photo:{" "}
                  <a href={product.credit.source} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-ink-2">
                    {product.credit.artist}
                  </a>{" "}
                  · {product.credit.license} · Wikimedia Commons
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

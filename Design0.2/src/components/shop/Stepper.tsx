"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { Product } from "@/lib/shop";
import { cn } from "@/lib/utils";
import { useShop } from "./ShopProvider";

/** "Add" button that morphs into a − qty + stepper once the item is in the cart. */
export function Stepper({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  const { cart, setQty } = useShop();
  const qty = cart[product.id] ?? 0;
  const h = size === "lg" ? "h-12" : "h-9";

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {qty === 0 ? (
        <motion.button
          key="add"
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            e.stopPropagation();
            setQty(product.id, 1);
          }}
          aria-label={`Add ${product.name} to cart`}
          className={cn(
            "inline-flex items-center justify-center gap-1.5 rounded-full bg-ink font-medium text-white transition-colors hover:bg-or",
            h,
            size === "lg" ? "w-full px-6 text-[15px]" : "px-4 text-[13px]",
          )}
        >
          <Plus className="size-3.5" strokeWidth={2.5} /> {size === "lg" ? "Add to cart" : "Add"}
        </motion.button>
      ) : (
        <motion.div
          key="stepper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className={cn("inline-flex items-center justify-between rounded-full border border-or bg-or-50", h, size === "lg" && "w-full")}
        >
          <button
            type="button"
            onClick={() => setQty(product.id, qty - 1)}
            aria-label={`Decrease ${product.name} quantity`}
            className={cn("grid place-items-center text-or-ink hover:text-or", size === "lg" ? "size-12" : "size-9")}
          >
            {qty === 1 ? <Trash2 className="size-3.5" /> : <Minus className="size-3.5" strokeWidth={2.5} />}
          </button>
          <motion.span key={qty} initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="min-w-6 text-center text-[14px] font-semibold tabular-nums">
            {qty}
            {size === "lg" && <span className="ml-1 font-normal text-ink-3">in cart</span>}
          </motion.span>
          <button
            type="button"
            onClick={() => setQty(product.id, qty + 1)}
            aria-label={`Increase ${product.name} quantity`}
            className={cn("grid place-items-center text-or-ink hover:text-or", size === "lg" ? "size-12" : "size-9")}
          >
            <Plus className="size-3.5" strokeWidth={2.5} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

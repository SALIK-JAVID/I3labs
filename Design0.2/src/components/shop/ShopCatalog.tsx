"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search, ShoppingBag, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { categories, formatPrice, products, whatsappLink, type Product } from "@/lib/shop";
import { EASE, cn } from "@/lib/utils";
import { ProductImage } from "./ProductImage";
import { QuickView } from "./QuickView";
import { useShop } from "./ShopProvider";
import { Stepper } from "./Stepper";

function ProductCard({ product, index, onOpen }: { product: Product; index: number; onOpen: (p: Product) => void }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE.out, delay: Math.min(index * 0.04, 0.5) } }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
      className="group card flex flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[var(--shadow-win)]"
    >
      <button type="button" onClick={() => onOpen(product)} className="relative block text-left" aria-label={`View ${product.name}`}>
        <ProductImage product={product} sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw" className="aspect-[4/3]" />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-sheet/90 px-2.5 py-1 tag text-ink backdrop-blur">
            {product.tag}
          </span>
        )}
        <span className="absolute bottom-3 right-3 translate-y-2 rounded-full bg-ink/85 px-3 py-1.5 text-[12px] font-medium text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Quick view
        </span>
      </button>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="label">{product.category}</p>
        <button type="button" onClick={() => onOpen(product)} className="mt-1.5 text-left">
          <h3 className="text-[16px] font-semibold leading-snug transition-colors group-hover:text-or-ink sm:text-[18px]">{product.name}</h3>
        </button>
        <p className="mt-1.5 line-clamp-2 flex-1 text-[13px] leading-relaxed text-ink-3 sm:text-[14px]">{product.desc}</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <span className={cn("text-[14px] font-semibold", product.price === undefined && "text-[13px] font-medium text-ink-3")}>{formatPrice(product.price)}</span>
          <Stepper product={product} />
        </div>
      </div>
    </motion.li>
  );
}

export function ShopCatalog() {
  const { units, openCart } = useShop();
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Product | null>(null);
  const close = useCallback(() => setActive(null), []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const counts = useMemo(() => Object.fromEntries(categories.map((c) => [c, c === "All" ? products.length : products.filter((p) => p.category === c).length])), []);
  const credited = products.filter((p) => p.credit);

  return (
    <>
      {/* Toolbar — sticks under the navbar (the navbar stays put on /shop) */}
      <div className="sticky top-[72px] z-30 border-y border-line bg-paper/90 backdrop-blur-xl lg:top-20">
        <div className="container-site flex flex-col gap-3 py-3 md:flex-row md:items-center">
          <label className="flex h-11 items-center gap-2 rounded-full border border-line bg-sheet px-4 focus-within:border-ink md:w-80">
            <Search className="size-4 text-ink-4" />
            <span className="sr-only">Search products</span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value) setCategory("All");
              }}
              placeholder="Search Arduino, sensors, servos…"
              className="min-w-0 flex-1 bg-transparent text-[14px] placeholder:text-ink-4 focus:outline-none"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="text-ink-4 hover:text-ink">
                <X className="size-3.5" />
              </button>
            )}
          </label>
          <div role="tablist" aria-label="Categories" className="-mx-5 flex flex-1 gap-1.5 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:px-0">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={cn("relative shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors", category === c ? "text-white" : "text-ink-2 hover:text-ink")}
              >
                {category === c && <motion.span layoutId="store-cat" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                <span className="relative">
                  {c} <span className={cn("ml-0.5 text-[11px]", category === c ? "text-white/60" : "text-ink-4")}>{counts[c]}</span>
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={openCart}
            className="relative hidden h-11 shrink-0 items-center gap-2 rounded-full bg-ink pl-4 pr-5 text-[14px] font-medium text-white hover:bg-night-2 md:inline-flex"
          >
            <ShoppingBag className="size-4 text-or" /> Cart
            {units > 0 && <span className="grid min-w-5 place-items-center rounded-full bg-or px-1.5 text-[11px] font-bold leading-5">{units}</span>}
          </button>
        </div>
      </div>

      <section className="container-site py-10 lg:py-14">
        <p className="label mb-5">
          Showing {visible.length} of {products.length} products{category !== "All" ? ` in ${category}` : ""}
        </p>
        <motion.ul layout className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.ul>
        {visible.length === 0 && (
          <div className="card mx-auto max-w-md px-6 py-14 text-center">
            <p className="font-semibold">No products match “{query}”.</p>
            <p className="mt-1 text-[14px] text-ink-3">We stock far more than we list. Just ask.</p>
            <a href={whatsappLink(`Hi i3 Labs! Do you stock: ${query}?`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-or px-6 text-[14px] font-medium text-white hover:bg-[#e46a14]">
              Ask on WhatsApp <ArrowRight className="size-4" />
            </a>
          </div>
        )}

        <details className="mt-16 rounded-2xl border border-line bg-sheet/60 p-5 text-[13px] text-ink-3 open:pb-6">
          <summary className="cursor-pointer select-none font-medium text-ink-2">Product photo credits</summary>
          <p className="mt-3">Product photos are from Wikimedia Commons and used under their Creative Commons licences. Images are representative; actual items may vary.</p>
          <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
            {credited.map((p) => (
              <li key={p.id}>
                <span className="text-ink-2">{p.name}</span>:{" "}
                <a href={p.credit!.source} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-ink">
                  {p.credit!.artist}
                </a>
                , {p.credit!.license}
              </li>
            ))}
          </ul>
        </details>
      </section>

      <QuickView product={active} onClose={close} />
    </>
  );
}

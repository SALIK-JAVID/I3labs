"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product } from "@/lib/shop";

type Cart = Record<string, number>;

type ShopContextValue = {
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cart: Cart;
  lines: { product: Product; qty: number }[];
  units: number;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);
const STORAGE_KEY = "i3labs-cart";

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Cart>({});

  // Restore the cart for returning visitors (per-browser convenience only).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from storage
      if (saved) setCart(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const clear = useCallback(() => setCart({}), []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(qty, 99);
      return next;
    });
  }, []);

  const value = useMemo<ShopContextValue>(() => {
    const lines = products.filter((p) => cart[p.id]).map((product) => ({ product, qty: cart[product.id] }));
    return {
      cartOpen,
      openCart,
      closeCart,
      cart,
      lines,
      units: lines.reduce((n, l) => n + l.qty, 0),
      setQty,
      clear,
    };
  }, [cartOpen, cart, setQty, openCart, closeCart, clear]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside <ShopProvider>");
  return ctx;
}

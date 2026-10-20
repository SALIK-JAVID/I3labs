import Image from "next/image";
import type { Product } from "@/lib/shop";
import { cn } from "@/lib/utils";

/** Product photo, or an illustrated tile (icon on the site grid) for items without one. */
export function ProductImage({ product, sizes, className, zoom = true }: { product: Product; sizes: string; className?: string; zoom?: boolean }) {
  const Icon = product.icon;
  return (
    <div className={cn("relative overflow-hidden bg-fill", className)}>
      {product.image ? (
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className={cn("object-cover", zoom && "transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]")}
        />
      ) : (
        <div className="hairline-grid absolute inset-0 grid place-items-center bg-gradient-to-br from-or-50 to-fill">
          <span className="grid size-20 place-items-center rounded-3xl bg-sheet text-or shadow-[var(--shadow-card)] transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110">
            <Icon className="size-10" strokeWidth={1.4} />
          </span>
        </div>
      )}
    </div>
  );
}

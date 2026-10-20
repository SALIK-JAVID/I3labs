import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Store: Components & Kits",
  description: "Arduino boards, sensors, motors and robotics kits for students and schools. Add to cart and order on WhatsApp.",
};

const steps = [
  { n: "01", t: "Add to cart", d: "Pick boards, sensors, motors and kits." },
  { n: "02", t: "Order on WhatsApp", d: "Your cart is sent as one message." },
  { n: "03", t: "We confirm & deliver", d: "Stock, price and delivery, confirmed by chat." },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="i3 Labs Store"
        title={"Components\n& kits."}
        lead="Everything a young engineer needs: boards, sensors, motors, modules and complete robotics kits. Add to cart and order in one WhatsApp message."
        crumbs={[{ label: "Store" }]}
        className="!pb-14 lg:!pb-16"
      >
        <Reveal delay={0.4}>
          <ol className="card divide-y divide-line">
            {steps.map((s) => (
              <li key={s.n} className="flex items-start gap-4 p-5">
                <span className="num text-or-ink">{s.n}</span>
                <div>
                  <p className="font-semibold">{s.t}</p>
                  <p className="text-[14px] text-ink-3">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </PageHero>
      <ShopCatalog />
    </>
  );
}

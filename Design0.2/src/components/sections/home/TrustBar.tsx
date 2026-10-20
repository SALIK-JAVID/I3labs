import { Marquee } from "@/components/ui/Marquee";
import { clients } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="border-y border-line bg-sheet/50 py-8">
      <div className="container-site flex flex-col gap-6 md:flex-row md:items-center">
        <p className="label shrink-0 md:w-48">Trusted by innovative schools</p>
        <Marquee items={clients} className="flex-1" />
      </div>
    </section>
  );
}

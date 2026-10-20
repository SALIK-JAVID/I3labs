import { pillars } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Pillars() {
  return (
    <section className="pt-16 lg:pt-24">
      <div className="container-site">
        <Stagger className="card grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <StaggerItem
              key={title}
              className="group flex flex-col items-center px-6 py-9 text-center sm:border-b sm:border-line lg:border-b-0"
            >
              <span className="mb-5 grid size-14 place-items-center rounded-full border border-line text-or transition-all duration-500 group-hover:-translate-y-1 group-hover:border-or group-hover:bg-or group-hover:text-white">
                <Icon className="size-6" strokeWidth={1.5} />
              </span>
              <p className="num text-ink-4">0{i + 1}</p>
              <h3 className="mt-1 text-[16px] font-semibold">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-3">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

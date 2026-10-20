import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { programs } from "@/lib/data";
import { site } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

const columns = [
  {
    title: "Programs",
    links: programs.slice(0, 5).map((p) => ({ label: p.title, href: `/programs/${p.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "STEM Labs", href: "/labs" },
      { label: "Store", href: "/shop" },
      { label: "3IPP Framework", href: "/innovation" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-night-ink">
      <div className="hairline-grid-dark pointer-events-none absolute inset-0 opacity-60 mask-fade-b" />
      <div className="container-site relative pt-20 pb-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-night-mute">
              An End-to-End STEM Solution Enterprise — empowering institutions with AI, Robotics, Coding, IoT, Innovation &amp; Patents.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-night-mute">
              <li className="flex gap-3"><Mail className="mt-0.5 size-4 text-or" /><a className="hover:text-night-ink" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li className="flex gap-3"><Phone className="mt-0.5 size-4 text-or" /><a className="hover:text-night-ink" href={`tel:${site.phone}`}>{site.phone}</a></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-or" />{site.address}</li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="label mb-5 !text-night-mute">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group inline-flex items-center gap-1 text-[15px] text-night-ink/80 transition-colors hover:text-or-300">
                      {l.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <p className="label mb-5 !text-night-mute">Stay in the loop</p>
            <p className="mb-5 text-[15px] text-night-mute">Lab launches, competition results and new curriculum — once a month.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-20 select-none overflow-hidden text-center">
          <p className="font-display text-[clamp(4rem,15vw,13rem)] font-bold leading-[0.8] tracking-[-0.04em] text-white/[0.04]">
            i3 LABS
          </p>
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 text-center text-[13px] text-night-mute md:grid-cols-3 md:items-center md:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="md:text-center">
            Designed & developed by{" "}
            <a
              href="https://www.mariyahtech.com/"
              target="_blank"
              rel="noopener"
              className="font-medium text-night-ink underline-offset-4 transition-colors hover:text-or-300 hover:underline"
            >
              Mariyah Technologies
            </a>
          </p>
          <div className="flex justify-center gap-6 md:justify-end">
            {Object.entries(site.socials).map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="capitalize hover:text-night-ink">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

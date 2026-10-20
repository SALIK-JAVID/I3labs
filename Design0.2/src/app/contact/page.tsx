import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ContactForm } from "@/components/sections/shared/ContactForm";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a STEM lab demo or talk to an i3 Labs consultant.",
};

const channels = [
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone}` },
  { icon: MapPin, label: "Visit us", value: site.address },
  { icon: Clock, label: "Hours", value: "Mon – Sat · 9:30 AM – 6:00 PM IST" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={"Let's build your\nlab together."}
        lead="Tell us about your institution and goals. We'll set up a live virtual demo and a free site-survey call."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="pb-24 lg:pb-32">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
          <div className="space-y-6 lg:col-span-5">
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-or-50 text-or">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="label">{label}</p>
                      <p className="mt-1 text-[15px] font-medium">{value}</p>
                    </div>
                  </>
                );
                return (
                  <StaggerItem key={label}>
                    {href ? (
                      <a href={href} className="card flex items-start gap-4 p-5 transition-colors hover:border-or/50">{content}</a>
                    ) : (
                      <div className="card flex items-start gap-4 p-5">{content}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
            <Reveal delay={0.2}>
              <div className="card overflow-hidden">
                <iframe
                  title="i3 Labs office location"
                  src="https://www.google.com/maps?q=Zakura+Crossing+Srinagar&output=embed"
                  className="h-64 w-full grayscale-[60%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

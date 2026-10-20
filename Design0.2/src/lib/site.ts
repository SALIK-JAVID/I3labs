export const site = {
  name: "i3 Labs",
  tagline: "Innovations Unleashed",
  description:
    "An End-to-End STEM Solution Enterprise — Empowering institutions with AI, Robotics, Coding, IoT, Innovation & Patents.",
  url: "https://www.i3labs.in",
  email: "hello@i3labs.in",
  phone: "+91-9796570562",
  /** WhatsApp number in international format, digits only (used for wa.me links). */
  whatsapp: "919796570562",
  address: "Opposite Institute of Technology, Zakura Crossing, Srinagar, J&K",
  socials: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Programs", href: "/programs" },
  { label: "STEM Labs", href: "/labs" },
  { label: "3IPP", href: "/innovation" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

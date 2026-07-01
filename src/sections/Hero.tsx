import { useState } from 'react';
import { ChevronDown, Cpu, Menu, X } from 'lucide-react';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4';

const navLinks = [
  { label: 'Home',       href: '#home',       active: true },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Programs',   href: '#3ipp' },
  { label: 'Why Us',     href: '#why-us' },
  { label: 'Clients',    href: '#clients' },
  { label: 'Team',       href: '#team' },
  { label: 'Contact',    href: '#contact' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />

      {/* Fixed navbar — persists on scroll */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center shrink-0">
            <Cpu size={18} className="text-white" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-base tracking-wide">i3 Labs</span>
            <span className="text-white/50 text-[9px] font-semibold tracking-widest uppercase">Innovations Unleashed</span>
          </div>
        </div>

        {/* Nav pill – desktop */}
        <div className="hidden lg:flex liquid-glass items-center gap-0.5 rounded-xl px-2 py-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href.slice(1))}
              className={`flex items-center gap-0.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                link.active
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA – desktop */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-orangeLight transition-colors cursor-pointer"
          >
            Partner With Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden liquid-glass text-white p-2 rounded-lg cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-18 left-4 right-4 z-50 lg:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                scrollTo(link.href.slice(1));
                setMenuOpen(false);
              }}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-colors cursor-pointer ${
                link.active ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {link.label === 'Services' && <ChevronDown size={13} />}
            </button>
          ))}
          <div className="mt-2 pt-3 border-t border-white/10">
            <button
              onClick={() => {
                scrollTo('contact');
                setMenuOpen(false);
              }}
              className="w-full bg-brand-orange text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-brand-orangeLight transition-colors cursor-pointer"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}

      {/* Hero copy – bottom-left */}
      <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
          Nurturing Future{' '}
          <span className="text-brand-orange">Builders</span>
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-2 max-w-md">
          An End-to-End STEM Solution Enterprise — Empowering institutions with
          AI, Robotics, Coding, IoT, Innovation &amp; Patents.
        </p>
        <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-7">
          Ideation &bull; Innovation &bull; Incubation
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors cursor-pointer"
          >
            Partner With Us
          </button>
          <button
            onClick={() => scrollTo('curriculum')}
            className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState, type ComponentType, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Bot, Code2, Award, Lightbulb, Wifi, Cpu, ChevronDown, Menu, X } from 'lucide-react';
import { About }      from './sections/About';
import { Services }   from './sections/Services';
import { Benefits }   from './sections/Benefits';
import { Curriculum } from './sections/Curriculum';
import { WhyPartner } from './sections/WhyPartner';
import { ThreeIPP }   from './sections/ThreeIPP';
import { Engagement } from './sections/Engagement';
import { Activities } from './sections/Activities';
import { Clients }    from './sections/Clients';
import { Team }       from './sections/Team';
import { Contact }    from './sections/Contact';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4';

const navLinks = [
  'Home', 'About', 'Services', 'Curriculum',
  'Programs', 'Why Us', 'Clients', 'Team', 'Contact',
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const headlineWords = ['Nurturing', 'Future', 'Builders'];
const curricula = ['CBSE', 'ICSE', 'NEP 2020', 'IB', 'Cambridge', 'WRO', 'Global Innovation'];

interface ChipDef {
  Icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  style: CSSProperties;
}

// All chips on the right side, evenly spaced vertically
const chips: ChipDef[] = [
  { Icon: Bot,       label: 'Robotics',   style: { top: '12%', right: '10%' } },
  { Icon: Cpu,       label: 'AI & IoT',   style: { top: '24%', right: '9%'  } },
  { Icon: Wifi,      label: 'IoT',        style: { top: '36%', right: '11%' } },
  { Icon: Code2,     label: 'Coding',     style: { top: '48%', right: '10%' } },
  { Icon: Award,     label: 'Patents',    style: { top: '60%', right: '9%'  } },
  { Icon: Lightbulb, label: 'Innovation', style: { top: '72%', right: '11%' } },
];

interface StatDef {
  label: string;
  from: number;
  to: number;
  format: (v: number) => string;
}

const stats: StatDef[] = [
  { label: 'Founded',      from: 2005, to: 2010, format: v => String(Math.round(v))  },
  { label: 'Institutions', from: 0,    to: 50,   format: v => Math.round(v) + '+'   },
  { label: 'Students',     from: 0,    to: 10,   format: v => Math.round(v) + 'K+'  },
  { label: 'Patents',      from: 0,    to: 20,   format: v => Math.round(v) + '+'   },
];

const Logo = () => (
  <svg width="15" height="15" viewBox="0 0 256 256" fill="none">
    <path
      fill="rgb(84, 84, 84)"
      d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
    />
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statRefs    = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // ── 1. Headline word reveal ───────────────────────────────────────────────
    if (headlineRef.current) {
      const wordEls = headlineRef.current.querySelectorAll<HTMLElement>('.word-inner');
      gsap.fromTo(
        wordEls,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );
    }

    // ── 2. Chips entrance → float loop ────────────────────────────────────────
    const chipEls = document.querySelectorAll<HTMLElement>('.floating-chip');
    gsap.fromTo(
      chipEls,
      { opacity: 0, scale: 0.8, y: 8 },
      {
        opacity: 1, scale: 1, y: 0,
        stagger: 0.1, duration: 0.5, ease: 'back.out(1.4)', delay: 0.9,
        onComplete() {
          chipEls.forEach((chip, i) => {
            gsap.to(chip, {
              y: i % 2 === 0 ? -11 : 11,
              duration: 2.0 + i * 0.35,
              repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.18,
            });
          });
        },
      }
    );

    // ── 3. Stat counters ──────────────────────────────────────────────────────
    statRefs.current.forEach((el, i) => {
      if (!el) return;
      const s   = stats[i];
      const obj = { val: s.from };
      gsap.to(obj, {
        val: s.to, duration: 1.8, ease: 'power2.out', delay: 1.1 + i * 0.07,
        onUpdate() { el.textContent = s.format(obj.val); },
      });
    });
  }, []);

  return (
    <div style={{ display: 'contents' }}>
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#f0f0ee' }}>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        src={BG_VIDEO}
      />


<div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Floating chips (lg+ only) ───────────────────────────────────────── */}
        {chips.map(({ Icon, label, style }) => (
          <div
            key={label}
            className="floating-chip absolute hidden lg:flex items-center gap-2 rounded-2xl
                       px-3 py-2.5 bg-white/75 backdrop-blur-md border border-white/50 shadow-sm
                       pointer-events-none"
            style={style}
          >
            <Icon size={13} strokeWidth={1.8} className="text-gray-500" />
            <span className="text-[11px] font-medium text-gray-600 whitespace-nowrap">{label}</span>
          </div>
        ))}

        {/* ── Navbar ─────────────────────────────────────────────────────────── */}
        <motion.nav
          className="relative z-50 pt-4 sm:pt-6 px-4 sm:px-8 shrink-0"
          initial={{ y: -28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease }}
        >
          {/* ── Mobile layout ── */}
          <div className="flex lg:hidden items-center justify-between">
            <div
              className="flex items-center gap-2.5 rounded-full px-4 py-2.5"
              style={{ backgroundColor: '#EDEDED' }}
            >
              <Logo />
              <div>
                <p className="text-[12px] font-semibold text-gray-800 leading-none">i3 Labs</p>
                <p className="text-[8px] font-medium text-gray-400 tracking-wider uppercase leading-none mt-[3px]">
                  Innovations Unleashed
                </p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
              style={{ backgroundColor: '#EDEDED' }}
            >
              {menuOpen
                ? <X size={16} strokeWidth={2} className="text-gray-700" />
                : <Menu size={16} strokeWidth={2} className="text-gray-700" />}
            </button>
          </div>

          {/* ── Desktop layout ── */}
          <div className="hidden lg:flex items-center justify-center gap-2.5">
            {/* Logo + brand text pill */}
            <div
              className="flex items-center gap-2.5 rounded-full px-4 py-2.5 shrink-0"
              style={{ backgroundColor: '#EDEDED' }}
            >
              <Logo />
              <div>
                <p className="text-[12px] font-semibold text-gray-800 leading-none">i3 Labs</p>
                <p className="text-[8px] font-medium text-gray-400 tracking-wider uppercase leading-none mt-[3px]">
                  Innovations Unleashed
                </p>
              </div>
            </div>

            {/* Nav links pill */}
            <div
              className="flex items-center gap-5 rounded-xl px-6 py-3 shrink-0"
              style={{ backgroundColor: '#EDEDED' }}
            >
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[12px] font-medium text-gray-700 hover:text-gray-900
                             transition-colors duration-200 whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* CTA pill */}
            <a
              href="#contact"
              className="shrink-0 flex items-center rounded-full px-5 py-3 text-[12px]
                         font-medium text-white bg-blue-500 hover:bg-blue-600
                         transition-colors duration-200 whitespace-nowrap"
            >
              Partner With Us
            </a>
          </div>
        </motion.nav>

        {/* ── Mobile dropdown menu ───────────────────────────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed top-20 inset-x-4 z-50 bg-white/95 backdrop-blur-xl
                         rounded-2xl shadow-lg border border-gray-100 p-4 lg:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22, ease }}
            >
              <div className="grid grid-cols-3 gap-1 mb-3">
                {navLinks.map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-[12.5px] font-medium text-gray-700 hover:text-gray-900
                               py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors text-center"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-full py-3 text-[13px]
                           font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                Partner With Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Hero content (bottom-left) ──────────────────────────────────────── */}
        <div className="flex-1 flex items-end pb-10 sm:pb-14 lg:pb-20
                        px-8 sm:px-14 md:px-20 lg:px-28">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <motion.p
              className="text-[10.5px] sm:text-[11px] font-medium text-blue-500
                         tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.3 }}
            >
              Ideation · Innovation · Incubation
            </motion.p>

            {/* Headline — GSAP word reveal, "Builders" in brand orange */}
            <h1
              ref={headlineRef}
              className="text-[2.6rem] sm:text-[3.6rem] lg:text-[4.5rem] leading-[1.1]
                         font-semibold tracking-tight mb-5 flex flex-wrap gap-x-[0.22em]"
            >
              {headlineWords.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block leading-[1.15]">
                  <span
                    className="word-inner inline-block"
                    style={{ color: word === 'Builders' ? '#3b82f6' : '#111827' }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed mb-7 max-w-[500px]"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.85 }}
            >
              An End-to-End STEM Solution Enterprise — Empowering institutions with AI,
              Robotics, Coding, IoT, Innovation &amp; Patents.
            </motion.p>

            {/* Stats with dividers */}
            <motion.div
              className="flex items-center mb-7"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 1.0 }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i > 0 ? 'border-l border-gray-300 pl-6 sm:pl-8 ml-6 sm:ml-8' : ''}
                >
                  <span
                    ref={el => { statRefs.current[i] = el; }}
                    className="block text-[1.25rem] sm:text-[1.4rem] font-semibold
                               text-gray-900 leading-none tabular-nums"
                  >
                    {stat.format(stat.from)}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-gray-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-3 flex-wrap"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 1.15 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500
                           border border-blue-400 rounded-full px-5 py-2.5
                           hover:bg-blue-500 hover:text-white hover:border-blue-500
                           transition-all duration-200 group"
              >
                Partner With Us
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium
                           text-gray-500 hover:text-gray-800 transition-colors duration-200 group"
              >
                Explore Programs
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* ── Curriculum strip ───────────────────────────────────────────────── */}
        <motion.div
          className="flex items-center justify-center gap-2 flex-wrap px-4 pb-5 pt-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <span className="text-[10px] font-medium text-gray-400 tracking-widest uppercase mr-1">
            Aligned with
          </span>
          {curricula.map(c => (
            <span
              key={c}
              className="rounded-full px-3 py-1.5 text-[11px] font-medium text-gray-600 leading-none"
              style={{ backgroundColor: '#EDEDED' }}
            >
              {c}
            </span>
          ))}
        </motion.div>

        {/* ── Scroll indicator ───────────────────────────────────────────────── */}
        <motion.div
          className="flex justify-center pb-3"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={17} strokeWidth={1.5} className="text-gray-400" />
        </motion.div>

      </div>
    </div>

    {/* ── Page sections ──────────────────────────────────────────────────── */}
    <About />
    <Services />
    <Benefits />
    <Curriculum />
    <WhyPartner />
    <ThreeIPP />
    <Engagement />
    <Activities />
    <Clients />
    <Team />
    <Contact />
    </div>
  );
}

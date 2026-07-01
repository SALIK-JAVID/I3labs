import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#060e1c';
const BORDER = 'rgba(255,255,255,0.06)';
// must match BG for the edge fade to be invisible
const FADE   = '#060e1c';

const institutions = [
  'Delhi Public School',
  'Amity International',
  'Ryan International',
  'The Orchid School',
  'Pathways World School',
  'Indus Valley World School',
  'GD Goenka School',
  'Heritage Xperiential School',
  'Billabong High International',
  'Podar International School',
  'Euro School',
  'Kangaroo Kids',
];

export function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef  = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalW = track.scrollWidth / 2;
    animRef.current = gsap.to(track, {
      x: `-=${totalW}`,
      duration: 36,
      ease: 'none',
      repeat: -1,
      modifiers: { x: gsap.utils.unitize(v => parseFloat(v) % totalW) },
    });
    return () => { animRef.current?.kill(); };
  }, []);

  const items = [...institutions, ...institutions];

  return (
    <section id="clients" className="relative py-24 overflow-hidden"
      style={{ backgroundColor: BG }}>

      {/* Ambient orb */}
      <div className="ambient-orb-slow absolute w-80 h-80 top-1/2 -translate-y-1/2 right-0 opacity-12 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)' }} />

      <div className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-6xl mx-auto mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Our Clients</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight max-w-2xl leading-[1.2]">
            Trusted by leading institutions across India.
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, ease, delay: 0.2 }}
      >
        {/* Edge fades — match section BG */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${FADE}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${FADE}, transparent)` }} />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center gap-3 w-max py-2">
            {items.map((name, i) => (
              <div
                key={i}
                className="shrink-0 rounded-full px-5 py-3 text-[12px] font-medium text-slate-300 whitespace-nowrap border"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: BORDER }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-6xl mx-auto mt-12 relative z-10">
        <motion.p
          className="text-[12px] text-slate-400 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
        >
          150+ institutions powered across CBSE, ICSE, IB, and Cambridge school systems.
        </motion.p>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
      duration: 32,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(v => parseFloat(v) % totalW),
      },
    });
    return () => { animRef.current?.kill(); };
  }, []);

  const items = [...institutions, ...institutions];

  return (
    <section id="clients" className="py-24 overflow-hidden" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Our Clients</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight max-w-2xl leading-[1.2]">
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
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center gap-4 w-max py-2">
            {items.map((name, i) => (
              <div
                key={i}
                className="shrink-0 rounded-full px-5 py-3 text-[12px] font-medium text-gray-600 whitespace-nowrap"
                style={{ backgroundColor: '#f0f0ee' }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-6xl mx-auto mt-12">
        <motion.p
          className="text-[12px] text-gray-400 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
        >
          150+ institutions powered across CBSE, ICSE, IB, and Cambridge school systems.
        </motion.p>
      </div>
    </section>
  );
}

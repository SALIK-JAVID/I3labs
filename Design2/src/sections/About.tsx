import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const statItems = [
  { label: 'Years of STEM Excellence', value: 16,  suffix: '+'  },
  { label: 'Institutions Powered',      value: 150, suffix: '+'  },
  { label: 'Students Mentored',          value: 50,  suffix: 'K+' },
  { label: 'Hackathons & Competitions',  value: 35,  suffix: '+'  },
];

const features = [
  {
    num: '01',
    title: 'Our Mission',
    text: 'Empowering learners with future-ready skills in AI, Robotics, Coding, and STEM — building logical thinking and innovation to thrive in a digital world.',
  },
  {
    num: '02',
    title: 'Our Vision',
    text: 'Build globally aligned innovation ecosystems that transform educational institutions into future-ready centers of excellence.',
  },
  {
    num: '03',
    title: 'What We Deliver',
    text: 'A complete AI, Robotics, and STEM ecosystem integrating lab infrastructure, curriculum, teacher training, global certifications, and R&D mentorship.',
  },
];

function StatCounter({ value, suffix, label, index }: {
  value: number; suffix: string; label: string; index: number;
}) {
  const ref  = useRef<HTMLSpanElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el  = ref.current;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value, duration: 2, ease: 'power2.out', delay: index * 0.1,
      onUpdate() { el.textContent = Math.round(obj.val) + suffix; },
    });
  }, [inView]);

  return (
    <div ref={root} className="text-center">
      <span ref={ref} className="block text-2xl font-semibold text-white tabular-nums leading-none mb-1">
        0{suffix}
      </span>
      <p className="text-[10px] font-medium text-blue-200 leading-snug">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight max-w-2xl leading-[1.2]">
            Nurturing the innovators of tomorrow.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left — blue panel (blue-only tones, no purple/indigo) */}
          <motion.div
            className="lg:col-span-2 rounded-3xl overflow-hidden relative min-h-[400px] flex flex-col justify-between p-8"
            style={{ background: 'linear-gradient(160deg, #1e3a8a 0%, #1d4ed8 55%, #2563eb 100%)' }}
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease }}
          >
            {/* Subtle rings */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -top-4  -right-4  w-32 h-32 rounded-full border border-white/10" />
            <div className="absolute bottom-16 -left-12 w-40 h-40 rounded-full border border-white/8" />

            <div>
              <p className="text-[10px] font-semibold text-blue-300 tracking-widest uppercase mb-3">Est. 2010</p>
              <p className="text-white text-[20px] font-semibold leading-snug max-w-[190px]">
                An End-to-End STEM Enterprise
              </p>
            </div>

            {/* Large decorative number */}
            <div className="my-4 select-none pointer-events-none">
              <span className="text-[88px] font-bold leading-none text-white/10 tabular-nums">16</span>
              <span className="block text-[12px] font-medium text-blue-300 -mt-2 ml-1">Years of Innovation</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-y-5 border-t border-white/15 pt-5">
              {statItems.map((s, i) => (
                <StatCounter key={s.label} {...s} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Right — feature rows */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {features.map(({ num, title, text }, i) => (
              <motion.div
                key={title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#EDEDED' }}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                    {num}
                  </span>
                  <h3 className="text-[13px] font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">{text}</p>
              </motion.div>
            ))}

            {/* CTA strip */}
            <motion.div
              className="rounded-2xl p-5 bg-blue-500 flex items-center justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.35 }}
            >
              <div>
                <p className="text-[13px] font-semibold text-white mb-0.5">Ready to partner with us?</p>
                <p className="text-[11.5px] text-blue-100">Set up a STEM lab at your institution in 30 days.</p>
              </div>
              <a
                href="#contact"
                className="shrink-0 ml-4 text-[12px] font-medium text-blue-600 bg-white rounded-full px-4 py-2.5 hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Let's Talk →
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#060e1c';
const CARD   = '#0b1829';
const BORDER = 'rgba(255,255,255,0.06)';

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

  useEffect(() => {
    if (!root.current || !ref.current) return;
    const el  = ref.current;
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: root.current,
      start: 'top 80%',
      once: true,
      onEnter() {
        gsap.to(obj, {
          val: value, duration: 2.2, ease: 'power2.out', delay: index * 0.12,
          onUpdate() { el.textContent = Math.round(obj.val) + suffix; },
        });
      },
    });
  }, []);

  return (
    <div ref={root} className="text-center">
      <span ref={ref} className="block text-2xl font-semibold text-white tabular-nums leading-none mb-1">
        0{suffix}
      </span>
      <p className="text-[10px] font-medium text-blue-300 leading-snug">{label}</p>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* Ambient blue orb */}
      <div
        className="ambient-orb absolute w-96 h-96 -top-24 -left-24 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight max-w-2xl leading-[1.2]">
            Nurturing the innovators of tomorrow.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left — parallax panel */}
          <motion.div
            className="lg:col-span-2 rounded-3xl overflow-hidden relative min-h-100 flex flex-col justify-between p-8 border card-glow"
            style={{ backgroundColor: CARD, borderColor: BORDER, y: panelY }}
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease }}
          >
            <img
              src="/stem_lab_collab.png"
              alt="STEM Lab Collaboration"
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1829] via-[#0b1829]/65 to-[#0b1829]/15 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-[10px] font-semibold text-blue-300 tracking-widest uppercase mb-3">Est. 2010</p>
              <p className="text-white text-[20px] font-semibold leading-snug max-w-[190px]">
                An End-to-End STEM Enterprise
              </p>
            </div>

            <div className="relative z-10 my-4 select-none pointer-events-none">
              <span className="text-[88px] font-bold leading-none text-white/8 tabular-nums">16</span>
              <span className="block text-[12px] font-medium text-blue-300 -mt-2 ml-1">Years of Innovation</span>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-y-5 border-t pt-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
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
                className="rounded-2xl p-6 border card-glow"
                style={{ backgroundColor: CARD, borderColor: BORDER }}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2, ease: 'easeOut' } }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/80 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                    {num}
                  </span>
                  <h3 className="text-[13px] font-semibold text-white">{title}</h3>
                </div>
                <p className="text-[12.5px] text-slate-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}

            {/* CTA strip */}
            <motion.div
              className="rounded-2xl p-5 border flex items-center justify-between"
              style={{ backgroundColor: 'rgba(59,130,246,0.12)', borderColor: 'rgba(59,130,246,0.22)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.35 }}
              whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
            >
              <div>
                <p className="text-[13px] font-semibold text-white mb-0.5">Ready to partner with us?</p>
                <p className="text-[11.5px] text-blue-300">Set up a STEM lab at your institution in 30 days.</p>
              </div>
              <a
                href="#contact"
                className="shrink-0 ml-4 text-[12px] font-medium text-white bg-blue-500 rounded-full px-4 py-2.5 hover:bg-blue-400 transition-colors whitespace-nowrap"
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

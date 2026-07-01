import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, Rocket, Wrench, FileText } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#050c18';
const CARD   = '#0c1b2e';
const BORDER = 'rgba(255,255,255,0.06)';

const steps = [
  { num: '01', Icon: Lightbulb, title: 'Ideation',    desc: 'Students identify real-world problems and brainstorm original solutions under expert mentorship.' },
  { num: '02', Icon: Sparkles,  title: 'Innovation',  desc: 'Ideas are refined into structured innovation frameworks through research, design thinking, and iteration.' },
  { num: '03', Icon: Rocket,    title: 'Incubation',  desc: 'Promising projects enter an incubation phase with business mentoring and startup ecosystem exposure.' },
  { num: '04', Icon: Wrench,    title: 'Prototyping', desc: 'Students build working hardware and software prototypes using the STEM lab infrastructure.' },
  { num: '05', Icon: FileText,  title: 'Patenting',   desc: 'Final innovations are guided through the full IP filing process — student inventors, real patents.' },
];

export function ThreeIPP() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;
    gsap.fromTo(progressRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1, duration: 1.4, ease: 'power2.out',
        scrollTrigger: { trigger: progressRef.current, start: 'top 85%', once: true },
      }
    );
  }, []);

  return (
    <section id="programs" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}>

      {/* Ambient orb — center glow */}
      <div className="ambient-orb absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">3IPP Framework</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3 max-w-2xl leading-[1.2]">
            From classroom idea to filed patent.
          </h2>
          <p className="text-[13px] text-slate-400 mb-8 max-w-xl">
            Our proprietary 5-stage innovation pipeline transforms every student into an inventor.
          </p>
          {/* GSAP-animated progress bar */}
          <div className="relative h-px mb-12 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <div ref={progressRef} className="absolute inset-0 rounded-full"
              style={{ background: 'linear-gradient(to right, rgba(59,130,246,0.7), rgba(99,179,237,0.3), transparent)' }} />
          </div>
        </motion.div>

        {/* Desktop — horizontal pipeline */}
        <div className="hidden md:flex items-start gap-0 relative">
          <div className="absolute top-[28px] left-[36px] right-[36px] h-px" style={{ backgroundColor: BORDER }} />
          {steps.map(({ num, Icon, title, desc }, i) => (
            <motion.div key={num}
              className="flex-1 flex flex-col items-center text-center px-4 relative z-10"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-2xl border flex items-center justify-center mb-4"
                style={{ backgroundColor: CARD, borderColor: 'rgba(59,130,246,0.22)' }}>
                <Icon size={18} className="text-blue-400" />
              </div>
              <span className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase mb-1">{num}</span>
              <h3 className="text-[13px] font-semibold text-white mb-2">{title}</h3>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile — vertical list */}
        <div className="flex flex-col gap-4 md:hidden">
          {steps.map(({ num, Icon, title, desc }, i) => (
            <motion.div key={num}
              className="flex gap-4 rounded-2xl p-5 border card-glow"
              style={{ backgroundColor: CARD, borderColor: BORDER }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}>
                <Icon size={15} className="text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase mb-0.5">{num}</p>
                <h3 className="text-[13px] font-semibold text-white mb-1">{title}</h3>
                <p className="text-[12px] text-slate-400 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, BookOpen, BarChart3, Trophy } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#060e1c';
const CARD   = '#0c1b2e';
const BORDER = 'rgba(255,255,255,0.06)';

const features = [
  {
    Icon: ShieldCheck,
    title: 'Turnkey End-to-End Solution',
    desc: 'From lab design and equipment to curriculum, training, and certifications — we handle everything so institutions can focus on learning.',
  },
  {
    Icon: BookOpen,
    title: 'Proprietary Structured Curriculum',
    desc: 'A continuously updated curriculum aligned with NEP 2020, IB, CBSE, ICSE, and Cambridge — designed by industry and academic experts.',
  },
  {
    Icon: Globe2,
    title: 'Global Certifications & Competitions',
    desc: 'Students gain internationally recognized credentials and compete at WRO, FIRST Robotics, NASA challenges, and global innovation fairs.',
  },
  {
    Icon: BarChart3,
    title: 'Real-Time Analytics & LMS',
    desc: 'Our dedicated LMS platform gives teachers and administrators live visibility into student progress, skill acquisition, and lab utilization.',
  },
  {
    Icon: Trophy,
    title: 'R&D, Patents & Startup Support',
    desc: 'Through 3IPP, students graduate from ideas to filed patents and incubated startups, backed by expert mentors every step of the way.',
  },
];

export function WhyPartner() {
  return (
    <section id="why-partner" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}>

      {/* Ambient orb */}
      <div className="ambient-orb-slow absolute w-80 h-80 top-1/2 -translate-y-1/2 -left-20 opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Why Partner With Us</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6 leading-[1.2]">
              The complete STEM ecosystem, not just equipment.
            </h2>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-8 max-w-sm">
              i3 Labs goes beyond hardware. We integrate curriculum, technology, training, certifications, and ongoing support into a single seamless partner relationship.
            </p>
            <div className="flex items-center gap-6">
              {[
                { val: '150+', label: 'Institutions' },
                { val: '50K+', label: 'Students'     },
                { val: '16+',  label: 'Years'         },
              ].map(({ val, label }, i) => (
                <div key={label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-10" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />}
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-white">{val}</p>
                    <p className="text-[11px] text-slate-400">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — feature rows */}
          <div className="flex flex-col gap-3">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="flex gap-4 rounded-2xl p-5 border card-glow"
                style={{ backgroundColor: CARD, borderColor: BORDER }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                whileHover={{ x: 5, transition: { duration: 0.2, ease: 'easeOut' } }}
              >
                <div className="w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}>
                  <Icon size={15} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-white mb-1">{title}</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

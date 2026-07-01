import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Wrench } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#050c18';
const CARD   = '#0c1b2e';
const HEADER = '#0f2040';
const BORDER = 'rgba(255,255,255,0.06)';

const tiers = [
  {
    Icon: FlaskConical,
    num: '01',
    label: 'Foundation',
    title: 'STEM Foundations',
    desc: 'Core science, technology, engineering, and math concepts for beginners and early learners.',
    topics: ['Basic Robotics', 'Scratch Programming', 'Electronics Basics', 'Scientific Method', 'Math & Logic'],
    tools: ['Arduino Starter', 'Scratch', 'Tinkercad'],
    image: '/stem_curriculum_foundation.png',
  },
  {
    Icon: Cpu,
    num: '02',
    label: 'Advanced Tech',
    title: 'Advanced Technology',
    desc: 'AI, IoT, and advanced coding for intermediate and senior learners ready for industry-level skills.',
    topics: ['Artificial Intelligence', 'Machine Learning', 'Python & JS', 'IoT Systems', 'Data Science'],
    tools: ['Raspberry Pi', 'Python', 'TensorFlow Lite'],
    image: '/stem_curriculum_advanced.png',
  },
  {
    Icon: Wrench,
    num: '03',
    label: 'Pre-Engineering',
    title: 'Pre-Engineering Track',
    desc: 'Industry-grade skills for students preparing for engineering, design, and innovation careers.',
    topics: ['PCB Design', 'CAD/CAM Modeling', 'Control Systems', 'Patent Process', 'Startup Ideation'],
    tools: ['AutoCAD', 'SolidWorks', 'KiCad'],
    image: '/stem_curriculum_engineering.png',
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}>

      {/* Ambient orb */}
      <div className="ambient-orb-slow absolute w-96 h-96 top-0 right-0 opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3 max-w-2xl leading-[1.2]">
            A structured path from curiosity to expertise.
          </h2>
          <p className="text-[13px] text-slate-400 mb-12 max-w-xl">
            Aligned with CBSE, ICSE, NEP 2020, IB, and Cambridge frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map(({ Icon, num, label, title, desc, topics, tools, image }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden flex flex-col border card-glow"
              style={{ backgroundColor: CARD, borderColor: BORDER }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              {/* Header image */}
              <div className="h-36 relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c1b2e] via-[#0c1b2e]/40 to-transparent" />
                <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg border flex items-center justify-center backdrop-blur-md"
                    style={{ backgroundColor: 'rgba(12,27,46,0.6)', borderColor: BORDER }}>
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  <span className="text-[9px] font-bold text-blue-400 tracking-widest uppercase px-2 py-0.5 rounded-full backdrop-blur-md border"
                    style={{ backgroundColor: 'rgba(12,27,46,0.6)', borderColor: BORDER }}>{num}</span>
                </div>
              </div>

              <div className="px-6 pt-5 pb-5 border-b" style={{ backgroundColor: HEADER, borderColor: BORDER }}>
                <p className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase mb-1">{label}</p>
                <h3 className="text-[15px] font-semibold text-white mb-2">{title}</h3>
                <p className="text-[12px] text-slate-400 leading-relaxed">{desc}</p>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-3">Topics</p>
                <ul className="space-y-2 mb-5">
                  {topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-[12px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t" style={{ borderColor: BORDER }}>
                  <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-2">Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map(t => (
                      <span key={t} className="text-[11px] font-medium text-blue-400 rounded-full px-2.5 py-1 border"
                        style={{ backgroundColor: 'rgba(59,130,246,0.08)', borderColor: 'rgba(59,130,246,0.2)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

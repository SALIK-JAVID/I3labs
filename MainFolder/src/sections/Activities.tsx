import { motion } from 'framer-motion';
import { Bot, Code2, Cpu, Zap, Microscope, Globe } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = '#050c18';
const CARD   = '#0c1b2e';
const BORDER = 'rgba(255,255,255,0.06)';

const activities = [
  { Icon: Bot,        title: 'Robotics & Automation',    desc: 'Build, program, and compete with robots — from beginner kits to fully autonomous machines.',         tags: ['Arduino', 'LEGO EV3', 'ROS', 'WRO Prep'],           image: '/stem_robotics_activity.png' },
  { Icon: Cpu,        title: 'AI & Machine Learning',    desc: 'Explore neural networks, computer vision, and NLP through project-based learning.',                  tags: ['Python', 'TensorFlow Lite', 'Image Recognition'],    image: '/stem_ai_activity.png' },
  { Icon: Code2,      title: 'Coding & App Development', desc: 'From Scratch blocks to Flutter — students build real apps and games they can share.',                 tags: ['Scratch', 'Python', 'Flutter', 'Game Dev'],          image: '/stem_coding_activity.png' },
  { Icon: Zap,        title: 'Electronics & IoT',        desc: 'Circuit design and connected hardware projects that bridge digital and physical worlds.',              tags: ['ESP32', 'Raspberry Pi', 'Smart Home'],               image: '/stem_iot_activity.png' },
  { Icon: Microscope, title: 'Science & Innovation Labs', desc: 'Experiment-driven inquiry into physics, chemistry, and biology with modern tools.',                  tags: ['Biology', 'Physics', 'Chemistry'],                   image: '/stem_science_activity.png' },
  { Icon: Globe,      title: 'Global Competitions',      desc: 'Representing institutions at WRO, FIRST Robotics, NASA challenges, and innovation fairs.',            tags: ['WRO', 'FIRST', 'NASA', 'Hackathons'],                image: '/stem_competition_activity.png' },
];

export function Activities() {
  return (
    <section id="activities" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}>

      {/* Ambient orb */}
      <div className="ambient-orb absolute w-96 h-96 top-0 left-1/3 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Lab Activities</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3 max-w-2xl leading-[1.2]">
            Learning that happens in every dimension.
          </h2>
          <p className="text-[13px] text-slate-400 mb-12 max-w-xl">
            Six specialized tracks spanning the full spectrum of modern STEM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map(({ Icon, title, desc, tags, image }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden flex flex-col border card-glow"
              style={{ backgroundColor: CARD, borderColor: BORDER }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              {/* Cover image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c1b2e] via-[#0c1b2e]/50 to-transparent" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="w-9 h-9 rounded-xl border flex items-center justify-center backdrop-blur-md"
                    style={{ backgroundColor: 'rgba(12,27,46,0.65)', borderColor: BORDER }}>
                    <Icon size={14} className="text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[13px] font-semibold text-white mb-2">{title}</h3>
                <p className="text-[12px] text-slate-400 leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {tags.map(t => (
                    <span key={t} className="text-[10.5px] font-medium text-slate-300 rounded-full px-2.5 py-1 border"
                      style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: BORDER }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

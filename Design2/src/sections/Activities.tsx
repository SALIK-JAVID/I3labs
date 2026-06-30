import { motion } from 'framer-motion';
import { Bot, Code2, Cpu, Zap, Microscope, Globe } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const activities = [
  {
    Icon: Bot,
    title: 'Robotics & Automation',
    desc: 'Build, program, and compete with robots — from beginner kits to fully autonomous machines.',
    tags: ['Arduino', 'LEGO EV3', 'ROS', 'WRO Prep'],
  },
  {
    Icon: Cpu,
    title: 'AI & Machine Learning',
    desc: 'Explore neural networks, computer vision, and NLP through project-based learning.',
    tags: ['Python', 'TensorFlow Lite', 'Image Recognition'],
  },
  {
    Icon: Code2,
    title: 'Coding & App Development',
    desc: 'From Scratch blocks to Flutter — students build real apps and games they can share.',
    tags: ['Scratch', 'Python', 'Flutter', 'Game Dev'],
  },
  {
    Icon: Zap,
    title: 'Electronics & IoT',
    desc: 'Circuit design and connected hardware projects that bridge digital and physical worlds.',
    tags: ['ESP32', 'Raspberry Pi', 'Smart Home'],
  },
  {
    Icon: Microscope,
    title: 'Science & Innovation Labs',
    desc: 'Experiment-driven inquiry into physics, chemistry, and biology with modern tools.',
    tags: ['Biology', 'Physics', 'Chemistry'],
  },
  {
    Icon: Globe,
    title: 'Global Competitions',
    desc: 'Representing institutions at WRO, FIRST Robotics, NASA challenges, and innovation fairs.',
    tags: ['WRO', 'FIRST', 'NASA', 'Hackathons'],
  },
];

export function Activities() {
  return (
    <section id="activities" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Lab Activities</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3 max-w-2xl leading-[1.2]">
            Learning that happens in every dimension.
          </h2>
          <p className="text-[13px] text-gray-400 mb-12 max-w-xl">
            Six specialized tracks spanning the full spectrum of modern STEM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map(({ Icon, title, desc, tags }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden flex flex-col bg-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
            >
              {/* Header band — #EDEDED with large faint icon */}
              <div className="relative h-24 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#EDEDED' }}>
                <Icon size={80} strokeWidth={0.8} className="absolute text-gray-300 opacity-60" />
                <div className="relative z-10 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Icon size={17} className="text-blue-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[13px] font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {tags.map(t => (
                    <span key={t} className="text-[10.5px] font-medium text-gray-600 rounded-full px-2.5 py-1" style={{ backgroundColor: '#EDEDED' }}>
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

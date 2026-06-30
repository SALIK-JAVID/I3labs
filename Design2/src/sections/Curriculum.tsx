import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Wrench } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tiers = [
  {
    Icon: FlaskConical,
    num: '01',
    label: 'Foundation',
    title: 'STEM Foundations',
    desc: 'Core science, technology, engineering, and math concepts for beginners and early learners.',
    topics: ['Basic Robotics', 'Scratch Programming', 'Electronics Basics', 'Scientific Method', 'Math & Logic'],
    tools: ['Arduino Starter', 'Scratch', 'Tinkercad'],
  },
  {
    Icon: Cpu,
    num: '02',
    label: 'Advanced Tech',
    title: 'Advanced Technology',
    desc: 'AI, IoT, and advanced coding for intermediate and senior learners ready for industry-level skills.',
    topics: ['Artificial Intelligence', 'Machine Learning', 'Python & JS', 'IoT Systems', 'Data Science'],
    tools: ['Raspberry Pi', 'Python', 'TensorFlow Lite'],
  },
  {
    Icon: Wrench,
    num: '03',
    label: 'Pre-Engineering',
    title: 'Pre-Engineering Track',
    desc: 'Industry-grade skills for students preparing for engineering, design, and innovation careers.',
    topics: ['PCB Design', 'CAD/CAM Modeling', 'Control Systems', 'Patent Process', 'Startup Ideation'],
    tools: ['AutoCAD', 'SolidWorks', 'KiCad'],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3 max-w-2xl leading-[1.2]">
            A structured path from curiosity to expertise.
          </h2>
          <p className="text-[13px] text-gray-400 mb-12 max-w-xl">
            Aligned with CBSE, ICSE, NEP 2020, IB, and Cambridge frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map(({ Icon, num, label, title, desc, topics, tools }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden flex flex-col bg-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-5" style={{ backgroundColor: '#EDEDED' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                    <Icon size={16} className="text-blue-500" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">{num}</span>
                </div>
                <p className="text-[10px] font-semibold text-blue-500 tracking-widest uppercase mb-1">{label}</p>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mb-3">Topics</p>
                <ul className="space-y-2 mb-5">
                  {topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-[12px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mb-2">Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map(t => (
                      <span key={t} className="text-[11px] font-medium text-blue-500 rounded-full px-2.5 py-1"
                        style={{ backgroundColor: '#eff6ff' }}>
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

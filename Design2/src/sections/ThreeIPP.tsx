import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, Rocket, Wrench, FileText } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: '01',
    Icon: Lightbulb,
    title: 'Ideation',
    desc: 'Students identify real-world problems and brainstorm original solutions under expert mentorship.',
  },
  {
    num: '02',
    Icon: Sparkles,
    title: 'Innovation',
    desc: 'Ideas are refined into structured innovation frameworks through research, design thinking, and iteration.',
  },
  {
    num: '03',
    Icon: Rocket,
    title: 'Incubation',
    desc: 'Promising projects enter an incubation phase with business mentoring and startup ecosystem exposure.',
  },
  {
    num: '04',
    Icon: Wrench,
    title: 'Prototyping',
    desc: 'Students build working hardware and software prototypes using the STEM lab infrastructure.',
  },
  {
    num: '05',
    Icon: FileText,
    title: 'Patenting',
    desc: 'Final innovations are guided through the full IP filing process — student inventors, real patents.',
  },
];

export function ThreeIPP() {
  return (
    <section id="programs" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">3IPP Framework</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3 max-w-2xl leading-[1.2]">
            From classroom idea to filed patent.
          </h2>
          <p className="text-[13px] text-gray-400 mb-12 max-w-xl">
            Our proprietary 5-stage innovation pipeline transforms every student into an inventor.
          </p>
        </motion.div>

        {/* Desktop: horizontal pipeline */}
        <div className="hidden md:flex items-start gap-0 relative">
          {/* connector line */}
          <div className="absolute top-[28px] left-[36px] right-[36px] h-px bg-gray-200 -z-0" />

          {steps.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              className="flex-1 flex flex-col items-center text-center px-4 relative z-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                <Icon size={18} className="text-blue-500" />
              </div>
              <span className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase mb-1">{num}</span>
              <h3 className="text-[13px] font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-[11.5px] text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="flex flex-col gap-4 md:hidden">
          {steps.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              className="flex gap-4 rounded-2xl p-5 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#EDEDED' }}>
                <Icon size={15} className="text-blue-500" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase mb-0.5">{num}</p>
                <h3 className="text-[13px] font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

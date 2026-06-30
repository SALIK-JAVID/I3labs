import { motion } from 'framer-motion';
import { Layers, Lightbulb, TrendingUp } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  {
    num: '01',
    Icon: Layers,
    title: 'End-to-End STEM Lab Solutions',
    description: 'We offer a complete turnkey solution to set up modern STEM, Robotics, and AI labs in institutions.',
    items: [
      'Advanced Equipment & Kit Supply',
      'State-of-the-Art Lab Interior Design',
      'Staff & Student Hands-On Training',
      'Dedicated LMS Software Integration',
    ],
  },
  {
    num: '02',
    Icon: Lightbulb,
    title: 'Ideation & Innovation (3IPP)',
    description: 'Nurturing student ideas into real-world patented prototypes and technology-focused innovations.',
    items: [
      'Project Development & Mentoring',
      'Incubation & Startup Pitching Support',
      'Patenting & Trademark Filing Assist',
      'National & Global Competition Support',
    ],
  },
  {
    num: '03',
    Icon: TrendingUp,
    title: 'Lab Augmentation & Support',
    description: 'Upgrading existing labs and skills to align with the latest industry trends and developments.',
    items: [
      'Lab Equipment & Component Augmentation',
      'Trainer & Faculty Skill Updation',
      'Advanced R&D Projects Mentoring',
      'Continuous Year-Round Technical Support',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Our Core Services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-12 max-w-2xl leading-[1.2]">
            Comprehensive STEM offerings for every institution.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="rounded-2xl p-6 flex flex-col"
              style={{ backgroundColor: '#EDEDED' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
                  <s.Icon size={16} className="text-blue-500" />
                </div>
                <span className="text-[11px] font-medium text-blue-500">{s.num}</span>
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-2 mt-auto">
                {s.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-[12px] text-gray-600">
                    <span className="text-blue-400 shrink-0 mt-px">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

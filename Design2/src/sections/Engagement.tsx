import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tiers = [
  {
    name: 'Essentials',
    tag: 'Starter',
    desc: 'Perfect for schools setting up their first STEM lab.',
    highlight: false,
    items: [
      'Basic Lab Setup & Design',
      'Starter Kit Supply',
      'Foundational Curriculum Access',
      'Initial Teacher Training',
      'Basic LMS Access',
      'Annual Review Support',
    ],
  },
  {
    name: 'Growth',
    tag: 'Most Popular',
    desc: 'The complete innovation lab experience for growth-stage institutions.',
    highlight: true,
    items: [
      'Full STEM Lab Turnkey Setup',
      'Advanced Equipment Supply',
      'Full Curriculum + NEP Aligned',
      'Quarterly Teacher Workshops',
      'Full LMS + Analytics Dashboard',
      'Student Competition Support',
      '3IPP Ideation Program',
      'Annual Innovation Festival',
    ],
  },
  {
    name: 'Premium',
    tag: 'Enterprise',
    desc: 'For institutions pursuing R&D, patents, and global recognition.',
    highlight: false,
    items: [
      'All Growth Features Included',
      'R&D Lab Infrastructure',
      'Patent & IP Filing Support',
      'Startup Incubation Access',
      'International Competition Entry',
      'Dedicated Trainer On-Site',
      'Custom Curriculum Modules',
      'Global Certification Pathways',
    ],
  },
];

export function Engagement() {
  return (
    <section id="engagement" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Engagement Models</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3 max-w-2xl leading-[1.2]">
            Choose the right partnership level.
          </h2>
          <p className="text-[13px] text-gray-400 mb-12 max-w-xl">
            Every institution is different. Our models flex to your size, goals, and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map(({ name, tag, desc, highlight, items }, i) => (
            <motion.div
              key={name}
              className={`rounded-2xl p-6 flex flex-col ${
                highlight ? 'bg-gray-900 text-white' : 'bg-[#f0f0ee]'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-[15px] font-semibold ${highlight ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
                  <span className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                    highlight
                      ? 'bg-blue-500 text-white'
                      : 'text-blue-500 bg-blue-50'
                  }`}>
                    {tag}
                  </span>
                </div>
                <p className={`text-[12px] leading-relaxed ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-[12px]">
                    <Check size={12} className={`shrink-0 mt-0.5 ${highlight ? 'text-blue-400' : 'text-blue-500'}`} strokeWidth={2.5} />
                    <span className={highlight ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto flex items-center justify-center rounded-full py-3 text-[12.5px] font-medium transition-colors ${
                  highlight
                    ? 'bg-blue-500 text-white hover:bg-blue-400'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

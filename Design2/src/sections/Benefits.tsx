import { motion } from 'framer-motion';
import { GraduationCap, Award, School, Heart } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const quadrants = [
  {
    Icon: GraduationCap,
    title: 'For Students',
    tagline: 'Build the skills that matter.',
    items: [
      'Hands-on STEM learning & experimentation',
      'Creativity, logic & critical innovation',
      '3IPP ideation-to-patent support',
      'National & international competitions',
    ],
  },
  {
    Icon: Award,
    title: 'For Teachers',
    tagline: 'Grow alongside your students.',
    items: [
      'Professional upskilling & development',
      'Innovative teaching practices & pedagogy',
      'Cutting-edge kits, software & resources',
      'Real-time student progress tracking',
    ],
  },
  {
    Icon: School,
    title: 'For Schools',
    tagline: 'Elevate your institution.',
    items: [
      'Modern AI & robotics infrastructure',
      'Enhanced global reputation & branding',
      'Continuous faculty development',
      'Annual innovation festivals',
    ],
  },
  {
    Icon: Heart,
    title: 'For Parents',
    tagline: "Invest in tomorrow's leaders.",
    items: [
      'Early exposure to advanced tech skills',
      'Logical & computational thinking',
      'Adaptability to emerging technologies',
      'Strong foundations for future careers',
    ],
  },
];

export function Benefits() {
  return (
    <section id="why-us" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Ecosystem Benefits</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-12 leading-[1.2]">
            Built for every stakeholder in education.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {quadrants.map(({ Icon, title, tagline, items }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#EDEDED' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-300/40">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900">{title}</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">{tagline}</p>
                </div>
              </div>

              {/* Bullets */}
              <div className="px-6 py-5">
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-[12.5px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

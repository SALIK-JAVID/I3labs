import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, BookOpen, BarChart3, Trophy } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    <section id="why-partner" className="py-24 px-6 sm:px-12 md:px-20 lg:px-28" style={{ backgroundColor: '#f0f0ee' }}>
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-[11px] font-medium text-blue-500 tracking-widest uppercase mb-4">Why Partner With Us</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.2]">
              The complete STEM ecosystem, not just equipment.
            </h2>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-sm">
              i3 Labs goes beyond hardware. We integrate curriculum, technology, training, certifications, and ongoing support into a single seamless partner relationship.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">150+</p>
                <p className="text-[11px] text-gray-400">Institutions</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">50K+</p>
                <p className="text-[11px] text-gray-400">Students</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">16+</p>
                <p className="text-[11px] text-gray-400">Years</p>
              </div>
            </div>
          </motion.div>

          {/* Right — feature rows */}
          <div className="flex flex-col gap-4">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="flex gap-4 rounded-2xl p-5"
                style={{ backgroundColor: '#f0f0ee' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={15} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

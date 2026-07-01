import { motion } from 'framer-motion';
import { GraduationCap, Award, School, Heart } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG     = 'transparent';
const CARD   = '#0f0f1c';
const BORDER = 'rgba(255,255,255,0.05)';

const quadrants = [
  {
    Icon: GraduationCap,
    title: 'For Students',
    tagline: 'Build the skills that matter.',
    image: '/benefit_students.png',
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
    image: '/benefit_teachers.png',
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
    image: '/benefit_schools.png',
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
    image: '/benefit_parents.png',
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
    <section id="why-us" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Ecosystem Benefits</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-12 leading-[1.2]">
            Built for every stakeholder in education.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {quadrants.map(({ Icon, title, tagline, items, image }, i) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden border card-glow flex flex-col group"
              style={{ backgroundColor: CARD, borderColor: BORDER }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              {/* Cover Image */}
              <div className="relative h-36 flex items-center justify-center overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1c] via-[#0f0f1c]/50 to-transparent" />
                <div className="relative z-10 w-9 h-9 rounded-xl border flex items-center justify-center backdrop-blur-md" style={{ backgroundColor: 'rgba(15,23,42,0.4)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <Icon size={14} className="text-blue-400" />
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="px-6 pt-5 pb-2">
                <h3 className="text-[13.5px] font-semibold text-white">{title}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{tagline}</p>
              </div>

              {/* Bullets */}
              <div className="px-6 pb-5 pt-2 flex-1 flex flex-col justify-between">
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-[12.5px] text-slate-400">
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

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG = 'transparent';
const CARD = '#0f0f1c';
const BORDER = 'rgba(255,255,255,0.05)';

const services = [
  {
    num: '01',
    Icon: Layers,
    title: 'End-to-End STEM Lab Solutions',
    description: 'We offer a complete turnkey solution to set up modern STEM, Robotics, and AI labs in institutions.',
    image: '/service_labs.png',
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
    image: '/service_innovation.png',
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
    image: '/service_augmentation.png',
    items: [
      'Lab Equipment & Component Augmentation',
      'Trainer & Faculty Skill Updation',
      'Advanced R&D Projects Mentoring',
      'Continuous Year-Round Technical Support',
    ],
  },
];

export function Services() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: lineRef.current, start: 'top 85%', once: true },
      }
    );
  }, []);

  return (
    <section id="services" className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      style={{ backgroundColor: BG }}>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease }}
        >
          <p className="text-[11px] font-medium text-blue-400 tracking-widest uppercase mb-4">Our Core Services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-5 max-w-2xl leading-[1.2]">
            Comprehensive STEM offerings for every institution.
          </h2>
          {/* Animated underline */}
          <div ref={lineRef} className="h-px w-full mb-12 rounded-full"
            style={{ background: 'linear-gradient(to right, rgba(59,130,246,0.6), transparent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="rounded-2xl overflow-hidden flex flex-col border card-glow group"
              style={{ backgroundColor: CARD, borderColor: BORDER }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              {/* Cover Image */}
              <div className="relative h-36 flex items-center justify-center overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1c] via-[#0f0f1c]/55 to-transparent" />
                <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg border flex items-center justify-center backdrop-blur-md" style={{ backgroundColor: 'rgba(15,23,42,0.4)', borderColor: 'rgba(255,255,255,0.08)' }}>
                    <s.Icon size={14} className="text-blue-400" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase px-2 py-0.5 rounded-full backdrop-blur-md border border-white/5" style={{ backgroundColor: 'rgba(15,23,42,0.4)' }}>{s.num}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[14px] font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[12px] text-slate-400 leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2 mt-auto">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-slate-400">
                      <span className="text-blue-400 shrink-0 mt-px">→</span>
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

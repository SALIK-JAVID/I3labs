import React from 'react';
import { Section } from '../components/Section';
import { Home, UserX, Monitor, Clock, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const checklist = [
  {
    title: 'No Extra Infrastructure',
    description: 'We adapt your existing classrooms, computer labs, or science labs with flexible desks and modular kit storage.',
    icon: Home,
    color: 'text-orange-400 bg-orange-400/10'
  },
  {
    title: 'No Extra Manpower',
    description: 'i3 Labs deploys its own certified STEM trainers and project managers to handle lab deliveries and daily operations.',
    icon: UserX,
    color: 'text-blue-400 bg-blue-400/10'
  },
  {
    title: 'Full LMS Provided',
    description: 'We install custom learning platforms accessible by teachers, students, and parents to track learning paths.',
    icon: Monitor,
    color: 'text-purple-400 bg-purple-500/10'
  },
  {
    title: 'No Timetable Disruption',
    description: 'Our curriculum is designed to fit right inside your existing computer science, work education, or hobby club periods.',
    icon: Clock,
    color: 'text-emerald-400 bg-emerald-500/10'
  },
  {
    title: 'No Extra IT Hardware',
    description: 'All processing and robotics nodes (laptops, micro-controllers, sensors) are supplied directly within our kits.',
    icon: Cpu,
    color: 'text-pink-400 bg-pink-500/10'
  }
];

export const Readiness: React.FC = () => {
  return (
    <Section id="readiness" bgType="circuit" className="relative">
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 bg-brand-orange/5 blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Frictionless Integration
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Readiness Checklist
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-body">
          We guarantee <span className="text-brand-orange font-bold font-heading">Zero disruption</span> to your existing setup. Here is how we ensure seamless operations from day one:
        </p>
      </div>

      {/* Grid checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {checklist.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#112437]/35 flex flex-col items-center text-center hover:border-brand-orange/20 hover:shadow-[0_0_25px_rgba(244,124,32,0.15)] transition-all duration-300 relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
            >
              {/* Checkmark tag */}
              <div className="absolute top-3 right-3 text-brand-orange opacity-40 group-hover:opacity-100 transition-opacity">
                <CheckCircle size={16} />
              </div>

              {/* Icon */}
              <div className={`p-4 rounded-full mb-5 ${item.color} group-hover:scale-105 transition-transform duration-300 border border-white/5`}>
                <Icon size={24} />
              </div>

              {/* Text content */}
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed font-body flex-grow">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

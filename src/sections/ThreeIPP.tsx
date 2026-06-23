import React from 'react';
import { Section } from '../components/Section';
import { Lightbulb, Wrench, Rocket, Cpu, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Ideation',
    subtitle: 'Problem Solving & Brainstorming',
    description: 'Students identify real-world challenges and brainstorm innovative tech-based solutions under the guidance of qualified scientists and research engineers.',
    icon: Lightbulb,
    color: 'from-orange-500 to-amber-500',
    glow: 'shadow-[0_0_20px_rgba(244,124,32,0.3)]',
  },
  {
    num: '02',
    title: 'Innovation',
    subtitle: 'System Design & Research',
    description: 'Translating concepts into technical definitions. Students perform literature reviews, block diagrams design, and formulate core system engineering.',
    icon: Cpu,
    color: 'from-blue-500 to-indigo-500',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
  },
  {
    num: '03',
    title: 'Incubation',
    subtitle: 'Validation & Startup Pitching',
    description: 'Nurturing projects as potential business models. We teach students viability, resource management, market demands, and presentation skills.',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
  },
  {
    num: '04',
    title: 'Prototyping',
    subtitle: 'Hardware & Code Development',
    description: 'Building physical models. Students use 3D printers, laser cutters, PCB boards, and code engines to compile working iterations of their projects.',
    icon: Wrench,
    color: 'from-emerald-500 to-teal-500',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
  },
  {
    num: '05',
    title: 'Patenting',
    subtitle: 'Intellectual Property Protection',
    description: 'Securing legal ownership. Our legal and engineering team helps students search patents, draft specifications, and file patents with official IPO agencies.',
    icon: FileText,
    color: 'from-rose-500 to-red-500',
    glow: 'shadow-[0_0_20px_rgba(244,63,94,0.3)]',
  },
];

export const ThreeIPP: React.FC = () => {
  return (
    <Section id="3ipp" bgType="navy" className="relative">
      
      {/* Background graphic */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Our Proprietary Framework
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          The 3IPP Innovation Flow
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base font-body">
          We transform raw student ideas into tangible, patented technologies through a structured five-step scientific process.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Horizontal Connector Line (Large screens) */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-slate-800 -translate-y-1/2 hidden xl:block -z-10">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-orange via-purple-500 to-rose-500"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Circle Icon Indicator */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} p-[1px] flex items-center justify-center ${step.glow} group-hover:scale-105 transition-transform duration-300 relative z-10`}>
                    <div className="w-full h-full bg-[#112437] rounded-full flex items-center justify-center text-white group-hover:text-transparent group-hover:bg-transparent transition-all duration-300">
                      <Icon size={30} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold font-heading flex items-center justify-center border border-brand-darkBg shadow-md">
                    {step.num}
                  </span>

                  {/* Connect arrow for smaller screens */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-8 text-slate-800 hidden xl:block">
                      <ChevronRight size={20} className="text-slate-700 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Text Description */}
                <div className="glass-panel p-5 rounded-2xl w-full flex-grow border border-white/5 bg-[#112437]/30 group-hover:border-slate-700/50 transition-colors">
                  <h3 className="text-lg font-bold font-heading text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-orange mb-3 block font-heading">
                    {step.subtitle}
                  </span>
                  <p className="text-slate-350 text-xs leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

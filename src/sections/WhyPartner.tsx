import React from 'react';
import { Section } from '../components/Section';
import { Award, Package, Trophy, Landmark, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Proprietary 3IPP Mentorship',
    description: 'We connect student groups with qualified scientists and research engineers, mentoring them through ideation up to filing utility patents.',
    icon: Award,
    color: 'text-brand-orange bg-brand-orange/10'
  },
  {
    title: 'Anytime, Anywhere Service & Support',
    description: 'Our dedicated WhatsApp groups, LMS forums, and field engineers ensure that lab issues are resolved within 24 hours of ticketing.',
    icon: HelpCircle,
    color: 'text-blue-400 bg-blue-500/10'
  },
  {
    title: 'Custom In-House Kit Development',
    description: 'We design and manufacture our own hardware shields, sensor boards, and mechanical chassis, matching local academic curriculum needs.',
    icon: Package,
    color: 'text-emerald-400 bg-emerald-500/10'
  },
  {
    title: 'Competition & Career Preparation',
    description: 'Empowering students to compete in world-renowned STEM Olympiads (WRO, TechnoXian, Hackathons) and build portfolios for global universities.',
    icon: Trophy,
    color: 'text-amber-400 bg-amber-500/10'
  },
  {
    title: 'Liaison with Govt. & Funding Agencies',
    description: 'We help institutions document and submit reports to claim government innovation grants, incubate student ideas, and secure patents.',
    icon: Landmark,
    color: 'text-purple-400 bg-purple-500/10'
  }
];

export const WhyPartner: React.FC = () => {
  return (
    <Section id="why-partner" bgType="dark" className="relative">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column: Text block */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
            Our Edge
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight mb-6">
            Why Partner with i3 Labs?
          </p>
          <div className="w-16 h-1 bg-brand-orange mb-6 rounded-full"></div>
          <p className="text-slate-350 text-sm md:text-base leading-relaxed mb-8 font-body">
            i3 Labs goes beyond simply supplying school equipment. We build a sustainable, self-evolving, and high-prestige innovation ecosystem that raises your institution’s standing globally.
          </p>
          <div className="p-4 bg-[#112437]/30 border border-white/5 rounded-2xl backdrop-blur-md">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-1 font-heading">
              Key Focus
            </span>
            <p className="text-xs text-slate-400">
              Creating high-impact patent profiles for school children before they step into university.
            </p>
          </div>
        </motion.div>

        {/* Right column: Feature List */}
        <div className="lg:col-span-7 space-y-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                className="glass-panel p-5 rounded-2xl flex items-start gap-5 border border-white/5 bg-[#112437]/25 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(244,124,32,0.15)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className={`p-3 rounded-xl shrink-0 ${feature.color}`}>
                  <Icon size={22} />
                </div>
                <div className="flex-grow font-body">
                  <h3 className="text-md sm:text-lg font-bold text-white mb-1.5 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {feature.description}
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

import React from 'react';
import { Section } from '../components/Section';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: 1,
    title: 'STEM Lab Installation & Interior Design',
    description: 'Procuring, setting up, and branding the physical lab environment inside the institution with custom workbench layouts.',
    icon: Settings
  },
  {
    num: 2,
    title: 'Trainer Allocation (Full/Part-Time)',
    description: 'Deploying dedicated, certified STEM engineers to the campus to run classes and manage daily lab logistics.',
    icon: Settings
  },
  {
    num: 3,
    title: 'LMS Onboarding & Curriculum Inclusion',
    description: 'Setting up logins for students/teachers on our LMS platform and scheduling weekly periods in the academic timetable.',
    icon: Settings
  },
  {
    num: 4,
    title: 'Teacher Training & Capacity Building',
    description: 'Empowering the institution’s existing faculty with basic and advanced training to co-deliver and monitor STEM programs.',
    icon: Settings
  },
  {
    num: 5,
    title: 'Ideation, Innovation & Prototyping (3IPP)',
    description: 'Engaging students in active brainstorming to build mockups, circuit designs, and physical prototypes of their ideas.',
    icon: Settings
  },
  {
    num: 6,
    title: 'Incubation, Startup pitches & Competitions',
    description: 'Supporting students to present their ideas at National Hackathons and prepare for the Annual Innovation Festival.',
    icon: Settings
  },
  {
    num: 7,
    title: 'Year-Long Technical Support & Lab Augmentation',
    description: 'Conducting regular doubt-clearing classes, component replenishments, and upgradation of lab tools for upcoming terms.',
    icon: Settings
  }
];

export const Implementation: React.FC = () => {
  return (
    <Section id="programs" bgType="navy" className="relative">
      
      {/* Decorative Rotating Background Gears */}
      <div className="absolute top-1/4 -right-16 opacity-5 pointer-events-none hidden md:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          <Settings size={280} className="text-brand-orange" />
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 -left-16 opacity-5 pointer-events-none hidden md:block">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <Settings size={240} className="text-white" />
        </motion.div>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Ecosystem Deployment
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Implementation Plan
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-body">
          Our structured roadmap ensures a seamless onboarding and operational setup within your school without disrupting existing schedules.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-8 font-body">
        
        {/* Central Vertical Connector Line */}
        <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-[2px] bg-slate-800 -translate-x-1/2">
          <motion.div
            className="h-full bg-gradient-to-b from-brand-orange via-brand-orangeLight to-brand-navyLight"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between">
                
                {/* Timeline Icon Node (Gear) */}
                <div className="absolute left-8 sm:left-1/2 top-1.5 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-15 flex items-center justify-center">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-brand-darkBg border border-brand-orange/40 flex items-center justify-center text-brand-orange shadow-md glow-orange group hover:border-brand-orange"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12 + idx * 2, repeat: Infinity, ease: 'linear' }}
                      className="flex items-center justify-center"
                    >
                      <Settings size={18} />
                    </motion.div>
                  </motion.div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-brand-orange text-white text-[9px] font-bold flex items-center justify-center border border-brand-darkBg">
                    {step.num}
                  </span>
                </div>

                {/* Left Side Content (Placeholder on desktop if item is on the right) */}
                <div className={`w-full sm:w-[45%] pl-16 sm:pl-0 ${isLeft ? 'sm:text-right' : 'sm:order-3 sm:text-left'}`}>
                  {isLeft && (
                    <motion.div
                      className="glass-panel p-5 rounded-2xl border border-white/5 bg-[#112437]/35"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-wider font-heading block mb-1">
                        Step 0{step.num}
                      </span>
                      <h3 className="text-md sm:text-lg font-bold text-white mb-2 font-heading">
                        {step.title}
                      </h3>
                      <p className="text-slate-350 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Center Gap spacer */}
                <div className="hidden sm:block w-[8%] sm:order-2"></div>

                {/* Right Side Content (Placeholder on desktop if item is on the left) */}
                <div className={`w-full sm:w-[45%] pl-16 sm:pl-0 ${!isLeft ? 'sm:text-left' : 'sm:order-1 sm:text-right'}`}>
                  {!isLeft && (
                    <motion.div
                      className="glass-panel p-5 rounded-2xl border border-white/5 bg-[#112437]/35"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <span className="text-xs font-bold text-brand-orange uppercase tracking-wider font-heading block mb-1">
                        Step 0{step.num}
                      </span>
                      <h3 className="text-md sm:text-lg font-bold text-white mb-2 font-heading">
                        {step.title}
                      </h3>
                      <p className="text-slate-350 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

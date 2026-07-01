import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';

const teamData = {
  leadership: [
    { name: 'Dr. Afshan', role: 'Director', detail: 'PhD VLSI Design, Research Lead', initial: 'DA' },
    { name: 'Er. Yousman', role: 'Chief Technology Officer (CTO)', detail: 'Embedded Systems & AI Specialist', initial: 'EY' },
    { name: 'Er. Farhat', role: 'Chief Operating Officer (COO)', detail: 'Operations & Academic Collaborations', initial: 'EF' },
  ],
  management: [
    { name: 'Er. Abaan', role: 'Tech Operations Manager', detail: 'Lab logistics & Scheduling coordinator', initial: 'EA' },
    { name: 'Er. Moazam', role: 'R&D Manager', detail: 'Firmware design & Custom shields developer', initial: 'EM' },
    { name: 'Er. Toiba', role: 'Project Engineer', detail: 'Curriculum mapping & LMS deployment', initial: 'ET' },
  ],
  leadsAndTrainers: [
    { name: 'Er. Sabura', role: 'Lead Trainer', detail: 'Expert in LEGO Robotics & Block Coding', initial: 'ES' },
    { name: 'Er. Irtiqa', role: 'Lead Trainer', detail: 'Specialist in IoT Projects & Tinkercad', initial: 'EI' },
    { name: 'Er. Rabiya', role: 'STEM Solutions Lead', detail: 'Client liaison & onboarding support', initial: 'ER' },
    { name: 'Er. Tabin', role: 'STEM Solutions Lead', detail: 'Supply chain & kit configurations', initial: 'ET' },
    { name: 'Er. Azraw', role: 'STEM Trainer', detail: 'On-site school training & basic coding', initial: 'EA' },
  ]
};

export const Team: React.FC = () => {
  return (
    <Section id="team" bgType="dark" className="relative">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Our Team
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          The Minds Behind i3 Labs
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Tier 1: Leadership */}
        <div>
          <h3 className="text-xs font-bold font-heading text-brand-orange uppercase tracking-wider mb-6 text-center lg:text-left">
            Core Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.leadership.map((member, idx) => (
              <Card key={idx} delay={idx * 0.1} className="flex items-center gap-5 bg-[#112437]/35 border border-white/5">
                <div className="w-16 h-16 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl font-bold font-heading shrink-0 select-none">
                  {member.initial}
                </div>
                <div className="flex-grow font-body">
                  <h4 className="text-md sm:text-lg font-bold text-white font-heading">{member.name}</h4>
                  <p className="text-xs font-semibold text-brand-orange uppercase tracking-wider mt-0.5">{member.role}</p>
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{member.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tier 2: Management & R&D */}
        <div>
          <h3 className="text-xs font-bold font-heading text-blue-400 uppercase tracking-wider mb-6 text-center lg:text-left">
            Engineering & Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.management.map((member, idx) => (
              <Card key={idx} delay={idx * 0.1} className="flex items-center gap-5 bg-[#112437]/35 border border-white/5">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold font-heading shrink-0 select-none">
                  {member.initial}
                </div>
                <div className="flex-grow font-body">
                  <h4 className="text-md sm:text-lg font-bold text-white font-heading">{member.name}</h4>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5">{member.role}</p>
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{member.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tier 3: Leads & Trainers */}
        <div>
          <h3 className="text-xs font-bold font-heading text-purple-400 uppercase tracking-wider mb-6 text-center lg:text-left">
            STEM Operations & Training
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamData.leadsAndTrainers.map((member, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/5 bg-[#112437]/20 flex flex-col items-center text-center hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-md font-bold font-heading mb-4 group-hover:scale-105 transition-transform select-none">
                  {member.initial}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white font-heading">{member.name}</h4>
                <p className="text-[10px] font-semibold text-purple-405 uppercase tracking-wider mt-1">{member.role}</p>
                <p className="text-slate-400 text-[11px] mt-2 leading-relaxed flex-grow font-body">
                  {member.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Landmark, Briefcase, Award } from 'lucide-react';

const mentors = [
  {
    name: 'Prof. Shabir Ahmad',
    affiliation: 'University of Kashmir',
    dept: 'Department of Electronics & IT',
    role: 'Academic & VLSI Mentor',
    icon: Landmark,
    color: 'border-blue-500/20 text-blue-400'
  },
  {
    name: 'Dr. Mushtaq Ahmad',
    affiliation: 'NIT Srinagar',
    dept: 'Robotics & Control Systems Lab',
    role: 'R&D & Embedded Systems Advisor',
    icon: Award,
    color: 'border-brand-orange/20 text-brand-orange'
  },
  {
    name: 'Prof. Ruqiya Farooq',
    affiliation: 'Global Innovation Foundation (GIF)',
    dept: 'STEM Education Advisory Wing',
    role: 'Pedagogy & Curriculum Consultant',
    icon: Landmark,
    color: 'border-purple-500/20 text-purple-400'
  },
  {
    name: 'Er. Bilal Ahmed',
    affiliation: 'Tech Industry Veteran',
    dept: 'Ex-Senior Hardware Engineer (Intel / Analog Devices)',
    role: 'Industrial Product Incubation Advisor',
    icon: Briefcase,
    color: 'border-emerald-500/20 text-emerald-400'
  }
];

export const Mentors: React.FC = () => {
  return (
    <Section id="mentors" bgType="circuit">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Our Advisors
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Mentors & Board
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-405 mt-4 max-w-xl mx-auto text-sm md:text-base font-body">
          We are guided by leading minds in academia and high-tech industries, ensuring our curriculum remains state-of-the-art and globally aligned.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {mentors.map((mentor, idx) => {
          const Icon = mentor.icon;
          return (
            <Card 
              key={idx}
              delay={idx * 0.1}
              className={`flex flex-col text-center items-center justify-center p-6 border ${mentor.color} bg-[#112437]/35`}
            >
              <div className="w-12 h-12 rounded-full bg-brand-darkBg flex items-center justify-center border border-white/5 mb-4 shrink-0">
                <Icon size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1">
                {mentor.name}
              </h3>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-orange font-heading mb-3">
                {mentor.role}
              </span>
              <div className="w-8 h-[1px] bg-slate-800 mb-3"></div>
              <p className="text-xs text-white font-semibold font-body">
                {mentor.affiliation}
              </p>
              <p className="text-slate-400 text-[11px] mt-1 font-body leading-relaxed">
                {mentor.dept}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

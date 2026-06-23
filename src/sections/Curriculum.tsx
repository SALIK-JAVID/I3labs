import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Sparkles, Terminal, Activity, ChevronRight } from 'lucide-react';

const curriculums = [
  {
    tier: 'Foundation',
    level: 'Elementary & Middle School',
    methodology: 'Play / Discovery / Activity-based learning focusing on critical motor and logical skills.',
    topics: [
      'Block Coding Fundamentals',
      'Basic STEM Experiments',
      'LEGO Robots Programming',
      'Hands-on Experiential Learning',
      '3D Doodling & Spatial Artistry'
    ],
    tools: ['ScratchJr', 'Scratch', 'AceBott', 'Arduino Basic'],
    colorClass: 'border-brand-orange/30 hover:shadow-[0_0_35px_rgba(244,124,32,0.25)]',
    badgeClass: 'bg-brand-orange/15 text-brand-orange border-brand-orange/30',
    icon: Activity
  },
  {
    tier: 'Advanced Tech',
    level: 'Middle & High School',
    methodology: 'Transition from blocks to codes. Focuses on systems thinking and practical hardware projects.',
    topics: [
      'Block-to-Textual coding transition',
      'AI App Designing & Models',
      'Basic Mobile Robots building',
      'IoT smart projects compilation',
      'Autonomous Drone Basics'
    ],
    tools: ['Tinkercad', 'Blix Kits', 'Micro:bit', 'Python Basics'],
    colorClass: 'border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]',
    badgeClass: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    icon: Sparkles
  },
  {
    tier: 'Pre-Engineering',
    level: 'High School & University',
    methodology: 'Real-world engineering pipelines. Focuses on product design, commercial software, and R&D.',
    topics: [
      'Python Scripting & Algorithms',
      'Advanced Robotics & Artificial Intelligence',
      '3D Modeling & CAD Printing',
      'Smart City & Smart IoT Systems',
      'Humanoids & Advanced Aerial Drones'
    ],
    tools: ['NVIDIA Jetson', 'Python Standard', 'Google Edu', 'Raspberry Pi'],
    colorClass: 'border-purple-500/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
    badgeClass: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    icon: Terminal
  }
];

export const Curriculum: React.FC = () => {
  return (
    <Section id="curriculum" bgType="dark">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Learning Pathways
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Our STEM Curriculum
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {curriculums.map((curr, idx) => {
          const IconComponent = curr.icon;
          return (
            <Card 
              key={idx}
              delay={idx * 0.15}
              className={`flex flex-col h-full border bg-[#112437]/40 ${curr.colorClass}`}
            >
              {/* Top Section */}
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 text-xs font-bold font-heading uppercase tracking-wide rounded-full border ${curr.badgeClass} mb-3`}>
                  {curr.tier}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-brand-darkBg flex items-center justify-center text-slate-300 border border-white/5 shrink-0">
                    <IconComponent size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">{curr.tier} Curriculum</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">{curr.level}</p>
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <p className="text-xs text-slate-400 leading-relaxed italic bg-brand-darkBg/60 p-3 rounded-xl mb-6 font-body">
                "{curr.methodology}"
              </p>

              {/* Topics List */}
              <div className="mb-8 flex-grow">
                <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider mb-3">Key Focus Areas</h4>
                <ul className="space-y-2.5 font-body">
                  {curr.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs md:text-sm text-slate-350">
                      <ChevronRight size={14} className="text-brand-orange shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools tags */}
              <div className="border-t border-white/5 pt-5 mt-auto">
                <h4 className="text-[10px] font-bold font-heading text-slate-450 uppercase tracking-widest mb-3">Platforms & Hardware Tools</h4>
                <div className="flex flex-wrap gap-1.5">
                  {curr.tools.map((tool, toolIdx) => (
                    <span 
                      key={toolIdx}
                      className="px-2 py-1 text-[11px] font-semibold bg-[#112437] text-slate-350 rounded border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

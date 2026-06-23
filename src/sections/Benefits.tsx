import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { GraduationCap, Award, School, Heart, Sparkles, Check } from 'lucide-react';

export const Benefits: React.FC = () => {
  const quadrants = [
    {
      title: 'For Students',
      icon: GraduationCap,
      color: 'border-brand-orange/20',
      iconColor: 'text-brand-orange',
      bgGrad: 'from-brand-orange/5 to-transparent',
      items: [
        'Hands-on STEM Learning & Experimentation',
        'Creativity, Logic & Critical Innovation',
        'Collaboration, Leadership & Teamwork',
        'Future-Ready Industry-Aligned Skills',
        'Interdisciplinary Learning Applications',
        'Advanced Technical Problem Solving',
        '3IPP (Ideation-to-Patent) Support',
        'National & International Competitions'
      ]
    },
    {
      title: 'For Teachers',
      icon: Award,
      color: 'border-blue-500/20',
      iconColor: 'text-blue-400',
      bgGrad: 'from-blue-500/5 to-transparent',
      items: [
        'Professional Growth & Upskilling',
        'Innovative Teaching Practices & Pedagogy',
        'Exposure to Advanced STEM Curriculum',
        'Peer and Industry Networking Opportunities',
        'Real-Time Student Progress Tracking',
        'Cutting-Edge Lab Kits & Software Resources',
        'Advanced Student Skill Analytics'
      ]
    },
    {
      title: 'For Schools',
      icon: School,
      color: 'border-purple-500/20',
      iconColor: 'text-purple-400',
      bgGrad: 'from-purple-500/5 to-transparent',
      items: [
        'Innovative Modern Teaching Techniques',
        'AI & Robotics Structured Curriculum',
        'Enhanced Global Reputation & Branding',
        'Modern Infrastructure Implementation',
        'Continuous Faculty Development',
        'Annual Institutional Innovation Festivals'
      ]
    },
    {
      title: 'For Parents',
      icon: Heart,
      color: 'border-emerald-500/20',
      iconColor: 'text-emerald-400',
      bgGrad: 'from-emerald-500/5 to-transparent',
      items: [
        'Personalized Learning & Tech Paths',
        'Early Exposure to Advanced Technical Skills',
        'Logical, Critical & Computational Thinking',
        'Adaptability to Emerging Technologies',
        'Exposure to Future Job Landscapes',
        'Digital Literacy and Ethical AI Basics',
        'Strong Foundations in Basic Sciences'
      ]
    }
  ];

  return (
    <Section id="why-us" bgType="dark" className="relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Why Partner With Us
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Ecosystem Benefits
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid container with relative positioning for center badge */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Central badge for large screens */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex w-36 h-36 rounded-full bg-[#0b1622] border-2 border-brand-orange/40 items-center justify-center text-center font-heading text-white font-extrabold text-xs uppercase tracking-wider z-20 shadow-[0_0_35px_rgba(244,124,32,0.25)] select-none">
          <div className="absolute inset-1 rounded-full border border-white/5 animate-spin-slow"></div>
          <div className="flex flex-col items-center gap-1">
            <Sparkles size={16} className="text-brand-orange animate-pulse" />
            <span>Program<br/>Perks</span>
          </div>
        </div>

        {/* 4 Quadrants layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {quadrants.map((quad, idx) => {
            const Icon = quad.icon;
            // Adjust card paddings for large screen spacing around the center
            const spacingClasses = 
              idx === 0 ? 'lg:pr-12 lg:pb-12' : 
              idx === 1 ? 'lg:pl-12 lg:pb-12' : 
              idx === 2 ? 'lg:pr-12 lg:pt-12' : 'lg:pl-12 lg:pt-12';

            return (
              <Card 
                key={idx} 
                delay={idx * 0.1}
                className={`flex flex-col border ${quad.color} bg-gradient-to-br ${quad.bgGrad} bg-[#112437]/40 ${spacingClasses}`}
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-3 bg-brand-darkBg rounded-xl ${quad.iconColor} border border-white/5`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-white">
                    {quad.title}
                  </h3>
                </div>
                
                <ul className="space-y-2.5 font-body">
                  {quad.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

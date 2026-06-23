import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Layers, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesData = [
    {
      title: 'End-to-End STEM Lab Solutions',
      description: 'We offer a complete turnkey solution to set up modern STEM, Robotics, and AI labs in institutions.',
      icon: Layers,
      items: [
        'Advanced Equipment & Kit Supply',
        'State-of-the-Art Lab Interior Design',
        'Staff & Student Hands-On Training',
        'Dedicated LMS Software Integration'
      ],
      color: 'border-brand-orange/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(244,124,32,0.25)]'
    },
    {
      title: 'Ideation & Innovation (3IPP)',
      description: 'Nurturing student ideas into real-world patented prototypes and technology-focused innovations.',
      icon: Lightbulb,
      items: [
        'Project Development & Mentoring',
        'Incubation & Startup Pitching Support',
        'Patenting & Trademark Filing Assist',
        'National & Global Competition Support'
      ],
      color: 'border-blue-500/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]'
    },
    {
      title: 'Lab Augmentation & Support',
      description: 'Upgrading existing labs and skills to align with the latest industry trends and developments.',
      icon: TrendingUp,
      items: [
        'Lab Equipment & Component Augmentation',
        'Trainer & Faculty Skill Updation',
        'Advanced R&D Projects Mentoring',
        'Continuous Year-Round Technical Support'
      ],
      color: 'border-purple-500/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]'
    }
  ];

  return (
    <Section id="services" bgType="dark">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Our Core Services
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Comprehensive STEM Offerings
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card 
              key={index} 
              delay={index * 0.15} 
              className={`flex flex-col h-full border ${service.color} ${service.glowColor} bg-[#112437]/45`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-orange mb-6 border border-white/5">
                <IconComponent size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed font-body">
                {service.description}
              </p>
              
              <ul className="space-y-3 mt-auto font-body">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

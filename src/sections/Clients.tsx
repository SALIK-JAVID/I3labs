import React from 'react';
import { Section } from '../components/Section';
import { Marquee } from '../components/Marquee';
import { Landmark, GraduationCap } from 'lucide-react';

const clients = [
  'GCW Srinagar',
  'DYD IoT University of Kashmir',
  'PPS Srinagar',
  'AGS Uri',
  'Aakash Institute',
  'Firdousi E.M High School',
  'AGS Hajin',
  'Minto Circle',
  'IRIS Ganderbal'
];

export const Clients: React.FC = () => {
  const clientBadges = clients.map((name, idx) => {
    // Alternate icon types
    const Icon = idx % 2 === 0 ? Landmark : GraduationCap;
    return (
      <div 
        key={idx}
        className="px-6 py-4 glass-panel rounded-2xl flex items-center gap-3 border border-white/5 shadow-md hover:border-brand-orange/20 transition-all duration-300 select-none cursor-pointer"
      >
        <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
          <Icon size={16} />
        </div>
        <span className="text-white font-heading font-bold text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap">
          {name}
        </span>
      </div>
    );
  });

  return (
    <Section id="clients" bgType="dark" className="!py-16 md:!py-24">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Trusted Partners
        </h2>
        <p className="text-2xl md:text-4xl font-extrabold text-white font-heading leading-tight">
          Institutions We Have Powered
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* Double row scroll for professional effect */}
        <Marquee items={clientBadges} speed={30} />
        <Marquee items={[...clientBadges].reverse()} speed={35} reverse={true} />
      </div>
    </Section>
  );
};

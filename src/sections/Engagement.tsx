import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Check, X } from 'lucide-react';

const tiers = [
  {
    name: 'Essentials',
    tagline: 'Ideal for schools beginning their STEM journey.',
    features: [
      { name: 'Equipment Supply', status: 'Standard Kit Package' },
      { name: 'Scheduled Training', status: 'Monthly Field Visit' },
      { name: 'LMS Access', status: 'Students & Teachers' },
      { name: 'On-Campus Trainer', status: 'Remote / Ticketing only', negative: true },
      { name: 'Project Mentorship', status: 'Basic (Online Guidance)' },
      { name: 'Competition Support', status: 'Self-guided Kits' },
      { name: 'Ideation & Incubation', status: 'Not Included', negative: true },
      { name: 'Annual Restocking', status: 'Chargeable replacement', negative: true },
      { name: 'Govt. Scheme Linkup', status: 'Not Included', negative: true },
      { name: 'Progress Reporting', status: 'Term-end basic report' }
    ],
    cta: 'Inquire Now',
    recommended: false,
    colorClass: 'border-white/5 bg-[#112437]/25'
  },
  {
    name: 'Growth',
    tagline: 'Highly recommended for holistic STEM execution.',
    features: [
      { name: 'Equipment Supply', status: 'Advanced Kit Package' },
      { name: 'Scheduled Training', status: 'Bi-weekly On-Campus Sessions' },
      { name: 'LMS Access', status: 'Full Access + Parent Portal' },
      { name: 'On-Campus Trainer', status: 'Part-Time Dedicated Trainer' },
      { name: 'Project Mentorship', status: 'Full (3IPP Mentorship)' },
      { name: 'Competition Support', status: 'Hands-on Hackathon Prep' },
      { name: 'Ideation & Incubation', status: 'Ecosystem Validation' },
      { name: 'Annual Restocking', status: 'Standard Kit Replenishments' },
      { name: 'Govt. Scheme Linkup', status: 'Documentation Support' },
      { name: 'Progress Reporting', status: 'Monthly student analytics' }
    ],
    cta: 'Inquire Now',
    recommended: true,
    colorClass: 'border-brand-orange/40 bg-[#112437]/45 shadow-[0_0_35px_rgba(244,124,32,0.2)]'
  },
  {
    name: 'Premium',
    tagline: 'For institutions establishing global centers of excellence.',
    features: [
      { name: 'Equipment Supply', status: 'State-of-the-Art Labs' },
      { name: 'Scheduled Training', status: 'Weekly / On-Demand' },
      { name: 'LMS Access', status: 'Custom Branded Portal' },
      { name: 'On-Campus Trainer', status: 'Full-Time Resident Engineer' },
      { name: 'Project Mentorship', status: 'Research Scientist Guidance' },
      { name: 'Competition Support', status: 'Olympiad/Inspire Coaching' },
      { name: 'Ideation & Incubation', status: 'Utility Patent Filing Assist' },
      { name: 'Annual Restocking', status: 'Unlimited Replenishments' },
      { name: 'Govt. Scheme Linkup', status: 'Full Liaison Representation' },
      { name: 'Progress Reporting', status: 'Live Analytics Dashboard' }
    ],
    cta: 'Inquire Now',
    recommended: false,
    colorClass: 'border-purple-500/20 bg-[#112437]/25'
  }
];

export const Engagement: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="engagement" bgType="navy" className="relative">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 bg-brand-orange/5 blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Partnership Models
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Engagement Models
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 text-xs sm:text-sm font-body">
          * Detailed pricing plans and hardware lists shared on request.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch font-body">
        {tiers.map((tier, idx) => (
          <Card 
            key={idx}
            delay={idx * 0.15}
            className={`flex flex-col h-full border ${tier.colorClass} relative`}
          >
            {/* Recommended tag */}
            {tier.recommended && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-orange text-white text-[10px] font-bold tracking-widest uppercase font-heading shadow-md shadow-brand-orange/20">
                Recommended
              </span>
            )}

            {/* Header */}
            <div className="mb-6 border-b border-white/5 pb-6 text-center">
              <h3 className="text-xl font-bold font-heading text-white">{tier.name}</h3>
              <p className="text-xs text-slate-400 mt-2 min-h-[32px]">{tier.tagline}</p>
            </div>

            {/* Features list */}
            <div className="space-y-4 flex-grow mb-8 text-xs sm:text-sm">
              {tier.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-slate-400 font-medium">{feat.name}</span>
                  <div className="flex items-center gap-1.5 text-right font-semibold">
                    {feat.negative ? (
                      <>
                        <X size={14} className="text-red-400 shrink-0" />
                        <span className="text-slate-500 line-through text-xs">{feat.status}</span>
                      </>
                    ) : (
                      <>
                        <Check size={14} className="text-emerald-400 shrink-0" />
                        <span className="text-slate-200">{feat.status}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer button */}
            <button
              onClick={handleScrollToContact}
              className={`w-full py-3.5 rounded-xl font-bold font-heading transition-all duration-200 shadow-md ${tier.recommended ? 'bg-brand-orange text-white hover:bg-brand-orangeLight glow-orange' : 'bg-brand-navy border border-white/10 text-white hover:bg-white/5'}`}
            >
              {tier.cta}
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
};

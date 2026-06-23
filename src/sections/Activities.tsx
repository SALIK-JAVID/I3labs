import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const activitiesData = [
  {
    title: 'STEM Lab Setup',
    description: 'We install custom-made, state-of-the-art innovation environments in schools. This includes design, supply, layout optimization, safety planning, and software provisioning.',
    features: ['Custom interior branding', 'Acoustic & lighting advice', 'Tool boards & storage units', 'State-approved guidelines compliance'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Comprehensive Training Programs',
    description: 'We design intensive training tracks for both teachers and students, covering foundational and advanced tech modules (Robotics, IoT, Coding, AI, Drones).',
    features: ['Train-the-Trainer (TTT) workshops', 'Interactive LMS-backed courses', 'Step-by-step video guides', 'L1, L2, L3 certifications'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Advanced Lab Augmentation',
    description: 'Already have a basic lab? We augment it with advanced components (lidars, humanoids, compute devices) and supply annual replenishment kits.',
    features: ['AI edge boards (Jetson, MangoPi)', 'Custom shields and PCB kits', 'IoT sensors & actuator bundles', 'Continuous hardware replenishment'],
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'STEM Competitions & Engagement',
    description: 'We host and manage major student events like Hackathons, Buildathons, Ideathons, and Inventhons to spark competitive innovation and peer collaboration.',
    features: ['InventX & TechnoXian support', 'WRO (World Robot Olympiad) prep', 'Pitch decks & presentation reviews', 'National level recognition'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Incubation & Innovation Ecosystem',
    description: 'Transforming institutional labs into local startup hubs. We mentor student groups to build commercialized prototypes and teach them business logic.',
    features: ['Business plan models', 'Mentorship by scientists & engineers', 'Funding & VC presentation prep', 'Pitch event organization'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Patenting & Product Development',
    description: 'We guide students through the complex process of registering patents, trademarks, and copyrights for their original engineering solutions.',
    features: ['3IPP framework (Ideation to Patenting)', 'Prior-art search mentorship', 'Patent draft documentation', 'Government filing assistance'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
  },
];

export const Activities: React.FC = () => {
  return (
    <Section id="activities" bgType="circuit">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          What We Do
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Our Primary Activities
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="space-y-24 md:space-y-36">
        {activitiesData.map((activity, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Text column */}
              <motion.div 
                className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold font-heading text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                    Activity 0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-heading">
                  {activity.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 font-body text-sm md:text-base">
                  {activity.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body text-sm text-slate-400">
                  {activity.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orange shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image column */}
              <motion.div 
                className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Visual glow frame */}
                <div className="absolute inset-0 bg-brand-orange/10 rounded-2xl blur-xl -z-10 group-hover:bg-brand-orange/20 transition-colors"></div>
                <div className="relative border border-white/10 p-2 bg-brand-navy/60 backdrop-blur-md rounded-2xl overflow-hidden group">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>
    </Section>
  );
};

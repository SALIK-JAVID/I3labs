import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { CountUp } from '../components/CountUp';
import { Target, Eye, Building2, Calendar, Landmark, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 2010;

  const stats = [
    { label: 'Years of STEM Excellence', value: yearsActive, suffix: '+', Icon: Calendar },
    { label: 'Institutions Powered', value: 150, suffix: '+', Icon: Landmark },
    { label: 'Students Mentored', value: 50000, suffix: '+', Icon: Users },
    { label: 'Hackathons & Competitions', value: 35, suffix: '+', Icon: Trophy },
  ];

  const contents = [
    {
      title: 'Our Mission',
      text: 'Empowering learners of all ages with future-ready skills and technological fluency through AI, Robotics, Coding, and STEM — building logical thinking, problem-solving, and innovation to thrive in a digital world.',
      Icon: Target,
      color: 'from-brand-orange to-orange-600',
    },
    {
      title: 'Our Vision',
      text: 'To build globally aligned innovation ecosystems that transform educational institutions and universities into future-ready centers of excellence.',
      Icon: Eye,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Our Company',
      text: 'We deliver a complete AI, Robotics, and STEM innovation ecosystem for institutions and universities — integrating lab infrastructure, curriculum, teacher training, global certifications, and R&D mentorship.',
      Icon: Building2,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <Section id="about" bgType="navy">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Who We Are
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          Nurturing the Innovators of Tomorrow
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 3 cards: Mission, Vision, Company */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {contents.map((item, index) => (
          <Card key={index} delay={index * 0.15} className="flex flex-col h-full">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg glow-orange`}>
              <item.Icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-heading">{item.title}</h3>
            <p className="text-slate-300 leading-relaxed text-sm flex-grow font-body">
              {item.text}
            </p>
          </Card>
        ))}
      </div>

      {/* Counters Strip */}
      <motion.div 
        className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Glow behind stats */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-20 bg-brand-orange/5 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3">
                <stat.Icon size={20} />
              </div>
              <span className="text-3xl md:text-5xl font-extrabold font-heading text-white flex items-center justify-center">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </span>
              <p className="text-xs md:text-sm font-semibold text-slate-400 mt-2 font-heading tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

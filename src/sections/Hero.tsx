import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Cpu, Award, Network, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
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

  // Tech floating icons config
  const floatingIcons = [
    { Icon: Bot, top: '15%', left: '10%', delay: 0, color: 'text-brand-orange', size: 48, label: 'Robotics' },
    { Icon: Cpu, top: '25%', right: '12%', delay: 1, color: 'text-blue-400', size: 56, label: 'AI & IoT' },
    { Icon: Code, bottom: '25%', left: '15%', delay: 1.5, color: 'text-emerald-400', size: 44, label: 'Coding' },
    { Icon: Award, bottom: '20%', right: '18%', delay: 0.5, color: 'text-amber-400', size: 50, label: 'Patents' },
    { Icon: Network, top: '55%', left: '8%', delay: 2, color: 'text-purple-400', size: 40, label: 'IoT' },
  ];

  const alignments = [
    "CBSE", "ICSE", "NEP 2020", "IB", "Cambridge", "WRO", "Global Innovation"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-brand-darkBg">
      
      {/* 1. Background Grid and Circuit Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F47C20_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#1B3A57_1px,transparent_1px),linear-gradient(to_bottom,#1B3A57_1px,transparent_1px)] [background-size:80px_80px]"></div>
      
      {/* 2. Glowing Orbs in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-brand-orange/10 blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-brand-navyLight/30 blur-[80px] pointer-events-none"></div>
      
      {/* 3. Floating Icons with Parallax effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
            className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-300"
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 5 + idx,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <div className={`p-4 bg-brand-navy/60 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg ${item.color} glow-orange`}>
              <item.Icon size={item.size} />
            </div>
            <span className="text-[10px] tracking-wider font-bold text-slate-400 uppercase font-heading">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center pt-8">
        
        {/* Badges Container */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {["Since 2010", "MSME Registered", "Startup India"].map((badge, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-xs font-bold font-heading uppercase tracking-wider bg-brand-navy border border-brand-orange/30 text-brand-orange rounded-full shadow-md shadow-black/20"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Logo/Orb Title Graphic */}
        <motion.div
          className="relative mb-6 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-brand-orange/20 flex items-center justify-center bg-brand-navy/60 backdrop-blur-md relative group">
            <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">I3</span>
            {/* Orbiting dot */}
            <div className="absolute w-3 h-3 bg-brand-orange rounded-full animate-orbit" style={{
              animation: 'spin 4s linear infinite',
              transformOrigin: 'center center',
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: 'transparent'
            }}>
              <div className="absolute w-3.5 h-3.5 bg-brand-orange rounded-full -top-1.5 left-1/2 -translate-x-1/2 shadow-lg glow-orange-strong"></div>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nurturing Future <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orangeLight glow-text">
            Builders
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-350 max-w-3xl mb-10 leading-relaxed font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          An End-to-End STEM Solution Enterprise — Empowering institutions with AI, Robotics, Coding, IoT, Innovation & Patents.
          <span className="block mt-3 text-xs md:text-sm font-semibold text-brand-orange font-heading tracking-widest uppercase">
            Ideation • Innovation • Incubation
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-4 bg-brand-orange text-white text-base font-bold rounded-full hover:bg-brand-orangeLight transition-all duration-200 shadow-lg glow-orange hover:-translate-y-1"
          >
            Partner With Us
          </button>
          <button
            onClick={() => handleScrollTo('curriculum')}
            className="px-8 py-4 bg-brand-navy border border-white/10 text-white text-base font-bold rounded-full hover:bg-white/5 transition-all duration-200 hover:-translate-y-1 backdrop-blur-md"
          >
            Explore Programs
          </button>
        </motion.div>

        {/* Alignments */}
        <motion.div 
          className="w-full border-t border-white/5 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-4 font-heading">
            Globally Aligned & Recognized Curriculum
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-4xl mx-auto px-4">
            {alignments.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 text-xs font-semibold bg-[#112437] text-slate-300 rounded-lg border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Down arrow link indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.button 
          onClick={() => handleScrollTo('about')}
          className="text-slate-400 hover:text-brand-orange transition-colors duration-200 p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to about"
        >
          <ChevronDown size={28} />
        </motion.button>
      </div>
    </section>
  );
};

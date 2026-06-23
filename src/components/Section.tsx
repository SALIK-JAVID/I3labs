import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  bgType?: 'dark' | 'navy' | 'circuit' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bgType = 'navy' }) => {
  let bgClass = 'bg-brand-navy';
  if (bgType === 'dark') bgClass = 'bg-brand-darkBg';
  else if (bgType === 'gradient') bgClass = 'bg-gradient-to-b from-brand-darkBg via-brand-navy to-brand-darkBg';
  
  return (
    <motion.section
      id={id}
      className={`relative py-20 px-4 md:py-28 md:px-8 overflow-hidden ${bgClass} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {bgType === 'circuit' && (
        <>
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F47C20_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
          <div className="absolute inset-0 opacity-3 pointer-events-none bg-[linear-gradient(to_right,#1B3A57_1px,transparent_1px),linear-gradient(to_bottom,#1B3A57_1px,transparent_1px)] [background-size:64px_64px]"></div>
        </>
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

interface HexagonCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  delay?: number;
}

export const HexagonCard: React.FC<HexagonCardProps> = ({ title, items, icon, delay = 0 }) => {
  return (
    <motion.div
      className="relative w-full aspect-[1/1.1] max-w-[280px] sm:max-w-[320px] mx-auto group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Outer Glowing Hexagon Border (using padding hack) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 to-brand-navyLight/40 group-hover:from-brand-orange group-hover:to-brand-orangeLight transition-all duration-300 clip-hexagon p-[1px] glow-orange">
        {/* Inner Hexagon Container */}
        <div className="w-full h-full bg-[#112437] clip-hexagon flex flex-col justify-center items-center p-5 sm:p-6 text-center">
          <div className="mb-3 p-3 bg-brand-darkBg/80 rounded-full text-brand-orange group-hover:scale-110 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-md sm:text-lg font-bold mb-2 font-heading text-white">{title}</h3>
          <div className="w-10 h-[1.5px] bg-brand-orange mb-3"></div>
          <ul className="text-xs sm:text-sm text-slate-300 space-y-1 w-full max-h-[130px] overflow-y-auto no-scrollbar">
            {items.map((item, idx) => (
              <li key={idx} className="py-0.5 border-b border-white/5 last:border-0 opacity-80 hover:opacity-100 hover:text-brand-orange transition-colors duration-150">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: React.ReactNode[];
  speed?: number; // speed in seconds
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, speed = 25, reverse = false }) => {
  // Duplicate list to achieve seamless loop
  const doubledItems = [...items, ...items];

  return (
    <div className="overflow-hidden flex w-full relative py-6">
      {/* Fade overlay left */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-darkBg to-transparent z-10 pointer-events-none"></div>
      {/* Fade overlay right */}
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-darkBg to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex gap-8 md:gap-16 whitespace-nowrap shrink-0"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {doubledItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

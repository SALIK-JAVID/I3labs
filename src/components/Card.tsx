import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ className = '', children, delay = 0 }) => {
  return (
    <motion.div
      className={`glass-panel rounded-2xl p-6 md:p-8 transition-shadow duration-300 hover:border-brand-orange/40 glow-orange-hover ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

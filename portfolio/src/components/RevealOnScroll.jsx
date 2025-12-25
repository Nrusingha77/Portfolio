import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the component is visible
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
import React from 'react'
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation'
import RevealOnScroll from '@/components/RevealOnScroll';

const Project = () => { 
  return (
    <RevealOnScroll>
    <section id='projects'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ScrollAnimation />
      </motion.div>
    </section>
    </RevealOnScroll>
  )
}

export default Project
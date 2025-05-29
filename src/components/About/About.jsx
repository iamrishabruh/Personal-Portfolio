import React from 'react';
import { motion } from 'framer-motion';
import LinkedInBadge from '../LinkedInBadge/LinkedInBadge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="flex flex-col lg:flex-row items-start gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center"
            variants={itemVariants}
          >
            <div className="max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300">
              <LinkedInBadge />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-2/3"
            variants={itemVariants}
          >
            <div className="prose dark:prose-invert max-w-none">
              <motion.p 
                className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                I’m Rishabh Chouhan (rih-SHUHB). I’m a senior at Georgia State University studying Computer Science, and this fall I’ll begin my Master’s in Computer Science at Georgia Tech. I’m co-founder & CTO of Reachmind, a startup streamlining HR immigration workflows, and I just wrapped up a founding-engineer contract at Skincentric, a VC-backed skincare startup. I optimized large-scale data annotation pipelines at Outlier AI and built a proof-of-concept drug-interaction checker at Kaiser Permanente. I also designed campus-growth strategies as a Perplexity strategist and served as a Community Engagement Ambassador at Care Access. Right now I’m competing in the AERPAW challenge, developing 5G-powered drone applications. I thrive on bridging AI, systems engineering, and growth strategy to turn bold ideas into real impact.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
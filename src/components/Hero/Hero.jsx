import React from 'react';
import { motion } from 'framer-motion';
import LinkedInBadge from '../LinkedInBadge/LinkedInBadge';
import './Hero.css';

const Hero = () => {

  return (
    <div className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero__title">
          Rishabh (rih - SHUHB) Chouhan
        </h1>

        <div className="hero__main-content">
          <div className="hero__intro">
          </div>

          <div className="hero__right">
            <div className="hero__linkedin">
              <LinkedInBadge />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import LinkedInBadge from '../LinkedInBadge/LinkedInBadge';
import './Hero.css';

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEducationClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

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
            <p className="hero__description">
              Born in India and raised in Atlanta for 2 decades. 
              <br /><br />
              Diagnosed with Type 1 Diabetes in 2012. 
              <br /><br />
              I've always been driven by curiosity and a passion for learning. 
              <br /><br />
              To explore the "big three," I spent freshman year at UGA, completed my Bachelors at GSU in Computer Science, and now pursue my Masters in Computer Science at Georgia Tech. 
              <br /><br />
              The final goal in my education is a Doctor of Philosophy in Computer Science from UC Berkeley.
              <br /><br />
              Currently, I'm building <a href="https://reachmindllc.com" target="_blank" rel="noopener noreferrer" className="company-link">Reachmind</a>, a streamlined HR immigration workflow platform, and looking for beta users. I also work at <a href="https://careaccess.com" target="_blank" rel="noopener noreferrer" className="company-link">Care Access</a>, organizing community health initiatives for Lp(a) and pTau trials. I've worked as a Founding Engineer at <a href="https://skincentric.com" target="_blank" rel="noopener noreferrer" className="company-link">Skincentric</a>, a VC-backed personalized skincare platform. I was selected for <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="company-link">Perplexity's</a> AI Business Fellowship and Campus Strategist program to connect, learn, drive growth, and sharpen strategy.
              <br /><br />
              Previously worked at <a href="https://www.kaiserpermanente.org" target="_blank" rel="noopener noreferrer" className="company-link">Kaiser Permanente</a>, <a href="https://outlier.ai" target="_blank" rel="noopener noreferrer" className="company-link">Outlier AI</a>, <a href="https://www.walmart.com" target="_blank" rel="noopener noreferrer" className="company-link">Walmart</a>, <a href="https://www.starbucks.com" target="_blank" rel="noopener noreferrer" className="company-link">Starbucks</a>, and <a href="https://www.kumon.com" target="_blank" rel="noopener noreferrer" className="company-link">Kumon</a>. 
              <br /><br />
              One day, I aspire to work at the FBI or CIA.
            </p>
            <div className="hero__cta">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn--primary"
                onClick={scrollToContact}
              >
                Get in Touch
              </motion.button>
              <div className="hero__social">
                <a href="https://github.com/iamrishabruh" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
                <a href="mailto:rchouhan8@gatech.edu" className="social-icon">
                  <FaEnvelope />
                </a>
                <a href="https://docs.google.com/document/d/1SakbgqbsVfTRG0LEvArHYuL_DI5uE335T5cP2TNbZPE/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFileAlt />
                </a>
              </div>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__timeline">
              <div 
                className="timeline__item"
                onClick={() => handleEducationClick('https://www.usnews.com/best-colleges/georgia-institute-of-technology-1569')}
                onMouseEnter={() => setHoveredCard('gt')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/svg/gtsvg.svg" alt="Georgia Institute of Technology" className="timeline__logo" />
                <div className="timeline__content">
                  <h3>Georgia Institute of Technology</h3>
                  <p>2025 - Present</p>
                  <p>MS in Computer Science</p>
                </div>
                {hoveredCard === 'gt' && (
                  <div className="hover-text">Click to access</div>
                )}
              </div>
              <div 
                className="timeline__item"
                onClick={() => handleEducationClick('https://www.usnews.com/best-colleges/georgia-state-university-1574')}
                onMouseEnter={() => setHoveredCard('gsu')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/svg/gsusvg.svg" alt="Georgia State University" className="timeline__logo" />
                <div className="timeline__content">
                  <h3>Georgia State University</h3>
                  <p>2023 - 2025</p>
                  <p>BS in Computer Science</p>
                </div>
                {hoveredCard === 'gsu' && (
                  <div className="hover-text">Click to access</div>
                )}
              </div>
              <div 
                className="timeline__item"
                onClick={() => handleEducationClick('https://www.usnews.com/best-colleges/university-of-georgia-1598')}
                onMouseEnter={() => setHoveredCard('uga')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/svg/ugasvg.svg" alt="University of Georgia" className="timeline__logo" />
                <div className="timeline__content">
                  <h3>University of Georgia</h3>
                  <p>2022 - 2023</p>
                </div>
                {hoveredCard === 'uga' && (
                  <div className="hover-text">Click to access</div>
                )}
              </div>
              <div 
                className="timeline__item"
                onClick={() => handleEducationClick('https://www.usnews.com/education/best-high-schools/georgia/districts/forsyth-county-public-schools/south-forsyth-high-school-5903')}
                onMouseEnter={() => setHoveredCard('sfhs')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src="/svg/sfhssvg.svg" alt="South Forsyth High School" className="timeline__logo" />
                <div className="timeline__content">
                  <h3>South Forsyth High School</h3>
                  <p>2018 - 2022</p>
                </div>
                {hoveredCard === 'sfhs' && (
                  <div className="hover-text">Click to access</div>
                )}
              </div>
            </div>
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
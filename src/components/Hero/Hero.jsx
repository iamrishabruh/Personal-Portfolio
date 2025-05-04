import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import LinkedInBadge from '../LinkedInBadge/LinkedInBadge';
import './Hero.css';

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          {!isMobile && (
            <TypeAnimation
              sequence={[
                'I am Rishabh (rih - SHAHB) Chouhan.',
                1800,
                'Nice to meet you!',
                1500,
                'Scroll down to learn about my life.',
                3500
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                display: 'inline-block',
                fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
                color: 'var(--clr-fg)'
              }}
              repeat={Infinity}
            />
          )}
          {isMobile && (
            <span style={{ 
              display: 'inline-block',
              fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
              color: 'var(--clr-fg)'
            }}>
              Rishabh Chouhan
            </span>
          )}
        </h1>

        <div className="hero__main-content">
          <div className="hero__intro">
            <p className="hero__description">
              At South Forsyth High School, I pushed myself to graduate in the top 2% of my class all while learning to manage Type 1 Diabetes, diagnosed in February 2012. Mastering the art of precise measurements and relentless routines didn't just keep me healthy; it taught me the power of grit, adaptability, and planning under pressure. Those lessons carried me through a BS in Computer Science at GSU and now drive my work toward an MS at Georgia Tech.
              <br /><br />
              Seeing my immigrant parents stretch every dollar to keep our family afloat sparked my obsession with financial education. I founded the SFHS Finance & Investment Club, then the GSU AI FinTech Club, to demystify budgeting, investing, and wealth-building for over hundreds of peers—because real freedom comes from knowing how to make smart money decisions, not just chasing the next dollar. 
              <br /><br />
              Today, I channel that same energy into solutions that aim to simplify healthcare, finance, and technology for everyone.
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
                <a href="mailto:rchouhan.network@gmail.com" className="social-icon">
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
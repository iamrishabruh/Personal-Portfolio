import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme';
import { FaUser, FaBriefcase, FaProjectDiagram, FaTrophy, FaEnvelope, FaBirthdayCake, FaInfoCircle } from 'react-icons/fa';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import Tour from '../Tour/Tour';
import './Navbar.css';

const Navbar = ({ onPartyModeToggle }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState(null);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [showTour, setShowTour] = useState(false);

  const togglePartyMode = () => {
    setIsPartyMode(!isPartyMode);
    if (!isPartyMode) {
      document.documentElement.classList.add('party-mode');
    } else {
      document.documentElement.classList.remove('party-mode');
    }
    onPartyModeToggle();
  };

  const startTour = () => {
    setShowTour(true);
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (isPartyMode) {
        document.documentElement.classList.remove('party-mode');
        onPartyModeToggle();
      }
    };
  }, [isPartyMode, onPartyModeToggle]);

  const navItems = [
    { name: 'About', to: 'hero', icon: FaUser },
    { name: 'Experience', to: 'experience', icon: FaBriefcase },
    { name: 'Projects', to: 'projects', icon: FaProjectDiagram },
    { name: 'Achievements', to: 'achievements', icon: FaTrophy },
    { name: 'Contact', to: 'contact', icon: FaEnvelope },
  ];

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar__container">
          <div className="navbar__items">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className={`navbar__item ${activeSection === item.to ? 'active' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onSetActive={() => setActiveSection(item.to)}
                  onSetInactive={() => setActiveSection(null)}
                >
                  <span className="navbar__icon">
                    <item.icon />
                  </span>
                  <span className="navbar__tooltip">{item.name}</span>
                </ScrollLink>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="navbar__controls">
          <motion.button
            className="navbar__item"
            onClick={startTour}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="navbar__icon">
              <FaInfoCircle />
            </span>
            <span className="navbar__tooltip">Tour</span>
          </motion.button>

          <motion.button
            className="navbar__item"
            onClick={togglePartyMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="navbar__icon">
              <FaBirthdayCake />
            </span>
            <span className="navbar__tooltip">Party Mode</span>
          </motion.button>

          <motion.button
            className="navbar__item"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="navbar__icon">
              {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
            </span>
            <span className="navbar__tooltip">Theme</span>
          </motion.button>
        </div>
      </motion.nav>

      {showTour && <Tour onClose={() => setShowTour(false)} />}
    </>
  );
};

export default Navbar; 
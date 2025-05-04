import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../theme';
import { FaUser, FaBriefcase, FaProjectDiagram, FaTrophy, FaEnvelope, FaBirthdayCake, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import Tour from '../Tour/Tour';
import './Navbar.css';

const Navbar = ({ onPartyModeToggle }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState(null);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    return () => {
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

  const NavItem = ({ item }) => (
    <motion.div
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
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <span className="navbar__icon">
          <item.icon />
        </span>
        <span className="navbar__tooltip">{item.name}</span>
      </ScrollLink>
    </motion.div>
  );

  const ControlButton = ({ onClick, icon, tooltip }) => (
    <motion.button
      className="navbar__item"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="navbar__icon">
        {icon}
      </span>
      <span className="navbar__tooltip">{tooltip}</span>
    </motion.button>
  );

  return (
    <>
      <motion.nav
        className={`navbar ${isDarkMode ? 'dark' : 'light'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar__container">
          {/* Mobile Menu Button */}
          <motion.button
            className="navbar__mobile-toggle"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="navbar__icon">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </span>
          </motion.button>

          {/* Combined Navigation Items and Controls */}
          <div className="navbar__items">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
            <ControlButton onClick={startTour} icon={<FaInfoCircle />} tooltip="Tour" />
            <ControlButton onClick={togglePartyMode} icon={<FaBirthdayCake />} tooltip="Party Mode" />
            <ControlButton onClick={toggleTheme} icon={isDarkMode ? <BsSunFill /> : <BsMoonFill />} tooltip="Theme" />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="navbar__mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="navbar__mobile-items">
                {navItems.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
                <div className="navbar__mobile-controls">
                  <ControlButton onClick={startTour} icon={<FaInfoCircle />} tooltip="Tour" />
                  <ControlButton onClick={togglePartyMode} icon={<FaBirthdayCake />} tooltip="Party Mode" />
                  <ControlButton onClick={toggleTheme} icon={isDarkMode ? <BsSunFill /> : <BsMoonFill />} tooltip="Theme" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {showTour && <Tour onClose={() => setShowTour(false)} />}
    </>
  );
};

export default Navbar; 
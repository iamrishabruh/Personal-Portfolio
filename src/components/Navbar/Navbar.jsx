import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../theme';
import { FaBars, FaTimes, FaFileAlt, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onPartyModeToggle }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState(null);
  const [isPartyMode, setIsPartyMode] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1x2QxwMWGLz6qBj_gXmm5QUTAwrnLJYwLzrfUEADy9vk/edit?usp=sharing', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/iamrishabruh', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:rchouhan8@gatech.edu');
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
    { name: 'ABOUT', to: 'hero' },
    { name: 'EXPERIENCE', to: 'experience' },
    { name: 'EDUCATION', to: 'education' },
    { name: 'PROJECTS', to: 'projects' },
    { name: 'ACHIEVEMENTS', to: 'achievements' },
    { name: 'CONTACT', to: 'contact' },
  ];

  const controlItems = [
    { name: 'PARTY', onClick: togglePartyMode },
    { name: isDarkMode ? 'LIGHT' : 'DARK', onClick: toggleTheme },
  ];

  const linkItems = [
    { name: 'RESUME', onClick: handleResumeClick, icon: <FaFileAlt /> },
    { name: 'GITHUB', onClick: handleGithubClick, icon: <FaGithub /> },
    { name: 'EMAIL', onClick: handleEmailClick, icon: <FaEnvelope /> },
  ];

  const NavItem = ({ item }) => (
    <motion.div
      className={`navbar__item ${activeSection === item.to ? 'active' : ''}`}
      whileHover={{ scale: 1.05 }}
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
        <span className="navbar__text">{item.name}</span>
      </ScrollLink>
    </motion.div>
  );

  const ControlItem = ({ item }) => (
    <motion.button
      className="navbar__control-item"
      onClick={item.onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="navbar__text">{item.name}</span>
    </motion.button>
  );

  const LinkItem = ({ item }) => (
    <motion.button
      className="navbar__link-item"
      onClick={item.onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="navbar__link-icon">{item.icon}</span>
      <span className="navbar__text">{item.name}</span>
    </motion.button>
  );

  return (
    <>
      <motion.nav
        className={`navbar ${isDarkMode ? 'dark' : 'light'}`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
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

          {/* Navigation Items */}
          <div className="navbar__items">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>

          {/* Control Items */}
          <div className="navbar__controls">
            {controlItems.map((item) => (
              <ControlItem key={item.name} item={item} />
            ))}
          </div>

          {/* Link Items */}
          <div className="navbar__links">
            {linkItems.map((item) => (
              <LinkItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="navbar__mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="navbar__mobile-items">
                {navItems.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </div>
              <div className="navbar__mobile-controls">
                {controlItems.map((item) => (
                  <ControlItem key={item.name} item={item} />
                ))}
              </div>
              <div className="navbar__mobile-links">
                {linkItems.map((item) => (
                  <LinkItem key={item.name} item={item} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar; 
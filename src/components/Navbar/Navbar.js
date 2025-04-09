import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../theme';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 60; // Height of the navbar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('about')}
            className='link link--nav'
          >
            About
          </button>
        </li>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('projects')}
            className='link link--nav'
          >
            Projects
          </button>
        </li>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('skills')}
            className='link link--nav'
          >
            Skills
          </button>
        </li>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('contact')}
            className='link link--nav'
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
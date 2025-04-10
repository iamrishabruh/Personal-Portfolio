import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth <= 600 ? 50 : 60;
      const elementPosition = element.offsetTop;
      const extraOffset = ['projects', 'leaderships', 'skills'].includes(sectionId) ? 100 : 0;
      const offsetPosition = elementPosition - navbarHeight + extraOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('about')}
            className='link link--nav'
          >
            <span className="desktop-only">About</span>
            <span className="mobile-only">👤</span>
          </button>
        </li>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('projects')}
            className='link link--nav'
          >
            <span className="desktop-only">Projects</span>
            <span className="mobile-only">💻</span>
          </button>
        </li>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('leaderships')}
            className='link link--nav'
          >
            <span className="desktop-only">Leadership</span>
            <span className="mobile-only">👥</span>
          </button>
        </li>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('skills')}
            className='link link--nav'
          >
            <span className="desktop-only">Skills</span>
            <span className="mobile-only">⚡</span>
          </button>
        </li>
        <li className='nav__list-item'>
          <button
            type='button'
            onClick={() => scrollToSection('contact')}
            className='link link--nav'
          >
            <span className="desktop-only">Contact</span>
            <span className="mobile-only">📧</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
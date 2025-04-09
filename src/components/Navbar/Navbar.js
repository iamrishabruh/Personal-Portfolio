import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth <= 600 ? 50 : 60;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

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
            onClick={() => scrollToSection('leaderships')}
            className='link link--nav'
          >
            Leadership
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
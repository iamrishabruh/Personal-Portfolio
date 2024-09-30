import { useState } from 'react';
import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className='header center'>
      <h2>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h2>
      
      {/* Always visible */}
      <Navbar />
    </header>
  );
};

export default Header;
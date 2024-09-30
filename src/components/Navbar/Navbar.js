import { useContext, useState } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeContext } from '../../theme';
import { projects, skills, contact, leaderships } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const scrollByPixels = (pixels) => {
    window.scrollBy({
      top: pixels,
      behavior: 'smooth',
    });
    setShowNavList(false); // Close nav list
  };

  return (
    <nav className='center nav'>
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

      <ul className={`nav__list ${showNavList ? 'nav__list--show' : ''}`}>
        {projects.length > 0 && (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollByPixels(1300)}
              className='link link--nav'
              onKeyPress={(e) => { if (e.key === 'Enter') scrollByPixels(300); }}
            >
              Projects
            </button>
          </li>
        )}

        {leaderships.length > 0 && (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollByPixels(2680)}
              className='link link--nav'
              onKeyPress={(e) => { if (e.key === 'Enter') scrollByPixels(600); }}
            >
              Leadership
            </button>
          </li>
        )}

        {skills.length > 0 && (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollByPixels(4025)}
              className='link link--nav'
              onKeyPress={(e) => { if (e.key === 'Enter') scrollByPixels(900); }}
            >
              Skills
            </button>
          </li>
        )}

        {contact.email || contact.phoneNumber ? (
          <li className='nav__list-item'>
            <button
              type='button'
              onClick={() => scrollByPixels(10000)}
              className='link link--nav'
              onKeyPress={(e) => { if (e.key === 'Enter') scrollByPixels(1200); }}
            >
              Contact
            </button>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </nav>
  );
};

export default Navbar;
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__list-item'>
        <Link to='/' className='link link--nav'>
          Home
        </Link>
      </li>
      <li className='nav__list-item'>
        <Link to='/about' className='link link--nav'>
          About
        </Link>
      </li>
      <li className='nav__list-item'>
        <Link to='/projects' className='link link--nav'>
          Projects
        </Link>
      </li>
      <li className='nav__list-item'>
        <Link to='/skills' className='link link--nav'>
          Skills
        </Link>
      </li>
      <li className='nav__list-item'>
        <Link to='/contact' className='link link--nav'>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
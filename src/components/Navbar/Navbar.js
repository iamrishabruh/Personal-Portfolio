import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className='navbar'>
    <ul className='nav-links'>
      <li>
        <Link to='/' className='nav-link'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about' className='nav-link'>
          About
        </Link>
      </li>
      <li>
        <Link to='/projects' className='nav-link'>
          Projects
        </Link>
      </li>
      <li>
        <Link to='/skills' className='nav-link'>
          Skills
        </Link>
      </li>
      <li>
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
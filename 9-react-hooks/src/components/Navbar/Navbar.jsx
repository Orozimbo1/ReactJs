import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to='/' >Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>Sobre</NavLink>
      </li>
    </ul>
  )
}

export default Navbar
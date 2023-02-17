import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>Context API</h1>
      <div className='link'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/products'>Produto</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
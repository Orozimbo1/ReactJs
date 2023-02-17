import './Navbar.css'

// 2 - Link com react router
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>Sobre</Link> */}
      {/* 8 - Link ativo */}
      <NavLink 
      to='/' 
      // className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')} Jeito antigo de deixar o link ativo quando renderizado
      >
        Home
      </NavLink>
      <NavLink to='/about'>Sobre</NavLink>
    </nav>
  )
}

export default Navbar
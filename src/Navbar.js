import React from 'react'
import "./Navbar.css"
import Logo from "./assets/logo.jpeg"
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'

function Navbar() {
  return (
    <div className='navbar'>
        <ScrollLink to='home' smooth={true}><img src={Logo} alt='logo' style={{cursor: "pointer"}}/></ScrollLink>
        <ul className='options'>
          <li>
            <Link to='/' smooth={true} >Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
        </ul>
        
    </div>
  )
}

export default Navbar
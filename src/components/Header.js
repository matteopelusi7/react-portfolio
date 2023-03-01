import React from 'react'
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className='header container'>
        <nav className='navbar'>
            <div className='img-container'>
                <img src={logo} alt="" className='img' />
            </div>
            <ul className='hamburger-list'>
                <li>Home</li>
                <li>About</li>
                <li>portfolio</li>
                <li>Skills</li>
                <li>Contatti</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
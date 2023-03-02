import React, { useState } from 'react'
import logo from "../img/logo.png";
import { FaBars, FaHamburger } from "react-icons/fa";

const Header = () => {

  const [show, setShow] = useState(false)

  return (
    <div className='header container'>
        <nav className='navbar'>
            <div className='img-container'>
                <img src={logo} alt="" className='img' />
            </div>
            <div className='pr'>
              <button className='hamburger-menu' onClick={() => setShow(!show)}>
                <FaBars />
              </button>
            </div>
            <ul className='hamburger-list'>
                <li>Home</li>
                <li>About</li>
                <li>portfolio</li>
                <li>Skills</li>
                <li>Contatti</li>
            </ul>
        </nav>
            <ul className={show ? '' : 'hamburger-list-show'}>
                <li>Home</li>
                <li>About</li>
                <li>portfolio</li>
                <li>Skills</li>
                <li>Contatti</li>
            </ul>
    </div>
  )
}

export default Header
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
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#portfolio'>portfolio</a>
                <a href='#skills'>Skills</a>
                <a href='#contact'>Contatti</a>
            </ul>
        </nav>
            <ul className={show ? '' : 'hamburger-list-show'}>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#portfolio'>portfolio</a>
                <a href='#skills'>Skills</a>
                <a href='#contact'>Contatti</a>
            </ul>
    </div>
  )
}

export default Header
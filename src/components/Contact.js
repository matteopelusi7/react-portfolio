import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import map from '../img/map.png'

const Contact = () => {
  return (
    <div id='contact' className='container-contact'>
        <div className='container-all container'>
            <div className='info-contact'>
                <div>
                    <h2>Contattami</h2>
                    <h5>Dove puoi contattarmi</h5>
                </div>
                <ul className='social contact-social'>
                    <li>
                        <a className='linkedin' href="https://www.linkedin.com/in/matteo-pelusi-b157a81a1/">
                            <BsLinkedin />
                            <p>Linkedin</p>
                        </a>
                    </li>
                    <li>
                        <a className='git' href="https://github.com/matteopelusi7">
                            <BsGithub />
                            <p>GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='where'>
                <div>
                    <h2>Sono qui</h2>
                </div>
                <img className='map' src={map} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='container-contact'>
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
                <iframe className='map' id="gmap_canvas" src="https://maps.google.com/maps?q=Pineto&t=&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact
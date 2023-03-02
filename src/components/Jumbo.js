import React from 'react'
import image from '../img/2.png'
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Jumbo = () => {
  return (
    <div id='jumbo' className='home-container container'>
        <div className='home-info'>
            <ul className='social'>
                <li>
                    <a className='git' href="https://github.com/matteopelusi7">
                        <BsGithub />
                    </a>
                </li>
                <li>
                    <a className='linkedin' href="https://www.linkedin.com/in/matteo-pelusi-b157a81a1/">
                        <BsLinkedin />
                    </a>
                </li>
            </ul>
            <div className='home'>
                <h2>Ciao, sono Matteo</h2>
                <h5>Jr. Full Stack Web Developer</h5>
                <p>Sono appassionato della tecnologia e soprattutto dello sviluppo web, una volta terminati gli studi nel liceo scientifico mi sono fin da subito cimentato nel mondo della programmazione. Mi trovo in perfetta sintonia con questo mondo perchè mi permette di esprimere al meglio le mie capacità scoprendo ogni giorno nuove cose, essere ordinato e soprattutto di sfoggiare la mia creatività.</p>
            </div>
        </div>
        <div className='home-image'>
            <img src={image} alt=""/>
        </div>
    </div>
  )
}

export default Jumbo
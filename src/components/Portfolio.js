import React from 'react'
import spotify from '../img/spotify.PNG'
import boolzap from '../img/boolzap.PNG'
import playstation from '../img/playstation.png'
import nicecream from '../img/nicecream.png'
import { BsArrowRightShort } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaVuejs, FaReact } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className='porfolio container'>
        <div className='home home-about portfolio container'>
            <h2>Portfolio</h2>
            <h5>Alcuni dei progetti che ho realizzato</h5>
        </div>
        <div className='card-container'>
            <div className='card'>
                <img src={spotify} alt="" />
                <div className='overlay'>
                    <p className='title'>Spotify</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaHtml5 className='html' />
                        <FaCss3Alt className='css' />
                    </div>
                    <button className='button'>
                        <a href="https://spotify-web-1.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={boolzap} alt="" />
                <div className='overlay'>
                    <p className='title'>Whatsapp</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaVuejs className='vue' />
                        <FaCss3Alt className='css' />
                    </div>
                    <button className='button'>
                        <a href="https://boolzapp-1.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={playstation} alt="" />
                <div className='overlay'>
                    <p className='title'>Playstation Store</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaHtml5 className='html' />
                        <FaCss3Alt className='css' />
                    </div>
                    <button className='button'>
                        <a href="https://playstation-1.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={nicecream} alt="" />
                <div className='overlay'>
                    <p className='title'>Nice Cream</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaReact className='react' />
                        <FaCss3Alt className='css' />
                    </div>
                    <button className='button'>
                        <a href="https://react-nice-cream.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
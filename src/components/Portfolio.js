import React from 'react'
import spotify from '../img/spotify.PNG'
import boolzap from '../img/boolzap.PNG'
import playstation from '../img/playstation.png'
import nicecream from '../img/nicecream.png'
import discord from '../img/discord.png'
import dropbox from '../img/dropbox.png'
import proj from '../img/proj.png'
import wikidrink from '../img/wikidrink.png'
import pickme from '../img/pickme.png'
import { BsArrowRightShort } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaVuejs, FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";

const Portfolio = () => {
  return (
    <div id='portfolio' className='porfolio container'>
        <div className='home home-about portfolio container'>
            <h2>Portfolio</h2>
            <h5>Alcuni dei progetti che ho realizzato</h5>
        </div>
        <div className='card-container'>
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
                <img src={boolzap} alt="" />
                <div className='overlay'>
                    <p className='title'>Whatsapp</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaVuejs className='vue' />
                        <FaCss3Alt className='css' />
                        <SiJavascript className='javascript' />
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
                <img src={nicecream} alt="" />
                <div className='overlay'>
                    <p className='title'>Nice Cream</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaReact className='react' />
                        <FaCss3Alt className='css' />
                        <SiJavascript className='javascript' />
                    </div>
                    <button className='button'>
                        <a href="https://react-nice-cream.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={discord} alt="" />
                <div className='overlay'>
                    <p className='title'>Discord</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaHtml5 className='html' />
                        <FaCss3Alt className='css' />
                    </div>
                    <button className='button'>
                        <a href="https://discord-1.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={dropbox} alt="" />
                <div className='overlay'>
                    <p className='title'>Dropbox</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaHtml5 className='html' />
                        <FaCss3Alt className='css' />
                    </div>
                    <button className='button'>
                        <a href="https://dropbox-1.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={proj} alt="" />
                <div className='overlay'>
                    <p className='title'>Progetto Front-end</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaVuejs className='vue' />
                        <FaCss3Alt className='css' />
                        <SiJavascript className='javascript' />
                    </div>
                    <button className='button'>
                        <a href="https://proj-final.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={wikidrink} alt="" />
                <div className='overlay'>
                    <p className='title'>Wiki Drink</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <FaReact className='react' />
                        <FaCss3Alt className='css' />
                        <SiJavascript className='javascript' />
                    </div>
                    <button className='button'>
                        <a href="https://wiki-drink.netlify.app/">
                            Visita il sito
                            <BsArrowRightShort />
                        </a>
                    </button>
                </div>
            </div>
            <div className='card'>
                <img src={pickme} alt="" />
                <div className='overlay'>
                    <p className='title'>Pick Me</p>
                    <p className='tec'>Tecnologie Utilizzate:</p>
                    <div className='icon'>
                        <SiRedux className='redux' />
                        <FaReact className='react' />
                        <FaCss3Alt className='css' />
                        <SiJavascript className='javascript' />
                    </div>
                    <button className='button'>
                        <a href="https://redux-react-pick-me.netlify.app/">
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
import React from 'react'

const About = () => {
  return (
    <div className='container about'>
        <div className='home home-about'>
            <h2>About Me</h2>
            <h5>Le mie esperienze</h5>
        </div>
        <div className='container-experience'>
            <div className='experience'>
                <div className='info-experience'>
                    <img src="https://sial.school/wp-content/uploads/2022/03/Progetto-senza-titolo-30.png" alt="" />
                </div>
                <div className='description-experience'>
                    <p className='name'>Liceo scientifico</p>
                    <p className='name-experience'>Diploma Liceo Scientifico</p>
                    <p className='date'>set 2016 - giu 2021</p>
                    <p className='description'>Votazione: 78/100</p>
                </div>
            </div>
            <div className='bar'></div>
            <div className='experience'>
                <div className='info-experience'>
                    <img src="https://media.licdn.com/dms/image/C4D0BAQErbNlWeMNGDQ/company-logo_100_100/0/1600963347198?e=1685577600&v=beta&t=hFy4BJVR-59b-lJxS9Z5B3XnQkRQIbfD9Wmn0GeYlmc" alt="" />
                </div>
                <div className='description-experience'>
                    <p className='name'>Boolean</p>
                    <p className='name-experience'>Master, Full Stack Web Developer, Jr Full Stack Web Developer Trainee</p>
                    <p className='date'>nov 2021 - giu 2022</p>
                    <p className='description'>Durante i 6 mesi di corso ho avuto modo di fare molta pratica con diversi progetti ispirati alle più famose web applications come Whatsapp Web, Spotify Web, Netflix, Playstatio e molte altre. Ho imparato a utilizzare efficacemente tecnologie come HTML5, CSS3, JavaScript, SASS, VueJS, JQuery, PHP, MySQL e Laravel.</p>
                </div>
            </div>
            <div className='bar'></div>
            <div className='experience'>
                <div className='info-experience'>
                    <img src="https://sial.school/wp-content/uploads/2022/03/Progetto-senza-titolo-30.png" alt="" />
                </div>
                <div className='description-experience'>
                    <p className='name'>Corso React</p>
                    <p className='name-experience'>React.js e Redux: Teoria, Hooks + 11 Progetti</p>
                    <p className='date'>dic 2022 - gen 2023</p>
                    <p className='description'>Apprendimento di React.js e Redux tramite teoria, Hooks e 11 progetti svolti</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
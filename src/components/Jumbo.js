import image from "../img/2.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Jumbo = () => {
  return (
    <section id="jumbo" className="home-container container">
      <div className="home-info">
        <ul className="social">
          <li>
            <a
              className="git"
              href="https://github.com/matteopelusi7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/matteo-pelusi-b157a81a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
        <div className="home">
          <p className="eyebrow">
            <FaMapMarkerAlt /> Pineto, Abruzzo
          </p>
          <h1>
            Ciao, sono <span className="accent">Matteo</span>
          </h1>
          <h5>Full Stack Developer</h5>
          <p>
            Sono appassionato di tecnologia e soprattutto di sviluppo web. Una
            volta terminati gli studi al liceo scientifico, mi sono fin da
            subito cimentato nel mondo della programmazione.
          </p>
          <p>
            Mi trovo in perfetta sintonia con questo mondo perché mi permette di
            esprimere al meglio le mie capacità, scoprendo ogni giorno cose
            nuove, mettendomi continuamente alla prova e, soprattutto, dando
            spazio alla mia creatività.
          </p>
          <p>
            Nel tempo ho avuto modo di approfondire diversi aspetti dello
            sviluppo web, maturando esperienza sia nel front-end che nel
            back-end e continuando a sviluppare le mie competenze attraverso il
            lavoro e nuovi progetti.
          </p>
          <div className="cta">
            <a className="btn btn-primary" href="#portfolio">
              Vedi i progetti
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contattami
            </a>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={image} alt="Matteo Pelusi" />
      </div>
    </section>
  );
};

export default Jumbo;

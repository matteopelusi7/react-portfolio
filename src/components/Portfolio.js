import spotify from "../img/spotify.PNG";
import boolzap from "../img/boolzap.PNG";
import playstation from "../img/playstation.png";
import nicecream from "../img/nicecream.png";
import discord from "../img/discord.png";
import dropbox from "../img/dropbox.png";
import proj from "../img/proj.png";
import wikidrink from "../img/wikidrink.png";
import pickme from "../img/pickme.png";
import { BsArrowRightShort } from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiRedux,
} from "react-icons/si";

const tech = {
  html: { icon: <SiHtml5 />, label: "HTML5" },
  css: { icon: <SiCss3 />, label: "CSS3" },
  javascript: { icon: <SiJavascript />, label: "JavaScript" },
  vue: { icon: <SiVuedotjs />, label: "Vue.js" },
  react: { icon: <SiReact />, label: "React" },
  redux: { icon: <SiRedux />, label: "Redux" },
};

const projects = [
  {
    title: "Pick Me",
    img: pickme,
    url: "https://redux-react-pick-me.netlify.app/",
    tech: ["redux", "react", "css", "javascript"],
  },
  {
    title: "Wiki Drink",
    img: wikidrink,
    url: "https://wiki-drink.netlify.app/",
    tech: ["react", "css", "javascript"],
  },
  {
    title: "Nice Cream",
    img: nicecream,
    url: "https://react-nice-cream.netlify.app/",
    tech: ["react", "css", "javascript"],
  },
  {
    title: "Progetto Front-end",
    img: proj,
    url: "https://proj-final.netlify.app/",
    tech: ["vue", "css", "javascript"],
  },
  {
    title: "Whatsapp",
    img: boolzap,
    url: "https://boolzapp-1.netlify.app/",
    tech: ["vue", "css", "javascript"],
  },
  {
    title: "Playstation Store",
    img: playstation,
    url: "https://playstation-1.netlify.app/",
    tech: ["html", "css"],
  },
  {
    title: "Spotify",
    img: spotify,
    url: "https://spotify-web-1.netlify.app/",
    tech: ["html", "css"],
  },
  {
    title: "Discord",
    img: discord,
    url: "https://discord-1.netlify.app/",
    tech: ["html", "css"],
  },
  {
    title: "Dropbox",
    img: dropbox,
    url: "https://dropbox-1.netlify.app/",
    tech: ["html", "css"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="container section">
      <div className="section-title">
        <h2>Portfolio</h2>
        <h5>Alcuni dei progetti che ho realizzato</h5>
      </div>
      <div className="card-container">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <a
              className="card-image"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.img} alt={project.title} loading="lazy" />
            </a>
            <div className="card-body">
              <p className="title">{project.title}</p>
              <div className="icon">
                {project.tech.map((key) => (
                  <span key={key} className={key} title={tech[key].label}>
                    {tech[key].icon}
                  </span>
                ))}
              </div>
              <a
                className="button"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visita il sito
                <BsArrowRightShort />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

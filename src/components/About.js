import React from "react";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

const work = [
  {
    role: "Full Stack Web Developer",
    name: "Mediass S.p.A.",
    type: "A tempo pieno",
    date: "apr 2025 - presente",
    place: "Pescara, Abruzzo, Italia · Ibrido",
  },
  {
    role: "Frontend Developer",
    name: "ViVieb",
    type: "A tempo pieno",
    date: "apr 2023 - apr 2025",
    place: "Pineto, Abruzzo, Italia · In sede",
  },
  {
    role: "Jr Full Stack Web Developer Trainee",
    name: "Boolean Careers",
    date: "nov 2021 - giu 2022",
    description: [
      "Realizzazione, partendo da zero, di una complessa Applicazione Web ispirata al famoso Glovo, completa di Backend (autenticazione in base a Ruoli, gestione di un Payment Provider) e interfaccia Frontend Responsive.",
      "Sei mesi di corso intensivo in cui ho realizzato progetti completi replicando Applicativi Web sia lato frontend che lato backend del calibro di Netflix, Spotify Web, Whatsapp Web ecc.",
      "Ho imparato a utilizzare efficacemente tecnologie come HTML5, CSS3, JavaScript, SASS, VueJS, JQuery, PHP, MySQL e Laravel.",
    ],
  },
];

const education = [
  {
    icon: <FaCertificate />,
    role: "React.js e Redux: Teoria, Hooks + 11 Progetti",
    name: "Udemy",
    date: "Rilasciato gen 2023",
    credential: "UC-45d436b7-0fb2-4b55-b955-6f2d6fb08e43",
  },
  {
    icon: <FaCertificate />,
    role: "Corso FullStack Web Developer FullTime",
    name: "Boolean",
    date: "Rilasciato giu 2022",
  },
  {
    icon: <FaGraduationCap />,
    role: "Full Stack Web Developer",
    name: "Boolean Careers",
    date: "2021 - 2022",
    description: [
      "HTML5, CSS3 (SCSS), JavaScript, MySQL, PHP",
      "Bootstrap, jQuery, Moment.js, Handlebars, Vue.js, Laravel",
      "WordPress, Git, NPM, Composer",
    ],
  },
  {
    icon: <FaGraduationCap />,
    role: "Diploma Liceo Scientifico",
    name: "Liceo Scientifico",
    date: "2016 - 2021",
    description: ["Votazione: 78/100"],
  },
];

const Item = ({
  icon,
  role,
  name,
  type,
  date,
  place,
  description,
  credential,
}) => (
  <li className="experience">
    <div className="experience-icon">{icon}</div>
    <div className="description-experience">
      <p className="name">{role}</p>
      <p className="name-experience">
        {[name, type].filter(Boolean).join(" · ")}
      </p>
      {date && <p className="date">{date}</p>}
      {place && <p className="date">{place}</p>}
      {description && (
        <ul className="description">
          {description.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}
      {credential && <p className="credential">ID credenziale: {credential}</p>}
    </div>
  </li>
);

const About = () => {
  return (
    <section id="about" className="container section">
      <div className="section-title">
        <h2>About Me</h2>
        <h5>Le mie esperienze</h5>
      </div>
      <div className="container-experience">
        <div className="timeline-group">
          <h3>
            <FaBriefcase /> Esperienza
          </h3>
          <ul className="timeline">
            {work.map((item) => (
              <Item key={item.name} icon={<FaBriefcase />} {...item} />
            ))}
          </ul>
        </div>
        <div className="timeline-group">
          <h3>
            <FaGraduationCap /> Formazione e certificazioni
          </h3>
          <ul className="timeline">
            {education.map((item) => (
              <Item key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

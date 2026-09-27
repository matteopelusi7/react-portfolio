import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiVuedotjs,
  SiJquery,
  SiBootstrap,
  SiHandlebarsdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPhpmyadmin,
  SiWordpress,
  SiGit,
  SiGithub,
  SiNpm,
  SiComposer,
} from "react-icons/si";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
      { name: "SCSS", icon: <SiSass />, color: "#cc6699" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f0db4f" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "React", icon: <SiReact />, color: "#61dafb" },
      { name: "Redux", icon: <SiRedux />, color: "#764abc" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "currentColor" },
      { name: "Vue.js", icon: <SiVuedotjs />, color: "#42b883" },
      { name: "jQuery", icon: <SiJquery />, color: "#0769ad" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
      { name: "Handlebars", icon: <SiHandlebarsdotjs />, color: "#f0772b" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#5fa04e" },
      { name: "PHP", icon: <SiPhp />, color: "#777bb4" },
      { name: "Laravel", icon: <SiLaravel />, color: "#ff2d20" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      { name: "phpMyAdmin", icon: <SiPhpmyadmin />, color: "#f89c0e" },
      { name: "WordPress", icon: <SiWordpress />, color: "#21759b" },
    ],
  },
  {
    title: "Strumenti",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#f05032" },
      { name: "GitHub", icon: <SiGithub />, color: "currentColor" },
      { name: "NPM", icon: <SiNpm />, color: "#cb3837" },
      { name: "Composer", icon: <SiComposer />, color: "#885630" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container section">
      <div className="section-title">
        <h2>Skills</h2>
        <h5>Le mie conoscenze tecniche</h5>
      </div>
      <div className="container-skills">
        {groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="list">
              {group.skills.map((skill) => (
                <li key={skill.name} className="skill">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

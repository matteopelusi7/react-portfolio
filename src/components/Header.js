import { useState } from "react";
import logo from "../img/1.png";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const links = [
  { href: "#jumbo", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contatti" },
];

const Header = ({ changeTheme, isDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar container">
        <a
          href="#jumbo"
          className="img-container"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="Matteo Pelusi logo" className="img" />
        </a>
        <ul className={open ? "nav-list open" : "nav-list"}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            className="button-theme"
            onClick={changeTheme}
            type="button"
            aria-label={isDark ? "Attiva tema chiaro" : "Attiva tema scuro"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="hamburger-menu"
            onClick={() => setOpen(!open)}
            type="button"
            aria-label="Apri menu"
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

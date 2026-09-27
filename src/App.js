import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light-mode" || saved === "dark-mode") return saved;
  } catch (e) {}
  return "light-mode";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  const changeTheme = () => {
    setTheme(theme === "light-mode" ? "dark-mode" : "light-mode");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header changeTheme={changeTheme} isDark={theme === "dark-mode"} />
      <Main />
      <footer className="footer">
        <div className="container footer-cont">
          <p>Copyright &copy; Matteo Pelusi {new Date().getFullYear()}</p>
          <p>Handcrafted with &hearts;</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

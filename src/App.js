import Header from "./components/Header";
import { BsWrench } from "react-icons/bs";
import Main from "./components/Main";
import React, { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState('light-mode');

  const changeTheme = () => {
    if(theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    console.log(theme)
  }, [theme]);

  return (
    <div className={theme === 'light-mode' ? 'App light-mode' : 'App dark-mode'}>
      <div className='progress'>
        <p>Sito in Sviluppo</p>
        <BsWrench />
      </div>
      <Header changeTheme={changeTheme} />
      <Main />
      <div className="footer">
        <div className="container footer-cont">
          <p>Copyright &copy; Matteo Pelusi 2023</p>
          <p>Handcrafted with &hearts;</p>
        </div>
      </div>
    </div>
  );
}

export default App;

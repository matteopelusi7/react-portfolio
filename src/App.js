import Header from "./components/Header";
import { BsWrench } from "react-icons/bs";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className='progress'>
        <p>Sito in Sviluppo</p>
        <BsWrench />
      </div>
      <Header />
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

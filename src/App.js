import Header from "./components/Header";
import { BsWrench } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div className='progress'>
        <p>Sito in Sviluppo</p>
        <BsWrench />
      </div>
      <Header />
      <Main />
    </div>
  );
}

export default App;

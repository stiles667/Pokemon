import './App.css';
import Api from './composant/Main';
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Main from './composant/Main';
import InfoPoke from './composant/InfoPoke';

function App() {
  return (

    <div className="App">
     <>
     <Main/>
     <InfoPoke/>
     </>
    </div>
  );
}

export default App;

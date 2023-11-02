import './App.css';
import Api from './composant/Main';
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Main from './composant/Main';
import InfoPoke from './composant/InfoPoke';
import Pokedex from './composant/PokeDex';

function App() {
  return (

    <div className="App">
     <>
     <Main/>
     <InfoPoke/>
     {/* <Link  */}
     </>
     {/* <Link to="/Pokedex">PokeDex</Link>
     <Routes>
       <Route path="/Pokedex" element={<Pokedex/>}/>
      </Routes> */}
    </div>
  );
}

export default App;

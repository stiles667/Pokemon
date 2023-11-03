import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./composant/Main";

import Pokedex from "./composant/PokeDex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/PokeDex" element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 
 
function PokeDex() {
  const [pokeDex, setPokeDex] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [pokeData, setPokeData] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const keys = Object.keys(localStorage);
    let pokemons = keys.map(key => {
      let item = localStorage.getItem(key);
      try {
        return JSON.parse(item);
      } catch (err) {
      }
    }).filter(Boolean); // filter out any undefined values
    setPokeDex(pokemons);
  }, []);
 
  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`
      );
      setPokeData([res.data]);
      setError(null); // clear the error message
    } catch (err) {
      setError("Pokemon not found");
      setPokeData([]); // clear the previous data
    }
  };
 
  const removePokemon = (id) => {
    localStorage.removeItem(id);
    setPokeDex(pokeDex.filter((pokemon) => pokemon.id !== id));
  };
 
  const removeAllPokemon = () => {
    localStorage.clear();
    setPokeDex([]);
  };
 
  return (
    <div className="container">
      
      <div className="topnav">
        <div className="link-buttons">
          <Link to="/" className="link-button">
            Home
          </Link>
          <Link to="/Pokedex" className="link-button">
            Pokedex
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search.."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {pokeDex.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <button onClick={() => removePokemon(pokemon.id)}>Remove</button>
        </div>
      ))}
      <button onClick={removeAllPokemon}>Remove All</button>
    </div>
  );
}
 
export default PokeDex;
 
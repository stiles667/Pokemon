// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Main.css";

// Define the PokeDex component
function PokeDex() {
  // Define state variables
  const [pokeDex, setPokeDex] = useState([]);

  // Use useEffect to load Pokemon data from localStorage when the component mounts
  useEffect(() => {
    const keys = Object.keys(localStorage);
    let pokemons = keys
      .map((key) => {
        let item = localStorage.getItem(key);
        try {
          return JSON.parse(item);
        } catch (err) {}
      })
      .filter(Boolean); // filter out any undefined values
    setPokeDex(pokemons);
  }, []);

  // Define function to remove a Pokemon from the Pokedex
  const removePokemon = (id) => {
    localStorage.removeItem(id);
    setPokeDex(pokeDex.filter((pokemon) => pokemon.id !== id));
  };

  // Define function to remove all Pokemon from the Pokedex
  const removeAllPokemon = () => {
    localStorage.clear();
    setPokeDex([]);
  };

  // Return the JSX to render
  return (
    <div className="container">
      <header> </header>
      <div className="topnav">
        <div className="link-buttons">
          <Link to="/" className="link-button">
            Home
          </Link>
          <Link to="/Pokedex" className="link-button">
            Pokedex
          </Link>
        </div>
        <h1> <img src="https://o.remove.bg/downloads/1d32a468-8d34-45c3-9252-a7a7a0cbe410/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67-removebg-preview.png" alt=""  style={{height:"70px",}}/></h1>
      </div>
      <button className="remove-all-button" onClick={removeAllPokemon}>Remove All</button>
      {pokeDex.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}  style={{ width: "150px", height: "150px" }} />
          <button onClick={() => removePokemon(pokemon.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

// Export the PokeDex component so it can be used in other parts of the application
export default PokeDex;
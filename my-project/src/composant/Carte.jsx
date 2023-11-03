import React, { useState } from "react";
import "./Carte.css"; // import the CSS file

const Carte = ({ pokemon, infoPokemon }) => {
  const [message, setMessage] = useState("");

  const addToPokedex = (poke) => {
    localStorage.setItem(poke.name, JSON.stringify(poke));
    setMessage(`You have successfully added ${poke.name} to your Pokedex!`);
    setTimeout(() => setMessage(""), 3000); 
  };

  return (
    <>
      {message && <div className="message">{message}</div>}
      {pokemon.map((item) => {
        return (
          <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
            <h2>{item.id}</h2>
            <img src={item.sprites.front_default} alt="" />
            <h2>{item.name}</h2>
            <button onClick={() => addToPokedex(item)}>Add to Pokedex</button>
          </div>
        );
      })}
    </>
  );
};

export default Carte;
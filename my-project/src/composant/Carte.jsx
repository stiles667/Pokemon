import React from "react";

const Carte = ({ pokemon, infoPokemon }) => {
  const addToPokedex = (poke) => {
    localStorage.setItem(poke.name, JSON.stringify(poke));
  };

  return (
    <>
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

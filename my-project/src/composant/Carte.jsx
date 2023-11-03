// Import React library
import React from "react";

// Define the Carte component
const Carte = ({ pokemon, infoPokemon }) => {
  // Define function to add a Pokemon to the Pokedex
  const addToPokedex = (poke) => {
    localStorage.setItem(poke.name, JSON.stringify(poke));
  };

  // Return the JSX to render
  return (
    // Create a container for the Pokemon cards
    <>
      {/* Map over the pokemon array and create a card for each Pokemon */}
      {pokemon.map((item) => {
        return (
          // Create a card for the Pokemon
          <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
            {/* Display the Pokemon's ID */}
            <h2>{item.id}</h2>
            {/* Display the Pokemon's image */}
            <img src={item.sprites.front_default} alt="" />
            {/* Display the Pokemon's name */}
            <h2>{item.name}</h2>
            {/* Add a button to add the Pokemon to the Pokedex */}
            <button onClick={() => addToPokedex(item)}>Add to Pokedex</button>
          </div>
        );
      })}
    </>
  );
};

// Export the Carte component so it can be used in other parts of the application
export default Carte;
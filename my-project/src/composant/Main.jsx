import React, { useState, useEffect } from 'react';

export default function Accueil() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/2', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setPokemon(data))
        .catch(error => console.log(error));
    }, []);
    console.log(pokemon);
    return (
        <div>
          <h1> {pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
          

        </div>
    )
}
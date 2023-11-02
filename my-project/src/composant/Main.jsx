import React, { useState, useEffect } from 'react';

export default function Accueil() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setPokemon(data.results))
        .catch(error => console.log(error));
    }, []);
    console.log(pokemon);
    return (
        <div>
          <h1> {pokemon.data.name}</h1>
          <img src={pokemon.data.sprites} alt="" />

        </div>
    )
}
import React, { useState, useEffect } from 'react';
import './Main.css';

export default function Accueil() {


    
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/4', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setPokemon(data))
        .catch(error => console.log(error));
    }, []);
    console.log(pokemon);
    return (
        <div>
                <header><h1>Welcome to My POKEDEX</h1> 
                <img src="" alt="" /></header>
    <div className=' Infos'>
          <h1> {pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <h2> {pokemon.weight}</h2>
            <h2> {pokemon.height}</h2>
            <h2> {pokemon.base_experience}</h2>
            <h2> {pokemon.abilities?.map(ability => ability.ability.name).join(', ')}</h2>
            </div>

          

        </div>
    )
}
import React from "react";
import Carte from "./Carte";
import InfoPoke from "./InfoPoke";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  // State pour stocker les données des Pokémon
  const [pokeData, setPokeData] = useState([]);
  // State pour gérer l'état de chargement
  const [loading, setLoading] = useState(true);
  // State pour gérer l'URL de l'API Pokémon
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  // State pour gérer l'URL de la page précédente
  const [prevUrl, setPrevUrl] = useState();
  // State pour gérer l'URL de la page suivante
  const [nextUrl, setNextUrl] = useState();
  // State pour stocker les données du Pokémon sélectionné
  const [pokeDex, setPokeDex] = useState();
  // State pour gérer l'input de recherche
  const [searchInput, setSearchInput] = useState("");

  // Fonction pour récupérer les données des Pokémon
  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  // Fonction pour récupérer les données des Pokémon individuellement
  
  const getPokemon = async (res) => {
    const allPokemonData = await Promise.all(res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
    }));

    setPokeData(allPokemonData.sort((a, b) => a.id > b.id ? 1 : -1));
}


  // Utiliser useEffect pour appeler pokeFun au chargement initial et lorsqu'une nouvelle URL est définie
  useEffect(() => {
    pokeFun();
  }, [url]);

  // Fonction pour effectuer une recherche de Pokémon par nom
  const searchPokemon = async (search) => {
    setLoading(true);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
    setPokeData([res.data]);
    setLoading(false);
  };

  // Fonction pour gérer la recherche de Pokémon lorsqu'on appuie sur le bouton "Search"
  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      searchPokemon(searchInput);
    }
  };

  return (
    <>
      <div className="container">
      <div className="topnav">
            <a className="active" href="#home">
              Home
            </a>
            <input
              type="text"
              placeholder="Search.."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="content">
                <div className="left-content">
                    <Carte pokemon={pokeData} loading={loading} infoPokemon={(poke) => setPokeDex(poke)} />
                    <div className="btn-group">
                        {prevUrl && <button onClick={() => setUrl(prevUrl)}>Previous</button>}
                        {nextUrl && <button onClick={() => setUrl(nextUrl)}>Next</button>}
                    </div>
                </div>
                <div className="right-content">
                    <InfoPoke data={pokeDex} />
                </div>
            </div>
        
      </div>
    </>
    
  );
};

export default Main;

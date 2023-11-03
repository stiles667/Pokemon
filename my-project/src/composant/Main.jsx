import React from "react";
import Carte from "./Carte";
import InfoPoke from "./InfoPoke";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [prevUrl, setPrevUrl] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const allPokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );

    setPokeData(allPokemonData.sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  const handleSearch = async () => {
    if (searchInput.trim() === '') {
      setPokeData([]);
      setError(null);
    } else {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`
        );
        setPokeData([res.data]);
        setError(null);
      } catch (err) {
        setError("Pokemon not found");
        setPokeData([]);
      }
    }
  };

  return (
    <>
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
        <div className="content">
          <div className="left-content">
            <Carte
              pokemon={pokeData}
              loading={loading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />
            <div className="btn-group">
              {prevUrl && (
                <button onClick={() => setUrl(prevUrl)}>Previous</button>
              )}
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
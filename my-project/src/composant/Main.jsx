import React from "react";
import Carte from "./Carte";
import InfoPoke from "./InfoPoke";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
    }

    const getPokemon = async (res) => {
        const allPokemonData = await Promise.all(res.map(async (item) => {
            const result = await axios.get(item.url);
            return result.data;
        }));
    
        setPokeData(allPokemonData.sort((a, b) => a.id > b.id ? 1 : -1));
    }

    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <>
            <div className="container">
                <header>
                    <h1 className="titre">Welcome to My POKEDEX</h1>
                    <img src="" alt="" />
                    <div className="topnav">
                        <a className="active" href="#home">
                            Home
                        </a>
                        <input type="text" placeholder="Search.." />
                    </div>
                </header>
                <div className="left-content">
                    <Carte pokemon={pokeData} infoPokemon={poke => setPokeDex(poke)} />
                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}
                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>
                </div>
                <div className="right-content">
                    <InfoPoke data={pokeDex} />
                </div>
            </div>
        </>
    )
}

export default Main;
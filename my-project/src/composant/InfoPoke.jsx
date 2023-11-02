import React from "react";


    

    const InfoPoke = ({ data }) => {
       
        return (
            <>
            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={`https://pokeapi.co/api/v2/pokemon${data.id}.svg`} alt="" />
                        <div className="abilities">
                            {
                                data.abilities.map(poke=>{
                                    return(
                                        <>
                                         <div className="group">
                                            <h2>{poke.ability.name}</h2>
                                        </div>
                                        </>
                                    )                                               
                                })
                            }
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map(poke=>{
                                    return(
                                        <>
                                            <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
    
            </>
        )
    }
    export default InfoPoke


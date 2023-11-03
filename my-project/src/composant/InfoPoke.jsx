import React from "react";

const InfoPoke = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="info" style={{ position: "sticky", top: "0" }}>
      <h1>{data.name}</h1>
      <img
        src={data.sprites.front_default}
        alt={data.name}
        style={{ width: "170px", height: "170px" }}
      />
      <div className="abilities">
        {data.abilities.map((ability, index) => (
          <div className="group" key={index}>
            <h2>{ability.ability.name}</h2>
          </div>
        ))}
      </div>
      <div className="base-stat">
        {data.stats.map((stat, index) => (
          <h3 key={index}>
            {stat.stat.name}: {stat.base_stat}
          </h3>
        ))}
      </div>

    </div>
  );
};

export default InfoPoke;
// Import React library
import React from "react";

// Define the InfoPoke component
const InfoPoke = ({ data }) => {
  // If no data is passed, return null
  if (!data) {
    return null;
  }

  // Return the JSX to render
  return (
    // Create a container for the Pokemon information
    <div className="info" style={{ position: "sticky", top: "0" }}>
      {/* Display the Pokemon's name */}
      <h1>{data.name}</h1>
      {/* Display the Pokemon's image */}
      <img
        src={data.sprites.front_default}
        alt={data.name}
        style={{ width: "170px", height: "170px" }}
      />
      {/* Display the Pokemon's abilities */}
      <div className="abilities">
        {data.abilities.map((ability, index) => (
          <div className="group" key={index}>
            <h2>{ability.ability.name}</h2>
          </div>
        ))}
      </div>
      {/* Display the Pokemon's base stats */}
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

// Export the InfoPoke component so it can be used in other parts of the application
export default InfoPoke;
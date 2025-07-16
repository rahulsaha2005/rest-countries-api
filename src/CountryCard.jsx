import React from "react";

const CountryCard = ({ flag, name, population, region, capital, onClick }) => {
  return (
    <div
      className="country-card"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="country-flag"
        style={{ width:"300px", height: "200px",  }}
      />
      <div className="country-info">
        <h3>{name}</h3>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital?.[0] || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;

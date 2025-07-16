import React from "react";
import { useNavigate } from "react-router-dom";
import CountryCard from "./CountryCard";

export default function FilteredCountries({
  selectedRegion,
  searchText,
  countries,
}) {
  const navigate = useNavigate();

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      selectedRegion === "All" || country.region === selectedRegion;
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <>
      {filteredCountries.length === 0 ? (
        <p style={{ padding: "1rem" }}>No countries match your search.</p>
      ) : (
        filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population.toLocaleString()}
            region={country.region}
            capital={country.capital}
            onClick={() =>
              navigate(`/country/${country.name.common}`, {
                state: { countryData: country },
              })
            }
          />
        ))
      )}
    </>
  );
}

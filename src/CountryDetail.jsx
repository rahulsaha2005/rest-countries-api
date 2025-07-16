import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ShimmerCountryDetail from "./shimmerCountryDetail";

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borderNames, setBorderNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBorders = async (borders) => {
      if (!borders || borders.length === 0) {
        setBorderNames([]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
        );
        const data = await response.json();
        setBorderNames(data);
      } catch (err) {
        console.error("Failed to fetch borders", err);
        setBorderNames([]);
      } finally {
        setLoading(false);
      }
    };

    const loadData = () => {
      if (state?.countryData) {
        setCountry(state.countryData);

        // Simulate shimmer delay
        setTimeout(() => {
          fetchBorders(state.countryData.borders);
        }, 500); // 3-second shimmer before loading borders
      }
    };

    loadData();
  }, [name, navigate, state]);

  // Show shimmer until data is loaded
  if (loading || !country) return <ShimmerCountryDetail />;

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
        ⬅ Back
      </button>
      <h1>{country.name.common}</h1>

      <div className="countrydetail">
        <div>
          <img
            className="flag"
            src={country.flags.svg}
            width={"250px"}
            height={"250px"}
            alt={`${country.name.common} flag`}
          />
        </div>

        <div className="detail">
          <p>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>

          <div>
            <strong>Border Countries: </strong>
            {borderNames.length === 0 ? (
              <span>None</span>
            ) : (
              borderNames.map((borderName) => (
                <button
                  key={borderName.cca3}
                  id="btn-border"
                  onClick={() => {
                    setLoading(true); 
                    setTimeout(() => {
                      navigate(`/country/${borderName.name.common}`, {
                        state: { countryData: borderName },
                      });
                    }, 
                  }}
                >
                  {borderName.name.common}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;

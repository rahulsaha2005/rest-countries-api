import React, { useEffect, useState } from "react";
import searchicon from "./assets/searchicon.png";
import Navbar from "./header.jsx";
import Searchbar from "./searchbar.jsx";
import Filter from "./Filter.jsx";
import FilteredCountries from "./FilteredCountries.jsx";
import ShimmerHomePage from "./shimmerHomePage"; 
import { useLocation } from "react-router-dom";

function Homepage() {
  const location = useLocation();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (location.state?.reset) {
      setSearchText("");
      setSelectedRegion("All");
    }
  }, [location]);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch countries", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ShimmerHomePage />;

  return (
    <>
      <div className="searchbar">
        <Searchbar
          searchicon={searchicon}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>

      <div className="country-list">
        <FilteredCountries
          selectedRegion={selectedRegion}
          searchText={searchText}
          countries={countries}
        />
      </div>
    </>
  );
}

export default Homepage;

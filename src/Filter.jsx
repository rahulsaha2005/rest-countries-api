import React from "react";

export default function Filter({ selectedRegion, setSelectedRegion }) {
  return (
    <div className="filter">
      <select
        value={selectedRegion ?? "All"} // ✅ fallback
        onChange={(e) => setSelectedRegion(e.target.value)}
        aria-label="Filter by region"
      >
        <option value="All" disabled>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
      </select>
    </div>
  );
}

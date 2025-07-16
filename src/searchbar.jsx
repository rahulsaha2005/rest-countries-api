import React from "react";

export default function Searchbar({ searchicon, searchText, setSearchText }) {
  return (
    <div id="search-bar">
      <img src={searchicon} alt="Search icon" width="20" height="20" />
      <input
        type="search"
        placeholder="Search for a Country"
        value={searchText ||""}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

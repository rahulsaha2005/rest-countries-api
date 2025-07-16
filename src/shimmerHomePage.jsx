import Navbar from "./header.jsx";
import Searchbar from "./searchbar";
import searchicon from "./assets/searchicon.png";

import Filter from "./Filter";
function ShimmerHomePage() {
  return (
    <>
      <div className="searchbar">
        <Searchbar
          searchicon={searchicon}
          searchText={null}
          setSearchText={null}
        />
        <Filter selectedRegion={null} setSelectedRegion={null} />
      </div>
      <div className="country-list">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="shimmer-item"></div>
        ))}
      </div>
    </>
  );
}

export default ShimmerHomePage;

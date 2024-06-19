import LocationItem from "../LocationItem";
import ThemeButton from "../ThemeButton";
import SearchBar from "../SearchBar";
import DateTime from "../DateTime";

import "./index.css";

const NavBar = (props) => {
  const { handleSearchSubmit, locationName, timezone } = props;

  return (
    <nav className="nav-container">
      <div className="nav-inner-container-one">
        <LocationItem locationName={locationName} />
        <div className="search-bar-md">
          <SearchBar handleSearchSubmit={handleSearchSubmit} />
        </div>

        <div className="nav-inner-container-two">
          <DateTime timezone={timezone} />
          <ThemeButton />
        </div>
      </div>

      <div className="search-bar-sm">
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
    </nav>
  );
};

export default NavBar;

import { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";

import ThemeContext from "../../context/ThemeContext";
import countriesData from "../../assets/json/country-code.json";

import "./index.css";

const SearchBar = (props) => {
  const { theme } = useContext(ThemeContext);
  const { handleSearchSubmit } = props;

  const [searchInput, setSearchInput] = useState("");
  const [countryCode, setCountryCode] = useState("IN");

  const onSearchSubmit = () => {
    handleSearchSubmit(searchInput, countryCode);
  };

  return (
    <div className="search-bar-container">
      <div className="country-dropdown-container">
        <select
          id="country"
          className={`country-dropdown search-bar-${theme}`}
          onChange={(e) => setCountryCode(e.target.value)}
          defaultValue="IN"
        >
          {Object.keys(countriesData).map((code) => (
            <option key={code} value={code}>
              {countriesData[code]}
            </option>
          ))}
        </select>
      </div>

      <input
        className={`search-bar-input search-bar-${theme}`}
        type="text"
        placeholder="Search City / Zip code"
        id="search-bar"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />

      <button
        className={`search-icon-btn search-bar-${theme}`}
        onClick={onSearchSubmit}
      >
        <MdSearch className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;

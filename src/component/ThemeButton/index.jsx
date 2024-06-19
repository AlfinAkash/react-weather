import { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

import "./index.css";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? (
        <FaMoon className={`icon-${theme}`} />
      ) : (
        <IoSunny className={`icon-${theme}`} />
      )}
    </button>
  );
};

export default ThemeButton;

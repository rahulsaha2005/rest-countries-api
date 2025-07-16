import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import night from "./assets/moon.png";
import sun from "./assets/sun.png";
import { ThemeContext } from "./ThemeContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card">
      <div
        className="globify"
        onClick={() => navigate("/", { state: { reset: true } })}
      >
        Where in the World
      </div>

      <button onClick={toggleTheme}>
        <div className="darkicon">
          <img
            src={theme === "dark" ? sun : night}
            alt="Night mode icon"
            width="18"
            height="18"
          />
          <div>{theme === "dark" ? "Light Mode" : "Dark Mode"}</div>
        </div>
      </button>
    </div>
  );
};

export default Navbar;

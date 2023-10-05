import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/movie"
      >
        Movie
      </NavLink>
      <NavLink
        to="/directors"
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
      >
        Actors
      </NavLink>
    </nav>
    );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h1>FlackFlix</h1>
      <div className="nav-link-container">
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/top-rated">Top Rated</NavLink>
        <NavLink to="/now-playing">Now Playing</NavLink>
      </div>
    </div>
  );
};

export default NavBar;

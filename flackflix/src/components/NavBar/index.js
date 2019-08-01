import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
const NavBar = props => {
  const [searchText, setSearchText] = useState("");
  const handleChange = e => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  const search = e => {
    e.preventDefault();
    props.history.push(`/search/${searchText}`);
    setSearchText("");
  };
  return (
    <div className="navbar-container">
      <h1 className="logo">FlackFlix</h1>
      <div className="nav-link-container">
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/top-rated">Top Rated</NavLink>
        <NavLink to="/now-playing">Now Playing</NavLink>
      </div>
      <form className="searchbar-container" onSubmit={search}>
        <input
          type="text"
          name="searchText"
          value={searchText}
          onChange={handleChange}
          placeholder="Search Movies"
        />
      </form>
    </div>
  );
};

export default withRouter(NavBar);

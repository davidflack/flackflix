import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
const NavBar = props => {
  const [searchText, setSearchText] = useState("");
  const [browseBtn, setBrowseBtn] = useState(false);
  const [browseMenu, setBrowseMenu] = useState(false);
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
    <>
      <div className="navbar-container">
        <h1 className="logo">FlackFlix</h1>
        <div className="nav-link-container">
          <NavLink to="/popular">Popular</NavLink>
          <NavLink to="/top-rated">Top Rated</NavLink>
          <NavLink to="/now-playing">Now Playing</NavLink>
        </div>
        <div className="mobile-browse-button">
          <p onClick={() => setBrowseMenu(!browseMenu)}>
            Browse <i class="fas fa-sort-down" />
          </p>
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
      <div
        className={
          browseMenu
            ? "mobile-nav-link-container"
            : "mobile-nav-link-container-off"
        }
      >
        <NavLink onClick={() => setBrowseMenu(!browseMenu)} to="/popular">
          Popular
        </NavLink>
        <NavLink onClick={() => setBrowseMenu(!browseMenu)} to="/top-rated">
          Top Rated
        </NavLink>
        <NavLink onClick={() => setBrowseMenu(!browseMenu)} to="/now-playing">
          Now Playing
        </NavLink>
      </div>
    </>
  );
};

export default withRouter(NavBar);

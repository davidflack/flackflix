import React from "react";
import MovieList from "../../components/MovieList";
import { searchUrl } from "../../variables";
import PropTypes from "prop-types";
const SearchResults = props => {
  console.log("Search result props", props);
  return (
    <div>
      <h2 className="search-results-text">
        Search Results for "{props.searchQuery}"
      </h2>
      <MovieList
        showHighlight={false}
        url={`${searchUrl}${props.match.params.searchQuery}`}
      />
    </div>
  );
};

SearchResults.propTypes = {
  searchQuery: PropTypes.string.isRequired
};

export default SearchResults;

import React from "react";
import MovieList from "../../components/MovieList";
import { searchUrl } from "../../variables";
const SearchResults = props => {
  return (
    <div>
      <h2>Search Results for "{props.searchQuery}"</h2>
      <MovieList url={`${searchUrl}${props.match.params.searchQuery}`} />
    </div>
  );
};

export default SearchResults;

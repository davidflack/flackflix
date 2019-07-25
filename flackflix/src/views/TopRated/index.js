import React from "react";
import { baseUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";

const TopRated = () => {
  const [loading, movieData] = useFetch(
    `${baseUrl}/top_rated?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&page=1`,
    []
  );
  let movies = null;

  if (movieData) {
    movies = movieData.results.map(movie => movie.title);
  }
  let content = <h2>Loading...</h2>;
  if (!loading && movies) {
    content = movies.map(movie => <h2>{movie}</h2>);
  }
  return content;
};

export default TopRated;

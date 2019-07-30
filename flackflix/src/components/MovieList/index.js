import React, { useState } from "react";
import MovieCard from "../MovieCard";
import { useFetch } from "../../hooks/useFetch";

const MovieList = props => {
  const [pageNum, setPageNum] = useState(1);
  const [loading, movieData] = useFetch(`${props.url}&page=${pageNum}`, [
    pageNum
  ]);
  const incrementPage = e => {
    e.preventDefault();
    setPageNum(pageNum + 1);
  };
  const decrementPage = e => {
    e.preventDefault();
    setPageNum(pageNum - 1);
  };
  let movies = null;
  if (movieData) {
    movies = movieData.results;
  }
  let content = <h2>Loading...</h2>;
  if (!loading && movies) {
    content = movies.map(movie => <MovieCard movie={movie} key={movie.id} />);
  }
  return (
    <>
      <h2>Page: {pageNum}</h2>
      {content}
      <button onClick={decrementPage}>Back</button>
      <button onClick={incrementPage}>Next</button>
    </>
  );
};

export default MovieList;

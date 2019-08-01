import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MovieCard from "../MovieCard";
import Loading from "../Loading";
import { useFetch } from "../../hooks/useFetch";

const MovieList = props => {
  const [pageNum, setPageNum] = useState(1);
  const [loading, movieData] = useFetch(`${props.url}&page=${pageNum}`, [
    pageNum,
    props.match.params.searchQuery,
    props.match.params.movieId
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
  let maxPages = null;
  if (movieData) {
    movies = movieData.results;
    maxPages = movieData.total_pages;
  }
  let content = <Loading />;
  if (!loading && movies) {
    content = movies.map(movie => <MovieCard movie={movie} key={movie.id} />);
  }
  return (
    <>
      <h2>Page: {pageNum}</h2>
      <button onClick={decrementPage} disabled={pageNum <= 1}>
        Back
      </button>
      <button onClick={incrementPage} disabled={pageNum >= maxPages}>
        Next
      </button>
      {content}
    </>
  );
};

export default withRouter(MovieList);

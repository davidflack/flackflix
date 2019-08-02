import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MovieHighlight from "../MovieHighlight";
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
    if (pageNum === 1) {
      const firstMovie = movies[0];
      content = (
        <>
          <div className="highlight-container">
            <MovieHighlight movie={firstMovie} />
          </div>
          <div className="card-container">
            {movies.slice(1).map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      );
    } else {
      content = (
        <div className="card-container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      );
    }
  }
  return (
    <div className="movie-list">
      {content}
      <div className="button-container">
        <button onClick={decrementPage} disabled={pageNum <= 1}>
          Back
        </button>
        <button onClick={incrementPage} disabled={pageNum >= maxPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default withRouter(MovieList);

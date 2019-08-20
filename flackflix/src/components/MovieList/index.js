import React from "react";
import { withRouter } from "react-router-dom";
import MovieHighlight from "../MovieHighlight";
import MovieCard from "../MovieCard";
import Loading from "../Loading";
import { useFetch } from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePagination";
import PropTypes from "prop-types";
const MovieList = props => {
  const [page, increment, decrement] = usePagination();
  const [loading, movieData, error] = useFetch(`${props.url}&page=${page}`, [
    page,
    props.match.params.searchQuery,
    props.match.params.movieId
  ]);
  let movies = null;
  let maxPages = null;
  if (movieData) {
    movies = movieData.results;
    maxPages = movieData.total_pages;
  }
  if (error === true) {
    props.history.push("/error");
  }
  let content = <Loading />;
  // if finished loading & we have movie data...
  if (!loading && movies) {
    // if there are no movies returned from the database...
    if (movieData.results.length === 0) {
      content = <h2 className="no-movies">No movies found.</h2>;
    } else {
      // if there are movies returned from the database...
      if (page === 1 && props.showHighlight === true) {
        // if (pageNum === 1 && props.showHighlight === true) {
        // highlight the very first movie from the response
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
        // do not highlight the first movie on pages greater than 1
        content = (
          <div className="card-container">
            {movies.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        );
      }
    }
  }
  return (
    <div className="movie-list">
      {content}
      {/* Hide buttons if there is only one page of movies */}
      {maxPages > 1 && (
        <div className="button-container">
          <button onClick={decrement} disabled={page <= 1}>
            Back
          </button>
          <button onClick={increment} disabled={page >= maxPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

MovieList.propTypes = {
  showHighlight: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

export default withRouter(MovieList);

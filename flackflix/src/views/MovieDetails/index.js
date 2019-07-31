import React from "react";
import { Route, NavLink } from "react-router-dom";
import { baseUrl, posterUrl, backdropUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";
import Related from "../Related";
import Recommended from "../Recommended";
const MovieDetails = props => {
  const [loading, movieData] = useFetch(
    `${baseUrl}/${props.match.params.movieId}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US`,
    [props.match.params.movieId]
  );
  let movie = null;
  if (movieData) {
    movie = movieData;
  }
  let content = <h2>Loading...</h2>;
  if (!loading && movie) {
    const {
      title,
      backdrop_path,
      poster_path,
      overview,
      genres,
      release_date,
      runtime,
      vote_average
    } = movie;
    content = (
      <>
        <h2>{title}</h2>
        <div>
          <p>{vote_average}/10</p>
          <p>{release_date}</p>
          <p>Runtime: {runtime} minutes</p>
        </div>
        <p>{overview}</p>
        <p>
          Genres:{" "}
          {genres.map(genre => (
            <span>{genre.name} </span>
          ))}
        </p>
        <img src={`${posterUrl}/${poster_path}`} alt={`Poster for ${title}.`} />
        <img
          src={`${backdropUrl}/${backdrop_path}`}
          alt={`Backdrop for ${title}.`}
        />
        <NavLink to={`/movie/${props.match.params.movieId}`}>
          More Like This
        </NavLink>
        <NavLink to={`/movie/${props.match.params.movieId}/recommended`}>
          Recommended
        </NavLink>
        <Route
          exact
          path="/movie/:movieId"
          render={props => <Related {...props} />}
        />
        <Route
          exact
          path="/movie/:movieId/recommended"
          render={props => <Recommended {...props} />}
        />
      </>
    );
  }
  return <div>{content}</div>;
};

export default MovieDetails;

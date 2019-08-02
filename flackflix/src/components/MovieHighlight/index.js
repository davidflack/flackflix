import React from "react";
import { Link } from "react-router-dom";
import { genres, posterUrl, backdropUrl } from "../../variables";

const MovieHighlight = props => {
  const {
    id,
    title,
    backdrop_path,
    overview,
    genre_ids,
    release_date,
    vote_average
  } = props.movie;
  const genreList = genre_ids.map(id => genres[id]);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backdropUrl}/${backdrop_path})`
      }}
      className="movie-highlight"
    >
      <div className="highlight-info">
        <h2 className="highlight-title">{title}</h2>
        <div className="highlight-date-vote">
          <p>{release_date}</p>
          <p>{vote_average}/10</p>
        </div>
        <ul>
          {genreList.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>{overview}</p>
        <Link to={`/movie/${id}`}>More Details</Link>
      </div>
    </div>
  );
};

export default MovieHighlight;

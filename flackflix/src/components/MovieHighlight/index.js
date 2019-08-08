import React from "react";
import { Link } from "react-router-dom";
import { genres, backdropUrl } from "../../variables";
import PropTypes from "prop-types";
const MovieHighlight = props => {
  const {
    id,
    title,
    backdrop_path,
    genre_ids,
    release_date,
    vote_average
  } = props.movie;
  const genreList = genre_ids.map(id => genres[id]);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backdropUrl}/${backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
      className="movie-highlight"
    >
      <div className="highlight-info">
        <h2 className="highlight-title">{title}</h2>
        <div className="highlight-date-vote">
          <p>{release_date.slice(0, 4)}</p>
          <p>{vote_average}/10</p>
        </div>
        <ul className="genre-list">
          {genreList.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <Link to={`/movie/${id}`} className="more-details-button">
          More Details
        </Link>
      </div>
    </div>
  );
};

MovieHighlight.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  })
};

export default MovieHighlight;

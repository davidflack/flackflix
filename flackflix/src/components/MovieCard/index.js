import React from "react";
import { withRouter } from "react-router-dom";
import { posterUrl } from "../../variables";
import PropTypes from "prop-types";
const MovieCard = props => {
  const { title, poster_path, id } = props.movie;
  const imgSrc = poster_path
    ? `${posterUrl}/${poster_path}`
    : require("../../assets/film-reel-poster.jpg");
  return (
    <div
      className="movie-card"
      onClick={() => props.history.push(`/movie/${id}`)}
    >
      <div className="card-img-container">
        <img src={imgSrc} alt={`Poster for ${title}.`} />
      </div>
      {!poster_path && <h2 className="no-poster-title">{title}</h2>}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default withRouter(MovieCard);

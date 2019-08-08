import React from "react";
import { withRouter } from "react-router-dom";
import { posterUrl } from "../../variables";
import PropTypes from "prop-types";
const MovieCard = props => {
  const { title, poster_path, id } = props.movie;
  return (
    <div
      className="movie-card"
      onClick={() => props.history.push(`/movie/${id}`)}
    >
      <div className="card-img-container">
        <img src={`${posterUrl}/${poster_path}`} alt={`Poster for ${title}.`} />
      </div>
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

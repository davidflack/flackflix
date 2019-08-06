import React from "react";
import { withRouter } from "react-router-dom";
import { posterUrl } from "../../variables";
const MovieCard = props => {
  const { title, release_date, poster_path, id } = props.movie;
  return (
    <div
      className="movie-card"
      onClick={() => props.history.push(`/movie/${id}`)}
    >
      <div className="card-img-container">
        <img src={`${posterUrl}/${poster_path}`} alt={`Poster for ${title}.`} />
      </div>
      <div className="card-text-container">
        <h2>{title.slice(0, 20)}</h2>
        <h2>{release_date.slice(0, 4)}</h2>
      </div>
    </div>
  );
};

export default withRouter(MovieCard);

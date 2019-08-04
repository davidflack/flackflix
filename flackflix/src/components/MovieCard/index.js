import React from "react";
import { withRouter, Link } from "react-router-dom";
import { genres, posterUrl } from "../../variables";
const MovieCard = props => {
  const {
    title,
    vote_average,
    release_date,
    poster_path,
    id,
    genre_ids
  } = props.movie;
  const genreList = genre_ids.map(id => genres[id]);
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
      {/* <h3>{vote_average} user score</h3>
      <h3>Release Date: {release_date}</h3>
      <ul>
        {genreList.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <Link to={`/movie/${id}`}>More Details</Link> */}
    </div>
  );
};

export default withRouter(MovieCard);

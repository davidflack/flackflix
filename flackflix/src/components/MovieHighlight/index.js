import React from "react";
import { Link } from "react-router-dom";
import { genres, posterUrl, backdropUrl } from "../../variables";
const MovieHighlight = props => {
  const {
    id,
    title,
    backdrop_path,
    poster_path,
    overview,
    genre_ids,
    release_date,
    vote_average
  } = props.movie;
  const genreList = genre_ids.map(id => genres[id]);
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>{vote_average}/10</p>
        <p>{release_date}</p>
      </div>
      <ul>
        {genreList.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{overview}</p>
      <Link to={`/movie/${id}`}>More Details</Link>
      <img src={`${posterUrl}/${poster_path}`} alt={`Poster for ${title}.`} />
      <img
        src={`${backdropUrl}/${backdrop_path}`}
        alt={`Backdrop for ${title}.`}
      />
    </div>
  );
};

export default MovieHighlight;

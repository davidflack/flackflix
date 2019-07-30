import React from "react";
import { genres } from "../../variables";
const MovieCard = props => {
  const {
    title,
    vote_average,
    release_date,
    poster_path,
    id,
    genre_ids,
    backdrop_path
  } = props.movie;
  const genreList = genre_ids.map(id => genres[id]);
  return (
    <div>
      <h2>{title}</h2>
      <h3>{vote_average} user score</h3>
      <h3>Release Date: {release_date}</h3>
      <ul>
        {genreList.map(genre => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCard;
// backdrop_path: "/af98P1bc7lJsFjhHOVWXQgNNgSQ.jpg"
// genre_ids: (3) [18, 36, 10752]
// id: 424
// poster_path: "/yPisjyLweCl1tbgwgtzBCNCBle.jpg"
// release_date: "1993-12-15"
// title: "Schindler's List"
// vote_average: 8.5

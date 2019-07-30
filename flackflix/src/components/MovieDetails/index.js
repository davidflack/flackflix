import React from "react";
import { baseUrl, posterUrl, backdropUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";
const MovieDetails = props => {
  const [loading, movieData] = useFetch(
    `${baseUrl}/${props.match.params.movieId}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US`,
    []
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
      </>
    );
  }
  return <div>{content}</div>;
};

export default MovieDetails;

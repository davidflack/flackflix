import React from "react";
import { baseUrl, backdropUrl } from "../../variables";
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
    content = movie.title;
  }
  return <div>{content}</div>;
};

export default MovieDetails;

// backdrop_path: "/lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg"
// belongs_to_collection: null
// budget: 350000
// genres: [{…}]
// homepage: null
// id: 389
// imdb_id: "tt0050083"
// original_language: "en"
// original_title: "12 Angry Men"
// overview: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other."
// popularity: 17.437
// poster_path: "/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg"
// production_companies: (2) [{…}, {…}]
// production_countries: [{…}]
// release_date: "1957-03-25"
// revenue: 1000000
// runtime: 97
// spoken_languages: [{…}]
// status: "Released"
// tagline: "Life is in their hands. Death is on their minds."
// title: "12 Angry Men"
// video: false
// vote_average: 8.4
// vote_count: 3832

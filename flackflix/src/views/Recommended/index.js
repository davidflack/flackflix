import React from "react";
import { baseUrl } from "../../variables";
import MovieList from "../../components/MovieList";

const Recommended = props => {
  return (
    <div>
      <h2>Viewers Also Recommend...</h2>
      <MovieList
        url={`${baseUrl}/${
          props.match.params.movieId
        }/recommendations?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`}
      />
    </div>
  );
};

export default Recommended;
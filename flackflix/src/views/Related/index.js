import React from "react";
import { baseUrl } from "../../variables";
import MovieList from "../../components/MovieList";
const Related = props => {
  return (
    <div>
      <h2>More Like This</h2>
      <MovieList
        showHighlight={false}
        url={`${baseUrl}/${props.match.params.movieId}/similar?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`}
      />
    </div>
  );
};

export default Related;

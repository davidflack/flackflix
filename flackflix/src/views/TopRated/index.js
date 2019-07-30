import React from "react";
import MovieList from "../../components/MovieList";
import { baseUrl } from "../../variables";

const TopRated = () => {
  return (
    <>
      <MovieList
        url={`${baseUrl}/top_rated?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`}
      />
    </>
  );
};

export default TopRated;

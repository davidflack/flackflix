import React from "react";
import MovieList from "../../components/MovieList";
import { baseUrl } from "../../variables";

const Popular = () => {
  return (
    <>
      <MovieList
        showHighlight={true}
        url={`${baseUrl}/popular?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`}
      />
    </>
  );
};

export default Popular;

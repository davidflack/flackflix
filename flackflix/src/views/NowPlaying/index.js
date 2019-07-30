import React from "react";
import MovieList from "../../components/MovieList";
import { baseUrl } from "../../variables";

const NowPlaying = () => {
  return (
    <>
      <MovieList
        url={`${baseUrl}/now_playing?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`}
      />
    </>
  );
};

export default NowPlaying;

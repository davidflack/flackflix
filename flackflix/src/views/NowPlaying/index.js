import React from "react";
import { baseUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";
const NowPlaying = () => {
  const [loading, movieData] = useFetch(
    `${baseUrl}/now_playing?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&page=1`,
    []
  );
  return (
    <div>
      <h1>Now Playing</h1>
    </div>
  );
};

export default NowPlaying;

import React from "react";
import { baseUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";

const TopRated = () => {
  const [loading, movieData] = useFetch(
    `${baseUrl}/top_rated?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&page=1`,
    []
  );
  return (
    <div>
      <h1>Top Rated</h1>
    </div>
  );
};

export default TopRated;

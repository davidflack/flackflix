import React from "react";
import { baseUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";

const Popular = () => {
  const [loading, movieData] = useFetch(
    `${baseUrl}/popular?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&page=1`,
    []
  );
  return (
    <div>
      <h1>Popular</h1>
    </div>
  );
};

export default Popular;

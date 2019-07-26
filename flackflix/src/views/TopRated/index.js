import React, { useState } from "react";
import { baseUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";

const TopRated = () => {
  const [pageNum, setPageNum] = useState(1);
  const [loading, movieData] = useFetch(
    `${baseUrl}/top_rated?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&page=${pageNum}`,
    [pageNum]
  );
  const incrementPage = e => {
    e.preventDefault();
    setPageNum(pageNum + 1);
  };
  const decrementPage = e => {
    e.preventDefault();
    setPageNum(pageNum - 1);
  };
  let movies = null;

  if (movieData) {
    movies = movieData.results.map(movie => movie.title);
  }
  let content = <h2>Loading...</h2>;
  if (!loading && movies) {
    content = movies.map(movie => <h2>{movie}</h2>);
  }
  return (
    <>
      <h2>Page: {pageNum}</h2>
      {content}
      <button onClick={decrementPage}>Back</button>
      <button onClick={incrementPage}>Next</button>
    </>
  );
};

export default TopRated;

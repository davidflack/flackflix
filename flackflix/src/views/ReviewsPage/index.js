import React, { useState } from "react";
import Review from "../../components/Review";
import { baseUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";
const Reviews = props => {
  const [pageNum, setPageNum] = useState(1);
  const incrementPage = e => {
    e.preventDefault();
    setPageNum(pageNum + 1);
  };
  const decrementPage = e => {
    e.preventDefault();
    setPageNum(pageNum - 1);
  };
  const [loading, reviewData] = useFetch(
    `${baseUrl}/${props.movieId}/reviews?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&page=${pageNum}`,
    [pageNum, props.movieId]
  );
  let reviews = null;
  let maxPages = null;
  if (reviewData) {
    reviews = reviewData.results;
    maxPages = reviewData.total_pages;
  }
  let content = <h2>Loading...</h2>;
  if (!loading && reviews) {
    if (reviewData.results.length === 0) {
      content = <h2>There are no reviews for this film.</h2>;
    } else if (reviewData.total_pages === 1) {
      content = reviews.map(review => (
        <Review
          key={review.id}
          author={review.author}
          content={review.content}
        />
      ));
    } else {
      content = (
        <>
          <button onClick={decrementPage} disabled={pageNum <= 1}>
            Back
          </button>
          <button onClick={incrementPage} disabled={pageNum >= maxPages}>
            Next
          </button>
          {reviews.map(review => (
            <Review
              key={review.id}
              author={review.author}
              content={review.content}
            />
          ))}
        </>
      );
    }
    console.log("REVIEW DATA:", reviewData);
  }
  return <>{content}</>;
};

export default Reviews;

import React from "react";
import Loading from "../../components/Loading";
import Review from "../../components/Review";
import { baseUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePagination";
import PropTypes from "prop-types";
import Buttons from "../../components/PaginationButtons";
const Reviews = props => {
  const [page, increment, decrement] = usePagination();
  const [loading, reviewData, error] = useFetch(
    `${baseUrl}/${props.movieId}/reviews?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&page=${page}`,
    [page, props.movieId]
  );
  let reviews = null;
  let maxPages = null;
  if (reviewData) {
    reviews = reviewData.results;
    maxPages = reviewData.total_pages;
  }
  if (error === true) {
    props.history.push("/error");
  }
  let content = <Loading />;
  if (!loading && reviews) {
    if (reviewData.results.length === 0) {
      content = (
        <h2 className="no-reviews">There are no reviews for this film.</h2>
      );
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
          <Buttons
            decrement={decrement}
            increment={increment}
            page={page}
            maxPages={maxPages}
          />
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
  }
  return <>{content}</>;
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired
};

export default Reviews;

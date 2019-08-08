import React from "react";
import PropTypes from "prop-types";
const Review = props => {
  return (
    <div className="review">
      <h2 className="review-author">{props.author} writes:</h2>
      <p className="review-content">"{props.content}"</p>
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Review;

import React from "react";

const Review = props => {
  return (
    <div className="review">
      <h2 className="review-author">{props.author} writes:</h2>
      <p className="review-content">"{props.content}"</p>
    </div>
  );
};

export default Review;

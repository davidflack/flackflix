import React from "react";

const Review = props => {
  return (
    <div>
      <h2>{props.author}:</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Review;

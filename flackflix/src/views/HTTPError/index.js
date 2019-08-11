import React from "react";

// NOTE: Syling for this comoponent is found in flackflix/src/views/RoutingError/_error-page.scss

const HTTPError = () => {
  return (
    <div className="error-page-container">
      <h2>Something went wrong.</h2>
      <h3>Please try again later.</h3>
    </div>
  );
};

export default HTTPError;

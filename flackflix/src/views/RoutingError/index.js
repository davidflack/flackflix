import React from "react";
import { Link } from "react-router-dom";

const RoutingError = () => {
  return (
    <div className="error-page-container">
      <h2>Uh-Oh!</h2>
      <h3>The page you are looking for does not exist.</h3>
      <h3>
        <Link to="/popular" className="redirect-link">
          Click here
        </Link>{" "}
        to browse popular movies.
      </h3>
    </div>
  );
};

export default RoutingError;

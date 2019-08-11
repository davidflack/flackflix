import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-text-container">
        <h1>FlackFlix</h1>
        <h2>
          A place to learn all you need to know about your favorite movies.
        </h2>
        <Link to="/popular" className="cta">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;

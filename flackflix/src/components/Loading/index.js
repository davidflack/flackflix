import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading">
      <Loader type="Oval" color="#01d277" height={80} width={80} />
    </div>
  );
};

export default Loading;

import React from "react";
import PropTypes from "prop-types";

const PaginationButtons = props => {
  return (
    <div className="button-container">
      <button onClick={props.decrement} disabled={props.page <= 1}>
        Back
      </button>
      <button onClick={props.increment} disabled={props.page >= props.maxPages}>
        Next
      </button>
    </div>
  );
};

PaginationButtons.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired
};
export default PaginationButtons;

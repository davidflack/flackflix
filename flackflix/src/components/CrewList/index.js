import React from "react";
import Loading from "../Loading";
import CrewDeptCard from "../CrewDeptCard";
import { useFetch } from "../../hooks/useFetch";
import { groupByCrewDept } from "../../variables";
import PropTypes from "prop-types";
const Crew = props => {
  const [loading, crewData, error] = useFetch(props.url, [
    props.match.params.movieId
  ]);
  let crew = null;
  if (crewData) {
    crew = crewData.crew;
    crew = groupByCrewDept("department")(crew);
  }
  if (error === true) {
    props.history.push("/error");
  }
  let content = <Loading />;
  if (!loading && crew) {
    content = (
      <div>
        {Object.keys(crew).map(key => {
          return (
            <CrewDeptCard
              deptName={key}
              crewMembers={crew[key]}
              key={`${key} department card`}
            />
          );
        })}
      </div>
    );
  }
  return content;
};

Crew.propTypes = {
  url: PropTypes.string.isRequired
};

export default Crew;

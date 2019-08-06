import React from "react";
import Loading from "../Loading";
import CrewDeptCard from "../CrewDeptCard";
import { useFetch } from "../../hooks/useFetch";
import { groupByCrewDept } from "../../variables";
const Crew = props => {
  const [loading, crewData] = useFetch(props.url, [props.match.params.movieId]);
  let crew = null;
  if (crewData) {
    crew = crewData.crew;
    crew = groupByCrewDept("department")(crew);
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

export default Crew;

import React from "react";
import { headshotUrl } from "../../variables";
const CrewDeptCard = props => {
  return (
    <div>
      <h2>{props.deptName} department</h2>
      {props.crewMembers.map(member => {
        const headshot = {
          photo: member.profile_path
            ? `${headshotUrl}${member.profile_path}`
            : require("../../assets/user-alt-solid.svg"),
          alt: member.profile_path
            ? `${member.name}'s headshot.`
            : `Placeholder headshot for ${
                member.name
              }. Made by FontAwesome under creative commons license: https://fontawesome.com/license`
        };
        return (
          <div>
            <div className="headshot-container">
              <img src={headshot.photo} alt={headshot.alt} />
            </div>
            <div>
              <p>{member.name}</p>
              <p>{member.job}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CrewDeptCard;

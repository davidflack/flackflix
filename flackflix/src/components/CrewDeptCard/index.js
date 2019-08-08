import React from "react";
import { headshotUrl } from "../../variables";
import PropTypes from "prop-types";
const CrewDeptCard = props => {
  console.log("CREW PROPS", props);
  return (
    <>
      <h2 className="dept-title">{props.deptName} Team</h2>
      <div className="crew-dept-card">
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
            <div className="crew-member-profile" key={member.id}>
              <div className="headshot-container">
                <img src={headshot.photo} alt={headshot.alt} />
              </div>
              <div className="name-position">
                <p className="crew-member-name">{member.name}</p>
                <p className="crew-member-position">{member.job}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

CrewDeptCard.propTypes = {
  deptName: PropTypes.string.isRequired,
  crewMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      job: PropTypes.string,
      profile_path: PropTypes.string
    })
  ).isRequired
};

export default CrewDeptCard;

import React from "react";
import Loading from "../../components/Loading";
import { headshotUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";
import PropTypes from "prop-types";
const Cast = props => {
  const [loading, castData, error] = useFetch(props.url, [
    props.match.params.movieId
  ]);
  let cast = null;
  if (castData) {
    cast = castData.cast;
  }
  if (error === true) {
    props.history.push("/error");
  }
  let content = <Loading />;
  if (!loading && cast) {
    // if there is no cast list posted...
    if (castData.cast.length === 0) {
      content = (
        <h2 className="no-cast">
          The cast list for this film has not been registered.
        </h2>
      );
    } else {
      content = (
        <div className="cast-list-container">
          {cast.map(castMember => {
            const headshot = {
              photo: castMember.profile_path
                ? `${headshotUrl}${castMember.profile_path}`
                : require("../../assets/user-alt-solid.svg"),
              alt: castMember.profile_path
                ? `${castMember.name}'s headshot.`
                : `Placeholder headshot for ${
                    castMember.name
                  }. Made by FontAwesome under creative commons license: https://fontawesome.com/license`
            };
            return (
              <div className="cast-listing" key={castMember.cast_id}>
                <div className="headshot-container">
                  <img src={headshot.photo} alt={headshot.alt} />
                </div>
                <div className="name-character">
                  <p className="actor-name">{castMember.name}</p>
                  <p className="character">{castMember.character}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
  return content;
};

Cast.propTypes = {
  url: PropTypes.string
};

export default Cast;

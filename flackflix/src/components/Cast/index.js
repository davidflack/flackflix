import React from "react";
import Loading from "../../components/Loading";
import { actorUrl } from "../../variables";
import { useFetch } from "../../hooks/useFetch";
const Cast = props => {
  const [loading, castData] = useFetch(props.url, [props.match.params.movieId]);
  let cast = null;
  if (castData) {
    cast = castData.cast;
  }
  let content = <Loading />;
  if (!loading && cast) {
    content = (
      <div className="cast-list-container">
        {cast.map(castMember => {
          return (
            <div key={castMember.cast_id} className="cast-listing">
              <div className="headshot-container">
                <img
                  src={`${actorUrl}${castMember.profile_path}`}
                  alt={`${castMember.name}'s headshot.`}
                />
              </div>
              <div>
                <p>{castMember.name}</p>
                <p>{castMember.character}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return content;
};

export default Cast;

import React from "react";

import PropTypes from "prop-types";

function StatsProfile({ follow, view, like }) {
  return (
    <>
      <div className="statsProfile">
        <div className="statsInfo">
          <h2 className="statsCount">{follow}</h2>
          <span className="descriptionStats">followers</span>
        </div>

        <div className="statsInfo">
          <h2 className="statsCount">{view}</h2>
          <span className="descriptionStats">views</span>
        </div>

        <div className="statsInfo">
          <h2 className="statsCount">{like}</h2>
          <span className="descriptionStats">likes</span>
        </div>
      </div>
    </>
  );
}

StatsProfile.propTypes = {
  follow: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
};

export default StatsProfile;

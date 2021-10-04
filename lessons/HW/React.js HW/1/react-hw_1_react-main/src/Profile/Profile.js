import React from "react";
import PropTypes from "prop-types";
import "./profile.scss";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import StatsProfile from "./StatsProfile";
// import { Avatar } from "@material-ui/core";

function Profile({ imgUrl, nameProfile, tag, location, stats }) {
  let { followers, views, likes } = stats;
  return (
    <>
      <header>
        <div className="profile">
          <div className="mainInfoProfileWrapper">
            <div className="wrapperImgProfile">
              <img alt={nameProfile} src={imgUrl} className="mainImgProfile" />
            </div>
            <div className="contentInfoProfile">
              <h2 className="nameProfile">
                {nameProfile} <span className="tagName">#{tag}</span>
              </h2>
            </div>
          </div>

          <div className="asideStatsWrapper">
            <StatsProfile follow={followers} view={views} like={likes} />
          </div>
        </div>
      </header>
      <div className="secondWrapperProfile">
        <div className="profile">
          <span className="locationInfo">
            {" "}
            <PersonPinIcon />
            {location}
          </span>
        </div>
      </div>
    </>
  );
}

Profile.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  nameProfile: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;

// {/* <div className="profile">
// <div className="wrapperProfile">
//   {/* <img src={imgUrl} alt="" className="mainImgProfile" /> */}
//   {/* <Avatar alt={nameProfile} src={imgUrl} className="mainImgProfile" /> */}

//   <div className="contentInfoProfile">
//     <h2 className="nameProfile">
//       {/* {nameProfile} <span className="tagName">#{tag}</span> */}
//     </h2>

//     <span className="locationInfo">
//       {" "}
//       <PersonPinIcon className="locationPin" />
//       {/* {location} */}
//     </span>
//   </div>
// </div>
// </div> */}

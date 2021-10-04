import React from "react";
import PropTypes from "prop-types";
import "./friendList.scss";

function FriendList({ friendsList }) {
  return (
    <>
      <div className="wrapperFriendList">
        <h2 className="friendsListTitle">3. Friends list:</h2>

        <ul>
          {friendsList.map(({ avatar, name, isOnline, id }) => (
            <li key={id} className="liItemFriend">
              <div className="wrapperAvatarFriend">
                <img src={avatar} alt={name} className="avatarFriendList" />
              </div>

              <div className="contentInfoFriend">
                <h2 className="nameFriendList">{name}</h2>
                {isOnline ? (
                  <span className="itemOnline isOnline">Online</span>
                ) : (
                  <span className="itemOnline itemOffline">Offline</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;

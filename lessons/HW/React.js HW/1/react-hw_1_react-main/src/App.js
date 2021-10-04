import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import Transactions from "./HistoryTransactions/Transactions";
import FriendList from "./FreindList/FriendList";

function App({
  profileAssets,
  statiscticsAsstes,
  transactionsAssets,
  friendsAssets,
}) {
  //destruction profile obj
  let { name, tag, location, avatar, stats } = profileAssets;

  return (
    <>
      <Profile
        imgUrl={avatar}
        nameProfile={name}
        tag={tag}
        location={location}
        stats={stats}
      />

      <div className="containerMain">
        <Statistics
          title="2. What kind of table"
          tableData={statiscticsAsstes}
        />
        <Transactions
          title="4. i can repeat"
          transactionsAssets={transactionsAssets}
        />

        <FriendList friendsList={friendsAssets} />
      </div>
    </>
  );
}

App.propTypes = {
  profileAssets: PropTypes.object,
  statiscticsAsstes: PropTypes.array,
  transactionsAssets: PropTypes.array,
  friendsAssets: PropTypes.array,
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import ProfileInfo from "./assets/user.json";
import StatiscticsInfo from "./assets/statistics.json";
import TransactionsInfo from "./assets/transactions.json";
import FriendsInfo from "./assets/freinds.json";

import App from "./App";

ReactDOM.render(
  <>
    <App
      profileAssets={ProfileInfo}
      statiscticsAsstes={StatiscticsInfo}
      transactionsAssets={TransactionsInfo}
      friendsAssets={FriendsInfo}
    />
  </>,
  document.getElementById("root")
);

import "./App.css";
import TopLeaderBoardCard from "./Component/Card/TopLeaderBoardCard";
// import GetStarted from './Component/Button/GetStarted';
import EarnCard from "./Component/Card/EarnCard";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <EarnCard />
      <TopLeaderBoardCard />
    </React.Fragment>
  );
}

export default App;

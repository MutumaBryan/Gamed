import "./App.css";
import TopLeaderBoardCard from "./Component/Card/TopLeaderBoardCard";
// import GetStarted from './Component/Button/GetStarted';
import EarnCard from "./Component/Card/EarnCard";
import React from "react";
import CreateAccount from "./Component/Button/CreateAccount";
import SignUpGoogle from "./Component/Button/SignUpGoogle";

function App() {
  return (
    <React.Fragment>
      <SignUpGoogle />
      <CreateAccount />
      <EarnCard />
      <TopLeaderBoardCard />
    </React.Fragment>
  );
}

export default App;

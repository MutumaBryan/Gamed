import "./App.css";
import React from "react";
import GamEd from "./Component/Card/GamEd";
import UsernameInput from "./Component/Input/UsernameInput";

function App() {
  return (
    <React.Fragment>
    <UsernameInput/>
    <GamEd></GamEd>
    {/* <PasswordInput></PasswordInput> */}
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import React from "react";
import PasswordInput from "./Component/Input/PasswordInput";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <React.Fragment>
    <PasswordInput></PasswordInput>
     <CreateAccount />
    </React.Fragment>
  );
}

export default App;

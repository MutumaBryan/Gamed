import React from "react";
import "../../styles/FormInputStyles.css";

function PasswordInput() {
  return (
    <div className="input-container">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="input your password"
        required
      ></input>
    </div>
  );
}

export default PasswordInput;

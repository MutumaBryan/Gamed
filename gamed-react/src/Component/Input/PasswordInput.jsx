import React, { useState } from "react";
import "../../Styles/FormInputStyles.css";

function PasswordInput() {
  // We use the useState Hook to create a state variable isFocused that tracks whether the input is currently focused. It's initialized to false
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setInputValue(e.target.value);
  };

  const isLabelActive = isFocused || inputValue !== "";

  return (
    <div className={"flex-floating-label"}>
      <label htmlFor="password" className={isLabelActive ? "active" : ""}>
        Password
      </label>
      <input
        id="password"
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="password"
        name="password"
        placeholder="input your password"
        required
      ></input>
    </div>
  );
}

export default PasswordInput;

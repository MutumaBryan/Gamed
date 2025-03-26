import React, { useState, useRef } from "react";
import "../../styles/FormInputStyles.css";

function PasswordInput() {
  // We use the useState Hook to create a state variable isFocused that tracks whether the input is currently focused. It's initialized to false
  // We use the useRef Hook to create a reference to the input element
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    // This function is called when the input element gains focus. It updates the isFocused state to true
    setIsFocused(true);
  };

  const handleBlur = () => {
    // This function is called when the input element loses focus. It updates the isFocused state to false
    setIsFocused(false);
  };

  // When isFocused is true, the label will have the classes 'floating-label focused'.
  // When isFocused is false, the label will have the class 'floating-label'
  const labelClassName = isFocused
    ? "floating-label focused"
    : "floating-label";

  // When isFocused is true, the container will have the classes 'input-container focused'.
  // When isFocused is false, the container will have the class 'input-container'
  const containerClassName = isFocused
    ? "input-container focused"
    : "input-container";

  return (
    <div className={containerClassName}>
      <label htmlFor="password" className={labelClassName}>Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="input your password"
        required
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}

export default PasswordInput;

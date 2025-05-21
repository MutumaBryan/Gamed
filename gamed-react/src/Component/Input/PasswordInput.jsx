import React, { useState } from "react";
import "../../Styles/FormInputStyles.css";

function PasswordInput({ label, value, onChange, id, placeholder, required }) {
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
        {label}
      </label>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type="password"
      ></input>
    </div>
  );
}

export default PasswordInput;

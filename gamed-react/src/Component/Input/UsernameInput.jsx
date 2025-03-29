import React, { useState } from "react";
import "../../styles/FormInputStyles.css";

function UsernameInput() {
  // We use the useState Hook to create a state variable isFocused that tracks whether the input is currently focused. It's initialized to false
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setInputValue(e.target.value);
  };

  const isLabelActive = isFocused || inputValue !== '';

  return (
    <React.Fragment>
      <div className={'flex-floating-label'}>
        <label htmlFor="username" className={isLabelActive ? 'active' : ''}>
          Username
        </label>
        <input
          id="username"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          name="username"
          placeholder="input your username"
          required
        ></input>
      </div>
    </React.Fragment>
  );
}

export default UsernameInput;

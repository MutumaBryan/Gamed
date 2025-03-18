import React from "react";

// All CSS for this button component
const getStatrtedStyles = {
  backgroundColor: "#74FF9E",
  fontFamily: "Raleway",
  fontWeight: "800",
  fontSize: "1.25rem",
  lineHeight: "1.5rem",
  padding: "0.75rem 1.5rem",
  color: "#FEFDFF",
  borderRadius: "1.5rem",
  border: "none",
  boxShadow:
    "1.25rem 1.25rem 1.25rem -0.625rem #2B2D2B40 inset, 0.125rem 0.125rem 0.125rem rgba(236, 237, 236, 0.1) inset",
  // box-shadow: y axis x axis blur spread color | inset puts the shadow inside the item's border
};

function GetStarted() {
  return (
    <React.Fragment>
      <button style={getStatrtedStyles}>Get Started</button>
    </React.Fragment>
  );
}

export default GetStarted;

// /* Quiz Button in progress */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 12px 24px;
// gap: 12px;

// width: 161px;
// height: 64px;

// /* Sec/801 */
// background: #61D584;
// box-shadow: inset 2px 2px 4px rgba(236, 237, 236, 0.1), inset 20px 20px 20px -10px rgba(43, 45, 43, 0.25);
// border-radius: 24px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Get Started */

// width: 113px;
// height: 24px;

// font-family: 'Raleway';
// font-style: normal;
// font-weight: 800;
// font-size: 20px;
// line-height: 24px;
// /* identical to box height, or 120% */
// text-transform: capitalize;

// color: #FEFDFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

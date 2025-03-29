import React from "react";
import { useTheme } from "../../contexts/ButtonTheme";

function GetStarted(variant) {
  const { theme } = useTheme();

  // All CSS for this button component
  const getStatrtedStyles = {
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

  switch (variant) {
    case "primary":
      getStatrtedStyles.backgroundColor = theme.primaryColor;
      break;
    case "secondary":
      getStatrtedStyles.backgroundColor = theme.secondaryColor;
      break;
    default:
      getStatrtedStyles.backgroundColor = theme.primaryColor; // Default to primary
  }
  
  return (
    <React.Fragment>
      <button style={getStatrtedStyles}>Get Started</button>
    </React.Fragment>
  );
}

export default GetStarted;

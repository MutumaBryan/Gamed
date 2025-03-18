import React from 'react'

// All CSS for this button component
const getStatrtedStyles = {
  backgroundColor: "#74FF9E",
  fontFamily: "Raleway",
  fontWeight: "800",
  padding: "0.75em 1.5em",
  color: "#FEFDFF",
  borderRadius: "1.5em",
  border: "none",
  boxShadow: "1.25em 1.25em 1.25em -0.625em #2B2D2B40 inset"
  // box-shadow: y axis x axis blur spread color | inset puts the shadow inside the item's border
}

function GetStarted() {
  return (
    <React.Fragment>
      <button style={getStatrtedStyles}>Get Started</button>
    </React.Fragment>
  )
}

export default GetStarted

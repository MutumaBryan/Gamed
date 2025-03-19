import React from "react";
import GetStarted from "../Button/GetStarted";
import BadgeLevel5 from "../../assets/images/BadgeLevel5.svg";

const mainCardStyles = {
  backgroundColor: "#3C0099",
  margin: "1rem",
  height: "68vh",
  width: "44vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "2.5rem",
  // box-shadow: y axis x axis blur spread color | inset puts the shadow inside the item's border | After each comma is a new layer of box-shadow
  boxShadow:
    "3.261rem 3.261rem 6.523rem -1.631rem #00000040 inset, 2.446rem 2.446rem 5.707rem -1.631rem #00000040 inset, 2.446rem 2.446rem 6.523rem -1.631rem #00000040 inset, 1.631rem 1.631rem 3.261rem -3.261rem #35363540, 1.631rem 1.631rem 3.261rem -3.261rem #35363540",
  minWidth: "300px",
  maxWidth: "600px",
  minHeight: "300px",
  maxHeight: "440px",
};

const cardContentStyles = {
  padding: "1.5% 0",
  width: "77%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "2%",
};

const cardImageStyles = {
  width: "31%",
};

const cardArticleStyles = {
  textAlign: "center",
};

const cardHeaderStyles = {
  fontFamily: "Rakkas",
  fontWeight: "400",
  fontSize: "2rem",
  lineHeight: "2.929rem",
  width: "100%",
};

const cardParagraphStyles = {
  fontFamily: "Raleway",
  fontWeight: "400",
  fontSize: "1.25rem",
  lineHeight: "1.875rem",
  color: "#323132",
  margin: "0",
  width: "100%",
};

function JoiningLearningForums() {
  return (
    <section style={mainCardStyles}>
      <div style={cardContentStyles}>
        <img
          src={BadgeLevel5}
          alt="This is the badge level 3"
          style={cardImageStyles}
        ></img>
        <article style={cardArticleStyles}>
          <header style={cardHeaderStyles}>TOP THE LEADER BOARD</header>
          <p style={cardParagraphStyles}>
            Earn points, rise to the top, and show everyone who’s the best. Can
            you claim the crown?
          </p>
        </article>
        <GetStarted />
      </div>
    </section>
  );
}


export default JoiningLearningForums


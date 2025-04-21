import React from "react";
import "../Styles/LandingPage.css";
import LandingTopSection from "../Layouts/LandingTopSection";
import LandingSectionTwo from "../Layouts/LandingSectionTwo";


function LandingPage() {
  return (
    <React.Fragment>
      <div class="scroll-container">
        <LandingTopSection />
        <LandingSectionTwo />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;

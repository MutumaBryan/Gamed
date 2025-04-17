import React from "react";
import "../Styles/LandingHeaderStyles.css";
import GetStarted from "../Component/Button/GetStarted";
import logo from "./../assets/images/WhiteLogo.svg"

function LandingHeader() {
  return (
    <React.Fragment>
      <nav id="nav-header">
        <ul id="header-list">
          <li id="header-list-item-1">
            <a href="#header">
              <img src={logo} alt="" />
            </a>
          </li>
          <li id="header-list-item-2">
            <span className="header-span">About us</span>
            <span className="header-span">Courses</span>
            <span className="header-span">Pricing</span>
          </li>
          <li id="header-list-item-3">
              <span className="header-span">Login</span>
            <GetStarted bgColor="#74FF9E" color="#3C0099" />
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default LandingHeader;

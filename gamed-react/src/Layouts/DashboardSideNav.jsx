import React, { useState } from "react";
import "../Styles/DashboardSideNavStyles.css";
import Logo from "../assets/images/Dashboard logo.svg";

function DashboardSideNav() {
  const [activeItem, setActiveItem] = useState("Dashboard"); // Initialize active item

  const navItems = ["Dashboard", "Course Page", "LeaderBoard"];

  // const toggleNav = () => {
  //     setIsCollapsed(!isCollapsed);
  // };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <nav id="dashboard-side-nav" className={`side-nav`}>
        <img
          src={Logo}
          alt="GamED logo of game up, down, left and right plus sign buttons as well the word GamEd"
        ></img>
        <ul>
          {navItems.map((item) => (
            <li
              key={item}
              className={activeItem === item ? "active" : ""}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default DashboardSideNav;

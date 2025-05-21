import React from "react";
import DashboardSideNav from "../Layouts/DashboardSideNav";
import DashboardLatestCourse from "../Layouts/DashboardLatestCourse";
import "../Styles/DashboardPageStyles.css";
import DashboardTopNav from "../Layouts/DashboardTopNav";
import CourseCards from "../Component/Card/CourseCards";
import { BrowserRouter as useLocation } from 'react-router-dom';

function Dashboard() {
  // const location = useLocation(); 
  // const username = location.state?.username;

  return (
    <React.Fragment>
      <div id="dashboard-page-grid">
        <div id="dashboard-page-menu">
          <DashboardSideNav />
        </div>
        <div id="dashboard-page-grid-main">
          <DashboardTopNav />
          <DashboardLatestCourse />
          <CourseCards />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;

import React from "react";
import CustomButton from "../Button/CustomButton";
import "../../Styles/ResumeCourseCardStyles.css"

function ResumeCourse() {
  return (
    <React.Fragment>
      <article id="resume-course-card">
        <header>Welcome back Eva</header>
        <p>
          Are you ready to level up? We have exciting courses for you this
          semester. Pick up from where you left off.
        </p>
        <CustomButton text={"Resume Course"}/>
      </article>
    </React.Fragment>
  );
}

export default ResumeCourse;

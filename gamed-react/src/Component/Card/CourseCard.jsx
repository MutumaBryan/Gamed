import React from "react";
import CardRating from "../../contexts/CardRating";
import LearnMore from "../Button/LearnMore";
import "../../styles/CourseCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseCard = ({ image, title, description, rating }) => {
  return (
    <div className="custom-container">
      <div className="card-container">
        <img src={image} alt={title} className="card-img" />
        <div className="title-div">
          <h3 className="card-title"> {title}Basics of Html & CSS</h3>
          <p className="title-p">10 Modules</p>
        </div>
        <p className="card-description">
          {description} Learn to structure web pages with HTML, style them with
          CSS, and build responsive designs--, all in a hands-on, beginner
          friendly course.
        </p>
        <CardRating value={rating} />
        <LearnMore />
      </div>
    </div>
  );
};

export default CourseCard;

import React from "react";
import "../styles/CourseCard.css";

const CardRating = () => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} style={{ color: "#F2F247", cursor: "pointer" }}>
        ★
      </span>
    ));
  return (
    <div className="rating">
      <span className="rating-span" style={{ marginRight: "5px", fontWeight: "bold" }}> 5.0 </span>
      {stars}
    </div>
  );
};

export default CardRating;

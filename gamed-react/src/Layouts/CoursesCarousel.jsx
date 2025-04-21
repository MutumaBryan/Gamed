import React, { useState, useEffect } from "react";
import SampleImage from "../assets/images/CardImage.svg";
import CourseCard from "../Component/Card/CourseCard";
import "../styles/CoursesCarousel.css";

const cardData = [
  {
    title: "Card one",
    description: "Description for card one.",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "Card two",
    description: "Description for card two.",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "Card three",
    description: "Description for card three.",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "Card four",
    description: "Description for card four.",
    rating: 5,
    Image: SampleImage,
  },

  {
    title: "Card five",
    description: "Description for card five.",
    rating: 5,
    Image: SampleImage,
  },
];

const CoursesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsToShow(1);
      else if (width < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < data.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const visibleCards = data.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="carousel-wrapper">
      <button onClick={handlePrev} className="nav-btn">
        ←
      </button>

      <div className="carousel-container">
        {visibleCards.map((item, index) => (
          <CourseCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating}
          />
        ))}
      </div>

      <button onClick={handleNext} className="nav-btn">
        →
      </button>
    </div>
  );
};

export default CoursesCarousel;

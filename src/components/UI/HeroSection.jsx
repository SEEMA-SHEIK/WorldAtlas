import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="container grid grid-two-cols">
      <div className="hero-content">
        <h1 className="heading-xl">Explore the world, One Country at a Time</h1>
        <p className="paragragh">
          Discover the history, culture, and beauty of every nation, where
          ancient traditions blend with modern innovations, and breathtaking
          landscapes tell stories of the past. Immerse yourself in the vibrant
          festivals, unique cuisines, and timeless architecture that define each
          corner of the globe. Uncover the treasures hidden in every country,
          from bustling cities to serene countryside, and let the spirit of
          adventure guide you to new perspectives and unforgettable experiences.
        </p>
        <NavLink to="/country">
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Emploring <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
      <div className="hero-image">
        <img
          src="/images/world.jpg"
          alt="world beauty"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;

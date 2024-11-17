import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__title">{title}</div>
        {description && <div className="hero__desc">{description}</div>}
        {linkText && linkUrl && (
          <Link to={linkUrl} className="hero__link">
            {linkText}
            <FaArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__title">Welcome to Our Blog</div>
        <div className="hero__desc">
          In this blog, you'll find inspiring stories, tips, and fresh insights
          that touch every corner of life. Our goal is to provide content that
          not only entertains but also broadens your perspective. Whether you're
          sipping your coffee and diving deep or just skimming through
          intriguing articles, there's something here for everyone. Let's start
          exploring!
        </div>
        <Link to="/">
          Learn More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Hero;

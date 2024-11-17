import { BlogItem, BlogList, Hero } from "components";
import React from "react";

const Home = () => {
  return (
    <section>
      <Hero
        title="Welcome to Our Blog"
        description="In this blog, you'll find inspiring stories, tips, and fresh insights
          that touch every corner of life. Our goal is to provide content that
          not only entertains but also broadens your perspective. Whether you're
          sipping your coffee and diving deep or just skimming through
          intriguing articles, there's something here for everyone. Let's start
          exploring!"
        linkText="Learn More"
        linkUrl="/"
      />
      <div className="container">
        <div className="row">
          <BlogItem />
          <BlogList />
        </div>
      </div>
    </section>
  );
};

export default Home;

import { BlogItem, Hero } from "components";
import React from "react";

const Home = () => {
  return (
    <section>
      <Hero />
      <div className="container">
        <div className="row">
          <BlogItem />
        </div>
      </div>
    </section>
  );
};

export default Home;

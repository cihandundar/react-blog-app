import { BlogItem, BlogList, Hero } from "components";
import React from "react";

const Blogs = () => {
  return (
    <section>
      <Hero title="Blog Page" />
      <div className="container">
        <div className="row">
          <BlogItem />
          <BlogList />
        </div>
      </div>
    </section>
  );
};

export default Blogs;

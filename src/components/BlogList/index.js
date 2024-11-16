import { fetchBlog } from "features/blogs/blogsSlice";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state?.blogs?.item);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  const displayedBlogs = blogs.slice(0, 8);
  return (
    <div className="bloglist">
      <div className="title">Latest Blogs</div>
      {displayedBlogs.map((items) => (
        <Link to="/" className="list" key={items?.id}>
          <div className="list__title">{items?.title}</div>
          <Link className="list__link" to="#">
            Read More <FaArrowRight />
          </Link>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;

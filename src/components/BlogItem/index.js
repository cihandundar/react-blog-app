import { fetchBlog, searchBlog } from "features/blogs/blogsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogItem = () => {
  const blogs = useSelector((state) => state?.blogs?.item || []);
  const filteredItems = useSelector(
    (state) => state?.blogs?.filteredItems || []
  );
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((blog) => blog.category === selectedCategory)
      );
    }
  }, [selectedCategory, blogs]);

  useEffect(() => {
    if (filteredItems.length) {
      setFilteredBlogs(filteredItems);
    }
  }, [filteredItems]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      dispatch(searchBlog(searchTerm));
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  return (
    <div className="blogitem">
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="filters">
        {["All", "Startups", "Security", "AI", "Tech"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={category === selectedCategory ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blogs">
        {currentPosts.map((items) => (
          <Link href="#" className="card" key={items.id}>
            <img src={items?.image} alt={items.title} />
            <div className="title">{items?.title}</div>
            <div className="author">
              <IoPerson />
              {items?.author}
            </div>
            <div className="date">Published: {items?.published_date}</div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        Previous
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        Next
      </div>
    </div>
  );
};

export default BlogItem;

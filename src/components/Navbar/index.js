import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <a href="/" className="logo">
            22 BLOG
          </a>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Services</NavLink>
              </li>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="btn">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

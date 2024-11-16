import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const navRef = useRef();

  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showNavbar = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
    navRef.current.classList.toggle("menu");
  };

  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(reset());
    navigate("/signin");
  };

  return (
    <header>
      <div className="container mobile">
        <Link to="/" className="mobileLogo">
          22 BLOG
        </Link>
        <div className="wrapper" ref={navRef}>
          <Link className="logo" to="/">
            22 BLOG
          </Link>
          {user?.user ? (
            <nav>
              <ul>
                <li>
                  <NavLink to="/" onClick={showNavbar}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" onClick={showNavbar}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={showNavbar}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blogs" onClick={showNavbar}>
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={showNavbar}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <button onClick={onLogout} className="logout">
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          ) : (
            <div className="btn">
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
        {/* Conditionally render the icons based on the menu state */}
        <button className="hamburger" onClick={showNavbar}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

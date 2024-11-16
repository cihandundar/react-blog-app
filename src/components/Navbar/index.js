import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(reset());
    navigate("/signin");
  };
  console.log(user?.user);
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <Link className="logo" to="/">
            22 BLOG
          </Link>
          {user?.user ? (
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
      </div>
    </header>
  );
};

export default Navbar;

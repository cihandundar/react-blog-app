import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";

const Aside = () => {
  const [selectedLink, setSelectedLink] = useState("dashboard");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="aside__container__list">
          <li
            className={`aside__container__list__link ${
              selectedLink === "users" ? "active" : ""
            }`}
          >
            <Link to="/" onClick={() => handleLinkClick("users")}>
              <span>
                <FiUsers />
              </span>
              Users
            </Link>
          </li>
          <li
            className={`aside__container__list__link ${
              selectedLink === "posts" ? "active" : ""
            }`}
          >
            <Link to="/post" onClick={() => handleLinkClick("posts")}>
              <span>
                <BiMessageDetail />
              </span>
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

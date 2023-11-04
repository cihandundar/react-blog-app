import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="aside__container__list">
          <li className="aside__container__list__link">
            <NavLink to="/" exact activeClassName="active">
              <span>
                <FiUsers />
              </span>
              Users
            </NavLink>
          </li>
          <li className="aside__container__list__link">
            <NavLink to="/post" activeClassName="active">
              <span>
                <BiMessageDetail />
              </span>
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

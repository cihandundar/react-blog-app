import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__list">
            <div className="footer__list__title">Category</div>
            <ul>
              <li>
                <Link to="#">News</Link>
              </li>
              <li>
                <Link to="#">World</Link>
              </li>
              <li>
                <Link to="#">Games</Link>
              </li>
              <li>
                <Link to="#">References</Link>
              </li>
            </ul>
          </div>
          <div className="footer__list">
            <div className="footer__list__title">Apples</div>
            <ul>
              <li>
                <Link to="#">Web</Link>
              </li>
              <li>
                <Link to="#">eCommerce</Link>
              </li>
              <li>
                <Link to="#">Business</Link>
              </li>
              <li>
                <Link to="#">Entertainment</Link>
              </li>
              <li>
                <Link to="#">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="footer__list">
            <div className="footer__list__title">Cherry</div>
            <ul>
              <li>
                <Link to="#">Media</Link>
              </li>
              <li>
                <Link to="#">Media</Link>
              </li>
              <li>
                <Link to="#">Brochure</Link>
              </li>
              <li>
                <Link to="#">Nonprofit</Link>
              </li>
              <li>
                <Link to="#">Educational</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
            </ul>
          </div>
          <div className="footer__list">
            <div className="footer__list__title">Business</div>
            <ul>
              <li>
                <Link to="#">Infopreneur</Link>
              </li>
              <li>
                <Link to="#">Personal</Link>
              </li>
              <li>
                <Link to="#">Wiki</Link>
              </li>
              <li>
                <Link to="#">Forum</Link>
              </li>
            </ul>
          </div>
          <form action="#" className="form">
            <label>Subscribe for updates</label>
            <div className="form__item">
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              illum.
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

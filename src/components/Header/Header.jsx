import React from "react";
import companyLogo from "../../assets/icons/company-logo.png";
import searchIcon from "../../assets/icons/search-normal.png";
import heartIcon from "../../assets/icons/heart.png";
import shoppingBag from "../../assets/icons/shopping-bag.png";
import profileIcon from "../../assets/icons/profile.png";
import downArrow from "../../assets/icons/down-arrow.png";
import AnnouncementBar from "./AnnouncementBar";
import "./Header.css";
import hamBurgerMenu from "../../assets/icons/hamburger-menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <AnnouncementBar />
      <div className="main-header">
        <div className="top-header">
          <div className="icon-m">
            <img
              className="ham-menu"
              src={hamBurgerMenu}
              alt="hamburger menu"
            />
            <Link to="/">
              <img src={companyLogo} alt="company's logo" />
            </Link>
          </div>
          <h1>LOGO</h1>
          <div className="header-nav-icons">
            <img src={searchIcon} alt="search icon" />
            <Link to="/add-to-cart">
              <img src={heartIcon} alt="heart icon" />
            </Link>
            <Link to="/add-to-cart">
              <img src={shoppingBag} alt="shopping bag icon" />
            </Link>
            <img
              className="hide-nav-icon"
              src={profileIcon}
              alt="user profile icon"
            />
            <span className="hide-nav-icon">
            <select className='eng_para'>
            <option>ENG</option>
            <option>KAN</option>
            <option>HINDI</option>
          </select>
              
              
            </span>
          </div>
        </div>
        <div className="bottom-header">
          <ul>
            <li>SHOP</li>

            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
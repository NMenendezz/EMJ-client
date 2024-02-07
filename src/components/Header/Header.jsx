import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import arrowIcon from "../../assets/icons/arrow-up.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  emailIcon,
  linkedInIcon,
  navLinks,
} from "../../assets/constants/constants";
import UserInfo from "./UserInfo";
import NavigationLinks from "./NavigationLinks";
import { AuthContext } from "../../context/authContext";
import "./header.css";
import NavButton from "./NavButton";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    navigate(selectedValue);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const shouldShowNavbar =
    location.pathname === "/" || location.pathname === "/posts";

  return (
    <header className="header">
      <div className="header__banner">
        <Link to={"/"} className="header__link--logo">
          <img src={logo} alt="" className="header__logo"></img>
        </Link>
        <h1 className="header__title">EL MUNDO DE JONATHAN</h1>
      </div>
      {currentUser && <UserInfo />}
      <nav className="header__navbar">
        <div className="header__category-dropdown">
          {shouldShowNavbar ? (
            <>
              <select
                className="category-select"
                onChange={handleCategoryChange}
              >
                {navLinks.map((navLink) => (
                  <option key={navLink.name} value={navLink.to}>
                    {navLink.name}
                  </option>
                ))}
              </select>
              <img
                className="category-select__icon"
                src={arrowIcon}
                alt="icon"
              />
            </>
          ) : (
            <NavigationLinks
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
              defaultLink={navLinks[0]}
            />
          )}
        </div>
        <div className="header__category">
          {navLinks.map((navLink) => (
            <NavButton
              key={navLink.name}
              to={navLink.to}
              name={navLink.name}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </div>
        <div className="header__about">
          <a
            className="header__email-btn"
            href="mailto:info@elmundodejonathan.es?subject=¡Hola!%20Tengo%20algo%20que%20decirte...&body=Mi%20nombre%20es..."
          >
            {emailIcon}
          </a>
          <a
            className="header__linkedIn-btn"
            href="https://www.linkedin.com/in/jonathan-sánchez-hernández-5500b5183/"
            target="_blank"
            rel="noreferrer"
          >
            {linkedInIcon}
          </a>
          <Link to={"/about"} className="header__about-btn">
            ¿Quién soy?
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

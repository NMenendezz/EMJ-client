import React from "react";
import NavButton from "./NavButton";
import { navLinks } from "../../assets/constants/constants";

const NavigationLinks = ({ activeLink, handleLinkClick }) => {
  return (
    <div className="header__category">
      {navLinks.map((navLink) => (
        <NavButton
          key={navLink.name}
          to={navLink.to}
          name={navLink.name}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      ))}
    </div>
  );
};

export default NavigationLinks;

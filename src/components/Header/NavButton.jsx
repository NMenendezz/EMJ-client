import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavButton = ({ to, name, handleLinkClick }) => {
  const location = useLocation();
  const isActive = (location.pathname + location.search) === to;

  const handleClick = () => {
    handleLinkClick(to);
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`header__link ${isActive ? "active" : ""}`}
    >
      {name}
    </Link>
  );
};

export default NavButton;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [showLogoutText, setShowLogoutText] = useState(false);

  const handleMouseEnter = () => {
    setShowLogoutText(true);
  };

  const handleMouseLeave = () => {
    setShowLogoutText(false);
  };

  return (
    <div className="header__loggedIn">
      <span
        className="header__username"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showLogoutText ? (
          <span onClick={logout} className="header__logout">
            Cerrar sesión
          </span>
        ) : (
          currentUser.username
        )}
      </span>
      <Link to={"/new_post"} className="header__btn-new-post">
        Post
      </Link>
    </div>
  );
};

export default UserInfo;
